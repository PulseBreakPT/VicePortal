// Vehicle Archive V3: supplementary evidence, never a replacement for the live feed.
// Exact source slug + name + manufacturer protects variants and bookmarks.
const known=v=>v!==null&&v!==undefined&&v!==''&&!/^not verified/i.test(String(v));
const ratingKeys=['speed','acceleration','handling','offroad','strength'];
const identity=s=>String(s??'').normalize('NFKC').trim().toLowerCase();
const areas={
 'Coupes':'Urban traffic and parking lots in Vice City.',
 'Muscle Cars':'Traffic and parking lots, including suburban areas.',
 'Off-Road Vehicles':'Rural roads, dirt tracks and off-road areas.',
 'Pickups':'Countryside, secondary roads, industrial areas and traffic.',
 'Sedans':'Urban traffic, residential neighborhoods and avenues.',
 'Sports Cars':'Ocean Beach, affluent districts and Vice City traffic; some models are rare.',
 'Supercars':'Ocean Beach and luxury districts; traffic spawns are not guaranteed.',
 'SUVs':'Urban traffic, residential neighborhoods and rural roads.',
 'Vans':'Traffic, commercial and industrial areas.',
 'Bikes':'Traffic, parking lots and leisure areas; dirt bikes on rural tracks.',
 'Watercraft':'Vice City port, marinas, docks and waterways; airboats in wetlands.',
 'Aircraft':'Vice City International Airport, airfields and marked helipads.',
 'Trucks':'Industrial zones, construction sites and freight roads.',
 'Utility Vehicles':'Industrial facilities, construction sites, airports and golf courses, depending on model.',
 'Emergency Vehicles':'Service and emergency vehicles; no individual fixed spawn confirmed.',
 'Military Vehicles':'Mile Zero Air Station, south of Key Lento; some appear at high wanted levels.',
 'Industrial Vehicles':'Construction sites, quarries, agricultural or industrial facilities.',
 'Transport Vehicles':'Airport, roads, terminals and transport services.'
};
export function enrichVehicle(row,archive){
 const e=archive.entries[row.sourceSlug];
 if(!e||identity(e.title)!==identity(row.title)||identity(e.manufacturer)!==identity(row.maker))return {row,attributes:{},sources:[],conflicts:[]};
 const enriched={...row};
 const conflicts=[];
 for(const k of ratingKeys){
  const v=e.ratings?.[k];
  if(!Number.isFinite(v)||v<0||v>10)continue;
  if(enriched[k]===null||enriched[k]===undefined)enriched[k]=v;
  else if(enriched[k]!==v)conflicts.push(k+': catalogue '+enriched[k]+'/10; archive '+v+'/10');
 }
 if(!known(enriched.seats)&&Number.isInteger(e.seats)&&e.seats>0)enriched.seats=String(e.seats);
 else if(known(enriched.seats)&&Number.isInteger(e.seats)&&Number(enriched.seats)!==e.seats)conflicts.push('seats: catalogue '+enriched.seats+'; archive '+e.seats);
 const attributes={};
 if(e.registration)attributes['Registration cost']=e.registration;
 if(e.resale)attributes['Observed resale value']=e.resale;
 if(e.registration?.includes(' / '))attributes['Pricing evidence']='Conflicting reported registration fees; confirm in game.';
 if(e.resale)attributes['Resale conditions']='Observed values; condition, buyer and progression may affect the offer.';
 if(e.location&&!known(enriched.availability))attributes['Spawn Locations']=e.location;
 if(e.note)attributes['Acquisition note']=e.note;
 if(!e.location&&e.evidence.some(x=>x.type==='base')&&areas[row.category])attributes['Suggested search area']=areas[row.category]+' (class-level guidance, not a confirmed spawn).';
 if(Number.isFinite(e.roadIndex))attributes['Road performance index']=e.roadIndex+' (source units)';
 if(Number.isFinite(e.terrainIndex))attributes['Off-road performance index']=e.terrainIndex+' (source units)';
 if(Number.isFinite(e.testedKmh))attributes['Top speed']=e.testedKmh.toFixed(2)+' km/h — community test reported by Hotwired; upgrades unknown, not independently verified.';
 const historical=archive.conflicts.filter(c=>c.slug===row.sourceSlug&&ratingKeys.includes(c.key)).map(c=>c.key+': earlier archive '+c.previous+'/10; later archive '+c.incoming+'/10');
 const all=[...new Set([...conflicts,...historical])];
 if(all.length)attributes['Evidence scope']='Published values disagree. Existing catalogue values retained where available. '+all.join('; ')+'.';
 const sources=e.sourceCodes.map(code=>archive.sources[code]).filter(Boolean).map(([label,url])=>({label,url}));
 return {row:enriched,attributes,sources,conflicts:all};
}
