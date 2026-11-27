import { useState } from 'react';
import { Search, ArrowUpRight, Compass, X } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import { entries } from '../data/portal';
import {hideSpoiler} from '../data/creatorRecords';
import { sections } from '../data/sections';

// Search is intentionally the only modal in the application.
export const Overlays = ({modal,setModal,query,setQuery,open,triggerRef,spoilers}) => {
  const [scope,setScope]=useState('All');
  const words=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filtered=[...sections,...entries].filter(item=>{
    if(hideSpoiler(item,spoilers))return false;
    if(scope==='Pages'&&item.kind!=='Section')return false;if(scope==='Dossiers'&&item.kind==='Section')return false;
    const text=`${item.title} ${item.kind} ${item.category||''} ${item.attributes?.Manufacturer||''} ${item.spoiler&&!spoilers?'':item.description||''}`.toLowerCase();return words.every(word=>text.includes(word));
  });
  const popular=['experience','map','characters','vehicles','progress','radio'];
  const results=!query.trim()&&scope==='All'?[...popular.map(id=>sections.find(s=>s.id===id)),...entries.filter(e=>e.kind==='Region')]:filtered;
  return <Dialog open={modal?.type==='search'} onOpenChange={v=>{if(!v){setModal(null);setScope('All');}}}><DialogContent className="atlas-modal modal-search" data-testid="atlas-modal" data-lenis-prevent onCloseAutoFocus={event=>{event.preventDefault();if(triggerRef.current?.isConnected)triggerRef.current.focus({preventScroll:true});}}><div className="atlas-modal-scroll" data-lenis-prevent><div className="list-modal">
    <span className="eyebrow" data-testid="search-eyebrow">VICE ATLAS</span><DialogTitle className="display" data-testid="list-title">FIND IT.</DialogTitle><DialogDescription data-testid="list-description">Track down a page, a face, a place, a ride or a frame.</DialogDescription>
    <label className="search-field"><Search size={22}/><input autoFocus data-testid="catalog-search-input" aria-label="Search the atlas" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Name or keyword"/>{query&&<button data-testid="search-clear-query" aria-label="Clear search" onClick={()=>setQuery('')}><X size={17}/></button>}</label>
    <div className="search-index-bar"><div className="portal-tabs">{['All','Pages','Dossiers'].map(s=><button key={s} aria-pressed={scope===s} className={scope===s?'active':''} data-testid={`search-scope-${s.toLowerCase()}`} onClick={()=>setScope(s)}>{s}</button>)}</div><p className="search-count" data-testid="search-result-count" aria-live="polite">{query.trim()||scope!=='All'?`${results.length} RESULTS`:'QUICK DESTINATIONS'}</p></div>
    <div data-testid="search-results">{results.slice(0,100).map(item=><button className="portal-search-result" key={`${item.kind}-${item.id}`} data-testid={`search-open-${item.id.replaceAll('/','-')}`} onClick={()=>{setScope('All');open({type:'detail',item});}}><img src={item.image} alt=""/><span><small>{item.kind==='Section'?'DESTINATION':item.kind.toUpperCase()}</small><strong>{item.title}</strong></span><ArrowUpRight size={19}/></button>)}</div>
    {results.length>100&&<p className="portal-muted">First 100 matches shown. Narrow your search to see more.</p>}{!results.length&&<div className="empty-state" data-testid="catalog-empty-state"><Compass/><h3>No matches.</h3><p>Try another name or keyword.</p><button className="portal-button" data-testid="search-clear" onClick={()=>{setQuery('');setScope('All');}}>Clear search</button></div>}
  </div></div></DialogContent></Dialog>;
};