import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { SaveButton, Reveal } from '../AtlasUI';
import { entries, checklist } from '../../data/portal';
import { sectionById } from '../../data/sections';
import { Breadcrumbs } from './PortalLayout';
import { CatalogCard } from './CatalogGrid';
import { DossierMedia } from './dossier/DossierMedia';
import { DossierMeta, typeLabel } from './dossier/DossierMeta';
import { DossierContent } from './dossier/DossierContent';
import { DossierPager } from './dossier/DossierPager';

export default function DetailPage({item,atlas}) {
  const [expanded,setExpanded]=useState(false);
  const [dimensions,setDimensions]=useState(null);
  const section=sectionById[item.collections[0]];
  const peers=entries.filter(e=>e.kind===item.kind);
  const relationshipIds=atlas.spoilers?(item.relatedCharacterIds||[]):[];
  const related=peers.filter(e=>e.id!==item.id).sort((a,b)=>Number(relationshipIds.includes(b.id))-Number(relationshipIds.includes(a.id))||Number(b.collections.some(c=>item.collections.includes(c)))-Number(a.collections.some(c=>item.collections.includes(c)))).slice(0,Math.max(3,relationshipIds.length));
  const task=checklist.find(t=>t.path===item.path);
  const share=async()=>{try{await navigator.clipboard.writeText(new URL(item.path,window.location.origin).href);toast.success('Page link copied.');}catch{toast.error('Could not copy. You can share the page address instead.');}};
  const mode=item.kind==='Radio station'?'radio':item.kind==='Character'?'person':['Vehicle','Weapon'].includes(item.kind)?'object':['Image','Artwork'].includes(item.kind)?'gallery':item.kind==='Video'?'video':'landscape';
  return <article className={`dossier-v2 record-${mode}`} data-testid="dossier-page"><Breadcrumbs section={section} item={item}/>
    <header className="record-heading"><div className="record-heading-copy"><div className="record-heading-kicker"><span data-testid="detail-kind">{typeLabel(item)}</span><span className={`record-status-label ${item.status==='Official source'?'is-official':''}`} data-testid="detail-status">{item.status}</span></div><h1 data-testid="detail-title">{item.title}</h1><p data-testid="detail-subtitle">{item.subtitle||item.category||section.title}</p></div><div className="record-heading-actions"><SaveButton item={item} saved={atlas.saved} toggleSave={atlas.toggleSave} prefix="detail-save" text compact/><button type="button" className="record-share" title="Copy page link" aria-label="Copy page link" onClick={share} data-testid="detail-share"><Share2 size={17}/></button></div></header>
    <div className={`record-stage ${expanded?'is-expanded':''}`} data-testid="detail-stage"><DossierMedia key={item.id} item={item} expanded={expanded} setExpanded={setExpanded} onDimensions={setDimensions}/><DossierMeta item={item} section={section} atlas={atlas} task={task} dimensions={dimensions}/></div>
    <DossierPager item={item} peers={peers} section={section}/>
    <DossierContent item={item} atlas={atlas}/>
    {related.length>0&&<section className="record-related"><div className="record-related-heading"><div><span className="portal-kicker">{section.title}</span><h2 data-testid="detail-related-heading">Related entries</h2></div><Link to={section.path} data-testid="detail-back-to-collection">View collection<ArrowUpRight size={18}/></Link></div><div className="portal-grid">{related.map((entry,i)=><Reveal key={entry.id} delay={i*.05}><CatalogCard item={entry} atlas={atlas} prefix="related"/></Reveal>)}</div></section>}
    {!related.length&&<Link className="record-return" to={section.path} data-testid="detail-back-to-collection">Back to {section.title.toLowerCase()}<ArrowRight size={17}/></Link>}
  </article>;
}