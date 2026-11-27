import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, BookOpen, CarFront, CheckCircle2, Map, Newspaper, Sun, Send } from 'lucide-react';
import { image } from '../data/catalog';

export const pauseItems = [
  { id: 'map', title: 'Map', icon: Map, thumb: 'vice_city_02', preview: 'leonida-night', action: 'map', caption: '' },
  { id: 'story', title: 'Story', icon: Send, thumb: 'story-preview', preview: 'story-preview', action: 'story', caption: '' },
  { id: 'progress', title: 'Progress', icon: CheckCircle2, thumb: 'vice_city_12', preview: 'vice_city_12', action: 'progress', caption: '' },
  { id: 'garage', title: 'Garage', icon: CarFront, thumb: 'garage-preview', preview: 'garage-preview', action: 'garage', caption: 'Street machines. Open-water escapes.' },
  { id: 'guides', title: 'Guides', icon: BookOpen, thumb: 'guides-preview', preview: 'guides-preview', action: 'guides', caption: 'Get to know your next obsession' },
  { id: 'news', title: 'News', icon: Newspaper, thumb: 'news-preview', preview: 'news-preview', action: 'stories', caption: 'Stories from our corner of Leonida' },
];

const countyLabels = [ ['LUMMOX COUNTY', 50, 16], ['LEONARD COUNTY', 63, 33], ['KELLY COUNTY', 39, 39], ['VICE-DALE COUNTY', 65, 66], ['MARIANA COUNTY', 43, 80] ];
export const NightMap = ({ labels = true }) => <div className="night-map"><img src={image('leonida-night')} alt="GTA Town’s night map of Leonida"/>{labels && countyLabels.map(([label, x, y]) => <span key={label} className="county-label" style={{ left: `${x}%`, top: `${y}%` }}>{label}</span>)}</div>;

export const Hero = ({ open, saved }) => {
  const [selected, setSelected] = useState('map');
  const [time, setTime] = useState('');
  const reduced = useReducedMotion();
  const rowRefs = useRef([]);
  const active = pauseItems.find(item => item.id === selected);
  useEffect(() => { const update = () => setTime(new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit' }).format(new Date())); update(); const interval = setInterval(update, 30000); return () => clearInterval(interval); }, []);
  const activate = item => { if (item.anchor) document.getElementById(item.anchor)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); else open({ type: item.action }); };
  const onKeyDown = (event, index) => { if (['ArrowDown', 'ArrowUp'].includes(event.key)) { event.preventDefault(); const next = (index + (event.key === 'ArrowDown' ? 1 : -1) + pauseItems.length) % pauseItems.length; setSelected(pauseItems[next].id); rowRefs.current[next]?.focus(); } };
  return <section id="home" className="pause-home" data-testid="hero-section">
    <div className="pause-column"><div className="pause-title-area"><h1 className="pause-title" data-testid="hero-heading">{['YOUR GTA 6', 'PAUSE MENU'].map((line, i) => <span className="pause-mask" key={line}><motion.span initial={reduced ? false : { y: '105%' }} animate={{ y: 0 }} transition={{ duration: .85, delay: .12 + i * .1, ease: [.16, 1, .3, 1] }}>{line}</motion.span></span>)}</h1><div className="pause-hud" data-testid="hero-hud"><span>LEONIDA</span><strong data-testid="eastern-time">{time}</strong><span className="hud-sun"><Sun size={15}/> SUNSHINE STATE</span><span className="hud-place">EASTERN TIME</span></div></div>
    <ol className="pause-menu" aria-label="Your GTA VI companion">{pauseItems.map((item, i) => <motion.li initial={reduced ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .25 + i * .055, duration: .45 }} key={item.id}><button ref={node => { rowRefs.current[i] = node; }} className={`pause-row ${selected === item.id ? 'selected' : ''}`} data-testid={`pause-${item.id}`} onMouseEnter={() => setSelected(item.id)} onFocus={() => setSelected(item.id)} onKeyDown={event => onKeyDown(event, i)} onClick={() => activate(item)}>{selected === item.id && <motion.span className="pause-selection" layoutId={reduced ? undefined : 'pause-menu-selection'} transition={{ type: 'spring', stiffness: 460, damping: 39 }} aria-hidden="true"/>}<item.icon className="pause-row-icon" size={19} strokeWidth={1.9}/><span className="pause-row-copy"><strong>{item.title}</strong>{item.caption && <span>{item.caption}</span>}{item.id === 'progress' && saved.length > 0 && <span>{saved.length} things saved to your atlas</span>}</span><ArrowUpRight className="pause-row-arrow" size={18} aria-hidden="true"/><img src={image(item.thumb)} alt="" className="pause-thumbnail"/></button></motion.li>)}</ol></div>
    <div className="pause-art" data-testid="pause-art"><AnimatePresence mode="sync">{selected === 'map' ? <motion.button className="pause-map-button" key="map" aria-label="Open the Leonida region map" data-testid="hero-map-open" onClick={() => open({ type: 'map' })} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .4 }}><NightMap/><span className="pause-art-hint">EXPLORE LEONIDA <ArrowUpRight size={15}/></span></motion.button> : <motion.button className="pause-photo-button" key={active.id} data-testid={`hero-preview-${active.id}`} aria-label={`Open ${active.title}`} onClick={() => activate(active)} initial={{ opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }}><img src={image(active.preview)} alt={`${active.title} in Grand Theft Auto VI`}/><span className="pause-photo-caption"><small>VICE ATLAS / {active.title.toUpperCase()}</small><strong>{active.title}</strong><ArrowUpRight size={32}/></span></motion.button>}</AnimatePresence></div>
    <a href="#jump-in" data-testid="pause-jump-down" className="pause-scroll"><ArrowDown size={13}/> MORE TO DISCOVER</a>
  </section>;
};