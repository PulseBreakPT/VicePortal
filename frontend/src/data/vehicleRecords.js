import feed from './vehicleFeed.json';
import imageRefs from './vehicleImageRefs.json';
import { normalizeVehicles,vehicleSlug } from './vehicleNormalizer.mjs';

const unknown='Not verified in this atlas';
const placeholder='/images/vehicle-placeholder.svg';
const bar=value=>value===null?unknown:value.toFixed(1)+' / 10';
export const vehicleFeedInfo={complete:feed.complete===true,count:feed.rows.length,publicListCount:feed.publicListCount,hiddenCount:feed.hiddenCount,checkedOn:feed.checkedOn,source:feed.source,license:feed.license};
export const vehicleRecords=normalizeVehicles(feed).map(row=>{
 const ref=imageRefs[row.id];
 const imageRef=ref&&vehicleSlug(ref.title)===vehicleSlug(row.title)?ref:null;
 return {
  id:row.id,title:row.title,kind:'Vehicle',category:row.category,type:row.type,source:imageRef?.source?.startsWith('https://gtatown.com/')?imageRef.source:row.source,spoiler:row.spoiler,
  path:'/vehicles/'+row.id,collections:['vehicles/'+row.group],status:'Community reference',
  image:imageRef?(imageRef.local?.path||imageRef.image):placeholder,imageFallback:placeholder,placeholderImage:!imageRef,
  imageSource:imageRef?(imageRef.credit||'GTA Town · game imagery © Rockstar Games'):undefined,
  subtitle:row.maker+' · '+row.category,
  description:row.title+' is listed in the GTA Town vehicle catalogue. The manufacturer and class are attributed to that source.',
  details:[row.maker,row.category,'GTA Town public data'],
  attributes:{Manufacturer:row.maker,Class:row.category,'Speed rating':bar(row.speed),Acceleration:bar(row.acceleration),Handling:bar(row.handling),'Off-road rating':bar(row.offroad),Strength:bar(row.strength),'Top speed':unknown,Price:row.price||unknown,Availability:row.availability||unknown,Seats:row.seats||unknown,Drive:row.drive||unknown},
  vehicleStats:{speed:row.speed,acceleration:row.acceleration,handling:row.handling,offroad:row.offroad,strength:row.strength},
  paragraphs:['Ratings are GTA Town’s reported 0–10 stat bars, not measured km/h, acceleration times or independently verified performance. Missing fields are left unverified.','Source: gtatown.com. Public vehicle data distributed under CC BY 4.0; adapted to the Vice Atlas dossier format.'],
  dataCredit:'GTA Town',verifiedOn:feed.checkedOn,
  relatedSources:[{label:'GTA Town public data and licence',url:'https://gtatown.com/creators/data'},...(imageRef?[{label:'Vehicle image reference',url:imageRef.source}]:[])]
 };
});
