// The single presentation contract for every dossier. Source records are immutable.
import {isUnknown,uniqueSources} from './dossierModel.mjs';
const key=v=>String(v??'').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const exact=v=>String(v??'').normalize('NFKC').trim().replace(/\s+/g,' ').replace(/[.!?]+$/,'').toLowerCase();
const valueText=v=>typeof v==='object'&&v!==null?JSON.stringify(v):String(v??'');
const slug=v=>key(v).replaceAll(' ','-');
const known=v=>!isUnknown(v)&&!(Array.isArray(v)&&!v.length)&&!(v&&typeof v==='object'&&!Object.keys(v).length);
const section=(title,keys,mode='facts')=>({title,keys:keys.split('|'),mode});
const S=section;
export const schemas={
 Character:[S('Character Profile','Role|Credit section|Age|Gender|Occupation|Occupation / affiliation|Nationality|Birthplace|Residence|Members'),S('Early Life','Early Life|Background|Family'),S('Criminal History','Criminal History'),S('Personality','Personality'),S('Physical Appearance','Physical Appearance|Appearance'),S('Relationships','Relationships|Partner|Family members'),S('Affiliations','Affiliations|Gang|Organization|Label'),S('Story & Development','Story & Development|Key Events|Story role'),S('Mission Appearances','Mission Appearances|First documented mission|Documented mission|Documented appearances'),S('Media Appearances','Programme|Documented media appearances|Media credits|Media category|Broadcast / production type|Station music format|Talk-radio station|Podcast availability|Medium'),S('Fate','Fate|Status in story','spoiler'),S('Voice & Performance','Voice & Performance|Credited performer|Credited as|Original credit|Voice actor'),S('Trivia & Secrets','Trivia & Secrets|Trivia|Memorable Quotes')],
 Vehicle:[S('Manufacturer','Manufacturer|Brand|Maker'),S('Vehicle Specifications','Class|Type|Vehicle Specifications|Seats|Drive|Transmission|Engine|Weight|Game mode'),S('Performance','Speed rating|Acceleration|Handling|Off-road rating|Strength|Top speed|Speed|Braking|Performance','performance'),S('Design','Design|Interior|Exterior'),S('Acquisition','Acquisition|Availability|How to get|Unlock|Spawn Locations|Location|GTA Town acquisition methods'),S('Pricing','Pricing|Price|Cost|Resale price'),S('Customization','Customization|Customisation|Modifications|Upgrades'),S('Special Features','Special Features|Features'),S('Variants','Variants|Edition'),S('Real-Life Inspiration','Real-Life Inspiration|Real life|Real-life reference'),S('History & Evolution','History & Evolution'),S('Mission Appearances','Mission Appearances|Documented mission'),S('Advantages & Drawbacks','Advantages & Drawbacks'),S('Trivia','Trivia')],
 Weapon:[S('Weapon Profile','Manufacturer|Brand|Type|Class|Category|Edition|Real life|Real-Life Inspiration|Weapon type|Firing mode'),S('Performance','Damage|Damage rating|Fire rate|Firerate|Accuracy|Handling|Range|Clip size|Clip|Magazine|Magazine size|Reload time|Performance','performance'),S('Acquisition','Availability|How to get|Unlock|Acquisition|Price|Cost|Location|Store inventory tier'),S('Customization','Attachments|Customization|Customisation|Upgrades'),S('Variants','Variants|Base weapon family'),S('Gameplay','Gameplay|Ammo|Ammunition'),S('Game Data','Technical damage (game data)|Technical capacity (game data)|In-game penetration parameter|In-game projectile speed parameter|In-game spread parameter|In-game recoil recovery parameter|In-game lock-on parameter|Reload animation multiplier|In-game weight class|In-game force on NPCs|In-game force on vehicles'),S('Advantages & Drawbacks','Advantages & Drawbacks'),S('Mission Appearances','Mission Appearances'),S('Trivia','Trivia')],
 Mission:[S('Mission Profile','Type|Category|Chapter|Order|Sequence|Story order|Mission order|Giver|Contact|Protagonist'),S('Requirements','Requirements|Prerequisites|Unlock|Availability|Required mission'),S('Objectives','Objectives|Objective|Tasks'),S('Walkthrough','Walkthrough|Steps|Guide|Instructions'),S('Locations','Location|Area|Region|District|Start location'),S('Rewards','Rewards|Reward|Payout|Money|XP'),S('Consequences','Consequences|Outcome|Fate','spoiler')],
 Region:[S('Geography','Area|Region|District|Category|Type|Geography|Climate'),S('Points of Interest','Points of Interest|Landmarks|Place tags'),S('Activities','Activities|Services'),S('Accessibility','Accessibility|Access|Transport')],
 Location:[S('Geography','Area|Region|District|City|Location|Place type|Type|Category'),S('Map Reference','X|Y|Z|Map x|Map y|Map z|Latitude|Longitude|Coordinates|Open GTA 6 Map position|GTADB position (source units)|Coordinate system|GTADB landmark ID'),S('Points of Interest','Place tags|Landmarks|Real-life reference'),S('Activities & Services','Activities|Service|Services|Features'),S('Accessibility','Accessibility|Access|Requirements')],
 Animal:[S('Species','Species|Type|Category|Scientific name'),S('Habitat','Habitat|Location|Region|Area'),S('Behavior','Behavior|Behaviour|Diet'),S('Interactions','Interactions|Gameplay|Activities')],
 Property:[S('Property Profile','Type|Category|Owner|Features'),S('Location','Location|Area|Region|District|Address'),S('Pricing','Price|Cost|Rent'),S('Acquisition','Acquisition|Availability|Requirements|Unlock')],
 'Radio station':[S('Station Profile','Genre|Station type|Type|Category|Frequency|Format|Hosts|Host|Catalogued recordings'),S('Tracklist','Tracklist|Tracks|Songs')],
 Business:[S('Company Profile','Company|Industry|Type|Category|Brand|Owner'),S('Services','Service|Services|Products|Features'),S('Locations','Location|Locations|Region|Area|Address')],
 Collectible:[S('Collection Profile','Set|Set name|Collection|Collectible set|Type|Category|Number|Pin number|Ordinal|Index'),S('Locations','Location|Area|Region|District|X|Y|Z|Coordinates|Latitude|Longitude|Map x|Map y'),S('Requirements','Requirements|Unlock|Availability'),S('Rewards','Rewards|Reward|Payout')],
 Trophy:[S('Achievement Profile','Grade|Type|Category|Platform|Rarity'),S('Requirements','Requirements|Requirement|Objective|Unlock|Condition|Description'),S('Rewards','Rewards|Reward|Points|Gamerscore|XP')],
 Challenge:[S('Challenge Profile','Type|Category|Tier|Level|Stage'),S('Requirements','Requirements|Requirement|Objective|Objectives|Condition|Target|Unlock'),S('Rewards','Rewards|Reward|Payout|XP')],
 Cheat:[S('Effect','Effect|Type|Category|Description'),S('Platform Inputs','PS5|PlayStation|PlayStation input|PS5 input|PS buttons|PS5 buttons|Xbox|Xbox input|Xbox buttons|PC|PC input|PC code|Code|Input'),S('Restrictions','Requirements|Restrictions|Availability|Warning')],
 'Price reference':[S('Market','Market|Country|Platform|Currency|Tax treatment'),S('Edition Pricing','Standard edition|Ultimate edition|Price'),S('Store Reference','Collected on|Store reference')],
 Image:[S('Image Context','Location|Area|Region|Featured entities|Category|Type|Caption')],
 Artwork:[S('Artwork Context','Location|Featured entities|Category|Type|Caption')],
 Video:[S('Video Context','Release date|Date|Duration|Location|Featured entities|Category|Type')],
 Guide:[S('Gameplay','Controls|Requirements|Mechanics|Instructions|Steps|Tips|Platform')],
 Story:[S('Article Context','Date|Published|Author|Category|Official Statements')],
 'Vehicle spotlight':[S('Visual Reference','Category|Type|Vehicle|Location|Real life')],
 Mechanic:[S('Functionality','Functionality|Description|Type|Category'),S('Controls','Controls|Input'),S('Requirements','Requirements|Unlock|Restrictions')],
};
const aliases=[['Manufacturer','Maker','Brand'],['Category','Class','Type','Weapon type'],['Damage','Damage rating'],['Fire rate','Firerate'],['Clip size','Clip','Magazine','Magazine size'],['Price','Cost'],['Availability','How to get','Unlock'],['Role','Original credit','Credited as'],['First documented mission','Documented mission'],['Occupation / affiliation','Affiliations'],['Customization','Customisation'],['Real life','Real-Life Inspiration','Real-life reference'],['Programme','Documented media appearances'],['Media category','Broadcast / production type'],['X','Map x'],['Y','Map y'],['Z','Map z']];
const safe=new Set(['role','credited performer','credit section','credited as','evidence','evidence scope','original credit']);
const provenance=new Set(['evidence','evidence scope','dossier completeness','outstanding evidence','biography availability','portrait availability','community confidence','source confidence','source discrepancies','source','source url','license','licence','data credit','verified on']);
const identity=new Set(['name','title','display name','display title','label','mission name','weapon name','vehicle name','location name','collectible name','trophy name','challenge name','cheat name']);
const statNames={speed:'Speed rating',acceleration:'Acceleration',handling:'Handling',offroad:'Off-road rating',strength:'Strength'};
const commonFiller=new Set([
 'This dossier contains the information currently available from its credited source. Additional details are added only when independently documented.',
 'This dossier preserves every field exposed by the credited GTA Town dataset. Fields marked “Not verified in this atlas” were not supplied in that record and are intentionally left un-inferred.',
 'Ratings are GTA Town’s reported 0–10 stat bars, not measured km/h, acceleration times or independently verified performance. Missing fields are left unverified.',
 'Source: gtatown.com. Public vehicle data distributed under CC BY 4.0; adapted to the Vice Atlas dossier format.',
 'This dossier records the credited role and the available sourced context. No additional biography is inferred where the published sources do not provide one.',
].map(exact));
const generatedIntro=item=>[
 item.title+' is listed in the GTA Town vehicle catalogue. The manufacturer and class are attributed to that source.',
 item.title+' is indexed in the Vice Atlas. No additional description has been verified for this record.',
 item.title+' is listed in the GTA Town public '+item.creatorDataset+' dataset. Details below are reproduced as community data; unknown fields are not inferred.',
].map(exact);
const reviewedSummary=(item,included)=>{
 const a=Object.fromEntries(included);
 const has=(name,value)=>Object.prototype.hasOwnProperty.call(a,name)&&exact(valueText(a[name]))===exact(value);
 const out=[];
 if(item.kind==='Character'&&a['Credited performer']&&a.Role&&a.Programme&&a['Media category']){
  const text=a['Credited performer']+' is credited for '+a.Role+' in '+a.Programme+', in the '+String(a['Media category']).toLowerCase()+' cast.';
  out.push(exact(text));
 }
 if(item.kind==='Radio station'&&has('Genre',item.category)){
  out.push(exact(item.title+' is listed in GTA Town’s radio reference with a '+String(item.category).toLowerCase()+' focus.'));
 }
 return new Set(out);
};
const equivalence=(a,b)=>key(a)===key(b)||aliases.some(group=>group.map(key).includes(key(a))&&group.map(key).includes(key(b)));
const regionTags={
 'vice-city':['Art Deco architecture','Nightlife'],
 'leonida-keys':['Island communities','Coastal roads'],
 'grassrivers':['Wetlands'],
 'port-gellhorn':['Roadside motels'],
 'ambrosia':['Factories','Biker culture'],
 'mount-kalaga':['National park','Wilderness'],
};
export function buildDossier(item,spoilers=false){
 const locked=Boolean(item.spoiler&&!spoilers);
 const sections=[],facts=[],omissions=[],sourceFacts=[],stats=[];
 const schema=schemas[item.kind]||[S('Profile','Type|Category|Class|Location|Area|Region'),S('Gameplay','Requirements|Availability|Controls|Rewards|Features')];
 const raw=Object.entries(item.attributes||{}).filter(([,v])=>known(v));
 const included=[];
 const hide=(name,reason)=>omissions.push({name,reason});
 for(const [name,value] of raw){
  const k=key(name),v=valueText(value);
  if(locked&&!safe.has(k)){hide(name,'spoiler');continue;}
  if(!spoilers&&['fate','status in story','outcome','consequences'].includes(k)){hide(name,'spoiler');continue;}
  if(identity.has(k)&&exact(v)===exact(item.title)){hide(name,'heading');continue;}
  if(k==='source'||k==='source url'){if(exact(v)===exact(item.source)){hide(name,'source');continue;}}
  if(included.some(([n,w])=>equivalence(n,name)&&exact(valueText(w))===exact(v))){hide(name,'equivalent-field');continue;}
  const vehicleStat=Object.entries(statNames).find(([s,n])=>key(n)===k&&Number.isFinite(item.vehicleStats?.[s])&&item.vehicleStats[s]>=0&&item.vehicleStats[s]<=10);
  if(!locked&&vehicleStat&&/^\s*\d+(?:\.\d+)?\s*\/\s*10\s*$/.test(v)&&Number(v.split('/')[0])===item.vehicleStats[vehicleStat[0]]){hide(name,'performance-meter');continue;}
  included.push([name,value]);
 }
 if(!locked&&item.kind==='Vehicle')for(const [id,value] of Object.entries(item.vehicleStats||{}))if(Number.isFinite(value)&&value>=0&&value<=10)stats.push({id,label:statNames[id]||id,value,max:10});
 const assigned=new Set();
 const pick=(name,value)=>{assigned.add(name);return {name,value};};
 for(const [name,value] of included)if(provenance.has(key(name)))sourceFacts.push(pick(name,value));
 // A short, fixed set of essential facts; longer values remain in editorial sections.
 const essential={Character:['Role','Credit section'],Vehicle:['Manufacturer','Class','Seats','Drive'],Weapon:['Type','Class','Manufacturer'],Mission:['Chapter','Type'],Location:['Area','Place type'],Region:['Category'],'Radio station':['Genre','Station type'],'Price reference':['Market','Platform','Currency'],Collectible:['Set','Collection','Number'],Trophy:['Grade'],Cheat:['Type']};
 for(const name of essential[item.kind]||['Type','Category'])for(const [n,v] of included)if(!assigned.has(n)&&key(n)===key(name)&&valueText(v).length<=80)facts.push(pick(n,v));
 for(const def of schema){
  const rows=included.filter(([n])=>!assigned.has(n)&&def.keys.some(k=>key(k)===key(n))).map(([n,v])=>pick(n,v));
  const meters=def.mode==='performance'&&item.kind==='Vehicle'?stats:[];
  if(rows.length||meters.length)sections.push({id:'record-'+slug(def.title),title:def.title,mode:def.mode,rows,meters});
 }
 const rest=included.filter(([n])=>!assigned.has(n)).map(([n,v])=>pick(n,v));
 if(rest.length)sections.push({id:'record-specifications',title:'Additional Information',mode:'facts',rows:rest,meters:[]});
 const represented=new Set([...included.map(([,v])=>exact(valueText(v))),exact(item.title),exact(item.kind),exact(item.status)]);
 const headerParts=String(item.subtitle||item.category||'').split(/\s+·\s+/).filter(v=>v.trim()&&!represented.has(exact(v)));
 let subtitle=locked?'':headerParts.join(' · ');
 if(exact(subtitle)===exact(item.description))subtitle='';
 const seen=new Set([...represented,exact(subtitle)]);
 const sentences=new Set();
 const paragraphs=[];
 const reviewed=reviewedSummary(item,included);
 if(!locked){
  for(const rawText of [item.description,...(item.paragraphs||[])]){
   if(typeof rawText!=='string'||!rawText.trim()||seen.has(exact(rawText))||commonFiller.has(exact(rawText))||generatedIntro(item).includes(exact(rawText)))continue;
   const parts=rawText.trim().split(/(?<=[.!?])\s+(?=[A-Z“‘"'])/u).filter(text=>{const k=exact(text);if(!k||sentences.has(k)||seen.has(k)||commonFiller.has(k)||reviewed.has(k))return false;sentences.add(k);return true;});
   if(parts.length)paragraphs.push(parts.join(' '));
   seen.add(exact(rawText));
  }
 }
 const tags=[];
 if(!locked)for(const detail of item.details||[]){
  const k=exact(detail);
  if(!k||seen.has(k)||sentences.has(k)||['source context checked','character dossier','gta town public data'].includes(k))continue;
  if((regionTags[item.id]||[]).some(t=>exact(t)===k)&&exact(item.description).includes(k))continue;
  tags.push(detail);seen.add(k);
 }
 const context=!locked&&item.contextImage&&item.contextImage!==item.image?{image:item.contextImage,caption:item.contextCaption,source:item.contextImageSource}:null;
 // Generic overview is omitted if all available information already has a display owner.
 if(locked||paragraphs.length||tags.length||item.kind==='Video')sections.unshift({id:'record-overview',title:item.kind==='Character'?'Biography':'Overview',mode:'overview',rows:[],meters:[],paragraphs,tags,locked});
 if(context)sections.push({id:'record-gallery',title:'Gallery',mode:'gallery',rows:[],meters:[],context});
 return {subtitle,facts,sections,sourceFacts,relatedSources:uniqueSources(item),omissions,locked};
}
