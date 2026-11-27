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
const {collectImageReferences}=await import('./sync-vehicle-images.mjs');
const {vehicleSlug}=await import('../src/data/vehicleNormalizer.mjs');
const imgURLs=new Set();
check(Object.keys(refs).length>=8,'Reviewed vehicle image coverage regressed');
for(const [id,ref] of Object.entries(refs)){
 const row=rows.find(r=>r.id===id);
 check(Boolean(row)&&vehicleSlug(row.title)===vehicleSlug(ref.title),'Image title mismatch: '+id);
 const page=new URL(ref.source),img=new URL(ref.image);
 check(page.origin==='https://gtatown.com'&&img.origin===page.origin,'Unapproved image host');
 const match=img.pathname.match(/^\/img\/(?:pc\/)?vehicles\/([a-z0-9-]+)-\d+\.webp$/);
 check(Boolean(match)&&page.pathname.replace(/\/$/,'')==='/garage/vehicles/'+match[1],'Image not from exact source dossier: '+id);
 check(!imgURLs.has(ref.image),'Duplicate vehicle image: '+id);imgURLs.add(ref.image);
}
const fixture='<a href="/garage/vehicles/progen-emerus"><img src="/img/pc/vehicles/progen-emerus-294.webp" alt="Progen Emerus">Progen Emerus Supercars</a><a href="/garage/vehicles/honeycomb-emerus"><img src="/img/pc/vehicles/progen-emerus-294.webp" alt="Honeycomb Emerus">Honeycomb Emerus Ultra-Luxe</a><a href="/garage/vehicles/truffade-thrax">No image yet Truffade Thrax</a>';
const matched=collectImageReferences(fixture,rows);
check(Object.keys(matched).length===1&&matched['vehicle-emerus']?.image===refs['vehicle-emerus'].image,'Exact-image fixture must reject wrong variant and missing card');
const renderer=await read('../src/data/vehicleRecords.js');
check(renderer.includes('imageRef?imageRef.image:placeholder')&&!renderer.includes('legacyImages'),'Vehicle image renderer must use reviewed references');

console.log(JSON.stringify({vehicles:rows.length,complete:feed.complete,imageReferences:Object.keys(refs).length,checks},null,2));
