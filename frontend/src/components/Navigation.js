import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { Eye, EyeOff, Grid2X2, Search, Bookmark } from 'lucide-react';
import { sectionById } from '../data/sections';
import { entries } from '../data/portal';

export const TownMark = () => <svg width="30" height="34" viewBox="0 0 38 44" fill="currentColor" aria-hidden="true"><path d="M0 1h7l5 12L17 1h7l-9 21H9L0 1Zm26 0h7v21h-7V1ZM1 27l5-3h10v6H8l-1 1v6l1 1h8v6H6l-5-3V27Zm19-3h15v6h-8v2h7v5h-7v2h8v5H20V24Z"/></svg>;

export const Navigation = ({open,saved,spoilers,setSpoilers}) => {
  const [scrolled,setScrolled]=useState(false);
  const navRef=useRef(null);
  const reduced=useReducedMotion();
  const [indicator,setIndicator]=useState(null);
  const {pathname}=useLocation();
  const {scrollYProgress}=useScroll();
  const progress=useSpring(scrollYProgress,{stiffness:170,damping:35});
  let current=sectionById[pathname.slice(1)] || sectionById[entries.find(e=>e.path===pathname)?.collections[0]];
  while(current?.parent)current=sectionById[current.parent];
  const root=current?.id;
  useEffect(()=>{
    const nav=navRef.current;
    if(!nav)return;
    const measure=()=>{
      const active=nav.querySelector('.nav-active');
      if(!active||!nav.clientWidth){setIndicator(null);return;}
      setIndicator({x:active.offsetLeft,width:active.offsetWidth});
    };
    measure();
    const observer=typeof ResizeObserver==='function'?new ResizeObserver(measure):null;
    observer?.observe(nav);
    for(const link of nav.querySelectorAll('a'))observer?.observe(link);
    window.addEventListener('resize',measure,{passive:true});
    return()=>{observer?.disconnect();window.removeEventListener('resize',measure);};
  },[root]);
  useEffect(()=>{const handler=()=>setScrolled(window.scrollY>40);handler();window.addEventListener('scroll',handler,{passive:true});return()=>window.removeEventListener('scroll',handler);},[]);
  return <header className={`town-header ${scrolled?'is-stuck':''} ${pathname!=='/'?'portal-header':''}`} data-testid="site-header">
    <Link to="/" className="town-brand" aria-label="Vice Atlas home" data-testid="header-logo"><TownMark/><span className="town-wordmark">VICE<br/>ATLAS</span></Link>
    <nav ref={navRef} className="town-nav smooth-nav" data-smooth-nav-ready={indicator?true:undefined} aria-label="Main navigation">{[['Map','/map','explore'],['Story','/story','story'],['Progress','/progress','progress'],['Garage','/garage','garage'],['Guides','/guides','guides'],['News','/news','news']].map(([title,path,area])=><Link key={path} to={path} data-testid={`nav-${title.toLowerCase()}`} className={root===area?'nav-active':''} aria-current={pathname===path?'page':undefined}>{title}</Link>)}{indicator&&<motion.span className="smooth-nav-indicator" aria-hidden="true" initial={false} animate={{x:indicator.x,width:indicator.width}} transition={reduced?{duration:0}:{type:"spring",stiffness:340,damping:34,mass:.7}}/>}</nav>
    <div className="town-header-actions">
      <button className="spoiler-toggle" data-testid="spoiler-toggle" aria-label={`Spoilers ${spoilers?'on':'off'}`} title={`Spoilers ${spoilers?'on':'off'}`} aria-pressed={spoilers} onClick={()=>setSpoilers(!spoilers)}>{spoilers?<Eye size={17}/>:<EyeOff size={17}/>}<span>Spoilers {spoilers?'on':'off'}</span></button>
      <button className="town-icon" data-testid="open-search" aria-label="Search Vice Atlas" title="Search" onClick={()=>open({type:'search'})}><Search size={20}/></button>
      <Link to="/saved" className="town-icon your-atlas" data-testid="open-saved" title="Saved atlas" aria-label={`Your atlas: ${saved.length} saved items`}><Bookmark size={18}/>{saved.length>0&&<span className="saved-count" data-testid="saved-count">{saved.length}</span>}</Link>
      <Link to="/directory" className="town-all-pages" data-testid="open-menu" aria-label="All pages"><Grid2X2 size={17}/><span>All pages</span></Link>
    </div>
    <motion.div className="reading-progress" style={{scaleX:progress}} aria-hidden="true"/>
  </header>;
};