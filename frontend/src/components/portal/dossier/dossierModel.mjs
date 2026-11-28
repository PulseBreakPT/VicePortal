// One display owner for each fact. Never mutate the underlying catalogue.
export const editorialFields = {
  Vehicle: ['Manufacturer','Vehicle Specifications','Design','Acquisition','Pricing','Spawn Locations','Customization','Special Features','Variants','Real-Life Inspiration','History & Evolution','Mission Appearances','Advantages & Drawbacks','Trivia'],
  Weapon: ['Variants','Gameplay','Advantages & Drawbacks','Mission Appearances','Trivia'],
  Character: ['Early Life','Criminal History','Story & Development','Personality','Physical Appearance','Relationships','Affiliations','Mission Appearances','Key Events','Fate','Trivia & Secrets','Memorable Quotes','Voice & Performance'],
};
export const editorialAliases = {
  Manufacturer:['Manufacturer'], 'Vehicle Specifications':['Class','Type','Seats','Drive'],
  Acquisition:['Availability'], Pricing:['Price','Resale price'],
  'Real-Life Inspiration':['Real life'], 'Voice & Performance':['Credited performer'],
  Affiliations:['Occupation / affiliation'], 'Mission Appearances':['First documented mission'],
};
export const isUnknown = value => value===null||value===undefined||String(value).trim()===''||/^(?:not verified|unknown|unverified|not (?:known|confirmed|available|documented)|pending|n\/a\b|tbd\b)/i.test(String(value).trim());
export const characterProfileKeys=['Role','Credit section'];
const weaponKeys=['Type','Manufacturer','Edition','Real life','Damage','Fire rate','Accuracy','Range','Clip size','Availability','Price','Attachments'];
const safeKeys=['Role','Credited performer','Credit section','Credited as','Evidence'];
const statAliases={speed:'Speed rating',acceleration:'Acceleration',handling:'Handling',offroad:'Off-road rating',strength:'Strength'};
const norm=v=>String(v??'').normalize('NFKC').trim().replace(/\s+/g,' ').replace(/[.!?]+$/,'').toLowerCase();
const urlKey=v=>String(v??'').replace(/\/(?=[?#]|$)/,'');
export function uniqueSources(item){
  const seen=new Set([urlKey(item.source)]);
  return (item.relatedSources||[]).filter(s=>{if(!s?.url||seen.has(urlKey(s.url)))return false;seen.add(urlKey(s.url));return true;});
}
// Reviewed overlaps in the six original Rockstar region summaries.
const regionOverlap={
 'vice-city':['Coastal city','Art Deco architecture','Nightlife'],
 'leonida-keys':['Island communities','Coastal roads'],
 'grassrivers':['Wetlands','Backcountry waterways','Airboat imagery'],
 'port-gellhorn':['Coastal town','Roadside motels','Older tourist infrastructure'],
 'ambrosia':['Industrial region','Factories','Biker culture'],
 'mount-kalaga':['National park','Wilderness'],
};
const equivalentTextKeys=[['Role','Original credit'],['Role','Credited as'],['Occupation / affiliation','Affiliations'],['First documented mission','Documented mission'],['Category','Type'],['Class','Type']];
function uniqueFacts(facts){
 const byKey=new Map(facts);const omitted=new Set();
 for(const [a,b] of equivalentTextKeys){if(byKey.has(a)&&byKey.has(b)&&typeof byKey.get(a)==='string'&&typeof byKey.get(b)==='string'&&norm(byKey.get(a))===norm(byKey.get(b)))omitted.add(b);}
 return facts.filter(([key])=>!omitted.has(key));
}
export function splitDossier(item,spoilers){
  const protectedStory=item.spoiler&&!spoilers;
  const facts=uniqueFacts(Object.entries(item.attributes||{}).filter(([key,v])=>!isUnknown(v)&&(!protectedStory||safeKeys.includes(key))));
  const bodyKeys=new Set();
  const performanceKeys=new Set();
  if(!protectedStory){
    if(['Character','Weapon','Vehicle'].includes(item.kind)){
      for(const title of editorialFields[item.kind]||[])for(const key of [title,...(editorialAliases[title]||[])])if(['string','number'].includes(typeof item.attributes?.[key]))bodyKeys.add(key);
      if(item.kind==='Character')characterProfileKeys.forEach(k=>bodyKeys.add(k));
      if(item.kind==='Weapon')weaponKeys.forEach(k=>bodyKeys.add(k));
      if(item.kind==='Vehicle')for(const [key,v] of Object.entries(item.vehicleStats||{}))if(Number.isFinite(v)&&v>=0&&v<=10&&statAliases[key]){bodyKeys.add(statAliases[key]);performanceKeys.add(statAliases[key]);}
    }else facts.forEach(([key])=>bodyKeys.add(key));
  }
  const bodyFacts=facts.filter(([k])=>bodyKeys.has(k)&&!performanceKeys.has(k));
  const metaFacts=facts.filter(([k])=>!bodyKeys.has(k));
  const factValues=new Set(facts.map(([,v])=>norm(v)));
  const headerText=item.subtitle||item.category||'';
  const parts=headerText.split(/\s+·\s+/).map(norm).filter(Boolean);
  const subtitle=protectedStory?'':parts.length&&parts.every(v=>factValues.has(v)||(item.kind==='Weapon'&&v===norm(item.category)))?'':norm(headerText)===norm(item.description)||norm(headerText)===norm(item.title)?'':headerText;
  const seen=new Set([norm(item.title),norm(item.status),norm(item.kind),norm(subtitle)].filter(Boolean));
  const sentenceSeen=new Set();
  const takeProse=v=>{
    if(typeof v!=='string'||!v.trim()||seen.has(norm(v))||factValues.has(norm(v)))return '';
    const sentences=v.trim().split(/(?<=[.!?])\s+(?=[A-Z“‘"'])/u);
    const fresh=sentences.filter(s=>{const key=norm(s);if(!key||sentenceSeen.has(key))return false;sentenceSeen.add(key);return true;});
    if(!fresh.length)return '';
    seen.add(norm(v));return fresh.length===sentences.length?v:fresh.join(' ');
  };
  const description=takeProse(item.description);
  const boilerplate=new Set([
    norm('Ratings are GTA Town’s reported 0–10 stat bars, not measured km/h, acceleration times or independently verified performance. Missing fields are left unverified.'),
    norm('Source: gtatown.com. Public vehicle data distributed under CC BY 4.0; adapted to the Vice Atlas dossier format.'),
  ]);
  const paragraphs=(item.paragraphs||[]).filter(p=>!(item.kind==='Vehicle'&&item.dataCredit==='GTA Town'&&boilerplate.has(norm(p)))).map(takeProse).filter(Boolean);
  const details=(item.details||[]).filter(v=>{const key=norm(v);if(item.kind==='Region'&&(regionOverlap[item.id]||[]).some(x=>norm(x)===key)&&norm(item.description).includes(key))return false;if(!key||seen.has(key)||factValues.has(key)||sentenceSeen.has(key)||(key===norm(item.category)&&item.kind==='Weapon')||(key==='gta town public data'&&item.dataCredit==='GTA Town'))return false;seen.add(key);return true;});
  return {subtitle,body:{...item,attributes:Object.fromEntries(bodyFacts),description,paragraphs,details,relatedSources:uniqueSources(item)},meta:{...item,attributes:Object.fromEntries(metaFacts)}};
}
