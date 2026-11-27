import feed from './vehicleFeed.json';
import { normalizeVehicles } from './vehicleNormalizer.mjs';

const unknown='Not verified in this atlas';
const placeholder='/images/vehicle-placeholder.svg';
const legacyImages={
  'vehicle-thrax':'car-thrax',
  'vehicle-emerus':'car-emerus',
  'vehicle-tempesta':'car-tempesta',
  'vehicle-comet-s2':'car-comet',
  'vehicle-gauntlet-hellfire':'car-gauntlet',
  'vehicle-carbon-rs':'bike-carbon',
  'vehicle-cheetah-classic':'car-cheetah'
};
const bar=value=>value===null?unknown:value.toFixed(1)+' / 10';
export const vehicleFeedInfo={complete:feed.complete===true,checkedOn:feed.checkedOn,source:feed.source,license:feed.license};
export const vehicleRecords=normalizeVehicles(feed).map(row=>{
 const legacy=legacyImages[row.id];
 return {
  id:row.id,title:row.title,kind:'Vehicle',category:row.category,type:row.type,source:row.source,spoiler:row.spoiler,
  path:'/vehicles/'+row.id,collections:['vehicles/'+row.group],status:'Community reference',
  image:legacy?'/images/'+legacy+'.webp':placeholder,imageFallback:placeholder,placeholderImage:!legacy,
  imageSource:legacy?'Legacy atlas illustration — GTA VI likeness not verified':undefined,
  subtitle:row.maker+' · '+row.category,
  description:row.title+' is listed in the GTA Town vehicle catalogue. The manufacturer and class are attributed to that source.',
  details:[row.maker,row.category,'GTA Town public data'],
  attributes:{Manufacturer:row.maker,Class:row.category,'Speed rating':bar(row.speed),Acceleration:bar(row.acceleration),Handling:bar(row.handling),'Off-road rating':bar(row.offroad),Strength:bar(row.strength),'Top speed':unknown,Price:row.price||unknown,Availability:row.availability||unknown,Seats:row.seats||unknown,Drive:row.drive||unknown},
  vehicleStats:{speed:row.speed,acceleration:row.acceleration,handling:row.handling,offroad:row.offroad,strength:row.strength},
  paragraphs:['Ratings are GTA Town’s reported 0–10 stat bars, not measured km/h, acceleration times or independently verified performance. Missing fields are left unverified.','Source: gtatown.com. Public vehicle data distributed under CC BY 4.0; adapted to the Vice Atlas dossier format.'],
  dataCredit:'GTA Town',verifiedOn:feed.checkedOn,
  relatedSources:[{label:'GTA Town public data and licence',url:'https://gtatown.com/creators/data'}]
 };
});
