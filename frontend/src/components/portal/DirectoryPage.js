import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
import { rootSections, sections, descendantIds } from '../../data/sections';
import { image } from '../../data/catalog';
import { PageHero, Breadcrumbs } from './PortalLayout';

export default function DirectoryPage(){
  const [query,setQuery]=useState('');
  const section={id:'directory',title:'Your world. Indexed.',description:'Every road into Leonida, in one place.',image:image('vice_city_09')};
  const matches=s=>!query.trim()||s.title.toLowerCase().includes(query.trim().toLowerCase());
  const filtered=sections.filter(matches);
  return <><Breadcrumbs/><PageHero section={section}/><div className="portal-section-heading"><h2>All destinations</h2><span data-testid="directory-count">{filtered.length} pages</span></div><label className="portal-input directory-search"><Search size={18}/><input data-testid="directory-filter" aria-label="Find a page" placeholder="Find a page…" value={query} onChange={e=>setQuery(e.target.value)}/></label><div className="directory-grid">{rootSections.map(root=>{const ids=descendantIds(root.id);const group=filtered.filter(s=>ids.includes(s.id));if(!group.length)return null;return <section key={root.id}><Link className="directory-group" to={root.path} data-testid={`directory-root-${root.id}`}><h2>{root.title}</h2><ArrowUpRight size={21}/></Link><div>{group.filter(s=>s.id!==root.id).map(s=><Link to={s.path} key={s.id} data-testid={`directory-${s.id.replaceAll('/','-')}`} className={s.parent!==root.id?'is-nested':''}>{s.title}<ArrowUpRight size={14}/></Link>)}</div></section>;})}</div>{!filtered.length&&<div className="portal-empty" data-testid="directory-empty"><h2>No pages found.</h2><button className="portal-button" data-testid="directory-clear" onClick={()=>setQuery('')}>Clear filter</button></div>}</>;
}