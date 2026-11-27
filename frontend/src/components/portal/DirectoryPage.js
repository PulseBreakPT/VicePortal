import { SiteSelect } from '../ui/site-select';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { rootSections, sections, descendantIds } from '../../data/sections';
import { image } from '../../data/catalog';
import { PageHero, Breadcrumbs } from './PortalLayout';
import { Reveal } from '../AtlasUI';

export default function DirectoryPage(){
  const [query,setQuery]=useState('');const [area,setArea]=useState('all');
  const section={id:'directory',title:'Full index',description:'Every corner of the atlas, from the streets to the story.',image:image('vice_city_09')};
  const words=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filtered=sections.filter(s=>(area==='all'||descendantIds(area).includes(s.id))&&words.every(word=>s.title.toLowerCase().includes(word)));
  return <><Breadcrumbs/><PageHero section={section}/><div className="directory-toolbar"><label className="portal-input directory-search"><Search size={18}/><input data-testid="directory-filter" aria-label="Find a section" placeholder="Find a section" value={query} onChange={e=>setQuery(e.target.value)}/>{query&&<button onClick={()=>setQuery('')} aria-label="Clear page search" data-testid="directory-clear-query"><X size={16}/></button>}</label><div className="directory-site-select"><SiteSelect value={area} onChange={setArea} label="Filter atlas area" testId="directory-area" options={[['all','All categories'],...rootSections.map(s=>[s.id,s.title])]}/></div><span data-testid="directory-count" aria-live="polite">{filtered.length} pages</span></div><div className="directory-grid">{rootSections.map((root,i)=>{const ids=descendantIds(root.id);const group=filtered.filter(s=>ids.includes(s.id));if(!group.length)return null;return <Reveal className="directory-area-card" key={root.id} delay={(i%3)*.04}><Link className="directory-group" to={root.path} data-testid={`directory-root-${root.id}`}><img src={root.image} alt="" loading="lazy"/><span><small>{String(ids.length).padStart(2,'0')} {ids.length===1?'PAGE':'PAGES'}</small><h2>{root.title}</h2></span><ArrowUpRight size={22}/></Link><div className="directory-area-links">{group.filter(s=>s.id!==root.id).map(s=><Link to={s.path} key={s.id} data-testid={`directory-${s.id.replaceAll('/','-')}`} className={s.parent!==root.id?'is-nested':''}>{s.title}<ArrowUpRight size={13}/></Link>)}{group.length===1&&group[0].id===root.id&&<Link to={root.path} data-testid={`directory-explore-${root.id}`}>Open section <ArrowUpRight size={14}/></Link>}</div></Reveal>;})}</div>{!filtered.length&&<div className="portal-empty" data-testid="directory-empty"><Search size={28}/><h2>No matching sections.</h2><p>Try a different name or category.</p><button className="portal-button" data-testid="directory-clear" onClick={()=>{setQuery('');setArea('all');}}>Reset filters</button></div>}</>;
}