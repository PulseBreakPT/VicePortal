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
export function mergeOpenData(entries,snapshot){
 const out=entries.slice(),index=new Map(),review=[],conflicts=[],counts={rows:0,matched:0,enriched:0,fields:0,unmatched:0,ambiguous:0,skipped:0};
 for(let i=0;i<out.length;i++){const e=out[i],k=identity(e.kind,e.title,e.attributes?.['Recording artist']||e.attributes?.Artist);if(!index.has(k))index.set(k,[]);index.get(k).push(i);}
 const seen=new Set(),changed=new Set();
 for(const [dataset,rows] of Object.entries(snapshot.datasets||{})){
  const [provider,key]=dataset.split('/');if(!sources[provider]||!Object.hasOwn(specs[provider],key)||!Array.isArray(rows))throw Error('Unknown open dataset '+dataset);
  for(const row of rows){
   const uid=dataset+'|'+row.id;if(seen.has(uid))throw Error('Duplicate open source identity '+uid);seen.add(uid);counts.rows++;
   if(row.kind==='Fact'||row.spoiler){counts.skipped++;review.push({dataset,id:row.id,title:row.title,reason:'Evidence only / spoiler-sensitive'});continue;}
   let matches=index.get(identity(row.kind,row.title,row.artist))||[];
   if(row.kind==='Location'){
    const a=norm(row.area),c=norm(row.county);
    matches=matches.filter(i=>{const x=out[i].attributes||{},areas=[x.Area,x.District,x.Region,x.Neighbourhood,x.Neighborhood].filter(Boolean).map(norm);return a&&areas.includes(a)&&(!c||!x.County||norm(x.County)===c);});
   }
   if(matches.length!==1){counts[matches.length?'ambiguous':'unmatched']++;review.push({dataset,id:row.id,title:row.title,reason:matches.length?'Ambiguous canonical identity':'No exact canonical match'});continue;}
   counts.matched++;
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
   const s=sources[provider],refs=[...(old.relatedSources||[]),{label:s.label+' · '+s.license,url:getURL(provider,key)},{label:s.label+' data licence',url:s.licenseUrl}];
   out[i]={...old,attributes,relatedSources:[...new Map(refs.map(x=>[x.url,x])).values()]};
   changed.add(old.id);counts.fields+=filled;
  }
 }
 counts.enriched=changed.size;
 return {entries:out,counts,review,conflicts};
}
