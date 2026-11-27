import { NeonCipher } from '../NeonCipher';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronRight, ChevronDown, Compass, Bookmark } from 'lucide-react';
import { childrenOf, rootSections, sectionById } from '../../data/sections';
import { entriesFor } from '../../data/portal';
import { Reveal } from '../AtlasUI';
import { DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem } from '../ui/dropdown-menu';
import { AtlasTree, MobileAtlasNavigation, rootOf } from './AtlasNavigation';

const tid=id=>id.replaceAll('/','-');
export const Breadcrumbs = ({section,item}) => {
  const parents=[];let current=section;while(current){parents.unshift(current);current=sectionById[current.parent];}
  return <nav className="portal-breadcrumbs" aria-label="Breadcrumb" data-testid="breadcrumbs"><Link to="/" data-testid="breadcrumb-home">Vice Atlas</Link>{parents.map(p=><span key={p.id}><ChevronRight size={11}/><Link to={p.path} data-testid={`breadcrumb-${tid(p.id)}`} aria-current={!item&&p.id===section?.id?'page':undefined}>{p.title}</Link></span>)}{item&&<span data-testid="breadcrumb-current"><ChevronRight size={11}/>{item.title}</span>}</nav>;
};
export const Sidebar = () => <aside className="portal-sidebar" data-testid="portal-sidebar" data-lenis-prevent><Link className="sidebar-home" to="/directory" data-testid="sidebar-directory"><Compass size={17}/><span>FULL INDEX</span><ArrowUpRight size={15}/></Link><AtlasTree prefix="sidebar"/><div className="sidebar-note"><Bookmark size={16}/><p data-testid="sidebar-storage">Your saved entries & checklist<br/><strong>Kept on this device.</strong></p></div></aside>;
export const PortalLayout = ({children}) => <div className="portal-layout"><Sidebar/><div className="portal-main"><MobileAtlasNavigation/>{children}</div></div>;

export const PageHero = ({section,eyebrow,children,compact=false}) => {
  const records=entriesFor(section.id).length;const subpages=childrenOf(section.id).length;
  const root=rootOf(section);const tool=['map','compare','weapons/compare','progress','progress/checklist','saved'].includes(section.id);
  return <section className={`portal-hero ${compact?'catalogue-hero':''} ${tool?'tool-hero':''} ${section.id==='weapons'||section.id.startsWith('weapons/')?'object-hero':''}`} data-testid="page-hero"><img src={section.image} alt="" className="portal-hero-image"/><div className="portal-hero-scrim"/><Reveal className="portal-hero-copy"><span className="portal-kicker" data-testid="page-kicker">{eyebrow||`VICE ATLAS / ${root?.title?.toUpperCase()||'LEONIDA'}`}</span><h1 data-testid="page-title"><NeonCipher value={section.title} block/></h1><p data-testid="page-description">{section.description}</p><div className="portal-hero-meta" data-testid="page-meta">{records>0&&<span><NeonCipher value={String(records).padStart(2,'0')} variant="number"/> entries</span>}{subpages>0&&<span><NeonCipher value={String(subpages).padStart(2,'0')} variant="number"/> destinations</span>}<span>LEONIDA / FIELD GUIDE</span></div>{children}</Reveal><span className="portal-hero-index" aria-hidden="true">VICE<br/>ATLAS<span>VI</span></span></section>;
};

export const Subsections = ({section}) => {
  const children=childrenOf(section.id);
  if(!children.length)return null;
  return <div className="catalogue-destinations" data-testid="subsections"><DropdownMenu><DropdownMenuTrigger asChild><button type="button" className="site-destinations-trigger"><span>Explore {section.title}</span><small>{children.length} pages</small><ChevronDown size={16}/></button></DropdownMenuTrigger><DropdownMenuContent className="site-ui-surface site-destinations-menu" align="start" collisionPadding={12} data-lenis-prevent aria-label={section.title+' pages'}>{children.map(s=><DropdownMenuItem asChild key={s.id}><Link to={s.path} data-testid={`subsection-${tid(s.id)}`}>{s.title}<ArrowUpRight size={14}/></Link></DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu></div>;
};

export const AtlasFooterLinks = ({prefix='footer-index'}) => <section className="atlas-footer-index"><div className="atlas-footer-index-heading"><h2 data-testid={`${prefix}-heading`}>Your next stop</h2><Link to="/directory" data-testid={`${prefix}-all`}>Full index <ArrowUpRight size={17}/></Link></div><div className="atlas-footer-columns">{rootSections.filter(s=>s.id!=='experience').map(section=><nav key={section.id} aria-label={`Footer ${section.title}`}><Link to={section.path} className="footer-area-title" data-testid={`${prefix}-${section.id}`}>{section.title}</Link>{childrenOf(section.id).slice(0,4).map(s=><Link key={s.id} to={s.path} data-testid={`${prefix}-${tid(s.id)}`}>{s.title}</Link>)}</nav>)}</div></section>;
export const CompactFooter = () => <footer data-testid="portal-footer"><AtlasFooterLinks/><div className="portal-footer"><Link to="/" data-testid="portal-footer-home">VICE ATLAS</Link><p data-testid="portal-footer-disclaimer">Independent GTA VI field guide.<br/>Not affiliated with Rockstar Games or Take-Two Interactive.</p><div><Link to="/experience" data-testid="portal-footer-experience">The experience</Link><Link to="/about" data-testid="portal-footer-about">About & credits</Link><Link to="/directory" data-testid="portal-footer-directory">Full index <ArrowRight size={13}/></Link></div></div></footer>;