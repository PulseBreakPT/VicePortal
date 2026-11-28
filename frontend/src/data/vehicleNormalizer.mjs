export const vehicleSlug=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/['’]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const aliases={
  'truffade-thrax':'thrax','progen-emerus':'emerus','pegassi-tempesta':'tempesta','pfister-comet-s2':'comet-s2','bravado-gauntlet-hellfire':'gauntlet-hellfire','nagasaki-carbon-rs':'carbon-rs','95-grotti-cheetah':'cheetah-classic','grotti-cheetah-95':'cheetah-classic','grotti-cheetah-classic':'cheetah-classic'
};
export const STANDOUT_CLASSES=['ultra-luxe','street-racer','stock-car','fine-art','girlypop','race-bikes','leonida-man','retro','ripped-shredded','blinged-up','law-order','clout-chaser','driveshaft-famous','donks','hot-rods','all-terrain','chopper','throwback','lowriders','lowrider','demolition-derby','mudder','pedal-power','swamp-style','topper','patriot'];
export function vehicleGroup(category,type=''){
 const key=vehicleSlug(category).replace(/^standout-/,'');
 if(STANDOUT_CLASSES.includes(key)||/^standout/.test(vehicleSlug(category)))return 'standout';
 if(/super/.test(key))return 'super';
 if(/sport/.test(key))return 'sports';
 if(/muscle/.test(key))return 'muscle';
 if(/coupe|convertible/.test(key))return 'coupes';
 if(/sedan|wagon/.test(key))return 'sedans';
 if(/suv/.test(key))return 'suvs';
 if(/compact|hatchback/.test(key))return 'compacts';
 if(/off-road|offroad|pickup|atv/.test(key))return 'off-road';
 if(/bicycle|^cycles$/.test(vehicleSlug(type)))return 'bicycles';
 if(/motorbike|motorcycle|^bikes$|scooter/.test(key))return 'motorcycles';
 if(/bicycle|^cycles$/.test(key))return 'bicycles';
 if(/boat|watercraft|jet-ski/.test(key))return 'boats';
 if(/plane|helicopter|aircraft/.test(key))return 'aircraft';
 if(/service|emergency|police/.test(key))return 'service';
 if(/military/.test(key))return 'military';
 if(/truck|van|commercial|industrial|utility|transport/.test(key))return 'commercial';
 const t=vehicleSlug(type);
 if(t&&t!==key&&t!=='car'&&t!=='cars')return vehicleGroup(type);
 return 'other';
}
const fieldKey=s=>String(s).toLowerCase().replace(/[^a-z0-9]/g,'');
const field=(row,...keys)=>{
 const values=Object.fromEntries(Object.entries(row||{}).map(([k,v])=>[fieldKey(k),v]));
 for(const k of keys){const v=values[fieldKey(k)];if(v!==undefined&&v!==null&&v!=='')return v;}
};
const str=v=>typeof v==='string'||typeof v==='number'||typeof v==='boolean'?String(v).trim():'';
const score=v=>{if(v===undefined||v===null||v===''||typeof v==='boolean')return null;const n=Number(String(v).trim().replace(/\s*\/\s*10$/,''));return Number.isFinite(n)&&n>=0&&n<=10?n:null;};
const sourceURL=v=>{try{const u=new URL(String(v),'https://gtatown.com');return u.protocol==='https:'&&u.hostname==='gtatown.com'&&u.pathname.startsWith('/garage/vehicles')?u.href:'https://gtatown.com/garage/vehicles';}catch{return 'https://gtatown.com/garage/vehicles';}};
export function extractRows(input){
 if(Array.isArray(input))return input;
 for(const key of ['rows','vehicles','data','items','records','results']){
  if(Array.isArray(input?.[key]))return input[key].map(r=>Array.isArray(r)&&Array.isArray(input.columns)?Object.fromEntries(input.columns.map((c,i)=>[typeof c==='string'?c:c.name,r[i]])):r);
  if(input?.[key]&&typeof input[key]==='object'){try{return extractRows(input[key]);}catch{}}
 }
 throw new Error('Unsupported vehicle export shape');
}
export function normalizeVehicles(input){
 const rows=extractRows(input);const records=[];const seen=new Set();
 for(const row of rows){
  const title=str(field(row,'name','title','vehicle_name','display_name','vehicle'));
  const maker=str(field(row,'maker','manufacturer','make','brand'))||'Not verified in this atlas';
  const type=str(field(row,'type','vehicle_type','kind','type_name'));
  const category=str(field(row,'vehicle_class','class','category','class_name','class_label','collection','standout_set','className'))||type;
  if(!title||!category)throw new Error('Missing vehicle title or class in source export: '+JSON.stringify(row).slice(0,200));
  const canonical=vehicleSlug(title), prefixed=canonical.startsWith(vehicleSlug(maker)+'-')?canonical:vehicleSlug(maker+' '+title);
  const id='vehicle-'+(aliases[canonical]||aliases[prefixed]||canonical);
  if(seen.has(id))throw new Error('Duplicate vehicle ID: '+id);
  seen.add(id);
  const source=sourceURL(field(row,'gtatown_url','url','page','href','source_url','source')|| (field(row,'slug')?'/garage/vehicles/'+str(field(row,'slug')):'https://gtatown.com/garage/vehicles'));
  const stats=field(row,'stats','stat_bars','ratings')||{};
  const getScore=(...keys)=>score(field(row,...keys)??field(stats,...keys));
  const spoiler=/^(true|1|yes)$/i.test(str(field(row,'spoiler','is_spoiler','story_spoiler')));
  records.push({id,title,maker,category,type,group:vehicleGroup(category,type),source,spoiler,speed:getScore('speed','speed_rating','speed_score'),acceleration:getScore('acceleration','accel','acceleration_rating'),handling:getScore('handling','handling_rating'),offroad:getScore('offroad','off_road'),strength:getScore('strength'),price:str(field(row,'price','registration_cost','cost_to_register')),availability:str(field(row,'how_to_get','availability','acquisition')),seats:str(field(row,'seats','seat_count')),drive:str(field(row,'drive','drivetrain')),realLife:str(field(row,'real_life','real_life_reference','based_on')),topSpeedMph:(()=>{const v=field(row,'top_speed_mph');const n=Number(v);return v!==undefined&&Number.isFinite(n)&&n>0?n:null;})(),edition:str(field(row,'edition')),mode:str(field(row,'mode','game_mode'))});
 }
 return records;
}


// Raw exports sometimes omit classification. Never guess a model or overwrite
// a reviewed classification with an empty source field. Raw exports are retained separately.
export function adaptVehicleExport(input,previous=[]){
 const rows=extractRows(input);
 const old=new Map(normalizeVehicles(previous).map(r=>[r.id,r]));
 const counts={sourceClass:0,retainedClass:0,unknownClass:0};
 const adapted=rows.map((row,index)=>{
   const title=str(field(row,'name','title','vehicle_name','display_name','vehicle'));
   if(!title)throw Error('Missing vehicle title at row '+index+'; available fields: '+Object.keys(row||{}).join(', '));
   const rawClass=str(field(row,'vehicle_class','class','category','class_name','class_label','collection','standout_set','className'));
   const provisional={...row,vehicle_class:rawClass||'Not verified in this atlas'};
   const candidate=normalizeVehicles([provisional])[0];
   if(rawClass){counts.sourceClass++;return provisional;}
   const prior=old.get(candidate.id);
   const same=prior&&vehicleSlug(prior.title)===vehicleSlug(candidate.title)&&vehicleSlug(prior.maker)===vehicleSlug(candidate.maker);
   if(same&&prior.category!=='Not verified in this atlas'){counts.retainedClass++;return {...provisional,vehicle_class:prior.category};}
   counts.unknownClass++;return provisional;
 });
 const normalized=normalizeVehicles(adapted);
 return {rows:adapted,normalized,counts};
}
