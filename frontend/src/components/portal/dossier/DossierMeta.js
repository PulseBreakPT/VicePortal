import { Link } from 'react-router-dom';
import { ArrowRight, Check, EyeOff, Info, ShieldCheck } from 'lucide-react';

export const sourceName = item => item.source.includes('gtabase')?'GTABase':item.source.includes('gtatown')?'GTA Town':item.source.includes('gta6ops.com')?'GTA6Ops':item.source.includes('powerpyx.com')?'PowerPyx':item.source.includes('gta6.university')?'GTA6 University':item.source.includes('gta6wiki.eu')?'GTA6Wiki':item.source.includes('gta6tracker.org')?'GTA6Tracker':item.source.includes('rockstargames.com')?'Rockstar Games':'External source';
export const isUnknown = value => /^not verified/i.test(value);
export const typeLabel = item => item.kind==='Story'?'Article':item.kind;

const getFacts = (item,section,dimensions) => {
  const facts=Object.entries(item.attributes||{}).filter(([,value])=>!isUnknown(value));
  if(!facts.length){
    if(item.kind==='Character')facts.push(['Role',section.id.endsWith('protagonists')?'Protagonist':'Supporting character']);
    else if(item.kind==='Region')facts.push(['Region type',item.category],['Setting','Leonida']);
    else if(item.kind==='Video')facts.push(['Published by','Rockstar Games'],['Playback','YouTube']);
    else if(item.kind==='Artwork')facts.push(['Type','Promotional artwork']);
    else if(item.category)facts.push(['Category',item.category]);
  }
  if(['Guide','Story'].includes(item.kind)){
    const words=[item.description,...(item.paragraphs||[])].filter(Boolean).join(' ').split(/\s+/).length;
    facts.push(['Reading time',`${Math.max(1,Math.ceil(words/200))} min`]);
  }
  if(['Image','Artwork'].includes(item.kind)&&dimensions)facts.push(['Image size',`${dimensions.width} × ${dimensions.height}`]);
  return facts;
};

export const DossierMeta = ({item,section,atlas,task,dimensions}) => {
  const official=item.status==='Official source';
  const protectedStory=item.spoiler&&!atlas.spoilers;
  const comparable=['Vehicle','Weapon'].includes(item.kind);
  const facts=getFacts(item,section,dimensions).filter(([name])=>!protectedStory||['Role','Credited performer','Credit section','Credited as','Evidence'].includes(name));
  return <aside className="record-meta" aria-label="Entry summary" data-testid="detail-summary">
    <div className="record-meta-heading"><span>AT A GLANCE</span><span aria-hidden="true">{typeLabel(item).toUpperCase()}</span></div>
    <dl className="record-quick-facts">{facts.map(([name,value],i)=><div key={name}><dt>{name}</dt><dd data-testid={`detail-quick-fact-${i}`}>{value}</dd></div>)}</dl>
    <div className={`record-provenance ${official?'is-official':''}`}><span>{official?<ShieldCheck size={18}/>:<Info size={18}/>}</span><div><strong data-testid="detail-provenance-status">{item.status}</strong><p data-testid="detail-provenance-source">{sourceName(item)}</p></div></div>
    {protectedStory&&<p className="record-context-note" data-testid="detail-spoiler-status"><EyeOff size={15}/>Story details hidden</p>}
    {item.kind==='Radio station'&&<p className="record-context-note" data-testid="detail-radio-note">No audio stream is hosted.</p>}
    {comparable&&<Link className="record-primary-link" to={`${item.kind==='Weapon'?'/weapons/compare':'/compare'}?a=${item.id}&b=`} data-testid="detail-compare">Compare {item.kind.toLowerCase()}<ArrowRight size={17}/></Link>}
    {item.kind==='Region'&&<Link className="record-primary-link" to="/map" data-testid="detail-region-map">Region map<ArrowRight size={17}/></Link>}
    {task&&<button className={`record-checklist ${atlas.completed.includes(task.id)?'is-completed':''}`} data-testid="detail-complete" aria-pressed={atlas.completed.includes(task.id)} onClick={()=>atlas.toggleComplete(task.id)}><Check size={17}/><span>{atlas.completed.includes(task.id)?'Marked as explored':'Mark as explored'}<small>Personal atlas checklist</small></span></button>}
    <Link className="record-collection-link" to={section.path} data-testid="detail-collection-link">All {section.title.toLowerCase()}<ArrowRight size={14}/></Link>
  </aside>;
};