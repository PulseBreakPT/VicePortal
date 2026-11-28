import vehicleDetailsA from './gtatownVehicleDetailsA.json';
import vehicleDetailsB from './gtatownVehicleDetailsB.json';
import feed from './vehicleFeed.json';
import imageRefs from './vehicleImageRefs.json';
import { normalizeVehicles,vehicleSlug } from './vehicleNormalizer.mjs';

const unknown='Not verified in this atlas';
const detailBySource=new Map([...vehicleDetailsA,...vehicleDetailsB].map(x=>[x.source,x]));
const known=value=>value!==null&&value!==undefined&&value!==''&&value!==unknown;
const placeholder='/images/vehicle-placeholder.svg';
const bar=value=>value===null?unknown:value.toFixed(1)+' / 10';
export const vehicleFeedInfo={complete:feed.complete===true,count:feed.rows.length,publicListCount:feed.publicListCount,hiddenCount:feed.hiddenCount,checkedOn:feed.checkedOn,source:feed.source,license:feed.license};
export const vehicleRecords=normalizeVehicles(feed).map(row=>{
 const ref=imageRefs[row.id];
 const imageRef=ref&&vehicleSlug(ref.title)===vehicleSlug(row.title)?ref:null;
 const detail=detailBySource.get(row.source);
 const reviewed=detail?.title===row.title?detail:null;
 const attributes={Manufacturer:row.maker,Class:row.category,Type:row.type||unknown,'Speed rating':bar(row.speed),Acceleration:bar(row.acceleration),Handling:bar(row.handling),'Off-road rating':bar(row.offroad),Strength:bar(row.strength),'Top speed':row.topSpeedMph===null?unknown:row.topSpeedMph+' mph (source-reported)',Price:row.price||unknown,Availability:row.availability||unknown,Seats:row.seats||unknown,Drive:row.drive||unknown,'Real-life reference':row.realLife||unknown,Edition:row.edition||unknown,'Game mode':row.mode||unknown};
 if(reviewed)for(const [field,value] of Object.entries(reviewed.attributes))if(known(value)&&!known(attributes[field]))attributes[field]=value;
 // Keep individual source-reported ratings consistent with the existing performance meters.
 const recoveredRating=(field,existing)=>{
  if(existing!==null&&existing!==undefined)return existing;
  const match=String(reviewed?.attributes?.[field]||'').match(/^(\d+(?:\.\d+)?) \/ 10$/);
  const rating=match?Number(match[1]):null;
  return rating!==null&&rating>=0&&rating<=10?rating:null;
 };
 const vehicleStats={speed:recoveredRating('Speed rating',row.speed),acceleration:recoveredRating('Acceleration',row.acceleration),handling:recoveredRating('Handling',row.handling),offroad:recoveredRating('Off-road rating',row.offroad),strength:recoveredRating('Strength',row.strength)};
 const documented=Object.values(attributes).filter(known).length;
 const completeness=String(documented)+' / '+Object.keys(attributes).length+' catalogue fields documented';
 return {
  id:row.id,title:row.title,kind:'Vehicle',category:row.category,type:row.type,source:imageRef?.source?.startsWith('https://gtatown.com/')?imageRef.source:row.source,spoiler:row.spoiler,
  path:'/vehicles/'+row.id,collections:['vehicles/'+row.group],status:'Community reference',
  image:imageRef?(imageRef.local?.path||imageRef.image):placeholder,imageFallback:placeholder,placeholderImage:!imageRef,
  imageSource:imageRef?(imageRef.credit||'GTA Town · game imagery © Rockstar Games'):undefined,
  subtitle:row.maker+' · '+row.category,
  description:row.title+' is listed in the GTA Town vehicle catalogue. The manufacturer and class are attributed to that source.',
  details:[row.maker,row.category,'GTA Town public data',completeness],
  attributes:{...attributes,'Dossier completeness':completeness},
  vehicleStats,
  paragraphs:['Ratings are GTA Town’s reported 0–10 stat bars, not measured km/h, acceleration times or independently verified performance. Missing fields are left unverified.','Source: gtatown.com. Public vehicle data distributed under CC BY 4.0; adapted to the Vice Atlas dossier format.'],
  dataCredit:'GTA Town',verifiedOn:feed.checkedOn,
  relatedSources:[{label:'GTA Town public data and licence',url:'https://gtatown.com/creators/data'},...(imageRef?[{label:'Vehicle image reference',url:imageRef.source}]:[]),...(reviewed?[{label:'GTA Town · individual vehicle reference',url:reviewed.source}]:[])]
 };
});
