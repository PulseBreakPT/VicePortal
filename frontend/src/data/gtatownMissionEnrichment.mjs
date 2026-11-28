// Individual community references fill only empty fields on existing canonical dossiers.
const known=value=>value!==null&&value!==undefined&&value!==''&&!/^not verified/i.test(String(value));
const norm=value=>String(value??'').normalize('NFKC').trim().replace(/\s+/g,' ').toLowerCase();
const fieldKey=value=>norm(value).replace(/[^a-z0-9]/g,'');
const aliases={Chapter:['Chapter','Chapter name','Chapter number'],Protagonist:['Protagonist','Character','Playable character','Play as'],Rewards:['Reward','Rewards','Payout'], 'Story order':['Story order','Order','Mission order','Sequence']};
export function enrichMissionRecords(entries,rows){
 const candidates=new Map(),seen=new Set(),review=[],counts={matched:0,filled:0,conflicts:0};
 for(const row of rows){
  if(row.kind!=='Mission'||!/^https:\/\/gtatown\.com\/track\/missions\/[a-z0-9-]+$/.test(row.source)||!row.title||seen.has(row.source))throw Error('Invalid individual mission identity');
  seen.add(row.source);
  const title=norm(row.title);
  if(!candidates.has(title))candidates.set(title,[]);
  candidates.get(title).push(row);
 }
 const used=new Set();
 const result=entries.map(entry=>{
  if(entry.kind!=='Mission')return entry;
  const matching=candidates.get(norm(entry.title))||[];
  // An exact source URL and matching title are required; do not attach a different mission's data.
  const row=matching.find(x=>x.source===entry.source);
  if(!row)return entry;
  used.add(row.source);counts.matched++;
  const attributes={...entry.attributes};
  for(const [name,value] of Object.entries(row.attributes)){
   if(!known(value)||!Object.hasOwn(aliases,name))continue;
   const keys=new Set(aliases[name].map(fieldKey));
   const previous=Object.entries(attributes).filter(([k,v])=>keys.has(fieldKey(k))&&known(v));
   if(previous.length){if(!previous.some(([,v])=>norm(v)===norm(value)))counts.conflicts++;continue;}
   const vacant=Object.keys(attributes).find(k=>keys.has(fieldKey(k)))||name;
   attributes[vacant]=value;counts.filled++;
  }
  const sources=[...(entry.relatedSources||[]),{label:'GTA Town · individual mission reference',url:row.source}];
  const distinct=new Set();
  return {...entry,attributes,storyOrder:entry.storyOrder??(Number.isInteger(row.attributes['Story order'])?row.attributes['Story order']:undefined),relatedSources:sources.filter(x=>!distinct.has(x.url)&&distinct.add(x.url))};
 });
 for(const row of rows)if(!used.has(row.source))review.push({title:row.title,source:row.source,reason:'Exact canonical source not matched'});
 return {entries:result,counts,review};
}
