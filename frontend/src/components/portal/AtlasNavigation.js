import { useState } from 'react';
import { Sheet,SheetTrigger,SheetContent,SheetTitle,SheetDescription } from '../ui/sheet';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Compass, Map, Users, CircleCheck, CarFront, Crosshair, BookOpen, Radio, Newspaper, Images, Gamepad2, Film } from 'lucide-react';
import { childrenOf, rootSections, sectionById } from '../../data/sections';
import { entries } from '../../data/portal';

export const areaIcons={experience:Film,explore:Map,story:Users,progress:CircleCheck,garage:CarFront,weapons:Crosshair,guides:BookOpen,universe:Radio,news:Newspaper,media:Images,game:Gamepad2};
export const currentSection = pathname => sectionById[pathname.slice(1)] || sectionById[entries.find(e=>e.path===pathname)?.collections[0]];
export const rootOf = section => {let root=section;while(root?.parent)root=sectionById[root.parent];return root;};
const testId=id=>id.replaceAll('/','-');

const Branch = ({section,pathname,prefix,level=0}) => <div className={`atlas-tree-level level-${level}`}><Link to={section.path} data-testid={`${prefix}-${testId(section.id)}`} aria-current={pathname===section.path?'page':undefined}>{section.title}</Link>{childrenOf(section.id).map(child=><Branch section={child} pathname={pathname} prefix={prefix} level={level+1} key={child.id}/>)}</div>;

export const AtlasTree = ({prefix}) => {
  const {pathname}=useLocation();const active=rootOf(currentSection(pathname));
  return <nav className="atlas-tree" aria-label="Atlas categories">{rootSections.map(section=>{const Icon=areaIcons[section.id]||Compass;const subs=childrenOf(section.id);return subs.length?<details key={`${section.id}-${pathname}`} open={active?.id===section.id} data-testid={`${prefix}-group-${section.id}`}><summary data-testid={`${prefix}-expand-${section.id}`} className={active?.id===section.id?'active':''}><Icon size={16}/><span>{section.title}</span><ChevronDown size={13}/></summary><div className="atlas-tree-children"><Link to={section.path} data-testid={`${prefix}-${section.id}`} aria-current={pathname===section.path?'page':undefined}>Overview <ArrowUpRight size={12}/></Link>{subs.map(child=><Branch section={child} pathname={pathname} prefix={prefix} key={child.id}/>)}</div></details>:<Link key={section.id} className="atlas-tree-single" to={section.path} data-testid={`${prefix}-${section.id}`} aria-current={pathname===section.path?'page':undefined}><Icon size={16}/>{section.title}<ArrowUpRight size={13}/></Link>;})}</nav>;
};

export const MobileAtlasNavigation = () => {
 const {pathname}=useLocation();const active=currentSection(pathname);
 return <MobileNavigationSheet key={pathname} active={active}/>;
};
const MobileNavigationSheet=({active})=>{
 const [open,setOpen]=useState(false);
 return <div className="mobile-atlas-navigation site-mobile-navigation" data-testid="mobile-atlas-navigation"><Sheet open={open} onOpenChange={setOpen}>
 <SheetTrigger asChild><button type="button" className="site-mobile-trigger" data-testid="mobile-atlas-toggle"><Compass size={17}/><span>{active?.title||'Explore the atlas'}</span><span className="mobile-browse-label">Browse</span><ChevronDown size={15}/></button></SheetTrigger>
 <SheetContent side="right" className="site-ui-surface site-navigation-sheet" data-lenis-prevent><SheetTitle>Explore Vice Atlas</SheetTitle><SheetDescription>Choose a category or open the full directory.</SheetDescription><div className="site-navigation-scroll" data-lenis-prevent onClick={event=>{if(event.target.closest('a'))setOpen(false);}}><Link className="mobile-all-pages" to="/directory" data-testid="mobile-all-pages">All pages <ArrowUpRight size={16}/></Link><AtlasTree prefix="mobile-nav"/></div></SheetContent>
 </Sheet></div>;
};
