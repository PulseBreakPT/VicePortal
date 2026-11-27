import {readFile,writeFile,rename} from 'node:fs/promises';
import {DATASETS,SOURCE,LICENSE,extractExport,parseCSV,validateDataset} from '../src/data/creatorDataModel.mjs';
import {adaptVehicleExport,normalizeVehicles} from '../src/data/vehicleNormalizer.mjs';
const dest=new URL('../src/data/creatorData.json',import.meta.url);
const previous=JSON.parse(await readFile(dest,'utf8'));
const datasets={...previous.datasets};
const previousVehicles=JSON.parse(await readFile(new URL('../src/data/vehicleFeed.json',import.meta.url),'utf8'));
async function download(key,format){
 const url=SOURCE+'/'+key+'.'+format;
 const response=await fetch(url,{headers:{Accept:format==='json'?'application/json':'text/csv,application/octet-stream','User-Agent':'ViceAtlas/1.0 (CC BY 4.0 public data, cached)'},signal:AbortSignal.timeout(45000)});
 if(!response.ok)throw Error('HTTP '+response.status);
 const raw=await response.text();
 if(raw.length>30*1024*1024)throw Error('Export exceeds size limit');
 const rows=format==='json'?extractExport(JSON.parse(raw),key):parseCSV(raw);
 validateDataset(rows,key,Math.max(DATASETS[key].count,datasets[key]?.rows?.length||0));
 if(key==='vehicles'){
   const adapted=adaptVehicleExport(rows,previousVehicles);
   const ids=new Set(adapted.normalized.map(row=>row.id));
   const missing=normalizeVehicles(previousVehicles).filter(row=>!ids.has(row.id));
   if(missing.length)throw Error('Vehicle export would remove '+missing.length+' reviewed IDs; examples: '+missing.slice(0,5).map(x=>x.id).join(', '));
   console.log('CREATOR_VEHICLE_CLASSES '+JSON.stringify(adapted.counts));
 }
 return {format,url,rows,fetchedAt:new Date().toISOString()};
}
for(const key of Object.keys(DATASETS)){
 let success=false;
 for(const format of ['json','csv']){
  try{datasets[key]=await download(key,format);success=true;console.log('CREATOR_DATA '+JSON.stringify({key,format,rows:datasets[key].rows.length,fields:Object.keys(datasets[key].rows[0])}));break;}
  catch(error){console.warn('CREATOR_DATA_REJECTED '+JSON.stringify({key,format,reason:error.message}));}
 }
 if(!success)console.warn('CREATOR_DATA_RETAINED '+JSON.stringify({key,rows:datasets[key]?.rows?.length||0}));
}
const next={source:SOURCE,license:LICENSE,datasets};
const tmp=new URL('../src/data/creatorData.tmp.json',import.meta.url);
await writeFile(tmp,JSON.stringify(next,null,2)+'\n');await rename(tmp,dest);
const coverage=Object.fromEntries(Object.keys(DATASETS).map(key=>[key,datasets[key]?.rows?.length||0]));
console.log('CREATOR_DATA_COVERAGE '+JSON.stringify(coverage));
if(process.env.REQUIRE_CREATOR_DATA==='1'&&Object.keys(DATASETS).some(k=>coverage[k]<DATASETS[k].count))throw Error('Creator data incomplete');
