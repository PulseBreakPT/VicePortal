// Check availability and exact-byte duplicates without downloading a permanent copy.
import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {normalizeVehicles} from '../src/data/vehicleNormalizer.mjs';
const file=name=>new URL('../src/data/'+name,import.meta.url);
const rows=normalizeVehicles(JSON.parse(await readFile(file('vehicleFeed.json'),'utf8')));
const refs=JSON.parse(await readFile(file('vehicleImageRefs.json'),'utf8'));
export function imageType(bytes){
 if(bytes.length<16)return null;
 if(bytes.subarray(0,4).toString()==='RIFF'&&bytes.subarray(8,12).toString()==='WEBP')return 'webp';
 if(bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])))return 'png';
 if(bytes[0]===255&&bytes[1]===216&&bytes[2]===255)return 'jpeg';
 return null;
}
async function inspect(ref){
 try{
  let bytes;
  if(ref.local)bytes=await readFile(new URL('../public'+ref.local.path,import.meta.url));
  else{
   const response=await fetch(ref.image,{signal:AbortSignal.timeout(10000),redirect:'error',headers:{Accept:'image/webp,image/png,image/jpeg'}});
   if(!response.ok)return {status:'http-'+response.status};
   if(!/^image\/(?:webp|png|jpeg)(?:;|$)/i.test(response.headers.get('content-type')||''))return {status:'non-image-content'};
   const limit=8*1024*1024;
   if(Number(response.headers.get('content-length'))>limit)return {status:'oversize'};
   const reader=response.body.getReader(),chunks=[];let total=0;
   try{while(true){const {done,value}=await reader.read();if(done)break;total+=value.length;if(total>limit){await reader.cancel();return {status:'oversize'};}chunks.push(value);}}finally{reader.releaseLock();}
   bytes=Buffer.concat(chunks);
  }
  const format=imageType(bytes);
  if(!format)return {status:'invalid-image-signature'};
  return {status:'reachable',format,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')};
 }catch(error){return {status:'unreachable',error:error.name};}
}
const ids=Object.keys(refs).sort(),results={};let cursor=0;
await Promise.all(Array.from({length:10},async()=>{while(cursor<ids.length){const id=ids[cursor++];results[id]=await inspect(refs[id]);}}));
const hashes={};for(const id of ids){const hash=results[id].sha256;if(hash)(hashes[hash]??=[]).push(id);}
const duplicateGroups=Object.values(hashes).filter(group=>group.length>1);
const duplicateIds=new Set(duplicateGroups.flat());
const unavailable=ids.filter(id=>results[id].status!=='reachable');
const missing=rows.filter(row=>!refs[row.id]).map(({id,title,maker,category})=>({id,title,maker,category}));
const summary={vehicles:rows.length,references:ids.length,missing:missing.length,reachableUnique:ids.length-unavailable.length-duplicateIds.size,unavailable:unavailable.length,duplicateGroups:duplicateGroups.length,duplicateIds:duplicateIds.size,local:ids.filter(id=>refs[id].local).length};
const report={summary,missing,unavailable,duplicateGroups,results:Object.fromEntries(ids.map(id=>[id,results[id]]))};
await writeFile(file('vehicleImageMissing.json'),JSON.stringify(missing,null,2)+'\n');
await writeFile(file('vehicleImageAudit.json'),JSON.stringify(report,null,2)+'\n');
console.log('Vehicle image audit:',JSON.stringify(summary));
if(process.env.REQUIRE_COMPLETE_VEHICLE_IMAGES==='1'&&(missing.length||unavailable.length||duplicateIds.size))process.exitCode=1;
