import { readFile,writeFile,rename } from 'node:fs/promises';
import { normalizeVehicles,extractRows } from '../src/data/vehicleNormalizer.mjs';

const endpoint='https://gtatown.com/creators/data/vehicles.json';
const dest=new URL('../src/data/vehicleFeed.json',import.meta.url);
const response=await fetch(endpoint,{signal:AbortSignal.timeout(45000),headers:{Accept:'application/json','User-Agent':'ViceAtlas/1.0 (public data import; source attribution)'}});
if(!response.ok)throw new Error('Public vehicle export returned '+response.status);
const body=await response.json();
const rows=extractRows(body);
const normalized=normalizeVehicles(rows);
if(normalized.length<560)throw new Error('Expected at least 560 published vehicle records; received '+normalized.length);
const ids=new Set(normalized.map(x=>x.id));
for(const id of ['vehicle-thrax','vehicle-emerus','vehicle-tempesta','vehicle-comet-s2','vehicle-gauntlet-hellfire','vehicle-carbon-rs','vehicle-cheetah-classic']){
 if(!ids.has(id))throw new Error('Legacy dossier ID not preserved: '+id);
}
const previous=JSON.parse(await readFile(dest,'utf8'));
const missing=normalizeVehicles(previous).filter(row=>!ids.has(row.id));
if(missing.length)throw new Error('Import would remove '+missing.length+' existing vehicle IDs; retain reviewed snapshot');
const record={publicListCount:normalized.length,hiddenCount:0,source:'https://gtatown.com/creators/data',license:'CC BY 4.0 (public data download)',checkedOn:new Date().toISOString().slice(0,10),complete:true,rows};
const temp=new URL('../src/data/vehicleFeed.tmp.json',import.meta.url);
await writeFile(temp,JSON.stringify(record,null,2)+'\n');
await rename(temp,dest);
console.log('Public vehicle catalogue:',normalized.length,'records (previous snapshot:',previous.rows.length+')');
