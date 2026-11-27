import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { checklist, entryById, getItemPath } from '../data/portal';

const readIds = key => { try { const value = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(value) ? [...new Set(value.filter(id => typeof id === 'string'))] : []; } catch { return []; } };

export const useAtlas = () => {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(() => readIds('vice-atlas-saved').filter(id => entryById[id]));
  const [completed, setCompleted] = useState(() => readIds('vice-atlas-completed').filter(id => checklist.some(task => task.id === id)));
  const [modal, setModal] = useState(null);
  const [query, setQuery] = useState('');
  const [spoilers, updateSpoilers] = useState(() => { try { return localStorage.getItem('vice-atlas-spoilers') === 'true'; } catch { return false; } });
  const setSpoilers = useCallback(value => { updateSpoilers(value); try { localStorage.setItem('vice-atlas-spoilers', String(value)); } catch { /* The preference remains active for this visit. */ } }, []);
  const triggerRef = useRef(null);
  const open = useCallback((value) => {
    if (value.type === 'search') { triggerRef.current = document.activeElement; setQuery(''); setModal({type:'search'}); return; }
    setModal(null);
    const paths = { map:'/map', world:'/regions', story:'/story', characters:'/characters', progress:'/progress', saved:'/saved', garage:'/garage', guides:'/guides', stories:'/news', gallery:'/screenshots', menu:'/directory', about:'/about', trailer:'/videos/trailer-2' };
    navigate(value.item ? value.item.path || getItemPath(value.item) : paths[value.type] || '/directory');
  }, [navigate]);
  const toggleSave = useCallback((id) => {
    setSaved(previous => {
      const next = previous.includes(id) ? previous.filter(value => value !== id) : [...previous, id];
      try { localStorage.setItem('vice-atlas-saved', JSON.stringify(next)); } catch { toast.error('Your browser could not store this atlas. Saved items will last until you leave this page.'); }
      return next;
    });
  }, []);
  const toggleComplete = useCallback(id => {
    setCompleted(previous => { const next = previous.includes(id) ? previous.filter(x => x !== id) : [...previous,id]; try {localStorage.setItem('vice-atlas-completed',JSON.stringify(next));} catch {toast.error('Progress could not be stored. It will last for this visit only.');} return next; });
  }, []);
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('item');
    const item = entryById[id];
    if (item) navigate(item.path, {replace:true});
  }, [navigate]);
  useEffect(() => {
    const keyDown = event => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') { event.preventDefault(); open({ type: 'search' }); }
    };
    window.addEventListener('keydown', keyDown);
    return () => window.removeEventListener('keydown', keyDown);
  }, [open]);
  return { saved, toggleSave, completed, toggleComplete, modal, setModal, query, setQuery, open, triggerRef, spoilers, setSpoilers };
};