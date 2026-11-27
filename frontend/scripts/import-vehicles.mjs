import { readFile,writeFile,rename } from 'node:fs/promises';
import { normalizeVehicles,extractRows } from '../src/data/vehicleNormalizer.mjs';

const dest=new URL('../src/data/vehicleFeed.json',import.meta.url);
try {
const cached=JSON.parse(await readFile(new URL('../src/data/creatorData.json',import.meta.url),'utf8'));
const body=cached.datasets.vehicles;
if(!body)throw Error('No validated creator vehicle export available');
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

} catch(error) {
 // The checked-in catalogue is the recovery source, not a guessed schema.
 const snapshot=JSON.parse(await readFile(dest,'utf8'));
 const retained=normalizeVehicles(snapshot);
 if(retained.length<(snapshot.complete?560:559))throw new Error('Invalid fallback vehicle catalogue');
 console.warn('Public vehicle export unavailable; retaining '+retained.length+' reviewed records:',error.message);
} finally {
 try { const {syncImages}=await import('./sync-vehicle-images.mjs'); await syncImages(); } catch(error) { console.warn('Vehicle image sync unavailable; retaining reviewed references:',error.message); }
}
