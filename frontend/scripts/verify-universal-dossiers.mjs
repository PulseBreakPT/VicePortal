import assert from 'node:assert/strict';
import { readFile,writeFile,mkdtemp,rm,readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath,pathToFileURL } from 'node:url';
import {buildDossier,schemas} from '../src/components/portal/dossier/universalDossier.mjs';
import {isUnknown} from '../src/components/portal/dossier/dossierModel.mjs';
const root=fileURLToPath(new URL('../src/data/',import.meta.url));
const dir=await mkdtemp(join(tmpdir(),'viceportal-dossiers-'));
try{
 for(const name of await readdir(root)){
  if(name.endsWith('.test.js'))continue;
  if(name.endsWith('.json')){await writeFile(join(dir,name+'.mjs'),'export default '+await readFile(join(root,name),'utf8')+';');continue;}
  if(!/\.(?:js|mjs)$/.test(name))continue;
  const source=await readFile(join(root,name),'utf8');
  const esm=source.replace(/(from\s+['"]\.\/)([\w-]+)(['"])/g,'$1$2.mjs$3').replace(/(from\s+['"]\.\/)([\w-]+\.json)(['"])/g,'$1$2.mjs$3');
  await writeFile(join(dir,name.replace(/\.js$/,'.mjs')),esm);
 }
 const {entries}=await import(pathToFileURL(join(dir,'portal.mjs')).href);
 const report={entries:entries.length,byKind:{},views:0,attributes:0,omissions:{},unknownKinds:[]};
 for(const entry of entries){
  report.byKind[entry.kind]=(report.byKind[entry.kind]||0)+1;
  if(!schemas[entry.kind]&&!report.unknownKinds.includes(entry.kind))report.unknownKinds.push(entry.kind);
  const original=JSON.stringify(entry);
  for(const spoilers of [false,true]){
   const view=buildDossier(entry,spoilers);
   const fields=[...view.facts,...view.sourceFacts,...view.sections.flatMap(s=>s.rows)];
   const keys=fields.map(f=>f.name);
   assert.equal(new Set(keys).size,keys.length,entry.id+' repeated field');
   const ids=view.sections.map(s=>s.id);
   assert.equal(new Set(ids).size,ids.length,entry.id+' repeated section');
   assert.ok(view.sections.every(s=>s.rows.length||s.meters.length||s.mode==='gallery'||s.mode==='overview'),entry.id+' empty section');
   for(const [name,value] of Object.entries(entry.attributes||{})){
    if(isUnknown(value)||(Array.isArray(value)&&!value.length)||(value&&typeof value==='object'&&!Object.keys(value).length))continue;
    assert.ok(keys.includes(name)||view.omissions.some(x=>x.name===name),entry.id+' missing '+name);
    report.attributes++;
   }
   for(const f of fields)assert.deepEqual(f.value,entry.attributes[f.name],entry.id+' modified '+f.name);
   if(entry.spoiler&&!spoilers){
    assert.equal(view.subtitle,'');
    assert.ok(view.sections.every(s=>!s.paragraphs?.length&&!s.tags?.length&&s.mode!=='gallery'&&!s.meters.length),entry.id+' spoiler content');
   }
   for(const x of view.omissions)report.omissions[x.reason]=(report.omissions[x.reason]||0)+1;
   assert.equal(JSON.stringify(entry),original,entry.id+' mutated');
   report.views++;
  }
 }
 assert.ok(entries.length>=589);
 assert.equal(new Set(entries.map(e=>e.id)).size,entries.length,'Duplicate IDs');
 const sample={id:'test',title:'Example',kind:'Weapon',source:'https://example.com',category:'Handguns',subtitle:'Handguns',description:'Original overview. Extra information.',paragraphs:['Extra information.','A unique fact.'],attributes:{Type:'Handguns',Category:'Handguns',Damage:5,Range:5,Clip:10,'Clip size':10,Price:100},details:['Handguns','A unique fact.']};
 const v=buildDossier(sample,true),rows=[...v.facts,...v.sections.flatMap(s=>s.rows)];
 assert.equal(v.subtitle,'');assert.equal(rows.filter(x=>['Type','Category'].includes(x.name)).length,1);
 assert.ok(rows.some(x=>x.name==='Damage')&&rows.some(x=>x.name==='Range'));
 assert.equal(rows.filter(x=>['Clip','Clip size'].includes(x.name)).length,1);
 assert.equal(v.sections[0].paragraphs.join(' '),'Original overview. Extra information. A unique fact.');
 assert.equal(v.sections[0].tags.length,0);
 console.log('Universal dossier audit:',JSON.stringify(report));
}finally{await rm(dir,{recursive:true,force:true});}
