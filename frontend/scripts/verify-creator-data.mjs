import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {DATASETS,extractExport,parseCSV,normalizeDataset,mergeWeapons,hideSpoiler,validateDataset} from '../src/data/creatorDataModel.mjs';
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
