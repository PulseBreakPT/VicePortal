import { NeonCipher } from '../../NeonCipher';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { isUnknown } from './dossierModel.mjs';
export { isUnknown } from './dossierModel.mjs';

export const sourceName = item => item.source.includes('gtabase')?'GTABase':item.source.includes('gtatown')?'GTA Town':item.source.includes('gta6ops.com')?'GTA6Ops':item.source.includes('powerpyx.com')?'PowerPyx':item.source.includes('gta6.university')?'GTA6 University':item.source.includes('gta6wiki.eu')?'GTA6Wiki':item.source.includes('gta6tracker.org')?'GTA6Tracker':item.source.includes('rockstargames.com')?'Rockstar Games':item.source.includes('gta6data.com')?'GTA6DATA':item.source.includes('gameta.gg')?'Gameta':item.source.includes('gta6heists.com')?'GTA6Heists':item.source.includes('gta6walk.com')?'GTA6Walk':item.source.includes('gta.exputer.com')?'eXputer':item.source.includes('leonidex.com')?'Leonidex':'External source';
export const typeLabel = item => item.kind==='Story'?'Article':item.kind;

const getFacts = (item,section,dimensions) => {
  const facts=Object.entries(item.attributes||{}).filter(([,value])=>!isUnknown(value));
  if(['Guide','Story'].includes(item.kind)){
    const text=[item.description,...(item.paragraphs||[])].filter(Boolean).join(' ').trim();
    if(text)facts.push(['Reading time',`${Math.max(1,Math.ceil(text.split(/\s+/).length/200))} min`]);
  }
  if(['Image','Artwork'].includes(item.kind)&&dimensions)facts.push(['Image size',`${dimensions.width} × ${dimensions.height}`]);
  return facts;
};

export const DossierMeta = ({item,section,atlas,task,dimensions}) => {
  const protectedStory=item.spoiler&&!atlas.spoilers;
  const comparable=['Vehicle','Weapon'].includes(item.kind);
  const facts=getFacts(item,section,dimensions).filter(([name])=>!protectedStory||['Role','Credited performer','Credit section','Credited as','Evidence'].includes(name));
  return <aside className="record-meta" aria-label="Entry summary" data-testid="detail-summary">
    <div className="record-meta-heading"><span>THE LOWDOWN</span></div>
    {facts.length>0&&<dl className="record-quick-facts">{facts.map(([name,value],i)=><div key={name}><dt>{name}</dt><dd data-testid={`detail-quick-fact-${i}`}>{/^[\d\s.,%×:+−–-]+$/.test(String(value))?<NeonCipher value={value} variant="number"/>:typeof value==='object'&&value!==null?JSON.stringify(value):String(value)}</dd></div>)}</dl>}
    {comparable&&<Link className="record-primary-link" to={`${item.kind==='Weapon'?'/weapons/compare':'/compare'}?a=${item.id}&b=`} data-testid="detail-compare">Compare {item.kind.toLowerCase()}<ArrowRight size={17}/></Link>}
    {item.kind==='Region'&&<Link className="record-primary-link" to="/map" data-testid="detail-region-map">Region map<ArrowRight size={17}/></Link>}
    {task&&<button className={`record-checklist ${atlas.completed.includes(task.id)?'is-completed':''}`} data-testid="detail-complete" aria-pressed={atlas.completed.includes(task.id)} onClick={()=>atlas.toggleComplete(task.id)}><Check size={17}/><span>{atlas.completed.includes(task.id)?'Marked as explored':'Mark as explored'}<small>Personal atlas checklist</small></span></button>}
    {!facts.length&&!comparable&&item.kind!=='Region'&&!task&&<Link className="record-collection-link" to={section.path} data-testid="detail-collection-link">Browse collection<ArrowRight size={14}/></Link>}
  </aside>;
};
