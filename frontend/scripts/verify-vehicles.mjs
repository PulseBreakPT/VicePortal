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
for(const marker of ['Vehicle manufacturer','Vehicle class','Data: GTA Town','filterItems(visible,filters,layout)'])check(grid.includes(marker),'Missing catalogue integration: '+marker);
const {filterItems,initialFilters}=await import('../src/components/portal/catalogueModel.mjs');
const ratingFixture=[
 {id:'low',title:'Low',kind:'Vehicle',vehicleStats:{speed:2,acceleration:3,handling:4}},
 {id:'unknown',title:'Unknown',kind:'Vehicle',vehicleStats:{speed:null,acceleration:null,handling:null}},
 {id:'high',title:'High',kind:'Vehicle',vehicleStats:{speed:9,acceleration:8,handling:7}}
];
for(const sort of ['speed','acceleration','handling']){
 const sorted=filterItems(ratingFixture,{...initialFilters,sort},'vehicles');
 check(sorted.map(r=>r.id).join(',')==='high,low,unknown','Catalogue rating sort failed: '+sort);
}
check(ratingFixture.map(r=>r.id).join(',')==='low,unknown,high','Catalogue sorting mutated source records');

const refs=JSON.parse(await read('../src/data/vehicleImageRefs.json'));
const {collectImageReferences,collectSupplementalImages,collectTrackerImages,validImageReference}=await import('./sync-vehicle-images.mjs');
const {vehicleSlug}=await import('../src/data/vehicleNormalizer.mjs');
const imgURLs=new Set();
check(Object.keys(refs).length>=13,'Reviewed vehicle image coverage regressed');
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

const gpsFixture='<img alt="Dante&#39;s Vitello, a Ultra-Luxe standout vehicle in GTA 6" src="https://assets.gta6gps.com/standout/dantes-vitello.webp"><img alt="Black Widow Emerus, a Street Racer standout vehicle in GTA 6" src="https://assets.gta6gps.com/standout/seaspray-emerus.webp">';
const gpsRefs=collectSupplementalImages(gpsFixture,rows,'gps');
check(Object.keys(gpsRefs).length===1&&gpsRefs['vehicle-dantes-vitello']?.image===refs['vehicle-dantes-vitello'].image,'GPS must accept exact name and reject wrong variant');
const alcastFixture='<tr><td><img alt="Progen Seaspray Emerus GTA 6 Icon" src="https://alcasthq.com/wp-content/uploads/2026/11/Progen-Seaspray-Emerus-GTA-6-Icon.webp"></td><td>Progen Seaspray Emerus</td></tr><tr><td><img alt="Progen Black Widow Emerus GTA 6 Icon" src="https://alcasthq.com/wp-content/uploads/2026/11/Progen-Seaspray-Emerus-GTA-6-Icon.webp"></td><td>Progen Black Widow Emerus</td></tr>';
const iconRefs=collectSupplementalImages(alcastFixture,rows,'alcast');
check(Object.keys(iconRefs).length===1&&validImageReference(iconRefs['vehicle-seaspray-emerus'],rows.find(row=>row.id==='vehicle-seaspray-emerus')),'Icon parser must reject wrong variant');
const trackerFixture='<img alt="Sandblasted Cliffhanger" src="https://gtavibase.win/assets/media/gta-6/tools/vehicles/western-sandblasted-cliffhanger.webp?v=1795545412"><img alt="Tactical Caddy" src="https://gtavibase.win/assets/media/gta-6/tools/vehicles/western-sandblasted-cliffhanger.webp?v=1795545412">';
const trackerRefs=collectTrackerImages(trackerFixture,rows);
check(Object.keys(trackerRefs).length===1&&trackerRefs['vehicle-sandblasted-cliffhanger']?.image===refs['vehicle-sandblasted-cliffhanger'].image,'Tracker must reject the wrong variant');
const localFiles=new Set();
for(const [id,ref] of Object.entries(refs)){
 if(!ref.local)continue;
 check(ref.local.path==='/images/vehicles/'+id+'.webp'&&Boolean(ref.local.permissionSource),'Local image must have exact ID and permission evidence');
 check(!localFiles.has(ref.local.path),'Duplicate local path');localFiles.add(ref.local.path);
 const bytes=await readFile(new URL('../public'+ref.local.path,import.meta.url));
 check(bytes.subarray(0,4).toString()==='RIFF'&&bytes.subarray(8,12).toString()==='WEBP','Local file is not WebP');
 const {createHash}=await import('node:crypto');
 check(createHash('sha256').update(bytes).digest('hex')===ref.local.sha256,'Local image integrity mismatch');
}
const renderer=await read('../src/data/vehicleRecords.js');
check(renderer.includes('imageRef?(imageRef.local?.path||imageRef.image):placeholder')&&!renderer.includes('legacyImages'),'Vehicle image renderer must use reviewed references');

console.log(JSON.stringify({vehicles:rows.length,complete:feed.complete,imageReferences:Object.keys(refs).length,checks},null,2));

// Licensed feed factual recovery: no prose, no title-only guesses, no overwrites.
const {progressFacts,indexTitles,fillVehicleFacts}=await import('../src/data/vehicleProgressFacts.mjs');
const titleIndex=indexTitles(rows);
const facts=feed.rows.map(raw=>progressFacts(raw,titleIndex));
const coverage=Object.fromEntries(['Era','Specialist workshop','Base model','Design style'].map(k=>[k,facts.filter(x=>Object.hasOwn(x,k)).length]));
check(coverage.Era>=276,'Progress era coverage regression');
check(coverage['Specialist workshop']>=128,'Workshop coverage regression');
check(coverage['Base model']>=281,'Base-model coverage regression');
check(coverage['Design style']>=100,'Body-style coverage regression');
const titleFixture=indexTitles([{title:'Sample Base'},{title:'Sample Variant'}]);
assert.deepEqual(progressFacts({name:'Sample Variant',summary:'One-off Sample Base from the Retro standout set, custom finish and parts.'},titleFixture),{'Base model':'Sample Base'});
assert.deepEqual(progressFacts({name:'Sample Variant',summary:'One-off Other Base from the Retro standout set, custom finish and parts.'},titleFixture),{});
assert.deepEqual(progressFacts({name:'Sample Base',summary:'One-off Sample Base from the Retro standout set, custom finish and parts.'},titleFixture),{});
assert.deepEqual(progressFacts({name:'Sample Base',manufacturer:'Sample',summary:'2010s Sample luxury SUV, modded at Example Workshop.'},titleFixture),{Era:'2010s','Design style':'luxury SUV','Specialist workshop':'Example Workshop'});
assert.deepEqual(fillVehicleFacts({Era:'Existing',Price:'Not verified in this atlas'},{Era:'Other',Price:'$100'}),{Era:'Existing',Price:'$100'});
const cross=JSON.parse(await read('../src/data/vehicleCrosscheckFacts.json'));
check(new Set(cross.rows.map(x=>x.source)).size===cross.rows.length,'Duplicate crosscheck identities');
for(const row of cross.rows){
 check(rows.filter(x=>x.title===row.title&&x.source===row.source).length===1,'Unproven crosscheck identity: '+row.title);
 check(row.refs.every(x=>/^https:\/\/(gtatown\.com|gtaspotter\.com|allthings\.how|www\.powerpyx\.com)\//.test(x.url)),'Unexpected crosscheck provenance');
}
console.log('VEHICLE_PROGRESS_FACTS '+JSON.stringify({coverage,crosschecked:cross.rows.length}));
