// Source-backed cross-indexing of existing canonical dossiers. No new map pins.
const norm=v=>String(v??'').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const guideMembership={
 '/guides/bank-account':['archive/economy/bank-accounts','archive/gameplay/economy'],
 '/guides/jason-vs-lucia':['archive/gameplay/character-switching','archive/gameplay/relationships'],
 '/guides/wanted-level':['archive/gameplay/wanted-levels'],
 '/guides/criminal-profile':['archive/gameplay/criminal-profile'],
 '/guides/combat-and-stealth':['archive/gameplay/combat','archive/gameplay/stealth'],
 '/guides/stash-bags':['archive/gameplay/inventory','archive/gameplay/storage'],
 '/guides/outfits-and-masks':['archive/fashion/outfits'],
 '/guides/hobbies':['archive/activities'],
 '/guides/flying':['archive/vehicles/aircraft'],
 '/guides/diving-and-treasure':['archive/activities/diving'],
 '/guides/radio-and-music':['archive/music/radio-stations'],
 '/guides/phone-apps':['archive/digital-world/apps']
};
export function enrichCategories(entries,shops){
 const matched=new Set(),counts={shops:0,guides:0},review=[];
 const updated=entries.map(e=>{
  const memberships=e.kind==='Guide'?[...(guideMembership[e.gtaTownEntityId]||[])]:[];
  if(memberships.length)counts.guides++;
  let attrs=e.attributes,related=e.relatedSources;
  if(e.kind==='Location'){
   const matches=shops.filter(s=>(e.source==='https://gtatown.com/locations/'+s.mapId||e.source===s.map)&&norm(e.title)===norm(s.title));
   if(matches.length===1){
    const s=matches[0];matched.add(s.mapId);counts.shops++;memberships.push(s.section);
    attrs={...attrs};
    if(s.style&&(!attrs['Service style']||/^not verified/i.test(String(attrs['Service style']))))attrs['Service style']=s.style;
    const refs=[...(related||[]),{label:'GTA Town · shop catalogue',url:s.source}];
    related=[...new Map(refs.map(x=>[x.url,x])).values()];
   }
  }
  if(!memberships.length)return e;
  return {...e,attributes:attrs,relatedSources:related,collections:[...new Set([...e.collections,...memberships])]};
 });
 for(const shop of shops)if(!matched.has(shop.mapId))review.push({title:shop.title,source:shop.source,map:shop.map,reason:'Exact title and map ID not matched'});
 return {entries:updated,counts,review};
}
