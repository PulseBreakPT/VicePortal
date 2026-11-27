import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Link, useLocation } from 'react-router-dom';
import { MotionConfig, useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';
import { Toaster } from 'sonner';
import { useAtlas } from './hooks/useAtlas';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Marquee, World } from './components/World';
import { Characters, Wire } from './components/Stories';
import { Footer, Gallery } from './components/Gallery';
import { FreshLinks, TownHub } from './components/TownHub';
import { RockstarExperience, RockstarRibbon } from './components/RockstarExperience';
import { ExperienceTeaser, QuickDestinations } from './components/TownEdition';
import { Overlays } from './components/Overlays';
import { sections, sectionById } from './data/sections';
import { entries } from './data/portal';
import { CompactFooter, PortalLayout } from './components/portal/PortalLayout';
import SectionPage from './components/portal/SectionPage';
import DetailPage from './components/portal/DetailPage';
import DirectoryPage from './components/portal/DirectoryPage';
import 'lenis/dist/lenis.css';
import './App.css';
import './Town.css';
import './Rockstar.css';
import './Polish.css';
import './Portal.css';
import './TownEdition.css';
import './Nightfall.css';
import './Dossier.css';

function AtlasApp() {
  const atlas = useAtlas();
  const reduced = useReducedMotion();
  const { pathname, hash } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  const section = sections.find(s => s.path === path);
  const item = entries.find(e => e.path === path);
  const home = path === '/';
  const experience = path === '/experience';
  let area = section || sectionById[item?.collections[0]];
  while (area?.parent) area = sectionById[area.parent];
  useLayoutEffect(() => {
    window.scrollTo({top:0,behavior:'instant'});
    if(hash) requestAnimationFrame(()=>document.getElementById(hash.slice(1))?.scrollIntoView());
  }, [pathname, hash]);
  useEffect(() => {
    document.title = `${item?.title || section?.title || (path === '/directory' ? 'All pages' : 'Your GTA VI companion')} — Vice Atlas`;
  }, [item, section, path]);
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, anchors: true, autoRaf: true, prevent: node => node.hasAttribute('data-lenis-prevent') });
    return () => lenis.destroy();
  }, [reduced]);
  return <MotionConfig reducedMotion="user"><div className={`atlas-app ${!home?'portal-mode':''}`} data-atlas-area={area?.id || 'home'}>
    <a href="#main-content" className="skip-link" data-testid="skip-content">Skip to content</a>
    {home && <RockstarRibbon/>}
    <Navigation {...atlas}/>
    <main id="main-content" tabIndex={-1} data-testid="main-content">{home?<><Hero {...atlas}/><QuickDestinations/><TownHub {...atlas}/><Wire {...atlas}/><FreshLinks {...atlas}/><ExperienceTeaser/><World {...atlas}/><Marquee/><Characters {...atlas}/><Gallery {...atlas}/></>:experience?<div className="experience-page"><header className="experience-page-heading"><Link to="/directory" data-testid="experience-back">← All pages</Link><h1 data-testid="experience-title">THE GTA VI EXPERIENCE</h1></header><RockstarExperience {...atlas}/></div>:<PortalLayout><div key={path}>{section?<SectionPage section={section} atlas={atlas}/>:item?<DetailPage item={item} atlas={atlas}/>:path==='/directory'?<DirectoryPage/>:<div className="portal-not-found" data-testid="not-found"><span className="portal-kicker">404</span><h1 data-testid="not-found-title">Page not found</h1><p>Check the address or browse the directory.</p><Link to="/directory" className="portal-button" data-testid="not-found-directory">All pages</Link></div>}</div></PortalLayout>}</main>
    {home?<Footer {...atlas}/>:<CompactFooter/>}<Overlays {...atlas}/>
    <Toaster theme="dark" position="bottom-right" richColors/>
  </div></MotionConfig>;
}

export default function App() { return <BrowserRouter><AtlasApp/></BrowserRouter>; }