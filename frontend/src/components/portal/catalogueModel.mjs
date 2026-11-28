// Pure catalogue presentation logic; source data and routes are never rewritten.
import {hideSpoiler} from '../../data/creatorDataModel.mjs';
export const PAGE_SIZE=24;
export const initialFilters={query:'',kind:'All',sort:'featured',maker:'All',vehicleClass:'All',coverage:'all',group:'All',view:'grid',grouped:true};
const norm=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const compareText=(a,b)=>String(a).localeCompare(String(b),'en',{numeric:true,sensitivity:'base'});
export const visibleItems=(items,spoilers)=>items.filter(e=>!hideSpoiler(e,spoilers));
export function layoutFor(section){
 const id=typeof section==='string'?section:section?.id||'';
 if(/^(vehicles|garage)(\/|$)/.test(id))return 'vehicles';
 if(/^weapons(\/|$)/.test(id))return 'weapons';
 if(/^characters(\/|$)/.test(id))return 'characters';
 if(/^(regions|locations|explore|activities|properties|animals)(\/|$)/.test(id))return 'world';
 if(/^missions(\/|$)/.test(id)||id==='story/timeline')return 'missions';
 if(id==='radio')return 'radio';
 if(/^(screenshots|videos|media|artwork|wallpapers|covers)(\/|$)/.test(id))return 'media';
 if(/^(guides|mechanics|news|game)(\/|$)/.test(id))return 'editorial';
 return 'general';
}
export function groupFor(item,layout){
 if(item.kind==='Vehicle'){
   const subgroup=item.collections?.find(x=>x.startsWith('vehicles/'))?.split('/')[1];
   if(subgroup==='standout')return 'Standout collection';
   const labels={super:'Supercars',sports:'Sports cars',muscle:'Muscle cars',coupes:'Coupes & convertibles',sedans:'Sedans & wagons',suvs:'SUVs',compacts:'Compacts',commercial:'Commercial & utility',military:'Military vehicles',bicycles:'Bicycles',motorcycles:'Motorcycles','off-road':'Off-road',boats:'Boats',aircraft:'Aircraft',service:'Service & emergency',other:'Other vehicles',customisation:'Customisation'};
   return labels[subgroup]||item.category||'Vehicles';
 }
 if(item.kind==='Character'){
   if(item.category==='Protagonist')return 'Protagonists';
   const cats=item.collections||[];
   if(cats.includes('characters/side-contacts'))return 'Side contacts';
   if(cats.includes('characters/supporting'))return 'Supporting characters';
   if(cats.includes('characters/encounters'))return 'Additional encounters';
   if(cats.includes('characters/media-radio'))return 'Radio & podcasts';
   if(cats.includes('characters/media-tv'))return 'Television & news';
   if(cats.includes('characters/media-games'))return 'In-world games';
   return item.category||'Characters';
 }
 if(layout==='missions'){
   const cats=item.collections||[];
   if(cats.includes('missions/main'))return 'Main story';
   if(cats.includes('missions/side'))return 'Side missions';
   if(cats.includes('missions/random-events'))return 'Random events & encounters';
 }
 if(layout==='media')return item.kind||'Media';
 if(layout==='radio')return item.category||'Radio stations';
 return item.category||item.kind||'Other entries';
}
const order=['Protagonists','Supporting characters','Side contacts','Additional encounters','Radio & podcasts','Television & news','In-world games','Supercars','Sports cars','Muscle cars','Coupes & convertibles','Sedans & wagons','SUVs','Compacts','Motorcycles','Off-road','Bicycles','Boats','Aircraft','Commercial & utility','Service & emergency','Military vehicles','Standout collection','Other vehicles','Handguns','Assault rifles','Shotguns','Melee','Throwables','Main story','Side missions','Random events & encounters'];
const rank=x=>order.includes(x)?order.indexOf(x):order.length;
export function filterItems(items,filters,layout){
 const q=norm(filters.query);
 const found=items.filter(e=>{
  const a=e.attributes||{};
  if(filters.kind!=='All'&&e.kind!==filters.kind)return false;
  if(filters.maker!=='All'&&a.Manufacturer!==filters.maker)return false;
  if(filters.vehicleClass!=='All'&&e.category!==filters.vehicleClass)return false;
  if(filters.group!=='All'&&groupFor(e,layout)!==filters.group)return false;
  if(filters.coverage==='portrait'&&e.placeholderImage)return false;
  if(filters.coverage==='context'&&(!e.placeholderImage||!e.contextImage))return false;
  if(filters.coverage==='missing'&&(!e.placeholderImage||e.contextImage))return false;
  if(filters.coverage==='sourced'&&e.placeholderImage)return false;
  if(filters.coverage==='placeholder'&&!e.placeholderImage)return false;
  const hay=norm([e.title,e.category,e.subtitle,e.kind,a.Manufacturer,a['Credited performer'],a['Credited as'],a.Programme,a['Original credit'],a['Media credits'],groupFor(e,layout)].filter(Boolean).join(' '));
  return q.split(/\s+/).every(word=>hay.includes(word));
 });
 if(filters.sort==='az'||filters.sort==='za')found.sort((a,b)=>compareText(a.title,b.title)*(filters.sort==='az'?1:-1));
 if(['speed','acceleration','handling'].includes(filters.sort))found.sort((a,b)=>(b.vehicleStats?.[filters.sort]??-1)-(a.vehicleStats?.[filters.sort]??-1)||compareText(a.title,b.title));
 // Chronology is used only when both records have an explicit, source-backed sequence.
 if(layout==='missions'&&filters.sort==='featured')found.sort((a,b)=>(Number.isFinite(a.storyOrder)?a.storyOrder:Infinity)-(Number.isFinite(b.storyOrder)?b.storyOrder:Infinity)||0);
 return found;
}
export function makeGroups(items,layout,grouped=true){
 if(!grouped)return items.length?[{label:'All entries',items}]:[];
 const groups=new Map();
 for(const item of items){const label=groupFor(item,layout);if(!groups.has(label))groups.set(label,[]);groups.get(label).push(item);}
 return [...groups].map(([label,items])=>({label,items})).sort((a,b)=>rank(a.label)-rank(b.label)||compareText(a.label,b.label));
}
export function takeGroups(groups,limit){
 let remaining=Math.max(0,limit);
 return groups.flatMap(({label,items})=>{if(!remaining)return [];const shown=items.slice(0,remaining);remaining-=shown.length;return [{label,total:items.length,items:shown}];});
}

// Strip redundant display labels, preserving distinct classifications and descriptions.
const labelKey=v=>norm(v).replace(/[^a-z0-9 ]/g,'').replace(/\s+/g,' ').replace(/s$/,'');
export function cardSubtitle(item,groupLabel='',spoilers=false){
 if(item.spoiler&&!spoilers)return 'Story details are hidden.';
 const text=item.subtitle||item.category||item.description||'';
 const redundant=new Set([item.title,item.kind,item.status,groupLabel].filter(Boolean).map(labelKey));
 return text.split(/\s+·\s+/).filter(part=>!redundant.has(labelKey(part))).join(' · ');
}
