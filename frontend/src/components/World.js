import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { image, regions } from '../data/catalog';
import { Filters, Reveal, SaveButton } from './AtlasUI';

export const WorldPanorama = () => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  return <div className="world-panorama" ref={ref}>
    <motion.img src={image('rs-feature2')} alt="The official Vice City skyline at dusk" loading="lazy" style={reduced ? {} : { y }}/>
    <div className="world-panorama-shade"/>
    <div className="world-panorama-top"><span className="eyebrow" data-testid="world-eyebrow">01 / THE LEONIDA FIELD GUIDE</span><span className="world-edition" data-testid="world-edition">SIX REGIONS. ONE STATE.</span></div>
    <div className="world-panorama-copy"><Reveal><h2 data-testid="world-heading">SIX REGIONS.<br/><span>ZERO LIMITS.</span></h2></Reveal><Reveal className="world-panorama-description"><p data-testid="world-description">From neon-soaked streets to the middle of nowhere. Find your corner of the most beautiful, unpredictable state in America.</p><span>VICE CITY, LEONIDA <MapPin size={12}/></span></Reveal></div>
  </div>;
};

export const World = ({ open, saved, toggleSave }) => {
  const [filter, setFilter] = useState('All regions');
  const items = filter === 'All regions' ? regions : regions.filter(item => item.category === filter);
  return <section id="world" className="section world-section" data-testid="world-section">
    <WorldPanorama/>
    <div className="filter-row"><Filters options={['All regions', 'City life', 'Coast', 'The wilds']} value={filter} setValue={setFilter} prefix="regions"/><span className="result-label" data-testid="region-result-count">{String(items.length).padStart(2, '0')} PLACES TO GET LOST</span></div>
    <div className={`region-grid ${filter !== 'All regions' ? 'is-filtered' : ''}`} data-testid="region-grid">
      {items.map((item, i) => <Reveal key={item.id} className={`region-card region-${item.id}`} delay={i * .055}>
        <img src={item.image} alt={item.title === 'Mount Kalaga' ? 'Official Mount Kalaga National Park postcard' : `${item.title} in Grand Theft Auto VI`} loading="lazy"/>
        <div className="card-scrim"/>
        <button className="card-click-target" data-testid={`region-open-${item.id}`} onClick={() => open({ type: 'detail', item })} aria-label={`Explore ${item.title}`}/>
        <div className="card-top"><span className="region-label" data-testid={`region-category-${item.id}`}><MapPin size={11}/>{item.category}</span><SaveButton item={item} saved={saved} toggleSave={toggleSave} prefix="region-save"/></div>
        <div className="region-card-copy"><div><span className="card-eyebrow" data-testid={`region-number-${item.id}`}>REGION / {item.number}</span><h3 className="display" data-testid={`region-title-${item.id}`}>{item.title}</h3><p data-testid={`region-subtitle-${item.id}`}>{item.subtitle}</p></div><span className="round-arrow" aria-hidden="true"><ArrowUpRight size={23}/></span></div>
      </Reveal>)}
    </div>
    <div className="section-footnote" data-testid="world-footnote"><span><span className="tiny-cross">+</span> NOT A TOURIST. AN EXPLORER.</span><span>Officially introduced regions · Curated by fans</span></div>
  </section>;
};

export const Marquee = () => <div className="marquee" aria-label="Sunshine. Fast lives. No guarantees." data-testid="editorial-marquee"><div className="marquee-track" aria-hidden="true">{[0, 1, 2, 3].map(i => <span key={i}>SUNSHINE. <span className="marquee-star">✳</span> FAST LIVES. <span className="marquee-star">✳</span> NO GUARANTEES. <span className="marquee-star">✳</span> </span>)}</div></div>;