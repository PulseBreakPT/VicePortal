// Public GTA Town creator exports; preserves all supplied fields, never guesses data.
import {adaptVehicleExport} from './vehicleNormalizer.mjs';
export const SOURCE='https://gtatown.com/creators/data';
export const LICENSE='CC BY 4.0';
export const DATASETS={
 vehicles:{count:560,kind:'Vehicle',section:'vehicles',page:'/garage/vehicles'},
 weapons:{count:202,kind:'Weapon',section:'weapons',page:'/garage/weapons'},
 cheats:{count:61,kind:'Cheat',section:'guides/cheats',page:'/guides/cheats'},
 trophies:{count:55,kind:'Trophy',section:'trophies',page:'/progress/trophies'},
 missions:{count:195,kind:'Mission',section:'missions',page:'/story/missions'},
 challenges:{count:80,kind:'Challenge',section:'challenges',page:'/progress/challenges'},
 collectibles:{count:4021,kind:'Collectible',section:'collectibles',page:'/progress/collectibles'},
 locations:{count:2889,kind:'Location',section:'locations',page:'/map/locations'}
};
const keyOf=s=>String(s??'').toLowerCase().replace(/[^a-z0-9]/g,'');
export const slug=s=>String(s??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/['’]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const obj=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
const text=x=>['string','number','boolean'].includes(typeof x)?String(x).trim():'';
export function field(row,...names){
 const map=new Map(Object.entries(row||{}).map(([k,v])=>[keyOf(k),v]));
 for(const name of names){const v=map.get(keyOf(name));if(v!==undefined&&v!==null&&v!=='')return v;}
}
const hash=s=>{let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return (h>>>0).toString(36);};
const columnsOf=x=>x?.columns||x?.headers||x?.fields||x?.schema?.fields;
function table(rows,columns){
 if(!rows.length)return [];
 if(rows.every(obj))return rows;
 if(rows.every(Array.isArray)&&Array.isArray(columns)&&columns.length){
  const names=columns.map(c=>typeof c==='string'?c:c?.name||c?.key||c?.id||c?.field);
  if(names.some(n=>typeof n!=='string'||!n)||new Set(names).size!==names.length)throw Error('Invalid column names');
  return rows.map(r=>{if(r.length!==names.length)throw Error('Row/column width mismatch');return Object.fromEntries(names.map((n,i)=>[n,r[i]]));});
 }
 return null;
}
export function extractExport(input,key){
 const found=[];
 function visit(value,columns,depth){
  if(depth>6||!value||typeof value!=='object')return;
  if(Array.isArray(value)){
   const rows=table(value,columns);if(rows&&rows.length)found.push(rows);
   return;
  }
  const own=columnsOf(value)||columns;
  for(const name of [key,'rows','data','items','records','results','entries','dataset','payload','export','content']){
   if(Object.prototype.hasOwnProperty.call(value,name))visit(value[name],own,depth+1);
  }
  // Support otherwise-named envelopes, but never turn arbitrary nested objects into rows.
  for(const [name,child] of Object.entries(value)){
   if([key,'rows','data','items','records','results','entries','dataset','payload','export','content','columns','headers','fields','schema'].includes(name))continue;
   if(obj(child))visit(child,own,depth+1);
  }
 }
 visit(input,null,0);
 const viable=found.filter(rows=>rows.every(r=>titleFor(r,key)));
 if(!viable.length)throw Error('Unsupported '+key+' JSON export shape');
 viable.sort((a,b)=>b.length-a.length);
 return viable[0];
}
export function parseCSV(raw){
 const s=String(raw).replace(/^\uFEFF/,'');
 if(/^\s*</.test(s))throw Error('HTML instead of CSV');
 const rows=[];let line=[],cell='',quoted=false;
 for(let i=0;i<s.length;i++){
  const c=s[i];
  if(quoted){if(c==='"'&&s[i+1]==='"'){cell+='"';i++;}else if(c==='"')quoted=false;else cell+=c;continue;}
  if(c==='"'&&cell===''){quoted=true;continue;}
  if(c===','){line.push(cell);cell='';continue;}
  if(c==='\r'||c==='\n'){if(c==='\r'&&s[i+1]==='\n')i++;line.push(cell);if(line.some(v=>v!==''))rows.push(line);line=[];cell='';continue;}
  cell+=c;
 }
 if(quoted)throw Error('Unclosed CSV quote');
 if(cell||line.length){line.push(cell);rows.push(line);}
 const headers=rows.shift()?.map(x=>x.trim());
 if(!headers||headers.length<2||headers.some(x=>!x)||new Set(headers).size!==headers.length)throw Error('Invalid CSV headers');
 return table(rows,headers);
}
export function titleFor(row,key){
 const name=text(field(row,'name','title','display_name','display_title','label',key.slice(0,-1),key==='weapons'?'weapon_name':key==='vehicles'?'vehicle_name':'entry_name','mission_name','cheat_name','trophy_name','challenge_name','location_name','pickup_name','spot_name','collectible_name','effect'));
 const set=text(field(row,'set','set_name','collection','collection_name','collectible_set','type','category'));
 const number=text(field(row,'number','pin_number','index','position','ordinal'));
 if(key==='collectibles'&&!name&&set)return set+(number?' #'+number:'');
 return name;
}
export const isSpoiler=row=>/^(true|1|yes|y|spoiler|hidden)$/i.test(text(field(row,'spoiler','is_spoiler','story_spoiler','spoiler_flag')));
export const hideSpoiler=(item,enabled)=>Boolean(item?.spoiler&&!enabled&&(item.kind==='Vehicle'||item.creatorDataset));
function sourceFor(row,key){
 const raw=text(field(row,'gtatown_url','url','page_url','source_url','href','link','page','source','permalink'));
 try{const u=new URL(raw||SOURCE,SOURCE);if(u.origin==='https://gtatown.com'&&!u.username&&!u.password&&u.pathname!=='/')return u.href;}catch{}
 return SOURCE;
}
const scalar=v=>v===undefined||v===null||v===''?'':Array.isArray(v)?v.map(x=>typeof x==='object'?JSON.stringify(x):String(x)).join(' · '):obj(v)?JSON.stringify(v):String(v);
const label=k=>String(k).replace(/[_-]+/g,' ').replace(/([a-z])([A-Z])/g,'$1 $2').replace(/^\w/,c=>c.toUpperCase());
const groupWeapon=category=>{
 const c=slug(category);
 if(/handgun|pistol|revolver/.test(c))return 'handguns';
 if(/assault|carbine/.test(c))return 'assault-rifles';
 if(/shotgun/.test(c))return 'shotguns';
 if(/submachine|^smg|machine-pistol/.test(c))return 'smgs';
 if(/sniper|marksman/.test(c))return 'snipers';
 if(/machine-gun|^lmg|heavy|launcher/.test(c))return 'heavy';
 if(/melee|knife|unarmed/.test(c))return 'melee';
 if(/throw|explosive|grenade/.test(c))return 'throwables';
 return 'other';
};
function missionGroup(row){
 const type=slug(field(row,'type','mission_type','category','kind','mission_category'));
 if(/random|encounter/.test(type))return 'missions/random-events';
 if(/side|optional|stranger/.test(type))return 'missions/side';
 if(/main|story|chapter/.test(type)||field(row,'chapter','chapter_number'))return 'missions/main';
 return 'missions';
}
export function normalizeDataset(rows,key){
 const spec=DATASETS[key];if(!spec||!Array.isArray(rows))throw Error('Unknown dataset');
 const seen=new Set();
 return rows.map((row,index)=>{
   if(!obj(row))throw Error('Invalid row '+index+' in '+key);
   const title=titleFor(row,key);if(!title)throw Error('Missing title at '+key+' row '+index+'; fields '+Object.keys(row).join(','));
   const category=text(field(row,'class','weapon_class','category','type','mission_type','set','set_name','collection','grade','area','region'))||spec.kind;
   const source=sourceFor(row,key);
   const sourceId=text(field(row,'id','slug','key','pin_id','location_id','uid','identifier'));
   const coords=[field(row,'x','map_x','longitude','lng','lon'),field(row,'y','map_y','latitude','lat'),field(row,'z','map_z')];
   const identity=[sourceId||slug(title),category,text(field(row,'area','region','chapter','set','set_name')),text(field(row,'number','pin_number','ordinal','order')), ...coords.map(text)].join('|');
   const id=key==='weapons'?'weapon-'+slug(title):'gtatown-'+key+'-'+(slug(title).slice(0,64)||'entry')+'-'+hash(identity);
   if(seen.has(id))throw Error('Duplicate identity '+id+' in '+key);seen.add(id);
   const attrs={};
   for(const [name,v] of Object.entries(row)){const val=scalar(v);if(val!=='')attrs[label(name)]=val;}
   if(key==='weapons'){
    attrs.Type=category;
    for(const [name,aliases] of Object.entries({Damage:['damage','damage_rating'],Price:['price','cost'],Availability:['availability','how_to_get','unlock'], 'Fire rate':['fire_rate','firerate'],Range:['range'], 'Clip size':['clip','clip_size','magazine','magazine_size']})){
     attrs[name]=scalar(field(row,...aliases))||'Not verified in this atlas';
    }
   }
   const section=key==='weapons'?'weapons/'+groupWeapon(category):key==='missions'?missionGroup(row):spec.section;
   const order=field(row,'order','mission_order','sequence','story_order');
   const storyOrder=key==='missions'&&order!==undefined&&/^\d+$/.test(text(order))?Number(order):undefined;
   const collections=[section];
   if(key==='cheats'){
     if(field(row,'ps5','playstation','playstation_input','ps5_input','ps_buttons','ps5_buttons'))collections.push('guides/cheats/playstation');
     if(field(row,'xbox','xbox_input','xbox_buttons'))collections.push('guides/cheats/xbox');
     if(field(row,'pc','pc_input','pc_code'))collections.push('guides/cheats/pc');
   }
   return {id,title,kind:spec.kind,category,source,collections,path:'/'+spec.section+'/'+id,status:'Community reference',creatorDataset:key,dataCredit:'GTA Town',spoiler:isSpoiler(row),storyOrder,image:'/images/creator-data-placeholder.svg',imageFallback:'/images/creator-data-placeholder.svg',placeholderImage:true,description:title+' is listed in the GTA Town public '+key+' dataset. Details below are reproduced as community data; unknown fields are not inferred.',attributes:attrs,details:[category],relatedSources:[{label:'GTA Town creator data · CC BY 4.0',url:SOURCE}]};
 });
}
export function validateDataset(rows,key,minimum=DATASETS[key].count){
 if(!Array.isArray(rows)||rows.length<minimum)throw Error(key+': expected at least '+minimum+' rows, got '+(rows?.length??0));
 if(key==='vehicles')adaptVehicleExport(rows);
 else normalizeDataset(rows,key);
 return rows;
}
export function mergeWeapons(existing,imported){
 const byTitle=new Map(existing.map(item=>[slug(item.title),item]));
 const consumed=new Set();
 const result=imported.map(item=>{
  const old=byTitle.get(slug(item.title));if(!old)return item;
  consumed.add(old.id);
  return {...item,id:old.id,path:old.path,image:old.image,imageFallback:old.imageFallback,placeholderImage:old.placeholderImage||false,imageSource:old.imageSource,attributes:{...old.attributes,...item.attributes}};
 });
 return [...result,...existing.filter(x=>!consumed.has(x.id))];
}
