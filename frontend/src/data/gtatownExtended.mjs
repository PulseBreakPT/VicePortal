// Source-specific factual metadata, not copies of GTA Town editorial prose.
// A source URL and source ID identify each style item; similar titles can be variants.
const slug=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/['’]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const norm=v=>String(v??'').normalize('NFKC').trim().replace(/\s+/g,' ').toLowerCase();
const hash=s=>{let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return (h>>>0).toString(36);};
const fashion={hat:'Hats',cap:'Caps','pair of glasses':'Glasses','pair of pants':'Pants',pants:'Pants',shorts:'Shorts',dress:'Dresses',skirt:'Skirts',jacket:'Jackets','pair of shoes':'Shoes','pair of boots':'Boots','pair of sneakers':'Sneakers','pair of sandals':'Sandals',watch:'Watches',necklace:'Necklaces',earrings:'Earrings',bracelet:'Bracelets',ring:'Rings',bag:'Bags','set outfit':'Outfits','jason outfit':'Outfits','lucia outfit':'Outfits'};
// Supplement memberships without changing previously published canonical paths.
const storeGroups={'Gun store':'gun-stores','Gas station':'gas-stations','Shoes':'footwear-stores','Yard sale':'markets'};
const clothingGroups={'pair of shorts':'shorts','piece of swimwear':'swimwear'};
function styleRecord(row){
 const type=row.id.split('/')[2],parts=row.meta.split(' · '),classification=parts.shift();
 const attributes={'Source classification':classification};
 const price=parts.find(x=>/^\$\d/.test(x));if(price)attributes['Source-listed price']=price;
 const other=parts.filter(x=>x!==price);if(other.length)attributes['Source-listed details']=other.join(' · ');
 if(type==='brands')return {kind:'Brand',title:row.title,category:'Fashion brands',section:'brands',membership:['archive/corporations/fashion-brands'],attributes,source:row.url,sourceId:row.id};
 if(type==='stores'){
  const group=storeGroups[classification];
  const rest=[];
  for(const field of other){
   const locations=field.match(/^(\d+) locations?$/);
   const stock=field.match(/^(\d+) pieces?$/);
   if(locations)attributes['Source-listed location count']=Number(locations[1]);
   else if(stock)attributes['Source-listed clothing count']=Number(stock[1]);
   else rest.push(field);
  }
  delete attributes['Source-listed details'];
  if(rest.length)attributes['Source-listed details']=rest.join(' · ');
  return {kind:'Store chain',title:row.title,category:'Clothing stores',section:'archive/stores-services/clothing-stores',membership:group?['archive/stores-services/'+group]:[],attributes,source:row.url,sourceId:row.id};
 }
 const group=type==='outfits'?'Outfits':fashion[norm(classification)];
 return {kind:type==='outfits'?'Outfit':'Clothing',title:row.title,category:group||classification,section:'archive/fashion'+(group?'/'+slug(group):''),membership:['guides/clothing',...(clothingGroups[classification]?['archive/fashion/'+clothingGroups[classification]]:[]),...(classification==='mask'?['archive/equipment/masks']:[])],attributes,source:row.url,sourceId:row.id};
}
function factRecord(row){
 const sections={'Guide':'guides','Completion requirement':'progress/100-percent','Collectible set':'archive/collections/'+slug(row.category),'Game edition':'game/editions','Phone app':'archive/digital-world/apps','Phone plugin':'archive/digital-world/apps'};
 return {...row,section:row.section||sections[row.kind],membership:row.membership||(row.kind==='Collectible set'?['collectibles']:row.kind==='Completion requirement'?['archive/progression/completion']:[])};
}
function worldRecord(row){
 const [category,...detail]=row.meta.split(' · ');
 if(category==='Phone app')return {kind:'Phone app',title:row.title,category:'Apps',section:'archive/digital-world/apps',membership:[],attributes:{'Source classification':category},source:row.url,sourceId:row.id};
 const group={'Vehicle maker':'Vehicle manufacturers','Gun maker':'Weapon manufacturers','Clothing brand':'Fashion brands'}[category];
 return {kind:'Brand',title:row.title,category:group||category,section:'brands',membership:group?['archive/corporations/'+slug(group)]:[],attributes:{'Source classification':category,...(detail.length?{'Source-listed details':detail.join(' · ')}:{})},source:row.url,sourceId:row.id};
}
export const styleSourceTotals=Object.freeze({clothes:1467,outfits:500,brands:51,stores:50});
export function styleSourceCoverage(style){
 const found=new Map(),types={clothes:0,outfits:0,brands:0,stores:0};
 for(const row of style){
  const type=row.id?.split('/')[2];
  if(!Object.hasOwn(types,type)||row.url!=='https://gtatown.com'+row.id)throw Error('Invalid style source identity '+row.id);
  if(found.has(row.id)){
   if(JSON.stringify(found.get(row.id))!==JSON.stringify(row))throw Error('Conflicting facts for source identity '+row.id);
   continue;
  }
  found.set(row.id,row);types[type]++;
 }
 return {source:'https://gtatown.com/style',sourceChecked:'2026-11-28',raw:style.length,unique:found.size,duplicateOccurrences:style.length-found.size,byType:Object.fromEntries(Object.entries(types).map(([type,count])=>[type,{found:count,sourceTotal:styleSourceTotals[type],remaining:count>styleSourceTotals[type]?null:styleSourceTotals[type]-count,sourceCountDiscrepancy:count>styleSourceTotals[type]?count-styleSourceTotals[type]:0}]))};
}
export function extendGtaTown(existing,style,world,facts){
 const entries=[...existing],ids=new Set(entries.map(e=>e.id)),paths=new Set(entries.map(e=>e.path));
 const indexed=new Map(),sourceIndexed=new Map(),seenSource=new Set();
 const identity=r=>r.kind+'|'+norm(r.title);
 function index(r,i){
  const k=identity(r);if(!indexed.has(k))indexed.set(k,[]);indexed.get(k).push(i);
  if(r.gtaTownEntityId)sourceIndexed.set(r.gtaTownEntityId,i);
 }
 entries.forEach(index);
 const review=[],counts={added:0,enriched:0,skipped:0};
 for(const row of [...facts.map(factRecord),...world.map(worldRecord),...style.map(styleRecord)]){
  if(!row.section||!row.title||!row.kind||!/^https:\/\/gtatown\.com\//.test(row.source))throw Error('Invalid GTA Town source record');
  if(row.sourceId&&seenSource.has(row.sourceId)){counts.skipped++;continue;}
  if(row.sourceId)seenSource.add(row.sourceId);
  let matches=indexed.get(identity(row))||[];
  if(row.sourceId&&sourceIndexed.has(row.sourceId))matches=[sourceIndexed.get(row.sourceId)];
  else if(['Clothing','Outfit','Store chain'].includes(row.kind)&&row.sourceId)matches=matches.filter(i=>!entries[i].gtaTownEntityId||entries[i].gtaTownEntityId===row.sourceId);
  if(matches.length>1){review.push({title:row.title,reason:'Ambiguous existing identity',source:row.source});continue;}
  const collections=[row.section,...(row.membership||[])];
  if(matches.length===1){
   const i=matches[0],old=entries[i],attributes={...old.attributes};
   for(const [k,v] of Object.entries(row.attributes||{}))if(attributes[k]==null||attributes[k]===''||/^not verified/i.test(String(attributes[k])))attributes[k]=v;
   const sources=[...(old.relatedSources||[]),{label:'GTA Town · community reference',url:row.source}];
   const used=new Set();
   entries[i]={...old,attributes,collections:[...new Set([...(old.collections||[]),...collections])],relatedSources:sources.filter(x=>!used.has(x.url)&&used.add(x.url)),...(row.sourceId&&!old.gtaTownEntityId?{gtaTownEntityId:row.sourceId}:{})};
   if(row.sourceId)sourceIndexed.set(row.sourceId,i);
   counts.enriched++;continue;
  }
  const id='gtatown-extra-'+slug(row.kind)+'-'+slug(row.title).slice(0,90)+'-'+hash(row.sourceId||identity(row));
  const path='/'+row.section+'/'+id;
  if(ids.has(id)||paths.has(path))throw Error('GTA Town identity collision '+id);
  const rec={id,path,title:row.title,kind:row.kind,category:row.category,collections:[...new Set(collections)],source:row.source,status:'Community reference',creatorDataset:'gtatown-extra',gtaTownEntityId:row.sourceId,relatedSources:[{label:'GTA Town · community reference',url:row.source}],description:'GTA VI catalogue entry documented by the linked community reference.',attributes:row.attributes,image:'/images/creator-data-placeholder.svg',imageFallback:'/images/creator-data-placeholder.svg',placeholderImage:true};
  ids.add(id);paths.add(path);index(rec,entries.length);entries.push(rec);counts.added++;
 }
 const styleCoverage=styleSourceCoverage(style);
 const sourceIds=[...new Set(style.map(row=>row.id))];
 const unresolved=sourceIds.filter(id=>!sourceIndexed.has(id));
 return {entries,counts,review,styleCoverage:{...styleCoverage,integratedSourceIds:sourceIds.length-unresolved.length,unresolvedSourceIds:unresolved}};
}
