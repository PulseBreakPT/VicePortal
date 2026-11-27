import { Link } from 'react-router-dom';
import { ArrowUpRight, FileSearch, ArrowRight } from 'lucide-react';
import { entriesFor } from '../../data/portal';
import { vehicleFeedInfo } from '../../data/vehicleRecords';
import { sectionById } from '../../data/sections';
import { Breadcrumbs, PageHero, Subsections } from './PortalLayout';
import { CatalogGrid } from './CatalogGrid';
import { MapPage } from './MapPage';
import { ProgressPage } from './ProgressPage';
import { ComparePage } from './ComparePage';

const faq=[
  ['Is Vice Atlas an official Rockstar website?','No. Vice Atlas is an independent fan companion. It is not affiliated with Rockstar Games or Take-Two Interactive.'],
  ['Which platforms does Rockstar list?','The official GTA VI site lists PlayStation 5 and Xbox Series X|S. Check Rockstar’s current announcements for availability. No PC release is inferred here.'],
  ['Does this track my game save?','No. The checklist records your exploration of this atlas. It is not connected to GTA VI and does not calculate an in-game completion percentage.'],
  ['Where are my bookmarks stored?','In this browser’s local storage on this device. Another browser or device has a separate collection. Clearing site storage removes your saved entries and checklist.'],
  ['Why are some catalogs still empty?','They have not yet received source-checked entries. An empty index is not a claim that the feature is absent from the game.'],
  ['Are community identifications official specifications?','No. Community catalog entries are labelled separately. Unverified prices, damage values, speeds and unlock requirements are not filled with guesses or statistics from another GTA game.'],
];
const Coverage = ({section}) => <section className="coverage-section" data-testid="coverage-status"><div><FileSearch size={26}/><span className="portal-kicker">{section.title.toUpperCase()}</span><h2 data-testid="coverage-heading">Nothing filed yet.</h2></div><div><span className="coverage-status" data-testid="coverage-label">PENDING SOURCE CHECK</span><p data-testid="coverage-description">Nothing has passed our source checks for this section yet. That does not mean it is missing from GTA VI.</p><p data-testid="coverage-policy">We do not fill gaps with data from other GTA games.</p><div><a href="https://www.rockstargames.com/VI" target="_blank" rel="noreferrer" data-testid="coverage-official-source">Official GTA VI site <ArrowUpRight size={16}/></a><Link to="/guides/getting-started/source-guide" data-testid="coverage-source-policy">Sources and verification <ArrowRight size={16}/></Link></div></div></section>;

export default function SectionPage({section,atlas}) {
  const items=entriesFor(section.id);
  const progress=['progress','progress/checklist','saved'].includes(section.id);
  const compare=['compare','weapons/compare'].includes(section.id);
  return <><Breadcrumbs section={section}/><PageHero section={section} compact={items.length>0&&!progress&&!compare}/><Subsections section={section}/>{section.id==='map'&&<MapPage/>}{progress&&<ProgressPage atlas={atlas} savedOnly={section.id==='saved'}/>} {compare&&<ComparePage weapons={section.id==='weapons/compare'} spoilers={atlas.spoilers}/>}
    {(section.id==='garage'||section.id==='vehicles'||section.id.startsWith('vehicles/'))&&<p className="portal-muted" data-testid="vehicle-catalogue-source">{vehicleFeedInfo.complete?'Imported public vehicle catalogue.':`${vehicleFeedInfo.count} of ${vehicleFeedInfo.publicListCount} listed vehicles imported; ${vehicleFeedInfo.hiddenCount} hidden by the source. Enable spoilers to view story-sensitive entries.`} <a href="https://gtatown.com/creators/data" target="_blank" rel="noreferrer">Data: GTA Town · CC BY 4.0</a></p>}
    {section.id==='guides/faq'&&<section className="faq-list" data-testid="faq-list">{faq.map(([q,a],i)=><details key={q}><summary data-testid={`faq-question-${i}`}>{q}<span>+</span></summary><p data-testid={`faq-answer-${i}`}>{a}</p></details>)}<a href="https://www.rockstargames.com/VI" target="_blank" rel="noreferrer" className="portal-source-link" data-testid="faq-source">Official GTA VI site <ArrowUpRight size={16}/></a></section>}
    {!progress&&!compare&&section.id!=='guides/faq'&&(items.length?<CatalogGrid items={items} atlas={atlas} section={section} title={section.id==='story'?'The faces behind the story':section.id==='media'?'Straight from the official archive':'The files'}/>:section.id!=='map'&&<Coverage section={section}/>)}
    {!items.length&&!progress&&!compare&&section.id!=='map'&&section.parent&&<div className="portal-return"><Link to={sectionById[section.parent].path} data-testid="return-parent">Explore {sectionById[section.parent].title}<ArrowRight size={17}/></Link><Link to="/directory" data-testid="return-directory">Full index <ArrowUpRight size={17}/></Link></div>}
  </>;
}