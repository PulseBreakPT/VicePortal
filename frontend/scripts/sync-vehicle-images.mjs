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


const extraSources={
 gps:{page:'https://gta6gps.com/vehicles',host:'assets.gta6gps.com',credit:'GTA6GPS · vehicle image reference · respective rights holders'},
 alcast:{page:'https://alcasthq.com/gta-6-standout-vehicles/',host:'alcasthq.com',credit:'AlcastHQ · Standout vehicle icon · respective rights holders'}
};
const namesFor=row=>{
 const title=vehicleSlug(row.title),maker=vehicleSlug(row.maker);
 return {title,full:title.startsWith(maker+'-')?title:maker+'-'+title};
};
function extraImage(value,row,kind){
 try{
   const cfg=extraSources[kind],u=new URL(value,cfg.page);
   if(u.protocol!=='https:'||u.username||u.password||u.search||u.hash||u.hostname!==cfg.host)return null;
   const {title,full}=namesFor(row);
   const name=vehicleSlug(decodeURIComponent(u.pathname.split('/').pop()).replace(/\.(webp|png|jpe?g)$/i,''));
   if(!/\.(webp|png|jpe?g)$/i.test(u.pathname)||/placeholder|default|no-image|generic|unknown/.test(name))return null;
   if(kind==='gps'){
     if(!/^\/(?:standout|vehicles)\/[a-z0-9-]+\.(webp|png|jpe?g)$/i.test(u.pathname)||![title,full].includes(name))return null;
   }else{
     if(!/^\/wp-content\/uploads\//.test(u.pathname))return null;
     const normalized=name.replace(/(?:-gta-?6|-icon|-scaled|-\d+x\d+)+$/g,'').replace(/^gta-?6-/,'');
     if(![title,full].includes(normalized))return null;
   }
   return u.href;
 }catch{return null;}
}
export function collectSupplementalImages(html,rows,kind){
 const cfg=extraSources[kind],result={},ambiguous=new Set();
 if(!cfg)return result;
 const candidates=rows.map(row=>({row,...namesFor(row)}));
 const containers=kind==='alcast'?[...html.matchAll(/<tr\b[^>]*>[\s\S]*?<\/tr\s*>/gi)].map(x=>x[0]):[html];
 for(const body of containers){
   const cells=kind==='alcast'?[...body.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td\s*>/gi)].map(x=>vehicleSlug(plain(x[1]))):[];
   for(const match of body.matchAll(/<img\b[^>]*>/gi)){
     const tag=match[0],alt=attr(tag,'alt');
     let matches;
     if(kind==='alcast'){
       const label=vehicleSlug(alt.replace(/\s+GTA\s*6\s+Icon\s*$/i,''));
       if(!/\s+GTA\s*6\s+Icon\s*$/i.test(alt))continue;
       matches=candidates.filter(x=>x.row.group==='standout'&&label===x.full&&cells.includes(x.full));
     }else{
       const label=alt.match(/^(.+?),\s+a\s+(.+?)\s+standout vehicle in GTA 6$/i);
       if(label){
         matches=candidates.filter(x=>x.row.group==='standout'&&[x.title,x.full].includes(vehicleSlug(label[1]))&&vehicleSlug(x.row.category).replace(/^standout-/,'')===vehicleSlug(label[2]));
       }else{
         const normal=alt.match(/^(.+?),?\s+in GTA 6$/i);
         if(!normal)continue;
         matches=candidates.filter(x=>x.row.group!=='standout'&&vehicleSlug(normal[1].replace(/,$/,''))===x.full);
       }
     }
     if(matches.length!==1)continue;
     const {row}=matches[0];
     let image;
     for(const field of ['data-src','data-lazy-src','src','data-srcset','srcset']){
       for(const part of attr(tag,field).split(',').map(x=>x.trim().split(/\s+/)[0]).filter(Boolean)){
         image=extraImage(part,row,kind);
         if(image)break;
       }
       if(image)break;
     }
     if(!image)continue;
     if(result[row.id]&&result[row.id].image!==image){ambiguous.add(row.id);continue;}
     result[row.id]={title:row.title,image,source:cfg.page,evidence:kind==='gps'?'exact-gps-image':'exact-alcast-icon',credit:cfg.credit};
   }
 }
 for(const id of ambiguous)delete result[id];
 return result;
}
async function loadHtml(url){
 const r=await fetch(url,{signal:AbortSignal.timeout(35000),headers:{Accept:'text/html','User-Agent':'ViceAtlas/1.0 (public vehicle image references)'}});
 if(!r.ok)throw Error('HTTP '+r.status);
 return r.text();
}


const trackerPage='https://gtavibase.win/en/gta-6/checklist/vehicles/';
const trackerCredit='MetaForge via GTA VI Base · game imagery © respective rights holders';
function trackerURL(value,row){
 try{
   const u=new URL(value,trackerPage),{title,full}=namesFor(row);
   const match=u.pathname.match(/^\/assets\/media\/gta-6\/tools\/vehicles\/([a-z0-9-]+)\.webp$/);
   if(u.origin!=='https://gtavibase.win'||u.username||u.password||u.hash||!match||![title,full].includes(match[1])||row.group!=='standout')return null;
   if(u.search&&!/^\?v=\d+$/.test(u.search))return null;
   return u.href;
 }catch{return null;}
}
export function collectTrackerImages(html,rows){
 const result={},ambiguous=new Set();
 for(const [tag] of html.matchAll(/<img\b[^>]*>/gi)){
   const alt=vehicleSlug(attr(tag,'alt'));
   const matches=rows.filter(row=>row.group==='standout'&&[namesFor(row).title,namesFor(row).full].includes(alt));
   if(matches.length!==1)continue;
   const row=matches[0];
   const image=['data-src','src','data-lazy-src'].map(key=>trackerURL(attr(tag,key),row)).find(Boolean);
   if(!image)continue;
   if(result[row.id]&&result[row.id].image!==image){ambiguous.add(row.id);continue;}
   result[row.id]={title:row.title,image,source:trackerPage,credit:trackerCredit,evidence:'exact-tracker-variant'};
 }
 for(const id of ambiguous)delete result[id];
 return result;
}

export function validImageReference(ref,row){
 if(!ref||!row||vehicleSlug(row.title)!==vehicleSlug(ref.title))return false;
 if(ref.evidence==='exact-tracker-variant')return ref.source===trackerPage&&ref.credit===trackerCredit&&trackerURL(ref.image,row)===ref.image;
 const kind=ref.evidence==='exact-gps-image'?'gps':ref.evidence==='exact-alcast-icon'?'alcast':null;
 if(kind){const cfg=extraSources[kind];return ref.source===cfg.page&&ref.credit===cfg.credit&&extraImage(ref.image,row,kind)===ref.image;}
 if(ref.evidence==='reviewed-in-game-name'){
   try{
     const p=new URL(ref.source),i=new URL(ref.image);
     const exact=vehicleSlug(row.maker+' '+row.title);
     return p.origin==='https://gta6.house'&&i.origin===p.origin&&!p.search&&!p.hash&&!i.search&&!i.hash&&p.pathname==='/library/vehicles/'+exact&&/^\/media\/gta6\/1200\/lib-[a-f0-9]{10}\.webp$/.test(i.pathname)&&ref.credit==='GamesRadar+ via GTA6.house · game imagery © Rockstar Games';
   }catch{return false;}
 }
 const page=safeURL(ref.source,'page'),img=safeURL(ref.image,'image');
 return Boolean(page&&img&&page.slug===img.slug);
}

export function collectImageReferences(html,rows){
 const result={},ambiguous=new Set();
 const titles=rows.map(row=>({row,key:vehicleSlug(row.title),full:vehicleSlug(row.maker+' '+row.title)}));
 for(const anchor of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a\s*>/gi)){
   const page=safeURL(attr(anchor[1],'href'),'page');
   if(!page)continue;
   const body=anchor[2],imgs=[...body.matchAll(/<img\b[^>]*>/gi)].map(x=>x[0]);
   // A missing-image card must never inherit an image from its neighbours.
   if(!imgs.length||/\bno image yet\b/i.test(plain(body)))continue;
   const label=vehicleSlug(plain(body)),altKeys=imgs.map(x=>vehicleSlug(attr(x,'alt'))).filter(Boolean);
   // Require the actual linked dossier slug to equal the normalized vehicle title.
   // Nonstandard aliases require a separately reviewed manifest entry.
   const candidates=titles.filter(({key,full})=>(key===page.slug||full===page.slug)&&(altKeys.includes(key)||altKeys.includes(full)||label===key||label.startsWith(key+'-')));
   if(candidates.length!==1)continue;
   const {row,key,full}=candidates[0];
   if(altKeys.some(alt=>alt!==key&&alt!==full&&titles.some(t=>t.key===alt||t.full===alt)))continue;
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
 const results=await Promise.allSettled([loadHtml(index),loadHtml(extraSources.gps.page),loadHtml(extraSources.alcast.page),loadHtml(trackerPage)]);
 const keys=['town','gps','alcast','tracker'],foundBy={};
 for(let i=0;i<results.length;i++){
   const r=results[i],key=keys[i];
   if(r.status==='fulfilled')foundBy[key]=key==='town'?collectImageReferences(r.value,rows):key==='tracker'?collectTrackerImages(r.value,rows):collectSupplementalImages(r.value,rows,key);
   else{foundBy[key]={};console.warn('Vehicle image source unavailable:',key,r.reason?.message);}
 }
 const found=foundBy.town;
 // Reviewed references win, then exact GTA Town references, then screenshots/icons.
 const merged={...foundBy.alcast,...foundBy.tracker,...foundBy.gps,...found,...previous};
 const active=new Set(rows.map(r=>r.id));
 for(const id of Object.keys(merged))if(!active.has(id))delete merged[id];
 const seen=new Set(),sorted={};
 for(const id of Object.keys(merged).sort()){
   const ref=merged[id],row=rows.find(r=>r.id===id);
   if(!row||vehicleSlug(row.title)!==vehicleSlug(ref.title)||seen.has(ref.image))continue;
   if(!validImageReference(ref,row))continue;
   seen.add(ref.image);sorted[id]=ref;
 }
 if(Object.keys(sorted).length<Object.keys(previous).length)throw Error('Image reference coverage would regress');
 const tmp=new URL('../src/data/vehicleImageRefs.tmp.json',import.meta.url);
 await writeFile(tmp,JSON.stringify(sorted,null,2)+'\n');await rename(tmp,manifestURL);
 const missing=rows.filter(row=>!sorted[row.id]).map(row=>({id:row.id,title:row.title,maker:row.maker,category:row.category}));
 const counts=Object.fromEntries(keys.map(key=>[key,Object.keys(foundBy[key]).length]));
 console.log(JSON.stringify({vehicles:rows.length,matchedFromIndex:Object.keys(found).length,sources:counts,imageReferences:Object.keys(sorted).length,missing:missing.length}));
 await writeFile(new URL('../src/data/vehicleImageMissing.json',import.meta.url),JSON.stringify(missing,null,2)+'\n');
 console.log('Missing vehicle IDs:',missing.map(row=>row.id).join(', '));
}
if(process.argv[1]&&pathToFileURL(process.argv[1]).href===import.meta.url)await syncImages();
