import { Odometer } from '../Odometer';
import { NeonCipher } from '../NeonCipher';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bookmark, Check, Circle, CircleCheck } from 'lucide-react';
import { checklist, entries } from '../../data/portal';
import { CatalogGrid } from './CatalogGrid';

export const ProgressPage = ({atlas,savedOnly=false}) => {
  const [filter,setFilter]=useState('All');
  const count=checklist.filter(t=>atlas.completed.includes(t.id)).length;
  const percent=Math.round(count/checklist.length*100);
  const savedItems=entries.filter(e=>atlas.saved.includes(e.id));
  return <div className="progress-page"><div className="progress-stats" data-testid="progress-summary"><div><CircleCheck/><strong data-testid="completed-total"><Odometer value={count}/><small> / {checklist.length}</small></strong><span>Atlas tasks checked off</span></div><div><Bookmark/><strong data-testid="saved-total"><Odometer value={savedItems.length}/></strong><span>Entries bookmarked</span></div><div><span className="device-dot"/><strong className="device-label">THIS DEVICE</strong><span>Local only. No account or game-save link.</span></div></div>
    {!savedOnly&&<section className="checklist-section"><div className="portal-section-heading"><h2 data-testid="personal-checklist-heading">Personal checklist</h2><span data-testid="checklist-percentage"><NeonCipher value={`${percent}%`} variant="number"/> of this personal checklist</span></div><div className="checklist-meter" role="progressbar" aria-label="Personal atlas checklist completion" aria-valuenow={count} aria-valuemin={0} aria-valuemax={checklist.length} data-testid="checklist-meter"><span style={{width:`${percent}%`}}/></div><p className="portal-muted" data-testid="progress-disclaimer">Track your way through this atlas, not GTA VI’s in-game completion.</p><div className="portal-tabs">{['All','Open','Completed'].map(f=><button key={f} aria-pressed={filter===f} className={filter===f?'active':''} data-testid={`checklist-filter-${f.toLowerCase()}`} onClick={()=>setFilter(f)}>{f}</button>)}</div>
      <div className="checklist-rows">{checklist.filter(t=>filter==='All'||(filter==='Completed'?atlas.completed.includes(t.id):!atlas.completed.includes(t.id))).map(task=><div className={`checklist-row ${atlas.completed.includes(task.id)?'completed':''}`} key={task.id}><button role="checkbox" aria-checked={atlas.completed.includes(task.id)} aria-label={task.title} onClick={()=>atlas.toggleComplete(task.id)} data-testid={`checklist-toggle-${task.id}`}>{atlas.completed.includes(task.id)?<Check size={18}/>:<Circle size={18}/>}</button><span><small>{task.group}</small><strong>{task.title}</strong></span><Link to={task.path} aria-label={`Open: ${task.title}`} data-testid={`checklist-open-${task.id}`}><ArrowUpRight size={20}/></Link></div>)}</div>
      {filter==='Completed'&&!count&&<p className="portal-empty-line" data-testid="checklist-empty">No completed tasks.</p>}{filter==='Open'&&count===checklist.length&&<p className="portal-empty-line" data-testid="checklist-all-done">All atlas tasks completed.</p>}
    </section>}
    {savedItems.length?<CatalogGrid items={savedItems} atlas={atlas} prefix="saved" title="Saved entries"/>:<div className="portal-empty" data-testid="saved-empty"><Bookmark size={32}/><h2>Nothing bookmarked yet.</h2><p>Keep profiles and images here for your next visit.</p><Link className="portal-button" to="/regions" data-testid="saved-start-exploring">Browse regions <ArrowUpRight size={16}/></Link></div>}
  </div>;
};