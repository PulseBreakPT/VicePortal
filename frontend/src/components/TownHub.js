import { NeonCipher } from './NeonCipher';
import { ChevronRight, Compass, House, Search, Trophy, Users, Gamepad2, Info, Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { image } from '../data/catalog';
import { entries as catalog } from '../data/portal';
import { Reveal } from './AtlasUI';
import { hubDestinations, primaryHubPaths } from './homeContent.mjs';

const hubIcons={Compass,House,Search,Trophy,Users,Gamepad2};
export const ProgressPreview = ({saved}) => {
  const count=catalog.filter(item=>saved.includes(item.id)).length;
  const percent=catalog.length?Math.round(count/catalog.length*100):0;
  const groups=[['Regions','Region'],['Characters','Character'],['Screenshots','Image']];
  return <div className="hub-progress-preview"><div className="hub-progress-top"><div className="hub-ring" style={{'--progress':`${percent}%`}}><strong data-testid="home-saved-percentage"><NeonCipher value={`${percent}%`} variant="number"/></strong><small>saved</small></div><div className="hub-progress-key"><strong>By collection</strong>{groups.map(([label,kind])=><div key={kind}><span>{label}</span><span data-testid={`home-saved-${kind.toLowerCase()}`}>{catalog.filter(item=>item.kind===kind&&saved.includes(item.id)).length}</span></div>)}</div></div></div>;
};
export const TownHub = ({saved}) => {
  const navigate=useNavigate();
  return <section className="town-hub" id="jump-in" data-testid="jump-in-section">
  <Reveal className="town-banner"><img src={image('rs-poster-2')} alt=""/><div><h2 data-testid="banner-heading">GAME <span>INFORMATION</span></h2><p data-testid="banner-description">Platforms, editions and development references.</p></div><button onClick={()=>navigate(primaryHubPaths[0])} data-testid="banner-explore-game"><Info size={16}/> Open game files</button></Reveal>
  <h2 className="town-section-title" data-testid="jump-in-heading">Paradise comes at a price.</h2>
  <div className="town-hub-grid">
    <Reveal className="hub-tile hub-map-tile hub-missions-tile"><img src={image('story-preview')} alt=""/><button className="card-click-target" onClick={()=>navigate(primaryHubPaths[1])} data-testid="hub-missions-open" aria-label="Browse missions"/><span className="hub-map-chip"><Film size={15}/> On the job</span><div className="hub-tile-caption"><h3>Missions</h3><p>Story missions, side jobs and encounters</p></div></Reveal>
    <Reveal className="hub-tile hub-progress" delay={.06}><img src={image('vice_city_11')} alt=""/><ProgressPreview saved={saved}/><button className="card-click-target" onClick={()=>navigate(primaryHubPaths[2])} data-testid="hub-saved-open" aria-label="Open your saved atlas"/><div className="hub-tile-caption"><h3>Saved atlas</h3><p data-testid="home-saved-summary">Your personal collection</p></div></Reveal>
    <Reveal className="hub-tile hub-field-notes" delay={.12}><img src={image('vice_city_06')} alt=""/><div className="hub-field-preview"><span>PLATFORM INDEX</span>{[['01','PlayStation'],['02','Xbox'],['03','PC']].map(([number,title])=><div key={number}><small>{number}</small><p>{title}</p></div>)}</div><button className="card-click-target" onClick={()=>navigate(primaryHubPaths[3])} data-testid="hub-cheats-open" aria-label="Browse cheat code references"/><div className="hub-tile-caption"><h3>Cheats</h3><p>Source-checked code references</p></div></Reveal>
    {hubDestinations.map(([id,title,sub,photo,path,icon],index)=>{const Icon=hubIcons[icon];return <Reveal className={`hub-tile hub-small hub-${id}`} key={id} delay={index*.035}><img src={image(photo)} alt=""/><button className="card-click-target" onClick={()=>navigate(path)} data-testid={`hub-${id}-open`} aria-label={`Open ${title}`}/><span className="hub-floating-icon"><Icon size={28} strokeWidth={1.3}/></span><div className="hub-tile-caption"><h3>{title}</h3><p>{sub}</p></div><ChevronRight className="hub-tile-arrow" size={20}/></Reveal>;})}
  </div>
</section>;
};
