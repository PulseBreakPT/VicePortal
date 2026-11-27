import { Search, ArrowUpRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import { entries } from '../data/portal';
import { sections } from '../data/sections';

// Search is intentionally the only modal in the application.
export const Overlays = ({ modal, setModal, query, setQuery, open, triggerRef, spoilers }) => {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = [...sections,...entries].filter(item => {
    const text = `${item.title} ${item.kind} ${item.category || ''} ${item.spoiler && !spoilers ? '' : item.description || ''}`.toLowerCase();
    return words.every(word=>text.includes(word));
  });
  const results = query.trim() ? filtered : [sections.find(s=>s.id==='map'),sections.find(s=>s.id==='characters'),sections.find(s=>s.id==='vehicles'),sections.find(s=>s.id==='progress'),...entries.filter(e=>e.kind==='Region')];
  return <Dialog open={modal?.type === 'search'} onOpenChange={v=>{if(!v)setModal(null);}}><DialogContent className="atlas-modal modal-search" data-testid="atlas-modal" data-lenis-prevent onCloseAutoFocus={event=>{event.preventDefault();if(triggerRef.current?.isConnected)triggerRef.current.focus({preventScroll:true});}}><div className="atlas-modal-scroll" data-lenis-prevent><div className="list-modal">
    <span className="eyebrow">VICE ATLAS / SEARCH EVERYTHING</span><DialogTitle className="display" data-testid="list-title">FIND YOUR PARADISE.</DialogTitle><DialogDescription data-testid="list-description">People, places, pages and moments across Leonida.</DialogDescription>
    <label className="search-field"><Search size={20}/><input autoFocus data-testid="catalog-search-input" aria-label="Search the atlas" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try Jason, super cars or screenshots…"/></label>
    <p className="search-count" data-testid="search-result-count" aria-live="polite">{query.trim()?`${results.length} RESULTS`:'QUICK DESTINATIONS'}</p>
    <div data-testid="search-results">{results.map(item=><button className="portal-search-result" key={`${item.kind}-${item.id}`} data-testid={`search-open-${item.id.replaceAll('/','-')}`} onClick={()=>open({type:'detail',item})}><img src={item.image} alt=""/><span><small>{item.kind === 'Section'?'PAGE':item.kind.toUpperCase()}</small><strong>{item.title}</strong></span><ArrowUpRight size={18}/></button>)}</div>
    {!results.length&&<div className="empty-state" data-testid="catalog-empty-state"><Search/><h3>Nothing on the radar.</h3><p>Try another name, region or keyword.</p><button className="portal-button" data-testid="search-clear" onClick={()=>setQuery('')}>Clear search</button></div>}
  </div></div></DialogContent></Dialog>;
};