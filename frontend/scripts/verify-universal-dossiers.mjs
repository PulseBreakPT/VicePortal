import './verify-master-archive.mjs';
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
 const {entries,gtaTownExtendedReport,missionEnrichmentReport,categoryEnrichmentReport,openDataV2Report}=await import(pathToFileURL(join(dir,'portal.mjs')).href);
 const openAudit={counts:openDataV2Report.counts,review:openDataV2Report.review,conflicts:openDataV2Report.conflicts};
 assert.equal(entries.length,categoryEnrichmentReport.entries.length,'Open data must preserve canonical record count');
 await writeFile(join(root,'openDataV2Audit.json'),JSON.stringify(openAudit,null,2)+'\n');
 console.log('OPEN_DATA_V2_DOSSIERS '+JSON.stringify(openAudit.counts));
 const {masterSections,MASTER}=await import(pathToFileURL(join(dir,'masterArchive.mjs')).href);
 const masterIds=new Set(masterSections.map(s=>s.id));
 assert.ok(entries.every(e=>(e.collections||[]).filter(c=>c.startsWith('archive')).every(c=>masterIds.has(c))),'Unregistered master collection');
 const {sections}=await import(pathToFileURL(join(dir,'sections.mjs')).href);
 const allSections=new Set(sections.map(s=>s.id));
 assert.equal(new Set(entries.map(e=>e.path)).size,entries.length,'Duplicate dossier paths');
 const extended=entries.filter(e=>e.creatorDataset==='gtatown-extra');
 assert.ok(extended.length>=150,'Missing extended GTA Town records');
 for(const e of extended){
  assert.ok(e.collections.every(c=>allSections.has(c)),e.id+' unknown section');
  assert.ok(e.source.startsWith('https://gtatown.com/'),e.id+' missing provenance');
 }
 const externalIds=entries.map(e=>e.gtaTownEntityId).filter(Boolean);
 assert.equal(new Set(externalIds).size,externalIds.length,'Duplicate GTA Town source identity');
 console.log('Extended GTA Town:',JSON.stringify({counts:gtaTownExtendedReport.counts,review:gtaTownExtendedReport.review.length,byKind:extended.reduce((m,e)=>(m[e.kind]=(m[e.kind]||0)+1,m),{})}));
 const styleCoverage=gtaTownExtendedReport.styleCoverage;
 assert.ok(styleCoverage.unique>=1068,'Style source coverage regressed');
 for(const [type,minimum] of Object.entries({clothes:558,outfits:357,stores:56,brands:40})){
  assert.ok(styleCoverage.byType[type].found>=minimum,'Style source coverage regressed: '+type);
 }
 const sourceStyleIds=entries.map(e=>e.gtaTownEntityId).filter(id=>id?.startsWith('/style/'));
 assert.ok(sourceStyleIds.length>=980,'Style catalogue integration regressed');
 assert.equal(styleCoverage.raw-styleCoverage.duplicateOccurrences,styleCoverage.unique);
 assert.equal(styleCoverage.integratedSourceIds+styleCoverage.unresolvedSourceIds.length,styleCoverage.unique);
 assert.ok(styleCoverage.integratedSourceIds>=1068,'Source identities were not integrated');
 assert.equal(styleCoverage.byType.stores.remaining,null,'Inconsistent source denominator must not imply completion');
 assert.ok(styleCoverage.byType.stores.sourceCountDiscrepancy>=6);
 const typedStores=entries.filter(e=>e.kind==='Store chain'&&e.attributes?.['Source classification']==='Gun store');
 assert.ok(typedStores.length>0&&typedStores.every(e=>e.collections.includes('archive/stores-services/gun-stores')));
 assert.ok(typedStores.every(e=>Number.isInteger(e.attributes['Source-listed location count'])&&Number.isInteger(e.attributes['Source-listed clothing count'])));
 console.log('GTA Town style source coverage:',JSON.stringify(styleCoverage));
 const setRecords=entries.filter(e=>e.kind==='Collectible set'&&e.source?.includes('gtatown.com/collectibles/'));
 assert.ok(setRecords.length>=20,'Collection set coverage regressed');
 const {normalizeVehicles}=await import(pathToFileURL(join(dir,'vehicleNormalizer.mjs')).href);
 const feed=JSON.parse(await readFile(join(root,'vehicleFeed.json'),'utf8'));
 const sourceVehicles=normalizeVehicles(feed);
 const byId=new Map(entries.map(e=>[e.id,e]));
 for(const v of sourceVehicles){
  const e=byId.get(v.id);
  assert.ok(e&&e.kind==='Vehicle',v.id+' missing vehicle dossier');
  if(v.topSpeedMph!==null)assert.equal(e.attributes['Top speed'],v.topSpeedMph+' mph (source-reported)');
  if(v.realLife)assert.equal(e.attributes['Real-life reference'],v.realLife);
  if(v.edition)assert.equal(e.attributes.Edition,v.edition);
  if(v.mode)assert.equal(e.attributes['Game mode'],v.mode);
 }
 const vehicleDetails=await Promise.all(['gtatownVehicleDetailsA.json','gtatownVehicleDetailsB.json'].map(name=>readFile(join(root,name),'utf8').then(JSON.parse)));
 const vehicleRows=vehicleDetails.flat();
 assert.equal(new Set(vehicleRows.map(x=>x.source)).size,vehicleRows.length);
 assert.ok(vehicleRows.length>=20);
 const lookup=new Map(sourceVehicles.map(v=>[v.source,v]));
 let reviewedVehicleCount=0;
 for(const row of vehicleRows){
  const v=lookup.get(row.source);
  if(!v||v.title!==row.title)continue;
  const e=byId.get(v.id);
  for(const [name,value] of Object.entries(row.attributes)){
   if(name==='GTA Town acquisition methods')assert.equal(e.attributes[name],value);
  }
  reviewedVehicleCount++;
 }
 assert.ok(reviewedVehicleCount>=20,'Reviewed vehicle coverage regression');
 const wildlifeEvidence=[['American Black Bear',3],['Black Fox',3],['Leonida Panther',2]];
 for(const [title,count] of wildlifeEvidence){
  const found=entries.filter(e=>e.kind==='Animal'&&e.title===title);
  assert.equal(found.length,1,'Duplicate or missing wildlife dossier: '+title);
  assert.equal(found[0].attributes['Mapped hunting spots'],count);
  assert.ok(found[0].relatedSources.some(x=>x.url.startsWith('https://gtatown.com/map?find=a-')));
 }
 const lombike=entries.find(e=>e.kind==='Vehicle'&&e.title==='Walter Lombike');
 assert.ok(lombike,'Missing Walter Lombike');
 assert.equal(lombike.vehicleStats.speed,6.9);
 assert.equal(lombike.vehicleStats.acceleration,7.9);
 assert.equal(lombike.vehicleStats.handling,7.9);
 assert.equal(lombike.vehicleStats.offroad,2.3);
 const {enrichMissionRecords}=await import(pathToFileURL(join(dir,'gtatownMissionEnrichment.mjs')).href);
 const fixtureSource='https://gtatown.com/track/missions/example';
 const seed=[{id:'m1',kind:'Mission',title:'Example',source:fixtureSource,attributes:{Chapter:'Existing','Reward':'Not verified in this atlas'},path:'/missions/m1'},{id:'m2',kind:'Mission',title:'Example',source:'https://gtatown.com/track/missions/other',attributes:{},path:'/missions/m2'}];
 const candidate={kind:'Mission',title:'Example',source:fixtureSource,attributes:{Chapter:'Different',Rewards:'$100','Story order':1}};
 const merged=enrichMissionRecords(seed,[candidate]);
 assert.equal(merged.counts.matched,1);
 assert.equal(merged.counts.filled,2);
 assert.equal(merged.counts.conflicts,1);
 assert.equal(merged.entries[0].attributes.Chapter,'Existing');
 assert.equal(merged.entries[0].attributes.Reward,'$100');
 assert.equal(merged.entries[0].storyOrder,1);
 assert.equal(merged.entries[1],seed[1]);
 assert.equal(seed[0].attributes.Reward,'Not verified in this atlas');
 console.log('Individual mission enrichment:',JSON.stringify({counts:missionEnrichmentReport.counts,review:missionEnrichmentReport.review.length}));
 console.log('Vehicle field recovery:',JSON.stringify({records:sourceVehicles.length,topSpeed:sourceVehicles.filter(v=>v.topSpeedMph!==null).length,realLife:sourceVehicles.filter(v=>v.realLife).length,edition:sourceVehicles.filter(v=>v.edition).length,mode:sourceVehicles.filter(v=>v.mode).length,individual:reviewedVehicleCount}));
 const masterCoverage=Object.fromEntries(MASTER.map(g=>[g.id,entries.filter(e=>e.collections.some(c=>c==='archive/'+g.id||c.startsWith('archive/'+g.id+'/'))).length]));
 console.log('Master archive production coverage:',JSON.stringify(masterCoverage));
 const categoryFacts=JSON.parse(await readFile(join(root,'gtatownCategoryFacts.json'),'utf8'));
 assert.equal(categoryFacts.length,24);
 for(const row of categoryFacts){
  const found=entries.filter(e=>e.kind===row.kind&&e.title===row.title);
  assert.equal(found.length,1,'Missing or repeated category fact: '+row.title);
  assert.ok(found[0].collections.includes(row.section),'Missing category membership: '+row.title);
  assert.ok(found[0].source===row.source||found[0].relatedSources?.some(s=>s.url===row.source),'Missing source: '+row.title);
 }
 for(const group of ['organizations','racing','appearance','economy','culture','items','gameplay'])assert.ok(masterCoverage[group]>0,'Missing category coverage: '+group);
 assert.ok(categoryEnrichmentReport.counts.guides>=12,'Guide cross-indexing regression');
 const shopEvidence=JSON.parse(await readFile(join(root,'gtatownShopEvidence.json'),'utf8'));
 assert.equal(shopEvidence.length,29);
 console.log('Category enrichment:',JSON.stringify({facts:categoryFacts.length,counts:categoryEnrichmentReport.counts,unmatchedShops:categoryEnrichmentReport.review}));

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
 const credit={title:'Example',kind:'Character',source:'https://example.com',description:'Actor is credited for Host in Station, in the radio host cast. This credit establishes the role and programme, not an independent story biography.',attributes:{Role:'Host','Credited performer':'Actor',Programme:'Station','Media category':'Radio host'}};
 const creditView=buildDossier(credit,true);
 assert.equal(creditView.sections[0].paragraphs[0],'This credit establishes the role and programme, not an independent story biography.');
 // Explicit gaps are a measurable lower bound, not a claim that every absent field applies.
 const coverage={total:entries.length,withExplicitGaps:0,withoutExplicitGaps:0,withNoDocumentedAttributes:0,byKind:{},records:[]};
 const metadata=new Set(['Dossier completeness','Source confidence','Source classification','Source-listed details']);
 for(const e of entries){
  const attributes=Object.entries(e.attributes||{}).filter(([name])=>!metadata.has(name));
  const unknown=attributes.filter(([,v])=>isUnknown(v)||v==null||(Array.isArray(v)&&!v.length)||(v&&typeof v==='object'&&!Object.keys(v).length)).map(([name])=>name);
  const known=attributes.length-unknown.length;
  const group=coverage.byKind[e.kind]||={total:0,withExplicitGaps:0,withoutExplicitGaps:0,withNoDocumentedAttributes:0,missingFields:0};
  group.total++;
  if(unknown.length){coverage.withExplicitGaps++;group.withExplicitGaps++;group.missingFields+=unknown.length;}
  else{coverage.withoutExplicitGaps++;group.withoutExplicitGaps++;}
  if(!known){coverage.withNoDocumentedAttributes++;group.withNoDocumentedAttributes++;}
  if(unknown.length||!known)coverage.records.push({id:e.id,title:e.title,kind:e.kind,path:e.path,missing:unknown,documentedFields:known});
 }
 assert.equal(coverage.withExplicitGaps+coverage.withoutExplicitGaps,entries.length);
 coverage.records.sort((a,b)=>b.missing.length-a.missing.length||a.documentedFields-b.documentedFields||a.id.localeCompare(b.id));
 await writeFile(join(root,'dossierCompletenessAudit.json'),JSON.stringify(coverage,null,2)+'\n');
 console.log('DOSSIER_COMPLETENESS '+JSON.stringify({...coverage,records:undefined}));
 console.log('Universal dossier audit:',JSON.stringify(report));
}finally{await rm(dir,{recursive:true,force:true});}
