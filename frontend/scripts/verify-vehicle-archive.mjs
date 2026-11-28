import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {normalizeVehicles} from '../src/data/vehicleNormalizer.mjs';
import {enrichVehicle} from '../src/data/vehicleArchiveModel.mjs';
import {buildDossier} from '../src/components/portal/dossier/universalDossier.mjs';
const read=p=>readFile(new URL(p,import.meta.url),'utf8').then(JSON.parse);
const archive=await read('../src/data/vehicleArchiveV3.json');
const feed=await read('../src/data/vehicleFeed.json');
const rows=normalizeVehicles(feed);
assert.equal(Object.keys(archive.entries).length,558);
assert.equal(archive.counts.base,277);assert.equal(archive.counts.standout,280);
assert.equal(Object.values(archive.entries).filter(e=>e.location).length,281);
assert.equal(archive.counts.tests,9);
assert.equal(archive.counts.economy,163);
assert.equal(archive.unmatched.length,5);
let matched=0,locations=0,prices=0,resales=0,tests=0;
for(const row of rows){
 const result=enrichVehicle(row,archive);
 if(result.sources.length)matched++;
 for(const k of ['speed','acceleration','handling','offroad','strength']){
  assert.ok(result.row[k]===null||Number.isFinite(result.row[k])&&result.row[k]>=0&&result.row[k]<=10);
  if(row[k]!==null)assert.equal(result.row[k],row[k]);
 }
 assert.equal(result.row.id,row.id);
 const a=result.attributes;
 if(a['Spawn Locations'])locations++;
 if(a['Registration cost'])prices++;
 if(a['Observed resale value'])resales++;
 if(a['Top speed'])tests++;
 const view=buildDossier({kind:'Vehicle',title:row.title,attributes:a,vehicleStats:{},relatedSources:result.sources});
 const fields=view.sections.flatMap(s=>s.rows.map(r=>r.name)).concat(view.sourceFacts.map(r=>r.name),view.facts.map(r=>r.name));
 assert.equal(new Set(fields).size,fields.length);
 if(a['Top speed'])assert.ok(view.sections.find(s=>s.title==='Performance').rows.some(r=>r.name==='Top speed'));
 if(a['Registration cost'])assert.ok(view.sections.find(s=>s.title==='Pricing').rows.some(r=>r.name==='Registration cost'));
 if(a['Spawn Locations'])assert.ok(view.sections.find(s=>s.title==='Acquisition').rows.some(r=>r.name==='Spawn Locations'));
}
assert.ok(matched>=550,'Live source identities changed; inspect archive matches');
assert.ok(locations>=275);assert.ok(prices>=155);assert.ok(resales>=125);assert.ok(tests>=8);
const thrax=rows.find(r=>r.sourceSlug==='truffade-thrax');
assert.ok(enrichVehicle(thrax,archive).attributes['Top speed'].includes('299.16'));
assert.deepEqual(enrichVehicle({...thrax,title:'Wrong variant'},archive).attributes,{});
console.log(JSON.stringify({matched,locations,prices,resales,tests,quarantined:archive.unmatched.length},null,2));
