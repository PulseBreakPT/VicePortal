import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {adaptRow,mergeOpenData,specs} from '../src/data/openDataV2.mjs';
const row=adaptRow('atlas','vehicles',{slug:'sample',name:'Sample',seats:2,price:0,manufacturer:'Maker',prose:'omit',images:['omit'],coords:{x:1}});
assert.equal(row.attributes.Price,'$0');
assert.equal(row.attributes.Seats,2);
assert.ok(!JSON.stringify(row).includes('omit'));
const original=[{id:'one',kind:'Vehicle',title:'Sample',path:'/vehicles/one',attributes:{Seats:'Not verified in this atlas',Manufacturer:'Existing'},relatedSources:[],spoiler:true}];
const before=JSON.stringify(original),r=mergeOpenData(original,{datasets:{'atlas/vehicles':[row]}});
assert.equal(JSON.stringify(original),before);assert.equal(r.entries.length,1);assert.equal(r.entries[0].attributes.Seats,2);assert.equal(r.entries[0].attributes.Manufacturer,'Existing');assert.equal(r.entries[0].spoiler,true);assert.equal(r.conflicts.length,1);
assert.deepEqual(mergeOpenData(r.entries,{datasets:{'atlas/vehicles':[row]}}).entries,r.entries);
assert.equal(mergeOpenData([...original,{...original[0],id:'two'}],{datasets:{'atlas/vehicles':[row]}}).counts.ambiguous,1);
assert.equal(mergeOpenData(original,{datasets:{'atlas/vehicles':[{...row,spoiler:true}]}}).counts.skipped,1);
const snapshot=JSON.parse(await readFile(new URL('../src/data/openDataV2.json',import.meta.url),'utf8'));
for(const [p,keys] of Object.entries(specs))for(const [key,min] of Object.entries(keys)){const rows=snapshot.datasets[p+'/'+key];assert.ok(rows?.length>=min,p+'/'+key+' incomplete');assert.equal(new Set(rows.map(r=>r.id)).size,rows.length);}
console.log('Open data V2 import coverage:',JSON.stringify(Object.fromEntries(Object.entries(snapshot.datasets).map(([k,v])=>[k,v.length]))));

// Strong identity constraints for aliases and named property pins.
const car={id:'car',kind:'Vehicle',title:'Example GT',attributes:{Manufacturer:'Maker'},path:'/vehicles/car'};
const full=adaptRow('atlas','vehicles',{slug:'maker-example-gt',name:'Maker Example GT',manufacturer:'Maker',seats:4});
assert.equal(mergeOpenData([car],{datasets:{'atlas/vehicles':[full]}}).entries[0].attributes.Seats,4);
assert.equal(mergeOpenData([{...car,attributes:{Manufacturer:'Other'}}],{datasets:{'atlas/vehicles':[full]}}).counts.unmatched,1);
const prop=adaptRow('atlas','properties',{slug:'paradise-garage',name:'Paradise Garage',property_type:'garage',vehicle_capacity:1});
const pins=[{id:'p1',kind:'Location',title:'Paradise Garage',source:'https://gtatown.com/locations/paradise-garage',attributes:{}},{id:'p2',kind:'Location',title:'Garage · Paradise Garage',source:'https://gtatown.com/locations/garage-northern-grassrivers-ogarage001',attributes:{}}];
const pr=mergeOpenData(pins,{datasets:{'atlas/properties':[prop]}});
assert.equal(pr.counts.propertiesMatched,1);assert.equal(pr.entries[0].attributes['Vehicle capacity'],undefined);assert.equal(pr.entries[1].attributes['Vehicle capacity'],1);
assert.ok(pr.entries[1].collections.includes('archive/real-estate/garages'));
const shop=adaptRow('gang','stores',{slug:'shop',name:'Shop',county:'County',kind:'Clothing'});
assert.equal(mergeOpenData([{id:'s',kind:'Location',title:'Shop',attributes:{County:'County'}}],{datasets:{'gang/stores':[shop]}}).counts.unmatched,1);
