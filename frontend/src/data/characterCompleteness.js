// Structured completeness audit: no speculative biographical fields.
// Broadcast metadata is based on GTA6Ops's station guide and Rockstar's music and cast credits.
import { mediaCast } from './mediaCast';
const unknown = 'Not verified in this atlas';
const radioGenres = {
  "AFROBANK FM": "African music and amapiano",
  "BACK COUNTRY RADIO": "Country",
  "CIRCOLOCO RECORDS RADIO": "House and techno",
  "COCOTEO FM": "Latin dance music",
  "DIRTY SOUTH CLASSICS": "Southern hip-hop",
  "EMOTION 98.3": "Soft rock",
  "FLASH FM": "Pop",
  "GLORIANA BLUES RADIO": "Blues",
  "HONEY FM": "R&B",
  "HONEY FM - LIQUID CITY": "Original music program on Honey FM",
  "KALEIDOSCOPE FM": "International music and covers",
  "LEONIDA JAZZ RADIO": "Jazz",
  "RADIO LA OLA": "Latin music",
  "RADIO ON-U": "Reggae and dub",
  "STOCKYARD FM": "Electronic and indie",
  "SYMPHONY FM": "Classical",
  "THE CHAMBER 106.6": "Metal",
  "VICE CITY FM": "1980s pop",
  "VICE CITY RAP RADIO": "Hip-hop",
  "V-ROCK": "Classic rock",
  "WORLDWIDE FM": "Jazz and funk"
};
const talkStations = {
  "ASK DR. NITA": "The Wipe Talk Radio",
  "EL OTRO LADO": "The Wipe Talk Radio",
  "SHE GOT ASSETS": "The Wipe Talk Radio",
  "THE RICHARD BASTION SHOW": "WKTT Talk Radio",
  "HIT THE BRICKS": "WKTT Talk Radio"
};
const guide = 'https://gta6ops.com/database/radio-and-soundtrack/';
const music = 'https://www.rockstargames.com/VI/music';
const official = 'https://www.rockstargames.com/VI/credits';
const previewStations = new Set(['AFROBANK FM','BACK COUNTRY RADIO','CIRCOLOCO RECORDS RADIO','COCOTEO FM','DIRTY SOUTH CLASSICS','FLASH FM','THE CHAMBER 106.6']);
const mediaById = new Map();
for (const row of mediaCast) {
  const id = row.existingId || row.id;
  if (!id) continue;
  if (!mediaById.has(id)) mediaById.set(id,[]);
  mediaById.get(id).push(row);
}
const known = value => Boolean(value && !/^not verified/i.test(String(value)));
export function completeCharacterDossier(item) {
  const a = {...item.attributes};
  const media = mediaById.get(item.id) || [];
  const sources = [...(item.relatedSources || [])];
  const add = (name,value) => {if (!known(a[name]) && known(value)) a[name]=value;};
  if (media.length) {
    add('Documented media appearances', [...new Set(media.map(r=>r.program))].join('; '));
    add('Broadcast / production type', [...new Set(media.map(r=>r.category))].join('; '));
    const formats = [...new Set(media.map(r=>radioGenres[r.program]).filter(Boolean))];
    const stations = [...new Set(media.map(r=>talkStations[r.program]).filter(Boolean))];
    if (formats.length) add('Station music format',formats.join('; '));
    if (stations.length) add('Talk-radio station',stations.join('; '));
    if (media.some(r=>r.category==='Podcast')) add('Podcast availability','On-demand in-game audio');
    if (media.some(r=>r.category==='Television'||r.category==='TV news')) add('Medium','In-game television');
    if (media.some(r=>r.category==='In-world video game')) add('Medium','In-world video game');
    if (formats.length || stations.length || media.some(r=>r.category==='Podcast')) sources.push({label:'GTA6Ops — broadcast and station context',url:guide});
    if (media.some(r=>previewStations.has(r.program))) sources.push({label:'Rockstar Games — official music and radio previews',url:music});
    if (media.some(r=>r.profileUrl)) for (const r of media) if(r.profileUrl) sources.push({label:'Individual media credit — '+r.role,url:r.profileUrl});
  }
  // Common fields distinguish unknown information from absent information.
  const creditOnly = /credit only|unconfirmed/i.test(a.Evidence || '');
  const missing = [];
  if (!known(a['Credited performer'])) missing.push('performer');
  if (!known(a['Biography availability']) || creditOnly) missing.push('independent narrative biography');
  if (item.placeholderImage) missing.push('character image');
  if (!known(a['First documented mission']) && !known(a['Documented mission']) && !known(a['Documented appearances']) && !media.length) missing.push('mission or appearance chronology');
  const scope = creditOnly ? 'Credit or qualified identity evidence only' : media.length && /^not verified/i.test(a['Biography availability'] || '') ? 'Documented media credit; independent biography unverified' : 'Documented context; no claim of a complete life history';
  a['Evidence scope'] = scope;
  a['Outstanding evidence'] = missing.length ? 'Not verified in this atlas: '+missing.join('; ') : 'No gaps in the audited core fields; other biographical details may be unknown';
  return {...item,attributes:a,relatedSources:sources.filter((s,i,all)=>s.url&&all.findIndex(x=>x.url===s.url)===i)};
}
export function characterCoverageReport(records) {
  const counts={records:records.length,uniqueIds:new Set(records.map(r=>r.id)).size,withEvidenceScope:0,withMediaContext:0,unverifiedBiography:0,missingPortrait:0,missingPerformer:0,missingAppearanceChronology:0};
  for (const r of records) {
    const a=r.attributes;
    if(a['Evidence scope']) counts.withEvidenceScope++;
    if(a['Documented media appearances']) counts.withMediaContext++;
    if(!known(a['Biography availability']) || /credit only|unconfirmed/i.test(a.Evidence||'')) counts.unverifiedBiography++;
    if(r.placeholderImage) counts.missingPortrait++;
    if(!known(a['Credited performer'])) counts.missingPerformer++;
    if(!known(a['First documented mission'])&&!known(a['Documented mission'])&&!known(a['Documented appearances'])&&!a['Documented media appearances']) counts.missingAppearanceChronology++;
  }
  return counts;
}
