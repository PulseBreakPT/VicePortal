import assert from 'node:assert/strict';
import { readFile,access } from 'node:fs/promises';
import { normalizeVehicles,vehicleGroup,extractRows } from '../src/data/vehicleNormalizer.mjs';
const read=p=>readFile(new URL(p,import.meta.url),'utf8');
const feed=JSON.parse(await read('../src/data/vehicleFeed.json'));
const rows=normalizeVehicles(feed);
const sections=await read('../src/data/sections.js');
let checks=0;
const check=(condition,message)=>{checks++;assert.ok(condition,message);};
check(rows.length>=(feed.complete?560:559),'Vehicle coverage regression');
check(new Set(rows.map(r=>r.id)).size===rows.length,'Duplicate vehicle IDs');
const legacy=['thrax','emerus','tempesta','comet-s2','gauntlet-hellfire','carbon-rs','cheetah-classic'];
for(const id of legacy)check(rows.some(x=>x.id==='vehicle-'+id),'Legacy bookmark missing: '+id);
for(const row of rows){
 check(/^vehicle-[a-z0-9-]+$/.test(row.id),'Invalid ID');
 check(Boolean(row.title&&row.category&&row.maker),'Missing title, class or manufacturer');
 check(sections.includes("'vehicles/"+row.group+"'"),'Unknown vehicle category');
 check(row.source.startsWith('https://gtatown.com/garage/vehicles'),'Invalid attribution link');
 for(const key of ['speed','acceleration','handling','offroad','strength'])check(row[key]===null||(Number.isFinite(row[key])&&row[key]>=0&&row[key]<=10),'Invalid 0–10 stat');
 check(typeof row.spoiler==='boolean','Invalid spoiler flag');
}
check(vehicleGroup('Patriot')==='standout','Patriot variant mapping');
check(vehicleGroup('Bikes','Bicycles')==='bicycles','Bicycle type mapping');
check(vehicleGroup('Supercars')==='super','Supercars mapping');
check(vehicleGroup('Standout: Fine Art')==='standout','Standout mapping');
check(vehicleGroup('unknown','Helicopters')==='aircraft','Type fallback');
const sample={name:'Test vehicle',maker:'Test maker',class:'Sports Cars',spoiler:true,stats:{speed:7.5},price:0,handling:20};
const parsed=normalizeVehicles({rows:[sample]})[0];
check(parsed.spoiler&&parsed.speed===7.5&&parsed.handling===null&&parsed.price==='0','Normalization of valid and missing values');
check(extractRows({columns:['name','class'],rows:[['Example','SUVs']]})[0].name==='Example','Table-shaped export');
assert.throws(()=>normalizeVehicles([sample,sample]),/Duplicate/);checks++;
assert.throws(()=>normalizeVehicles([{name:'Example'}]),/Missing/);checks++;
await access(new URL('../public/images/vehicle-placeholder.svg',import.meta.url));checks++;
const portal=await read('../src/data/portal.js');
check(portal.includes('export const carEntries = vehicleRecords;'),'Vehicle catalogue not connected');
const grid=await read('../src/components/portal/CatalogGrid.js');
for(const marker of ['Vehicle manufacturer','Vehicle class','vehicleStats','Data: GTA Town'])check(grid.includes(marker),'Missing catalogue integration: '+marker);

const refs=JSON.parse(await read('../src/data/vehicleImageRefs.json'));
const {collectImageReferences,validImageReference}=await import('./sync-vehicle-images.mjs');
const {vehicleSlug}=await import('../src/data/vehicleNormalizer.mjs');
const imgURLs=new Set();
check(Object.keys(refs).length>=10,'Reviewed vehicle image coverage regressed');
for(const [id,ref] of Object.entries(refs)){
 const row=rows.find(r=>r.id===id);
 check(Boolean(row)&&vehicleSlug(row.title)===vehicleSlug(ref.title),'Image title mismatch: '+id);
 check(validImageReference(ref,row),'Image not from approved exact source dossier: '+id);
 check(!imgURLs.has(ref.image),'Duplicate vehicle image: '+id);imgURLs.add(ref.image);
}
const fixture='<a href="/garage/vehicles/progen-emerus"><img src="/img/pc/vehicles/progen-emerus-294.webp" alt="Progen Emerus">Progen Emerus Supercars</a><a href="/garage/vehicles/honeycomb-emerus"><img src="/img/pc/vehicles/progen-emerus-294.webp" alt="Honeycomb Emerus">Honeycomb Emerus Ultra-Luxe</a><a href="/garage/vehicles/truffade-thrax">No image yet Truffade Thrax</a>';
const matched=collectImageReferences(fixture,rows);
check(Object.keys(matched).length===1&&matched['vehicle-emerus']?.image===refs['vehicle-emerus'].image,'Exact-image fixture must reject wrong variant and missing card');

const aliasFixture='<a href="/garage/vehicles/progen-seaspray-emerus"><img src="/img/pc/vehicles/progen-seaspray-emerus-294.webp" alt="Seaspray Emerus">Seaspray Emerus Stock Car</a><a href="/garage/vehicles/progen-black-widow-emerus"><img src="/img/pc/vehicles/progen-seaspray-emerus-294.webp" alt="Black Widow Emerus">Black Widow Emerus Street Racer</a>';
const aliasMatched=collectImageReferences(aliasFixture,rows);
check(Object.keys(aliasMatched).length===1&&Boolean(aliasMatched['vehicle-seaspray-emerus']),'Manufacturer-prefix matching must accept only exact variant');
for(const id of ['vehicle-seaspray-emerus','vehicle-black-widow-emerus']){
 const row=rows.find(r=>r.id===id);
 check(refs[id]?.evidence==='reviewed-in-game-name'&&validImageReference(refs[id],row),'Reviewed in-game screenshot missing: '+id);
 check(!validImageReference({...refs[id],source:'https://gta6.house/library/vehicles/progen-emerus'},row),'Wrong variant source must fail');
}

const renderer=await read('../src/data/vehicleRecords.js');
check(renderer.includes('imageRef?imageRef.image:placeholder')&&!renderer.includes('legacyImages'),'Vehicle image renderer must use reviewed references');

console.log(JSON.stringify({vehicles:rows.length,complete:feed.complete,imageReferences:Object.keys(refs).length,checks},null,2));
