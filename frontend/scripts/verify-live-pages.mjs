import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { setTimeout as delay } from 'node:timers/promises';
const expected=process.env.EXPECTED_SHA;
const root=new URL(process.env.PAGES_URL||'https://pulsebreakpt.github.io/VicePortal/');
if(root.protocol!=='https:'||!/^[a-f0-9]{40}$/.test(expected||''))throw Error('Invalid release verification inputs');
if(!root.pathname.endsWith('/'))root.pathname+='/';
const marker='<meta name="viceportal-commit" content="'+expected+'"/>';
async function get(path,allowed=[200]){
 const url=new URL(path,root);
 assert.equal(url.origin,root.origin);
 url.searchParams.set('release',expected);
 const res=await fetch(url,{headers:{'cache-control':'no-cache'},signal:AbortSignal.timeout(20000)});
 assert.ok(allowed.includes(res.status),url.pathname+' returned '+res.status);
 return res;
}
async function verify(){
 const release=await (await get('release.json')).json();
 assert.equal(release.commit,expected,'Public site serves a stale commit');
 assert.ok(release.entrypoint&&release.assets?.[release.entrypoint],'Release lacks its main bundle');
 for(const path of ['', '404.html', 'characters/jason-duval']){
  const html=await (await get(path,path==='characters/jason-duval'?[200,404]:[200])).text();
  assert.ok(html.includes(marker),'Stale or missing app shell: '+path);
  assert.ok(html.includes(release.entrypoint),'Wrong bundle in '+path);
 }
 for(const [path,hash] of Object.entries(release.assets)){
  assert.ok(path.startsWith(root.pathname+'static/'),'Asset outside project');
  const bytes=Buffer.from(await (await get(path)).arrayBuffer());
  assert.equal(createHash('sha256').update(bytes).digest('hex'),hash,'Public asset differs from compiled artifact: '+path);
 }
}
for(let attempt=1;attempt<=12;attempt++){
 try{await verify();console.log('Public release verified:',expected,root.href);break;}
 catch(error){console.warn('Live verification attempt',attempt,error.message);if(attempt===12)throw error;await delay(10000);}
}
