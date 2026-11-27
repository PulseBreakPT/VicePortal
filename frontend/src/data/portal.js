import { articles, gallery, image, officialUrl, regions, vehicles } from './catalog';
import { descendantIds } from './sections';
import { characterRecords } from './characterRecords';
import { vehicleRecords } from './vehicleRecords';
import {creatorRecords,creatorWeapons} from './creatorRecords';
import universalSnapshot from './universalSnapshot.json';
import universalSources from './universalSources.json';
import {buildUniversal} from './universalModel.mjs';

const base = (item, section, collections, status = 'Official source') => ({ ...item, path: `/${section}/${item.id}`, collections, status });
const weaponSource = 'https://www.gtabase.com/gta-6/weapons/';
const radioEntries = [
  ['afrobank-fm','AfroBank FM','Afrobeats / highlife'],
  ['back-country-radio','Back Country Radio','Outlaw country'],
  ['circoloco-records-radio','CircoLoco Records Radio','House / techno'],
  ['cocoteo-fm','Cocoteo FM','Reggaeton / dembow'],
  ['dirty-south-classics','Dirty South Classics','Southern rap'],
  ['flash-fm','Flash FM','Pop'],
].map(([id,title,category])=>base({id:`radio-${id}`,title,kind:'Radio station',category,image:image(`radio-${id}`),source:'https://gtatown.com/radio/',description:`${title} is listed in GTA Town’s radio reference with a ${category.toLowerCase()} focus. This record documents that community listing; it is not an independently verified Rockstar playlist.`,attributes:{Genre:category,Tracklist:'Not verified in this atlas'},paragraphs:['No audio stream or music playback is hosted here. Tracklists and station availability should be checked against the linked source. Trailer soundtrack appearances alone are not treated as station confirmations.']},'radio',['radio'],'Community reference'));
export const carEntries = vehicleRecords;
const reviewedWeaponEntries = [
  ['38','.38','Handguns','weapon-38','handguns'],
  ['1922','1922','Handguns','weapon-1922','handguns'],
  ['556','556 Assault Rifle','Assault rifles','weapon-556','assault-rifles'],
  ['akulus','Akulus','Handguns','weapon-akulus','handguns'],
  ['az1200','AZ1200','Shotguns','weapon-az1200','shotguns'],
].map(([id,title,category,photo,group])=>base({id:`weapon-${id}`,title,kind:'Weapon',category,image:image(photo),source:weaponSource,description:`${title} appears in GTABase’s GTA VI weapons reference. The type is recorded here; damage, prices and unlock requirements have not been independently checked for this atlas.`,details:[category,'Community reference'],attributes:{Type:category,Damage:'Not verified in this atlas',Price:'Not verified in this atlas',Availability:'Not verified in this atlas'}},'weapons',[`weapons/${group}`],'Community reference'));

export const weaponEntries = creatorWeapons(reviewedWeaponEntries);

const guides = [
  ['first-steps','GTA VI: setting and characters','guides/getting-started','vice_city_11','An introduction to Jason, Lucia and Leonida.',['Rockstar introduces GTA VI through Jason and Lucia, with Vice City and the wider state of Leonida as the backdrop. Their official profiles are the starting point for the character dossiers in this atlas.','The region index covers the city, coast and wilderness. Each dossier links to its source. The personal checklist tracks atlas pages, not your game save.','Official information, community catalog entries and fan editorial are labelled separately. Empty indexes have not received checked entries; they do not mean a feature is absent from the game.']],
  ['source-guide','Sources and verification','guides/getting-started','news-preview','How this atlas labels official material, community references and editorial.',['Rockstar’s public website and official trailers are primary sources for character introductions, regions and promotional media. Community sites are secondary references and are labelled accordingly.','A vehicle seen in footage does not establish its performance, price or unlock requirements. A track in a trailer does not establish a radio playlist. Data from previous GTA games is not substituted.','Fan observations are not additional Rockstar announcements. Each dossier includes its source and content label.']],
  ['platforms','The announced console platforms','game/editions','rs-poster-2','Rockstar lists PlayStation 5 and Xbox Series X|S for GTA VI.',['The official GTA VI site lists PlayStation 5 and Xbox Series X|S. Refer to Rockstar for current release timing, regional availability and purchasing information.','This atlas does not infer a PC version, subscription inclusion, edition contents or pricing from the console announcement. Edition information will be added only when its source has been checked.']],
  ['story-premise','The GTA VI story premise','story','jason_and_lucia_01','Rockstar’s introduction to Jason and Lucia’s story.',['Rockstar’s premise follows Jason and Lucia after a robbery goes wrong and draws them into a conspiracy across Leonida.','This is the promotional premise, not a mission walkthrough. Mission titles, endings and rewards are not inferred from it.']],
  ['reading-the-trailers','Reading the official trailers','game/development','rs-trailer2','A close look at the material Rockstar has chosen to show.',['The first two official trailers introduce the atmosphere of Leonida and the partnership at the centre of GTA VI. The videos are available in the screening room with a direct link to Rockstar’s YouTube uploads.','Trailers are edited promotional films. Their sequencing does not establish a chronological mission order, and a shot alone does not prove the details of a gameplay system.']],
  ['night-culture','The city after dark','nightlife','vice_city_06','An editorial look at the colour and atmosphere of official Vice City imagery.',['The released images move between bright coastal daylight and saturated streets after dark. That contrast is part of the visual identity of Vice City.','This is an image-led observation, not a directory of enterable clubs or a claim about available nightlife activities. Venue guides need separate, checked evidence.']],
  ['atlas-privacy','Storage and credits','about','leonida_keys_01','Bookmarks and checklist progress are stored in this browser, without cloud sync.',['Saved entries, checklist progress and your spoiler preference are stored in local browser storage. Clearing site storage removes them; another browser or device has a separate collection.','Vice Atlas is an independent fan project, not affiliated with Rockstar Games or Take-Two Interactive. Grand Theft Auto, its characters and official artwork belong to their respective owners.','Visual references include GTA Town and Rockstar’s GTA VI website. Source links are attached to individual records. This site does not connect to your game or read a game save.']],
];

const baseEntries = [
  ...regions.map(x=>base(x,'regions',['regions','locations'])),
  ...characterRecords.map(x=>base(x,'characters',[...(x.id.startsWith('media-')?[]:[x.category==='Protagonist'?'characters/protagonists':x.category==='Additional encounter'?'characters/encounters':'characters/supporting', ...(x.category==='Optional encounter / side contact'?['characters/side-contacts']:[])]), ...(x.mediaCategories||[]).map(category=>['Radio host','Talk radio','Podcast'].includes(category)?'characters/media-radio':['Television','TV news'].includes(category)?'characters/media-tv':'characters/media-games')].filter((v,i,a)=>a.indexOf(v)===i),x.status)),
  ...articles.map(x=>base(x,'news',['news/features'],'Fan editorial')),
  ...gallery.map(x=>base({...x,description:x.subtitle},'screenshots',['screenshots'])),
  ...vehicles.map(x=>base(x,'vehicles',[x.id==='backcountry-buggy'?'vehicles/off-road':x.id==='island-hopper'?'vehicles/aircraft':'vehicles/customisation'],'Visual spotlight')),
  ...carEntries,...weaponEntries,...radioEntries,...creatorRecords,
  ...guides.map(([id,title,section,photo,description,paragraphs])=>({...base({id,title,kind:'Guide',category:section.startsWith('game')?'Game information':'Field guide',image:image(photo),description,paragraphs,source:officialUrl},section,[section],['night-culture','reading-the-trailers','first-steps','source-guide','atlas-privacy'].includes(id)?'Fan editorial':'Official source'),spoiler:id==='story-premise'})),
  ...[['trailer-1','Trailer 1','QdBZY2fkU-0','rs-trailer2'],['trailer-2','Trailer 2','VQRLujxTm3c','jason_and_lucia_01']].map(([id,title,videoId,photo])=>base({id,title,kind:'Video',image:image(photo),videoId,description:'Grand Theft Auto VI · An official film by Rockstar Games',source:`https://www.youtube.com/watch?v=${videoId}`},'videos',['videos'])),
  base({id:'leonida-key-art',title:'Jason & Lucia — key art',kind:'Artwork',image:image('rs-poster-2'),description:'Official GTA VI promotional artwork. This is not presented as confirmed retail packaging.',source:officialUrl},'artwork',['artwork','wallpapers','covers']),
];
export const universalReport=buildUniversal(universalSnapshot,universalSources,baseEntries);
export const entries=universalReport.entries;
export const entryById = Object.fromEntries(entries.map(x=>[x.id,x]));
export const entriesFor = id => {const ids=descendantIds(id);return entries.filter(e=>e.collections.some(c=>ids.includes(c)));};
export const getItemPath = item => entryById[item.id]?.path || '/explore';
export const checklist = [
  ...regions.map(r=>({id:`visit-${r.id}`,title:`Explore ${r.title}`,group:'Regions',path:`/regions/${r.id}`})),
  {id:'meet-jason',title:'Read Jason’s dossier',group:'People',path:'/characters/jason-duval'},
  {id:'meet-lucia',title:'Read Lucia’s dossier',group:'People',path:'/characters/lucia-caminos'},
  {id:'watch-trailer-1',title:'Watch Trailer 1',group:'Media',path:'/videos/trailer-1'},
  {id:'watch-trailer-2',title:'Watch Trailer 2',group:'Media',path:'/videos/trailer-2'},
  {id:'browse-screenshots',title:'Explore the official screenshots',group:'Media',path:'/screenshots'},
  {id:'check-sources',title:'Read the source guide',group:'Field guides',path:'/guides/getting-started/source-guide'},
];