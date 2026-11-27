import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Eye, EyeOff, Menu, Search, UserRound } from 'lucide-react';

export const TownMark = () => <svg width="30" height="34" viewBox="0 0 38 44" fill="currentColor" aria-hidden="true"><path d="M0 1h7l5 12L17 1h7l-9 21H9L0 1Zm26 0h7v21h-7V1ZM1 27l5-3h10v6H8l-1 1v6l1 1h8v6H6l-5-3V27Zm19-3h15v6h-8v2h7v5h-7v2h8v5H20V24Z"/></svg>;
export const Navigation = ({open,saved,spoilers,setSpoilers}) => {
  const [scrolled,setScrolled]=useState(false);
  const {pathname}=useLocation();
  const {scrollYProgress}=useScroll();
  const progress=useSpring(scrollYProgress,{stiffness:170,damping:35});
  useEffect(()=>{const handler=()=>setScrolled(window.scrollY>40);handler();window.addEventListener('scroll',handler,{passive:true});return()=>window.removeEventListener('scroll',handler);},[]);
  return <header className={`town-header ${scrolled?'is-stuck':''} ${pathname!=='/'?'portal-header':''}`} data-testid="site-header">
    <Link to="/" className="town-brand" aria-label="Vice Atlas home" data-testid="header-logo"><TownMark/><span className="brand-tooltip">VICE ATLAS</span></Link>
    <nav className="town-nav" aria-label="Main navigation">{[['Experience','/experience'],['Map','/map'],['Story','/story'],['Progress','/progress'],['Garage','/garage'],['Guides','/guides']].map(([title,path])=><Link key={path} to={path} data-testid={`nav-${title.toLowerCase()}`} className={pathname===path?'nav-active':''} aria-current={pathname===path?'page':undefined}>{title}</Link>)}</nav>
    <div className="town-header-actions"><button className="spoiler-toggle" data-testid="spoiler-toggle" aria-pressed={spoilers} onClick={()=>setSpoilers(!spoilers)}>{spoilers?<Eye size={18}/>:<EyeOff size={18}/>}<span>Spoilers {spoilers?'on':'off'}</span></button><button className="town-icon" data-testid="open-search" aria-label="Search Vice Atlas" onClick={()=>open({type:'search'})}><Search size={21}/></button><Link to="/saved" className="town-icon your-atlas" data-testid="open-saved" aria-label={`Your atlas: ${saved.length} saved items`}><UserRound size={21}/>{saved.length>0&&<span className="saved-count" data-testid="saved-count">{saved.length}</span>}</Link><Link to="/directory" className="town-icon" data-testid="open-menu" aria-label="All pages"><Menu size={20}/></Link></div>
    <motion.div className="reading-progress" style={{scaleX:progress}} aria-hidden="true"/>
  </header>;
};