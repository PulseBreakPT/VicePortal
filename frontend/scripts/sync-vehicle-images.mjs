// Public catalogue image references only; never invent a CDN URL or substitute a variant.
import {readFile,writeFile,rename} from 'node:fs/promises';
import {normalizeVehicles,vehicleSlug} from '../src/data/vehicleNormalizer.mjs';
import {pathToFileURL} from 'node:url';
const origin='https://gtatown.com';
const index=origin+'/garage/vehicles';
const manifestURL=new URL('../src/data/vehicleImageRefs.json',import.meta.url);
const feedURL=new URL('../src/data/vehicleFeed.json',import.meta.url);
const decode=s=>String(s??'').replace(/&#(x[0-9a-f]+|\d+);/gi,(_,n)=>{const v=n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):Number(n);return v<=0x10ffff?String.fromCodePoint(v):'';}).replace(/&(?:apos|rsquo|lsquo);/gi,"'").replace(/&quot;/gi,'"').replace(/&amp;/gi,'&').replace(/&nbsp;/gi,' ');
const attr=(tag,key)=>decode(tag.match(new RegExp('\\s'+key+'\\s*=\\s*(?:"([^"]*)"|\\x27([^\\x27]*)\\x27|([^\\s>]+))','i'))?.slice(1).find(x=>x!==undefined)||'');
const plain=s=>decode(s.replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ').trim();
const safeURL=(value,kind)=>{
  try{const u=new URL(value,origin);if(u.origin!==origin||u.search||u.hash)return null;
    const pattern=kind==='page'?/^\/garage\/vehicles\/([a-z0-9-]+)\/?$/:/^\/img\/(?:pc\/)?vehicles\/([a-z0-9-]+)-(\d+)\.webp$/;
    const m=u.pathname.match(pattern);return m?{url:u.href,slug:m[1]}:null;
  }catch{return null;}
};
export function collectImageReferences(html,rows){
 const result={},ambiguous=new Set();
 const titles=rows.map(row=>({row,key:vehicleSlug(row.title)}));
 for(const anchor of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a\s*>/gi)){
   const page=safeURL(attr(anchor[1],'href'),'page');
   if(!page)continue;
   const body=anchor[2],imgs=[...body.matchAll(/<img\b[^>]*>/gi)].map(x=>x[0]);
   // A missing-image card must never inherit an image from its neighbours.
   if(!imgs.length||/\bno image yet\b/i.test(plain(body)))continue;
   const label=vehicleSlug(plain(body)),altKeys=imgs.map(x=>vehicleSlug(attr(x,'alt'))).filter(Boolean);
   // Require the actual linked dossier slug to equal the normalized vehicle title.
   // Nonstandard aliases require a separately reviewed manifest entry.
   const candidates=titles.filter(({key})=>key===page.slug&&(altKeys.includes(key)||label===key||label.startsWith(key+'-')));
   if(candidates.length!==1)continue;
   const {row,key}=candidates[0];
   if(altKeys.some(alt=>alt!==key&&titles.some(t=>t.key===alt)))continue;
   const images=[];
   for(const tag of imgs)for(const field of ['src','data-src','srcset','data-srcset']){
     for(const part of attr(tag,field).split(',').map(s=>s.trim().split(/\s+/)[0]).filter(Boolean)){
       const img=safeURL(part,'image');
       if(img&&img.slug===page.slug)images.push(img.url);
     }
   }
   const unique=[...new Set(images)];
   if(!unique.length)continue;
   const image=unique.sort((a,b)=>Number(b.match(/-(\d+)\.webp$/)[1])-Number(a.match(/-(\d+)\.webp$/)[1]))[0];
   const entry={title:row.title,image,source:page.url,evidence:'exact-index-card'};
   if(result[row.id]&&result[row.id].source!==entry.source){ambiguous.add(row.id);continue;}
   result[row.id]=entry;
 }
 for(const id of ambiguous)delete result[id];
 return result;
}
export async function syncImages(){
 const rows=normalizeVehicles(JSON.parse(await readFile(feedURL,'utf8')));
 const previous=JSON.parse(await readFile(manifestURL,'utf8'));
 const response=await fetch(index,{signal:AbortSignal.timeout(30000),headers:{Accept:'text/html','User-Agent':'ViceAtlas/1.0 (public vehicle image references)'}});
 if(!response.ok)throw Error('Image index returned '+response.status);
 const html=await response.text();
 const found=collectImageReferences(html,rows);
 const merged={...found,...previous}; // explicit reviewed links win, including on an incomplete source response
 const active=new Set(rows.map(r=>r.id));
 for(const id of Object.keys(merged))if(!active.has(id))delete merged[id];
 const seen=new Set(),sorted={};
 for(const id of Object.keys(merged).sort()){
   const ref=merged[id],row=rows.find(r=>r.id===id);
   if(!row||vehicleSlug(row.title)!==vehicleSlug(ref.title)||seen.has(ref.image))continue;
   const page=safeURL(ref.source,'page'),img=safeURL(ref.image,'image');
   if(!page||!img||page.slug!==img.slug)continue;
   seen.add(ref.image);sorted[id]=ref;
 }
 if(Object.keys(sorted).length<Object.keys(previous).length)throw Error('Image reference coverage would regress');
 const tmp=new URL('../src/data/vehicleImageRefs.tmp.json',import.meta.url);
 await writeFile(tmp,JSON.stringify(sorted,null,2)+'\n');await rename(tmp,manifestURL);
 console.log(JSON.stringify({vehicles:rows.length,matchedFromIndex:Object.keys(found).length,imageReferences:Object.keys(sorted).length,missing:rows.length-Object.keys(sorted).length}));
}
if(process.argv[1]&&pathToFileURL(process.argv[1]).href===import.meta.url)await syncImages();
