// Extract only factual tokens from the existing CC BY 4.0 GTA Town export.
// Do not copy the source prose, images or third-party table layouts.
const norm=v=>String(v??'').normalize('NFKC').trim().toLowerCase();
const known=v=>v!=null&&v!==''&&!/^not verified|^unknown$|^n\/a$|^—$/i.test(String(v));
export function progressFacts(raw,knownTitles){
 const attrs={};
 const summary=typeof raw?.summary==='string'?raw.summary.trim():'';
 const era=summary.match(/^((?:19|20)\d0s)\b/);
 if(era)attrs.Era=era[1];
 // Capture workshop names, not source sentences.
 const shop=summary.match(/, modded at ([^.!?]+)\.$/);
 if(shop)attrs['Specialist workshop']=shop[1];
 const variant=summary.match(/^One-off (.+) from the (.+) standout set, custom finish and parts\.$/);
 if(variant){
  const candidates=knownTitles.get(norm(variant[1]))||[];
  if(candidates.length===1&&norm(candidates[0])!==norm(raw.name||raw.title))attrs['Base model']=candidates[0];
 }
 return attrs;
}
export function indexTitles(rows){
 const index=new Map();
 for(const r of rows){const key=norm(r.title);if(!index.has(key))index.set(key,[]);index.get(key).push(r.title);}
 return index;
}
export function fillVehicleFacts(attributes,addition){
 const out={...attributes};
 for(const [k,v] of Object.entries(addition||{}))if(known(v)&&!known(out[k]))out[k]=v;
 return out;
}
