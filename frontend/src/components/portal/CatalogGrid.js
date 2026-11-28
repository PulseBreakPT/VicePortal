import { captureCardFlight } from '../../hooks/useCardFlight';
import { NeonCipher } from '../NeonCipher';
import { useMemo,useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, SlidersHorizontal, X, LayoutGrid, List, ChevronDown } from 'lucide-react';
import { SaveButton } from '../AtlasUI';
import { SiteSelect } from '../ui/site-select';
import { Popover,PopoverTrigger,PopoverContent } from '../ui/popover';
import { Checkbox } from '../ui/checkbox';
import { PAGE_SIZE,initialFilters,visibleItems,layoutFor,groupFor,filterItems,makeGroups,takeGroups } from './catalogueModel.mjs';

export const CatalogCard = ({item,atlas,prefix='catalog',order=0}) => {
  const [mediaState,setMediaState]=useState('pending');
  return <article data-cinema-order={order} style={{'--cinema-order':Math.min(order,11)}} className={`portal-card ${['Vehicle','Weapon','Radio station'].includes(item.kind)?'object-card':''} ${item.kind==='Character'?'person-card':''} ${['Image','Artwork'].includes(item.kind)?'media-card':''}`} data-testid={`${prefix}-card-${item.id}`}><Link to={item.path} onClick={event=>captureCardFlight(event,item)} className={`portal-card-image cinema-media-${mediaState}`} data-testid={`${prefix}-image-${item.id}`} tabIndex={-1} aria-hidden="true"><img src={item.image} alt="" loading="lazy" referrerPolicy={item.imageSource?'no-referrer':undefined} title={item.imageSource?`Image reference via ${item.imageSource}`:undefined} onLoad={()=>setMediaState('ready')} onError={e=>{if(item.imageFallback&&!e.currentTarget.src.endsWith(item.imageFallback)){e.currentTarget.src=item.imageFallback;}else setMediaState('failed');}}/><span>{item.kind}</span></Link><SaveButton item={item} saved={atlas.saved} toggleSave={atlas.toggleSave} prefix={`${prefix}-save`}/><div className="portal-card-copy"><small className={`record-status ${item.status==='Official source'?'official':''}`} data-testid={`${prefix}-status-${item.id}`}>{item.status}</small><Link to={item.path} onClick={event=>captureCardFlight(event,item)} data-testid={`${prefix}-open-${item.id}`}><h3><NeonCipher value={item.title} variant="card" block/></h3><ArrowUpRight size={19}/></Link><p data-testid={`${prefix}-description-${item.id}`}>{item.spoiler&&!atlas.spoilers?'Story details are hidden.':item.subtitle||item.category||item.description}</p>{item.dataCredit==='GTA Town'&&<a href={item.source} target="_blank" rel="noreferrer" style={{fontSize:11,display:'inline-block',marginTop:8}}>Data: GTA Town</a>}</div></article>;
};


const unique=values=>[...new Set(values.filter(Boolean))].sort((a,b)=>a.localeCompare(b));
const FilterSelect=({label,value,onChange,options,testId})=><div className="catalogue-field"><span>{label}</span><SiteSelect label={label} value={value} onChange={onChange} options={options} testId={testId}/></div>;

export const CatalogGrid = ({items,atlas,section,prefix='catalog',title='On file'}) => {
 const [filters,setFilters]=useState(initialFilters);
 const [limit,setLimit]=useState(PAGE_SIZE);
 const layout=layoutFor(section);
 const visible=useMemo(()=>visibleItems(items,atlas.spoilers),[items,atlas.spoilers]);
 const vehicleCollection=visible.some(e=>e.kind==='Vehicle');
 const isCharacterCollection=visible.length>0&&visible.every(e=>e.kind==='Character');
 const kinds=unique(visible.map(e=>e.kind));
 const makers=unique(visible.filter(e=>e.kind==='Vehicle').map(e=>e.attributes?.Manufacturer));
 const vehicleClasses=unique(visible.filter(e=>e.kind==='Vehicle').map(e=>e.category));
 const groups=unique(visible.map(e=>groupFor(e,layout)));
 const found=useMemo(()=>filterItems(visible,filters,layout),[visible,filters,layout]);
 const grouped=filters.grouped&&filters.sort==='featured'&&filters.group==='All';
 const ordered=useMemo(()=>makeGroups(found,layout,grouped),[found,layout,grouped]);
 const shown=takeGroups(ordered,limit);
 const active=['kind','maker','vehicleClass','coverage','group','sort'].filter(key=>filters[key]!==initialFilters[key]).length;
 const update=(key,value)=>{setFilters(old=>({...old,[key]:value}));setLimit(PAGE_SIZE);};
 const reset=()=>{setFilters(initialFilters);setLimit(PAGE_SIZE);};
 return <section className={'catalog-section cinematic-catalogue catalogue-'+layout} data-testid={prefix+'-section'}>
   <div className="portal-section-heading"><h2 data-testid={prefix+'-heading'}>{title}</h2><span data-testid={prefix+'-count'} aria-live="polite"><NeonCipher value={String(found.length).padStart(2,'0')} variant="number"/> {found.length===1?'entry':'entries'}</span></div>
   <div className="catalogue-toolbar">
     <label className="portal-input catalogue-search"><Search size={18}/><input value={filters.query} onChange={e=>update('query',e.target.value)} placeholder="Find an entry..." aria-label="Search this collection" data-testid={prefix+'-filter'}/>{filters.query&&<button type="button" onClick={()=>update('query','')} aria-label="Clear filter" data-testid={prefix+'-clear'}><X size={16}/></button>}</label>
     <Popover><div className="catalogue-filter-panel" data-testid={prefix+'-filter-panel'}>
       <PopoverTrigger asChild><button type="button" className="site-filter-trigger"><SlidersHorizontal size={17}/><span>Filters{active?' ('+active+')':''}</span><ChevronDown size={14}/></button></PopoverTrigger>
       <PopoverContent className="site-ui-surface site-filter-popover" align="end" sideOffset={6} collisionPadding={12} data-lenis-prevent onOpenAutoFocus={event=>event.preventDefault()}><div className="catalogue-filter-fields">
         {groups.length>1&&<FilterSelect label="Category" value={filters.group} onChange={value=>update('group',value)} options={['All',...groups]} testId={prefix+'-group'}/>}
         {kinds.length>1&&<FilterSelect label="Filter by type" value={filters.kind} onChange={value=>update('kind',value)} options={['All',...kinds]} testId={prefix+'-type'}/>}
         {vehicleCollection&&<><FilterSelect label="Vehicle manufacturer" value={filters.maker} onChange={value=>update('maker',value)} options={['All',...makers]} testId={prefix+'-manufacturer'}/><FilterSelect label="Vehicle class" value={filters.vehicleClass} onChange={value=>update('vehicleClass',value)} options={['All',...vehicleClasses]} testId={prefix+'-class'}/></>}
         {isCharacterCollection?<FilterSelect label="Filter by visual evidence" value={filters.coverage} onChange={value=>update('coverage',value)} options={ [['all','All image statuses'],['portrait','Image reference'],['context','Contextual image only'],['missing','No sourced image']]} testId={prefix+'-coverage'}/>:vehicleCollection&&<FilterSelect label="Image status" value={filters.coverage} onChange={value=>update('coverage',value)} options={ [['all','All image statuses'],['sourced','Image reference'],['placeholder','No sourced image']]} testId={prefix+'-coverage'}/>}
         <FilterSelect label="Sort entries" value={filters.sort} onChange={value=>update('sort',value)} options={ [['featured','Featured first'],['az','Name: A–Z'],['za','Name: Z–A'],...(vehicleCollection?[['speed','Speed rating'],['acceleration','Acceleration rating'],['handling','Handling rating']]:[])]} testId={prefix+'-sort'}/>
         <label className="catalogue-group-toggle"><Checkbox checked={filters.grouped} onCheckedChange={value=>update('grouped',value===true)} aria-label="Group by category" className="site-checkbox"/> Group by category</label>
         <div className="catalogue-filter-actions"><div className="catalog-view-toggle" role="group" aria-label="Collection layout">{[['grid',LayoutGrid],['list',List]].map(([mode,Icon])=><button type="button" key={mode} aria-label={mode+' view'} title={mode+' view'} aria-pressed={filters.view===mode} onClick={()=>update('view',mode)} data-testid={prefix+'-view-'+mode}><Icon size={17}/></button>)}</div><button type="button" className="catalogue-reset" onClick={reset} data-testid={prefix+'-reset-filters'}>Reset filters</button></div>
       </div></PopoverContent>
     </div></Popover>
   </div>
   <div className="catalogue-result-meta">{found.length>limit&&<span>Showing {limit}</span>}{(active>0||filters.query)&&<button type="button" onClick={reset}>Clear all <X size={13}/></button>}</div>
   <div data-testid={prefix+'-results'} className="catalogue-results">{shown.map((group,index)=><section className="catalogue-group" key={group.label} aria-labelledby={prefix+'-group-heading-'+index}>{grouped&&ordered.length>1&&<header className="catalogue-group-heading"><h3 id={prefix+'-group-heading-'+index}>{group.label}</h3><span>{group.total}</span></header>} {(!grouped||ordered.length===1)&&<h3 className="catalogue-sr-only" id={prefix+'-group-heading-'+index}>{group.label}</h3>}<div className={'portal-grid '+(filters.view==='list'?'is-list':'')}>{group.items.map((item,order)=><CatalogCard order={order} item={item} atlas={atlas} key={item.id} prefix={prefix}/>)}</div></section>)}</div>
   {!found.length&&<div className="portal-empty" data-testid={prefix+'-empty'}><Search size={30}/><h2>No matches on file.</h2><p>Try another name or category.</p><button className="portal-button" onClick={reset}>Reset filters</button></div>}
   {found.length>limit&&<div className="catalogue-more"><button type="button" className="portal-button" data-testid={prefix+'-load-more'} onClick={()=>setLimit(old=>old+PAGE_SIZE)}>Load {Math.min(PAGE_SIZE,found.length-limit)} more <ChevronDown size={17}/></button></div>}
 </section>;
};
