// Extract only factual tokens from the existing CC BY 4.0 GTA Town export.
// Do not copy the source prose, images or third-party table layouts.
const norm=v=>String(v??'').normalize('NFKC').trim().toLowerCase();
const known=v=>v!=null&&v!==''&&!/^not verified|^unknown$|^n\/a$|^—$/i.test(String(v));
export function progressFacts(raw,knownTitles){
 const attrs={};
 const summary=typeof raw?.summary==='string'?raw.summary.trim():'';
 const era=summary.match(/^((?:19|20)\d0s)\b/);
 if(era)attrs.Era=era[1];
 // The source's factual body-style descriptor is distinct from the Progress class.
 // Use a controlled vocabulary and never invent the menu's exact style labels.
 const description=summary.match(/^(?:19|20)\d0s (.+?)(?:, modded at [^.!?]+)?\.$/);
 const maker=String(raw?.manufacturer||raw?.maker||'').trim();
 if(description&&maker&&description[1].startsWith(maker+' ')){
  const body=description[1].slice(maker.length+1);
  const styles=['sports sedan','muscle coupe','muscle pickup','luxury muscle car','sports muscle car','muscle convertible','off-road SUV','station wagon','dirt bike','commercial van','motorhome','muscle sedan','compact coupe','convertible','sports coupe','luxury supercar','riverboat','luxury SUV','luxury coupe','luxury sports car','passenger van','jet','minivan','yacht','powerboat','speedboat','workboat','superbike','quad bike','sports SUV','water taxi','chopper','scooter','sports bike','luxury sedan','hypercar','jet ski'];
  if(styles.includes(body))attrs['Design style']=body;
 }
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
