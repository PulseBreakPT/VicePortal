import assert from 'node:assert/strict';
import { readFile, writeFile, mkdtemp, rm, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Run the real data modules without installing frontend dependencies.
// Copy the modules to temporary .mjs files and resolve CRA's extensionless imports.
const root = fileURLToPath(new URL('../', import.meta.url));
const dir = await mkdtemp(join(tmpdir(), 'viceportal-characters-'));
const modules = ['characterSourceIndex','characterCoverage','mediaCast','characterDiscoveries','characterEvidence','characterProfileResearch','characterRecords'];
try {
  for (const name of modules) {
    const source = await readFile(join(root,'src','data',name+'.js'),'utf8');
    const esm = source.replace(/(from\s+['"]\.\/)([\w-]+)(['"])/g,'$1$2.mjs$3');
    await writeFile(join(dir,name+'.mjs'),esm);
  }
  const { characterRecords: records } = await import(pathToFileURL(join(dir,'characterRecords.mjs')).href);
  const { mediaCast } = await import(pathToFileURL(join(dir,'mediaCast.mjs')).href);
  const { characterDiscoveries } = await import(pathToFileURL(join(dir,'characterDiscoveries.mjs')).href);
  const byId = new Map(records.map(row=>[row.id,row]));
  const { characterProfileResearch } = await import(pathToFileURL(join(dir,'characterProfileResearch.mjs')).href);
  for (const [id,review] of Object.entries(characterProfileResearch)) {
    const row=byId.get(id);
    assert.ok(row, 'Unknown supplemental character ID '+id);
    assert.ok(row.spoiler, 'Supplemental story details must be protected '+id);
    assert.ok(row.paragraphs.includes(review.text), 'Missing supplemental biography '+id);
    assert.ok(row.relatedSources.some(source=>source.url===review.source), 'Missing supplemental source '+id);
  }
  assert.equal(byId.size,records.length,'Duplicate dossier ID');
  assert.ok(records.length>=589,'Unexpected catalogue regression');
  assert.equal(records.filter(x=>x.attributes['Credit section']==='Main Cast').length,57);
  assert.equal(records.filter(x=>x.attributes['Credit section']==='Full Cast').length,145);
  assert.equal(mediaCast.length,328);
  assert.equal(mediaCast.filter(x=>x.id).length,317);
  assert.equal(mediaCast.filter(x=>x.existingId).length,11);
  for (const row of mediaCast) {
    assert.ok(byId.has(row.id||row.existingId),'Unresolved media credit');
    assert.match(row.profileUrl,/^https:\/\/gta6ops\.com\//);
    assert.ok(row.program&&row.role&&row.performer&&row.creditedRole);
  }
  for (const [title,id,description,source] of characterDiscoveries) {
    const record = byId.get(id);
    assert.equal(record.title,title);
    assert.equal(record.source,source);
    assert.equal(record.attributes['Credited performer'],'Not verified in this atlas');
  }
  const localImages = new Set();
  for (const row of records) {
    assert.match(row.id,/^[a-z0-9-]+$/);
    assert.ok(row.title.trim()&&row.description.trim()&&row.attributes.Evidence);
    assert.equal(new URL(row.source).protocol,'https:');
    for (const source of row.relatedSources||[]) assert.equal(new URL(source.url).protocol,'https:');
    for (const id of row.relatedCharacterIds||[]) {
      assert.ok(byId.has(id),row.id+' points to unknown '+id);
      assert.notEqual(id,row.id);
    }
    if (row.attributes.Evidence.includes('Official cast credit only')||row.attributes.Evidence.includes('unconfirmed')) {
      assert.match(row.attributes['Biography availability'],/^Not verified/);
    }
    if (row.contextImage) {
      assert.equal(new URL(row.contextImage).protocol,'https:');
      assert.equal(new URL(row.contextImageSource).protocol,'https:');
      assert.ok(row.contextCaption,'Missing contextual image caption');
    }
    if (row.image.startsWith('https://')) {
      assert.ok(row.imageSource&&row.imageSourceUrl&&row.imageFallback,row.id+' lacks image provenance');
      assert.equal(new URL(row.imageSourceUrl).protocol,'https:');
      assert.equal(row.imageFallback,'/images/character-placeholder.svg');
    } else {
      assert.ok(row.image.startsWith('/images/'),row.id+' has unsupported local image path');
      localImages.add(row.image);
    }
    if (row.imageFallback) localImages.add(row.imageFallback);
  }
  for (const image of localImages) await access(join(root,'public',image.slice(1)));
  console.log(JSON.stringify({records:records.length,mediaCredits:mediaCast.length,imageReferences:records.filter(x=>!x.placeholderImage).length,creditOnly:records.filter(x=>x.attributes.Evidence==='Official cast credit only').length,localImageFiles:localImages.size,result:'PASS'},null,2));
} finally {
  await rm(dir,{recursive:true,force:true});
}
