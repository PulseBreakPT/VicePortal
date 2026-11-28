import {readFile,writeFile,rename,mkdir} from 'node:fs/promises';
import {parseCSV} from '../src/data/creatorDataModel.mjs';
import {sources,specs,adaptRow} from '../src/data/openDataV2.mjs';
const dest=new URL('../src/data/openDataV2.json',import.meta.url);
const previous=JSON.parse(await readFile(dest,'utf8'));
const datasets={...previous.datasets},report=[];
async function download(provider,key,min){
 const ext=provider==='gang'&&key!=='ledger'?'csv':'json',url=sources[provider].base+key+'.'+ext;
 const res=await fetch(url,{headers:{Accept:ext==='csv'?'text/csv,application/octet-stream':'application/json','User-Agent':'ViceAtlas/2.0 (licensed public data; cached build)'},signal:AbortSignal.timeout(60000)});
 if(!res.ok)throw Error('HTTP '+res.status);
 const raw=await res.text();if(raw.length>20*1024*1024)throw Error('Oversized export');
 const doc=ext==='csv'?null:JSON.parse(raw);
 const rows=ext==='csv'?parseCSV(raw):key==='ledger'?doc.records:(doc.rows||doc.cheats);
 if(!Array.isArray(rows)||rows.length<min)throw Error('Expected '+min+' rows, got '+(rows?.length||0));
 const result=rows.map(r=>adaptRow(provider,key,r));
 if(new Set(result.map(r=>r.id)).size!==result.length)throw Error('Duplicate source IDs');
 return result;
}
const tasks=Object.entries(specs).flatMap(([p,keys])=>Object.entries(keys).map(([k,n])=>[p,k,n]));
// Bounded parallelism: one request per source file, no per-entity crawling.
for(let i=0;i<tasks.length;i+=4)await Promise.all(tasks.slice(i,i+4).map(async ([p,k,min])=>{
 const id=p+'/'+k;
 try{const rows=await download(p,k,Math.max(min,datasets[id]?.length||0));datasets[id]=rows;report.push({id,status:'downloaded',rows:rows.length});}
 catch(e){report.push({id,status:datasets[id]?.length?'retained':'unavailable',rows:datasets[id]?.length||0,error:e.message});}
}));
const snapshot={schema:1,datasets};
const tmp=new URL('../src/data/openDataV2.tmp.json',import.meta.url);
await writeFile(tmp,JSON.stringify(snapshot)+'\n');await rename(tmp,dest);
await writeFile(new URL('../src/data/openDataV2ImportReport.json',import.meta.url),JSON.stringify({report},null,2)+'\n');
// Separate licensed adaptation; no unrelated project data is relicensed.
const dir=new URL('../public/open-data/',import.meta.url);await mkdir(dir,{recursive:true});
for(const p of Object.keys(sources)){
 const subset=Object.fromEntries(Object.entries(datasets).filter(([k])=>k.startsWith(p+'/')&&!k.endsWith('/ledger')).map(([k,rs])=>[k,rs.filter(r=>!r.spoiler)]));
 await writeFile(new URL(p+'.json',dir),JSON.stringify({credit:sources[p].label+' ('+sources[p].base+')',license:sources[p].license,licenseUrl:sources[p].licenseUrl,changes:'Selected factual fields normalized; prose, images and coordinates excluded.',datasets:subset})+'\n');
}
await writeFile(new URL('README.txt',dir),'GTA Atlas (https://atlasgta.com), CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/\nGTA6Gang (https://gta6gang.com), CC BY 4.0: https://creativecommons.org/licenses/by/4.0/\nThese adapted data files are separately licensed; no project-wide licence change.\n');
console.log('OPEN_DATA_V2 '+JSON.stringify(report));
if(report.some(x=>x.status==='unavailable'))throw Error('Open data import incomplete: '+report.filter(x=>x.status==='unavailable').map(x=>x.id).join(', '));
