// Independent open-data layer. Existing canonical IDs and values are authoritative.
export const sources={
 atlas:{label:'GTA Atlas',base:'https://atlasgta.com/data/',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'},
 gang:{label:'GTA6Gang',base:'https://gta6gang.com/data/',license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/'}
};
export const specs={
 atlas:{animals:57,characters:46,cheats:61,collectibles:39,completion:35,interiors:37,locations:1005,missions:88,properties:19,trophies:55,vehicles:324,weapons:198},
 gang:{vehicles:231,weapons:149,songs:832,stores:377,animals:255,ledger:188}
};
const norm=x=>String(x??'').normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const missing=x=>x==null||x===''||/^not verified|^unknown$|^n\/a$|^—$/i.test(String(x));
const value=x=>Array.isArray(x)?x.filter(y=>['string','number'].includes(typeof y)).join(' · '):typeof x==='boolean'?(x?'Yes':'No'):['string','number'].includes(typeof x)?x:'';
const label=x=>String(x||'').replace(/-/g,' ');
const price=x=>typeof x==='number'&&Number.isFinite(x)?'$'+x:'';
const getURL=(provider,key)=>sources[provider].base+key+(provider==='gang'&&key!=='ledger'?'.csv':'.json');
const mappings={
 animals:['Animal',{class:'Animal class',habitat_regions:'Habitat regions',where_seen:'Documented habitat',can_hunt:'Huntable',can_fish:'Fishable',can_photograph:'Study / photograph',group:'Source classification'}],
 characters:['Character',{region:'Region',affiliations:'Affiliations',first_seen:'First documented appearance'}],
 cheats:['Cheat',{unlock:'Unlock requirement',sequence:'Button sequence'}],
 collectibles:['Collectible set',{set_total:'Set total',required_count:'Required count',counts_for_completion:'Counts for completion'}],
 completion:['Completion requirement',{weight_percent:'Weight percent',target_count:'Target count',target_total:'Target total',requires_everything:'Requires everything'}],
 locations:['Location',{enterable:'Enterable',services:'Services',activities:'Activities'}],
 interiors:['Location',{interior_type:'Interior type',chain:'Chain',can_do:'Available services'}],
 properties:['Location',{property_type:'Property type',vehicle_capacity:'Vehicle capacity',resellable:'Resellable'}],
 missions:['Mission',{order:'Order',strand:'Chapter',replayable:'Replayable',length_minutes:'Length (minutes)'}],
 trophies:['Trophy',{tier:'Grade',missable:'Missable'}],
 vehicles:['Vehicle',{manufacturer:'Manufacturer',make:'Manufacturer',model:'Model',model_year:'Model year',real_counterpart:'Real-life reference',base_model:'Base model',seats:'Seats',storable:'Storable',customisable:'Customisable',era:'Era'}],
 weapons:['Weapon',{manufacturer:'Manufacturer',brand:'Manufacturer',real_counterpart:'Real-life reference',base_model:'Base model',variant_of:'Base model',caliber:'Caliber',fire_style:'Fire mode',ammo:'Ammo type',ammo_type:'Ammo type'}],
 songs:['Song',{on_gta_vi_the_album:'On GTA VI: The Album',unreleased_per_consequence:'Previously unreleased (Consequence)'}],
 stores:['Location',{group:'Service category',kind:'Service type'}]
};
export function adaptRow(provider,key,r){
 const title=r.name||r.title||r.claim||'';
 const [kind,map]=mappings[key]||['Fact',{}];
 const id=String(r.slug||r.id||'');
 if(!id||!title)throw Error('Missing source identity: '+provider+'/'+key);
 const attributes={};
 for(const [from,to] of Object.entries(map)){const v=value(r[from]);if(!missing(v))attributes[to]=v;}
 if(provider==='atlas'&&['vehicles','weapons','properties'].includes(key)){
  if(price(r.price))attributes.Price=price(r.price);
  if(price(r.register_cost))attributes['Registration cost']=price(r.register_cost);
  if(price(r.sell_value))attributes['Sell value']=price(r.sell_value);
 }
 // No prose, images, coordinates, mission objectives or actor guesses in the public layer.
 // Preserve the upstream confidence without treating it as Rockstar confirmation.
 const area=r.neighbourhood||r.district||r.parent_slug||r.region||'';
 return {id,title,kind,area:label(area),county:r.county||'',artist:r.artist||'',station:r.station||'',confidence:r.confidence||r.status||'Source listed',checked:r.last_verified||r.last_checked||'',attributes,
  refs:[...(Array.isArray(r.sources)?r.sources:[]),r.source_url,r.unlock_source,r.sequence_source].filter(u=>typeof u==='string'&&/^https:\/\//.test(u)).slice(0,20),
  spoiler:r.spoiler_safe===false||r.hidden===true||r.spoiler===true||key==='ledger'};
}
const identity=(kind,title,artist='')=>kind+'|'+norm(title)+(kind==='Song'?'|'+norm(artist):'');
const aliases={manufacturer:['maker','make','brand'],price:['cost','purchase price'], 'real life reference':['real counterpart','real life','inspiration','based on'], 'ammo type':['ammo','ammunition'], 'fire mode':['fire style','firing mode'],grade:['tier'], 'source classification':['classification','group'], 'button sequence':['sequence','ps5','playstation input','ps5 input'], 'unlock requirement':['unlock','requirement'], 'weight percent':['weight','weight percentage'], 'set total':['total','source total'], 'registration cost':['register cost']};
function attrKey(attrs,field){
 const n=norm(field),keys=Object.keys(attrs),found=keys.filter(k=>norm(k)===n||(aliases[n]||[]).includes(norm(k)));
 return found.find(k=>!missing(attrs[k]))||found[0]||field;
}
// Reviewed property aliases use exact GTA Town map IDs; never merge a generic building with its purchasable garage.
const propertyPins={
 'mitchell-auto-center':'garage-north-gellhorn-hills-ogarage002',
 'persistence-road-garage':'garage-belville-ogarage005',
 '7th-avenue-garage':'garage-salton-ogarage003',
 'store-n-bolt':'garage-ambrosia-ogarage009',
 'wyatt-motors':'garage-ambrosia-ogarage006',
 'vela-rota-driver-garage':'garage-capri-ogarage004',
 'bonita-court-garage':'garage-washington-island-ogarage007',
 'atlantic-court-garage':'garage-ocean-beach-east-ogarage008',
 'port-gellhorn-station-garage':'garage-port-gellhorn-ogarage010',
 'thompson-court-garage':'garage-ocean-beach-west-ogarage011',
 'ne-15th-street-garage':'garage-stockyard-ogarage012',
 'pegassi-residences-garage':'garage-tequesta-retreat-ogarage013',
 'gta-plus-crosstown-garage':'garage-crosstown-ogarage019',
 'paradise-garage':'garage-northern-grassrivers-ogarage001',
 'shore-court-garage':'garage-ocean-beach-east-ogarage014',
 'starlet-motel-safehouse':'safehouse-north-gellhorn-hills-osafehouse003',
 'bayside-safehouse':'safehouse-crosstown-osafehouse002'
};
const compact=v=>norm(v).replace(/ /g,'');
const fullName=e=>norm(e.title);
const placeName=e=>norm(String(e.title||'').split(' · ').slice(-1)[0]);
const maker=e=>norm(e.attributes?.Manufacturer||e.attributes?.Maker||e.attributes?.Brand);
function modelName(title,brand){
 const n=norm(title);return brand&&n.startsWith(brand+' ')?n.slice(brand.length+1):n;
}
function sourcePin(e,pin){
 return [e.source,...(e.relatedSources||[]).map(x=>x.url)].includes('https://gtatown.com/locations/'+pin);
}
function geoCompatible(e,row){
 const a=norm(row.area),c=norm(row.county),x=e.attributes||{};
 const areas=[x.Area,x.District,x.Region,x.Neighbourhood,x.Neighborhood].filter(Boolean).map(norm);
 if(c&&x.County&&norm(x.County)!==c)return false;
 return Boolean(a&&areas.includes(a));
}
function reconcile(out,row,dataset,exact){
 if(dataset==='atlas/properties'){
  const pin=propertyPins[row.id]||propertyPins[Object.keys(propertyPins).find(k=>compact(k)===compact(row.id))];
  if(!pin)return {matches:[],method:'unresolved property'};
  return {matches:out.flatMap((e,i)=>e.kind==='Location'&&sourcePin(e,pin)?[i]:[]),method:'reviewed property pin'};
 }
 if(row.kind==='Location'){
  const matches=out.flatMap((e,i)=>e.kind==='Location'&&geoCompatible(e,row)&&(fullName(e)===norm(row.title)||placeName(e)===norm(row.title))?[i]:[]);
  return {matches,method:'location name + geography'};
 }
 if(exact.length===1)return {matches:exact,method:'exact title'};
 if(exact.length>1)return {matches:exact,method:'ambiguous exact title'};
 if(['Vehicle','Weapon'].includes(row.kind)){
  const brand=maker(row),model=modelName(row.title,brand);
  if(!brand||!model)return {matches:[],method:'manufacturer unavailable'};
  const matches=out.flatMap((e,i)=>e.kind===row.kind&&maker(e)===brand&&modelName(e.title,brand)===model?[i]:[]);
  return {matches,method:'exact manufacturer + model'};
 }
 // Punctuation-only variants are safe only if they identify one canonical entity.
 if(['Animal','Character','Trophy','Collectible set','Completion requirement','Mission','Cheat'].includes(row.kind)){
  const matches=out.flatMap((e,i)=>e.kind===row.kind&&compact(e.title)===compact(row.title)?[i]:[]);
  return {matches,method:'punctuation-only variant'};
 }
 return {matches:[],method:'unresolved'};
}
export function mergeOpenData(entries,snapshot){
 const out=entries.slice(),index=new Map(),review=[],conflicts=[],counts={rows:0,matched:0,enriched:0,fields:0,unmatched:0,ambiguous:0,skipped:0,reconciled:0,propertiesMatched:0,propertiesEnriched:0},methods={};
 for(let i=0;i<out.length;i++){const e=out[i],k=identity(e.kind,e.title,e.attributes?.['Recording artist']||e.attributes?.Artist);if(!index.has(k))index.set(k,[]);index.get(k).push(i);}
 const seen=new Set(),changed=new Set();
 for(const [dataset,rows] of Object.entries(snapshot.datasets||{})){
  const [provider,key]=dataset.split('/');if(!sources[provider]||!Object.hasOwn(specs[provider],key)||!Array.isArray(rows))throw Error('Unknown open dataset '+dataset);
  for(const row of rows){
   const uid=dataset+'|'+row.id;if(seen.has(uid))throw Error('Duplicate open source identity '+uid);seen.add(uid);counts.rows++;
   if(row.kind==='Fact'||row.spoiler){counts.skipped++;review.push({dataset,id:row.id,title:row.title,reason:'Evidence only / spoiler-sensitive'});continue;}
   const exact=index.get(identity(row.kind,row.title,row.artist))||[];
   const {matches,method}=reconcile(out,row,dataset,exact);
   if(matches.length!==1){counts[matches.length?'ambiguous':'unmatched']++;review.push({dataset,id:row.id,title:row.title,reason:matches.length?'Ambiguous canonical identity':'No proven canonical match',method});continue;}
   counts.matched++;methods[method]=(methods[method]||0)+1;
   if(method!=='exact title')counts.reconciled++;
   if(dataset==='atlas/properties')counts.propertiesMatched++;
   const i=matches[0],old=out[i],attributes={...old.attributes};
   let filled=0;
   for(const [field,v] of Object.entries(row.attributes||{})){
    if(missing(v))continue;
    const k=attrKey(attributes,field);
    if(missing(attributes[k])){attributes[k]=v;filled++;}
    else if(norm(attributes[k])!==norm(v))conflicts.push({dataset,id:row.id,entryId:old.id,field:k,retained:attributes[k],candidate:v});
   }
   // Add attribution only when evidence supplied a new field. Never change identity, images or spoiler flags.
   if(!filled)continue;
   if(dataset==='atlas/properties')counts.propertiesEnriched++;
   const s=sources[provider],refs=[...(old.relatedSources||[]),{label:s.label+' · '+s.license+' · '+row.confidence,url:getURL(provider,key)},{label:s.label+' data licence',url:s.licenseUrl},...row.refs.filter(u=>/^https:\/\//.test(u)).map(url=>({label:s.label+' cited evidence',url}))];
   const collections=dataset==='atlas/properties'?[...new Set([...(old.collections||[]),'archive/real-estate',...(row.attributes['Property type']==='garage'?['archive/real-estate/garages']:row.attributes['Property type']==='safehouse'?['archive/real-estate/safehouses']:[])])]:old.collections;
   out[i]={...old,attributes,collections,relatedSources:[...new Map(refs.map(x=>[x.url,x])).values()]};
   changed.add(old.id);counts.fields+=filled;
  }
 }
 counts.enriched=changed.size;
 return {entries:out,counts,review,conflicts,methods};
}
