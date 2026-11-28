import { readFile,writeFile,access } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const build=fileURLToPath(new URL('../build/',import.meta.url));
const sha=process.env.GITHUB_SHA;
if(!/^[a-f0-9]{40}$/.test(sha||''))throw Error('Missing GitHub commit SHA');
const base=(process.env.PUBLIC_URL||'/VicePortal').replace(/\/$/,'');
const manifest=JSON.parse(await readFile(join(build,'asset-manifest.json'),'utf8'));
const assets=Object.values(manifest.files||{}).filter(x=>typeof x==='string'&&/\.(js|css)$/.test(x));
if(!assets.some(x=>x.endsWith('.js'))||!assets.some(x=>x.endsWith('.css')))throw Error('Missing compiled application assets');
const hashes={};
for(const asset of new Set(assets)){
 if(!asset.startsWith(base+'/static/'))throw Error('Unexpected asset base: '+asset);
 const file=join(build,asset.slice(base.length+1));
 hashes[asset]=createHash('sha256').update(await readFile(file)).digest('hex');
}
for(const name of ['index.html','404.html']){
 const file=join(build,name);
 const html=await readFile(file,'utf8');
 if(!html.includes('id="root"')||!html.includes('</head>')||!html.includes(manifest.files['main.js']))throw Error('Invalid app shell: '+name);
 await writeFile(file,html.replace('</head>','<meta name="viceportal-commit" content="'+sha+'"/></head>'));
}
await access(join(build,'.nojekyll'));
await writeFile(join(build,'release.json'),JSON.stringify({commit:sha,assets:hashes,entrypoint:manifest.files['main.js']},null,2)+'\n');
console.log('Verified build for commit',sha,'with',Object.keys(hashes).length,'compiled assets');
