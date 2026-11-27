import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {buildUniversal} from '../src/data/universalModel.mjs';
const read=p=>readFile(new URL(p,import.meta.url),'utf8').then(JSON.parse);
const snapshot=await read('../src/data/universalSnapshot.json'),sources=await read('../src/data/universalSources.json');
for(const key of ['gtadb','openmap','radio','prices']){assert.equal(sources[key].mode,'import');assert.match(sources[key].sha,/^[a-f0-9]{40}$/);}
for(const key of ['hq','hash','atlas','saverift','mcp'])assert.notEqual(sources[key].mode,'import');
assert.ok(snapshot.landmarks.length>=1183&&snapshot.places.length>=1000&&snapshot.stations.length>=28&&snapshot.prices.rows.length>=103);
const seed={id:'legacy',kind:'Radio station',title:'AfroBank FM',attributes:{Genre:'Afrobeats',Tracklist:'Not verified in this atlas'},image:'legacy.webp',path:'/radio/legacy'};
const out=buildUniversal(snapshot,sources,[seed]);
assert.equal(out.entries.filter(x=>x.title==='AfroBank FM').length,1);
assert.equal(out.entries.find(x=>x.id==='legacy').image,'legacy.webp');
assert.notEqual(out.entries.find(x=>x.id==='legacy').attributes.Tracklist,'Not verified in this atlas');
assert.equal(new Set(out.entries.map(x=>x.id)).size,out.entries.length);
assert.ok(out.entries.filter(x=>x.creatorDataset==='universal').every(x=>x.placeholderImage&&x.relatedSources.some(s=>s.url.startsWith('https://github.com/'))));
assert.ok(out.counts.prices>=103);
console.log('Universal data engine:',JSON.stringify({...out.counts,review:out.review.length,conflicts:out.conflicts.length,rawCounts:snapshot.rawCounts}));
