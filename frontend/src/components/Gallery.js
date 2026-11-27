import { useState } from 'react';
import { ArrowUpRight, Expand } from 'lucide-react';
import { gallery } from '../data/catalog';
import { Filters, Logo, Reveal, SectionHeading } from './AtlasUI';
import { AtlasFooterLinks } from './portal/PortalLayout';

export const Gallery = ({ open }) => {
  const [filter, setFilter] = useState('All frames');
  const items = filter === 'All frames' ? gallery : gallery.filter(item => item.category === filter);
  return <section id="gallery" className="section gallery-section" data-testid="gallery-section">
    <SectionHeading number="04" eyebrow="ROCKSTAR GAMES" title={<>OFFICIAL<br/><span className="soft-pink">SCREENSHOTS.</span></>} description="Paradise, caught in the act. Open a shot for the full image and source." id="gallery"/>
    <div className="filter-row"><Filters options={['All frames', 'The city', 'The people', 'The wilds']} value={filter} setValue={setFilter} prefix="gallery"/><span className="result-label" data-testid="gallery-result-count">{String(items.length).padStart(2, '0')} FRAMES / ROCKSTAR GAMES</span></div>
    <div className="gallery-grid">{items.map((item, i) => <Reveal className="gallery-card" key={item.id} delay={i * .06}><button data-testid={`gallery-open-${item.id}`} aria-label={`View ${item.title}`} onClick={() => open({ type: 'image', item })}><img src={item.image} alt={item.title} loading="lazy"/><span className="gallery-overlay"><span><small data-testid={`gallery-number-${item.id}`}>FRAME {String(gallery.indexOf(item) + 1).padStart(2, '0')}</small><strong data-testid={`gallery-title-${item.id}`}>{item.title}</strong></span><Expand size={20}/></span></button></Reveal>)}</div>
    <div className="section-footnote" data-testid="gallery-credit"><span>GTA VI SCREENSHOTS</span><span>All images © Rockstar Games</span></div>
  </section>;
};

export const Footer = ({ open }) => <footer data-testid="site-footer">
  <AtlasFooterLinks prefix="home-footer-index"/>
  <div className="footer-callout"><div className="footer-callout-top"><span className="eyebrow" data-testid="footer-tagline">INDEPENDENT GTA VI COMPANION</span><span className="footer-coordinate" data-testid="footer-note">NOT AFFILIATED WITH ROCKSTAR GAMES</span></div><div className="footer-headline-row"><Reveal><h2 className="display" data-testid="footer-heading">VICE<br/><span>ATLAS.</span></h2></Reveal><a href="#home" className="back-to-top" aria-label="Back to top" data-testid="back-to-top"><ArrowUpRight strokeWidth={1}/><span>BACK TO TOP</span></a></div><div className="footer-callout-bottom"><p data-testid="footer-description">The people, the roads and the world of GTA VI.</p><span className="footer-stamp" aria-hidden="true">VI<br/><small>ATLAS</small></span></div></div>
  <div className="footer-bar"><Logo footer/><p data-testid="footer-disclaimer">An independent field guide to Grand Theft Auto VI.<br/>Not affiliated with Rockstar Games or Take-Two Interactive.</p><div className="footer-links"><button data-testid="about-project" onClick={() => open({ type: 'about' })}>Behind the atlas</button><a href="https://www.rockstargames.com/VI" target="_blank" rel="noreferrer" data-testid="official-site-link">Official GTA VI <ArrowUpRight size={13}/></a></div><span className="footer-copyright" data-testid="footer-copyright">VICE ATLAS © 2026</span></div>
</footer>;