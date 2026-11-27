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
import { Overlays } from './components/Overlays';
import { sections } from './data/sections';
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

function AtlasApp() {
  const atlas = useAtlas();
  const reduced = useReducedMotion();
  const { pathname, hash } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  const section = sections.find(s => s.path === path);
  const item = entries.find(e => e.path === path);
  const home = path === '/';
  const experience = path === '/experience';
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
  return <MotionConfig reducedMotion="user"><div className={`atlas-app ${!home?'portal-mode':''}`}>
    <a href="#main-content" className="skip-link" data-testid="skip-content">Skip to content</a>
    {home && <RockstarRibbon/>}
    <Navigation {...atlas}/>
    <main id="main-content" tabIndex={-1} data-testid="main-content">{home?<><Hero {...atlas}/><TownHub {...atlas}/><RockstarExperience {...atlas}/><Wire {...atlas}/><FreshLinks {...atlas}/><World {...atlas}/><Marquee/><Characters {...atlas}/><Gallery {...atlas}/></>:experience?<div className="experience-page"><RockstarExperience {...atlas}/></div>:<PortalLayout><div key={path}>{section?<SectionPage section={section} atlas={atlas}/>:item?<DetailPage item={item} atlas={atlas}/>:path==='/directory'?<DirectoryPage/>:<div className="portal-not-found" data-testid="not-found"><span className="portal-kicker">OFF THE MAP / 404</span><h1>Wrong turn.<br/>Right state.</h1><p>This page isn’t in the atlas.</p><Link to="/directory" className="portal-button" data-testid="not-found-directory">Find your way back</Link></div>}</div></PortalLayout>}</main>
    {home?<Footer {...atlas}/>:<CompactFooter/>}<Overlays {...atlas}/>
    <Toaster theme="dark" position="bottom-right" richColors/>
  </div></MotionConfig>;
}

export default function App() { return <BrowserRouter><AtlasApp/></BrowserRouter>; }