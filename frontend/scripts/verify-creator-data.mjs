import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {DATASETS,extractExport,parseCSV,normalizeDataset,mergeWeapons,hideSpoiler,validateDataset} from '../src/data/creatorDataModel.mjs';
import {adaptVehicleExport} from '../src/data/vehicleNormalizer.mjs';
const fallback=adaptVehicleExport([{name:'Model A',maker:'Maker'},{name:'Model B',maker:'Maker'},{name:'Model C',class:'Sports Cars',maker:'Maker'}],[{name:'Model A',class:'SUVs',maker:'Maker'},{name:'Model B',class:'Supercars',maker:'Other'}]);
assert.deepEqual(fallback.counts,{sourceClass:1,retainedClass:1,unknownClass:1});
assert.equal(fallback.normalized[0].category,'SUVs');
assert.equal(fallback.normalized[1].category,'Not verified in this atlas');
assert.equal(fallback.normalized[2].category,'Sports Cars');
assert.throws(()=>adaptVehicleExport([{maker:'Maker'}]),/Missing vehicle title/);
assert.throws(()=>adaptVehicleExport([{name:'Same',maker:'Maker'},{name:'Same',maker:'Maker'}]),/Duplicate/);
assert.doesNotThrow(()=>validateDataset([{name:'Unclassified',maker:'Maker'}],'vehicles',1));
const rows=parseCSV('name,class,price,notes\r\n"Example, II",Handguns,0,"Two ""quotes""\nlines"\r\n');
assert.equal(rows[0].name,'Example, II');assert.equal(rows[0].notes,'Two "quotes"\nlines');
assert.equal(rows[0].price,'0');
assert.equal(extractExport({data:{headers:['name','class'],rows:[['Example','Handguns']]}},'weapons')[0].name,'Example');
assert.throws(()=>extractExport({error:'not available'},'weapons'));
assert.throws(()=>parseCSV('<html>bad</html>'));
assert.throws(()=>validateDataset(rows,'weapons'));
const weapons=normalizeDataset(rows,'weapons');
assert.equal(weapons[0].attributes.Price,'0');assert.equal(weapons[0].collections[0],'weapons/handguns');
assert.equal(weapons[0].attributes.Damage,'Not verified in this atlas');
assert.equal(mergeWeapons([{id:'old',title:'Example, II',path:'/weapons/old',image:'old.webp',attributes:{}}],weapons)[0].id,'old');
const missions=normalizeDataset([{name:'Example mission',type:'Main story',order:2,spoiler:true}],'missions');
assert.equal(missions[0].storyOrder,2);assert.equal(hideSpoiler(missions[0],false),true);assert.equal(hideSpoiler(missions[0],true),false);
const pins=normalizeDataset([{set:'Cards',number:1,x:4,y:2},{set:'Cards',number:2,x:4,y:3}],'collectibles');
assert.equal(pins[0].title,'Cards #1');assert.notEqual(pins[0].id,pins[1].id);
assert.throws(()=>normalizeDataset([{name:'Same'},{name:'Same'}],'locations'));
assert.equal(Object.values(DATASETS).reduce((sum,d)=>sum+d.count,0),8063);
const read=p=>readFile(new URL(p,import.meta.url),'utf8');
const snapshot=JSON.parse(await read('../src/data/creatorData.json'));
const sections=await read('../src/data/sections.js');
let imported=0;const ids=new Set();
for(const [key,dataset] of Object.entries(snapshot.datasets)){
 validateDataset(dataset.rows,key);
 imported+=dataset.rows.length;
 if(key==='vehicles')continue;
 for(const row of normalizeDataset(dataset.rows,key)){
  assert.ok(!ids.has(row.id),'Duplicate global ID');ids.add(row.id);
  assert.ok(row.collections.every(s=>sections.includes("'"+s+"'")),'Unknown collection '+row.collections.join(','));
  assert.ok(row.source.startsWith('https://gtatown.com/'));
 }
}
const portal=await read('../src/data/portal.js');
assert.ok(portal.includes('...creatorRecords')&&portal.includes('creatorWeapons(reviewedWeaponEntries)'));
console.log('Creator dataset checks passed; snapshot rows:',imported);


import {enrichArsenal,arsenalAuditNames,arsenalBase,arsenalVariants,arsenalOther,arsenalTechnical,arsenalAlternativeRatings} from '../src/data/arsenalAudit.mjs';
assert.equal(arsenalBase.length,53);
assert.equal(arsenalVariants.length,130);
assert.equal(arsenalOther.length,26);
assert.equal(arsenalAuditNames.length,209);
assert.equal(arsenalTechnical.length,62);
assert.equal(arsenalAlternativeRatings.length,17);
const rawWeapons=normalizeDataset(snapshot.datasets.weapons.rows,'weapons');
const enrichedWeapons=enrichArsenal(rawWeapons);
assert.equal(enrichedWeapons.length,rawWeapons.length);
assert.equal(new Set(enrichedWeapons.map(x=>x.id)).size,rawWeapons.length);
assert.ok(enrichedWeapons.filter(x=>x.arsenalAudit).length>=200,'Weapon audit identity coverage regression');
for(let i=0;i<rawWeapons.length;i++){
 const before=rawWeapons[i],after=enrichedWeapons[i];
 for(const k of ['id','title','path','image','source','spoiler'])assert.equal(after[k],before[k]);
 for(const [k,value] of Object.entries(before.attributes)){
  if(value==='Not verified in this atlas'||value===''||value==null)continue;
  const actual=after.attributes[k];
  assert.ok(actual===value||actual===String(value)+'/10',before.title+' overwritten '+k);
 }
}
const k17=enrichedWeapons.find(x=>x.title==='Klose K17');
assert.equal(k17.attributes.Handling,'8.5/10');
assert.equal(k17.attributes['Technical capacity (game data)'],'12');
assert.equal(k17.attributes['Clip size'],'17');
assert.equal(k17.attributes['In-game projectile speed parameter'],'370');
assert.equal(k17.attributes['Reload animation multiplier'],'1');
assert.ok(k17.relatedSources.some(s=>s.url==='https://six.mics.dev/weapons/ballistics'));
const bonus=enrichedWeapons.find(x=>x.title==="Jason's Hawk & Little Morgan");
if(bonus){assert.equal(bonus.attributes['Base weapon family'],'Hawk & Little Morgan');assert.equal(bonus.attributes.Damage,'Not verified in this atlas');}
const grenade=enrichedWeapons.find(x=>x.title==='Frag Grenade');
assert.equal(grenade.attributes['In-game force on vehicles'],'0');
assert.ok(k17.relatedSources.some(s=>s.url==='https://gamesdb.gg/gta-6/weapons?variants=1'));
const untouched={id:'unmatched',title:'Unknown fictional weapon',attributes:{}};
assert.strictEqual(enrichArsenal([untouched])[0],untouched);
const conflict=enrichArsenal([{title:'Klose K17',attributes:{Damage:'9',Price:'100',Availability:'Already documented'}}])[0];
assert.equal(conflict.attributes.Damage,'9');
assert.equal(conflict.attributes.Price,'100');
assert.equal(conflict.attributes.Availability,'Already documented');
assert.ok(conflict.arsenalAudit.conflicts.some(x=>x.field==='Damage'));
console.log('Arsenal V2 audit:',JSON.stringify({matched:enrichedWeapons.filter(x=>x.arsenalAudit).length,filled:enrichedWeapons.reduce((n,x)=>n+(x.arsenalAudit?.added.length||0),0),conflicts:enrichedWeapons.reduce((n,x)=>n+(x.arsenalAudit?.conflicts.length||0),0)}));
