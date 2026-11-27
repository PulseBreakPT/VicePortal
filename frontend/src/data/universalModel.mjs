import {slug} from './creatorDataModel.mjs';
export const norm=s=>slug(s);
const missing=v=>v==null||v===''||/^not verified/i.test(String(v));
const placeholder='/images/creator-data-placeholder.svg';
const licenseURL=s=>s.license.startsWith('CC BY')?'https://creativecommons.org/licenses/by/4.0/':'https://github.com/'+s.repo+'/blob/'+s.sha+'/LICENSE';
function provenance(key,sources){
 const s=sources[key];if(s.mode!=='import')throw Error('Source not approved '+key);
 return {label:s.credit+' · '+s.license,url:'https://github.com/'+s.repo+'/blob/'+s.sha+'/'+s.path,license:s.license,licenseUrl:licenseURL(s),revision:s.sha};
}
function rec({id,title,kind,category,section,attributes,source,description,extra={}}){
 return {id,title,kind,category,path:'/'+section+'/'+id,collections:[section],status:'Community reference',creatorDataset:'universal',source:source.url,dataCredit:source.label,relatedSources:[source,{label:'License',url:source.licenseUrl}],image:placeholder,imageFallback:placeholder,placeholderImage:true,description,attributes,...extra};
}
function fill(original,addition){
 const attributes={...original.attributes},conflicts=[];
 for(const [k,v] of Object.entries(addition.attributes||{})){
  if(missing(v))continue;
  if(missing(attributes[k]))attributes[k]=v;
  else if(String(attributes[k])!==String(v))conflicts.push({id:original.id,field:k,retained:String(attributes[k]),candidate:String(v),source:addition.source});
 }
 const links=[...(original.relatedSources||[]),...(addition.relatedSources||[])];
 const seen=new Set();
 return {record:{...original,attributes,relatedSources:links.filter(x=>!seen.has(x.url)&&seen.add(x.url))},conflicts};
}
export function buildUniversal(snapshot,sources,existing){
 const result=[...existing],conflicts=[],review=[],counts={landmarks:0,places:0,stations:0,tracks:0,prices:0,merged:0,added:0};
 const ids=new Map(result.map((r,i)=>[r.id,i]));
 const nameIndex=new Map();
 function index(r,i){const key=r.kind+'|'+norm(r.title);if(!nameIndex.has(key))nameIndex.set(key,[]);nameIndex.get(key).push(i);}
 result.forEach(index);
 function apply(candidate,{allowNew=true,identityId,location=false}={}){
  const titleKey=candidate.kind+'|'+norm(candidate.title);
  let matches=identityId&&ids.has(identityId)?[ids.get(identityId)]:ids.has(candidate.id)?[ids.get(candidate.id)]:nameIndex.get(titleKey)||[];
  if(location&&matches.length){
   const area=candidate.attributes.Area;
   matches=matches.filter(i=>norm(result[i].attributes?.Area||result[i].attributes?.Region||result[i].attributes?.District)===norm(area)&&Boolean(area));
   if(!matches.length){review.push({id:candidate.id,title:candidate.title,reason:'Same name; area identity not proven'});return false;}
  }
  if(matches.length>1){review.push({id:candidate.id,title:candidate.title,reason:'Ambiguous identity'});return false;}
  if(matches.length===1){const i=matches[0],merged=fill(result[i],candidate);result[i]=merged.record;conflicts.push(...merged.conflicts);counts.merged++;return true;}
  if(!allowNew){review.push({id:candidate.id,title:candidate.title,reason:'Unresolved source alias'});return false;}
  ids.set(candidate.id,result.length);index(candidate,result.length);result.push(candidate);counts.added++;return true;
 }
 const gt=provenance('gtadb',sources),om=provenance('openmap',sources),radio=provenance('radio',sources),price=provenance('prices',sources);
 const landmarks=new Map(snapshot.landmarks.map(x=>[x.id,x]));
 const used=new Set();
 for(const x of snapshot.places){
  if(x.sameAs){review.push({id:x.id,title:x.name,reason:'Explicit upstream alias requires location target review'});continue;}
  const l=landmarks.get(x.id),same=l&&norm(l.name)===norm(x.name);
  const a={Area:x.area,'Place type':x.kind,'Open GTA 6 Map position':Number.isFinite(x.x)&&Number.isFinite(x.y)?x.x+', '+x.y:'','Coordinate system':'Open GTA 6 Map local units','Community confidence':x.confidence,'Service':x.service,'Real-life reference':x.realLife};
  if(same){used.add(l.id);a['GTADB landmark ID']=l.id;if(l.position)a['GTADB position (source units)']=l.position.join(', ');}
  const entry=rec({id:'universal-place-'+norm(x.id),title:x.name,kind:'Location',category:x.kind||'Place',section:'locations',attributes:a,source:om,description:'Community-mapped place. Coordinates belong to the named map source and are not official game coordinates.',extra:{relatedSources:same?[om,gt,{label:'CC BY 4.0 license',url:om.licenseUrl}]:[om,{label:'CC BY 4.0 license',url:om.licenseUrl}]}});
  if(apply(entry,{location:true}))counts.places++;
 }
 for(const x of snapshot.landmarks){
  if(used.has(x.id)){counts.landmarks++;continue;}
  const a={Area:x.area,'GTADB landmark ID':x.id,'GTADB position (source units)':x.position?.join(', ')||'','Real-life reference':x.realLife,'Place tags':x.tags.join(' · ')};
  if(apply(rec({id:'universal-landmark-'+norm(x.id),title:x.name,kind:'Location',category:x.tags[0]||'Landmark',section:'locations',attributes:a,source:gt,description:'Named community landmark; position is in GTADB source units.'}),{location:true}))counts.landmarks++;
 }
 const tracksByStation=new Map();
 for(const row of snapshot.tracks){
  const key=norm(row.station);if(!row.title||!row.artist||!key)continue;
  if(!tracksByStation.has(key))tracksByStation.set(key,new Map());
  tracksByStation.get(key).set(norm(row.title)+'|'+norm(row.artist),row.title+' — '+row.artist);
 }
 for(const x of snapshot.stations){
  if(!x.key||!x.name)continue;
  const songs=[...(tracksByStation.get(norm(x.name))?.values()||[])];
  const a={'Station type':x.kind,'Catalogued recordings':x.recordings,Tracklist:songs.length?songs.join('\n'):'Not verified in this atlas'};
  if(apply(rec({id:'universal-radio-'+norm(x.key),title:x.name,kind:'Radio station',category:x.kind||'Radio',section:'radio',attributes:a,source:radio,description:'Community radio metadata, not an official broadcast schedule. No audio or lyrics are hosted.'}))){counts.stations++;counts.tracks+=songs.length;}
 }
 for(const x of snapshot.prices.rows){
  if(!x.country_code||!x.platform||!x.currency)continue;
  const priceText=v=>Number.isFinite(v)?String(v)+' '+x.currency:'Not verified in this atlas';
  if(apply(rec({id:'universal-price-'+norm(x.country_code+'-'+x.platform),title:x.country+' · '+x.platform,kind:'Price reference',category:x.region||'Market',section:'game/prices',attributes:{Market:x.country,Platform:x.platform,Currency:x.currency,'Standard edition':priceText(x.standard_price),'Ultimate edition':priceText(x.ultimate_price),'Collected on':snapshot.prices.meta.version,'Tax treatment':x.tax_in_listed_price||'', 'Store reference':x.source_url||''},source:price,description:'Historical storefront price snapshot, not a live price quote.'})))counts.prices++;
 }
 return {entries:result,counts,conflicts,review};
}
