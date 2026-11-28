import { NeonCipher } from '../NeonCipher';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { SaveButton, Reveal } from '../AtlasUI';
import { entries, checklist } from '../../data/portal';
import {hideSpoiler} from '../../data/creatorRecords';
import { sectionById } from '../../data/sections';
import { Breadcrumbs } from './PortalLayout';
import { CatalogCard } from './CatalogGrid';
import { DossierMedia } from './dossier/DossierMedia';
import { DossierMeta, typeLabel } from './dossier/DossierMeta';
import { DossierContent } from './dossier/DossierContent';
import { DossierPager } from './dossier/DossierPager';
import { splitDossier } from './dossier/dossierModel.mjs';

export default function DetailPage({item,atlas}) {
  const [expanded,setExpanded]=useState(false);
  const [dimensions,setDimensions]=useState(null);
  const section=sectionById[item.collections[0]];
  const peers=entries.filter(e=>e.kind===item.kind&&!hideSpoiler(e,atlas.spoilers));
  const relationshipIds=atlas.spoilers?(item.relatedCharacterIds||[]):[];
  const related=peers.filter(e=>e.id!==item.id).sort((a,b)=>Number(relationshipIds.includes(b.id))-Number(relationshipIds.includes(a.id))||Number(b.collections.some(c=>item.collections.includes(c)))-Number(a.collections.some(c=>item.collections.includes(c)))).slice(0,Math.max(3,relationshipIds.length));
  const task=checklist.find(t=>t.path===item.path);
  const share=async()=>{try{await navigator.clipboard.writeText(new URL(window.location.pathname,window.location.origin).href);toast.success('Page link copied.');}catch{toast.error('Could not copy. You can share the page address instead.');}};
  const {subtitle,body,meta}=splitDossier(item,atlas.spoilers);
  const mode=item.kind==='Radio station'?'radio':item.kind==='Character'?'person':item.kind==='Weapon'?'weapon':item.kind==='Vehicle'?'object':['Image','Artwork'].includes(item.kind)?'gallery':item.kind==='Video'?'video':'landscape';
  return <article className={`dossier-v2 record-${mode}`} data-testid="dossier-page"><Breadcrumbs section={section} item={item}/>
    <header className="record-heading"><div className="record-heading-copy"><div className="record-heading-kicker"><span data-testid="detail-kind">{item.kind==='Character'?'Character Introduction':typeLabel(item)}</span><span className={`record-status-label ${item.status==='Official source'?'is-official':''}`} data-testid="detail-status">{item.status}</span></div><h1 data-testid="detail-title"><NeonCipher value={item.title} block/></h1>{subtitle&&<p data-testid="detail-subtitle">{subtitle}</p>}</div><div className="record-heading-actions"><SaveButton item={item} saved={atlas.saved} toggleSave={atlas.toggleSave} prefix="detail-save" text compact/><button type="button" className="record-share" title="Copy page link" aria-label="Copy page link" onClick={share} data-testid="detail-share"><Share2 size={17}/></button></div></header>
    <div className={`record-stage ${expanded?'is-expanded':''}`} data-testid="detail-stage"><DossierMedia key={item.id} item={item} expanded={expanded} setExpanded={setExpanded} onDimensions={setDimensions}/><DossierMeta item={meta} section={section} atlas={atlas} task={task} dimensions={dimensions}/></div>
    <DossierPager item={item} peers={peers} section={section}/>
    <DossierContent item={body} atlas={atlas} related={related}/>
    {related.length>0&&<section id="record-related" className="record-related"><div className="record-related-heading"><div><span className="portal-kicker">{section.title}</span><h2 data-testid="detail-related-heading">{item.kind==='Weapon'?'Related weapons':item.kind==='Character'&&relationshipIds.length?'Connections and related profiles':'Connected files'}</h2></div><Link to={section.path} data-testid="detail-back-to-collection">Back to the collection<ArrowUpRight size={18}/></Link></div><div className="portal-grid">{related.map((entry,i)=><Reveal key={entry.id} delay={i*.05}><CatalogCard item={entry} atlas={atlas} prefix="related"/></Reveal>)}</div></section>}
    {!related.length&&<Link className="record-return" to={section.path} data-testid="detail-back-to-collection">Back to {section.title.toLowerCase()}<ArrowRight size={17}/></Link>}
  </article>;
}
