import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, Play } from 'lucide-react';
import { image } from '../data/catalog';
import { Reveal } from './AtlasUI';

export const RockstarRibbon = () => <a className="rockstar-ribbon" href="#experience" data-testid="rockstar-ribbon"><span>WELCOME TO LEONIDA</span><i>•</i><span>EXPLORE THE GRAND THEFT AUTO VI EXPERIENCE</span><ArrowRight size={14}/></a>;

const OfficialPoster = ({ open }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, .5, 1], [.91, 1, 1.035]);
  const y = useTransform(scrollYProgress, [0, 1], [35, -35]);
  return <div className="rs-poster-section" ref={ref}>
    <Reveal className="rs-chapter-mark"><span data-testid="rs-chapter-label">THE WORLD OF</span><h2 data-testid="rs-chapter-title">GRAND THEFT AUTO VI</h2><span className="rs-chapter-line"/></Reveal>
    <motion.div className="rs-poster-frame" style={reduced ? {} : { scale, y }}><img src={image('rs-poster-2')} alt="Official Grand Theft Auto VI poster featuring Jason, Lucia and the people of Leonida" loading="lazy" data-testid="rs-official-poster"/></motion.div>
    <div className="rs-poster-info"><div><strong data-testid="rs-poster-welcome">WELCOME TO LEONIDA</strong><span data-testid="rs-poster-subtitle">THE OTHER SIDE OF PARADISE</span></div><button className="rs-pill" onClick={() => open({ type: 'trailer' })} data-testid="rs-poster-watch">Watch Trailer 2 <Play size={13} fill="currentColor"/></button><div className="rs-fan-label" data-testid="rs-unofficial-label"><span>OFFICIAL WORLD. FAN PERSPECTIVE.</span><strong>VICE ATLAS</strong></div></div>
    <a className="rs-down" href="#rs-trailer" aria-label="Explore the cinematic trailer section" data-testid="rs-poster-down"><ChevronDown size={35}/></a>
  </div>;
};

const TrailerScene = ({ open }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '5%']);
  return <section className="rs-trailer-scene" id="rs-trailer" ref={ref} data-testid="rs-trailer-section">
    <motion.picture className="rs-trailer-art" style={reduced ? {} : { y }}><source media="(max-width: 650px)" srcSet={image('rs-launch-mobile')}/><img src={image('rs-launch')} alt="Official artwork of Jason and Lucia beside a red car at sunset in Leonida" loading="lazy"/></motion.picture>
    <div className="rs-trailer-shade"/>
    <Reveal className="rs-trailer-heading"><p data-testid="rs-trailer-watch-label">WATCH</p><h2 data-testid="rs-trailer-heading">TRAILER 2</h2></Reveal>
    <button className="rs-cinema-play" data-testid="rs-trailer-play" aria-label="Watch official Grand Theft Auto VI Trailer 2" onClick={() => open({ type: 'trailer' })}><Play size={37} fill="currentColor" strokeWidth={1}/></button>
    <div className="rs-scene-bottom"><span data-testid="rs-trailer-credit">ARTWORK © ROCKSTAR GAMES</span><span data-testid="rs-trailer-caption">TRUST IS ALL THEY HAVE.</span><a href="#rs-only-in-leonida" data-testid="rs-trailer-next" aria-label="Discover the people and places of Leonida"><ArrowDown size={19}/></a></div>
  </section>;
};

const WorldFeature = ({ open }) => <section className="rs-editorial" id="rs-only-in-leonida" data-testid="rs-editorial-section">
  <Reveal className="rs-editorial-intro"><span data-testid="rs-editorial-eyebrow">A ROCKSTAR GAMES WORLD</span><h2 data-testid="rs-editorial-heading">THE DARKEST SIDE OF<br/>THE SUNNIEST PLACE<br/><em>IN AMERICA.</em></h2><p data-testid="rs-editorial-description">The people. The places. The beautiful contradictions.<br/>There’s nowhere else quite like Leonida.</p></Reveal>
  <Reveal className="rs-feature rs-leonida-feature"><picture><source media="(max-width: 650px)" srcSet={image('rs-leonida-mobile')}/><img src={image('rs-leonida')} alt="A Leonida resident relaxing on a pink flamingo float in a swimming pool" loading="lazy"/></picture><div className="rs-feature-shade"/><div className="rs-feature-copy"><span data-testid="rs-leonida-category">People & Places</span><h3 data-testid="rs-leonida-title">Only in<br/>Leonida</h3><p data-testid="rs-leonida-description">Vice City, USA. The darkest side of the sunniest place in America.</p><button className="rs-pill" data-testid="rs-leonida-explore" onClick={() => open({ type: 'map' })}>Explore More <ArrowRight size={17}/></button></div></Reveal>
  <Reveal className="rs-feature rs-screens-feature"><img src={image('rs-screens')} alt="Lucia and Jason under the neon lights of a Vice City nightclub" loading="lazy"/><div className="rs-feature-shade"/><div className="rs-feature-copy"><span data-testid="rs-screens-category">A Closer Look</span><h3 data-testid="rs-screens-title">Every frame.<br/>All Leonida.</h3><p data-testid="rs-screens-description">Step inside the official screenshots of Grand Theft Auto VI.</p><a href="#gallery" className="rs-pill" data-testid="rs-screens-explore">View Screenshots <ArrowRight size={17}/></a></div></Reveal>
  <div className="rs-editorial-end"><span data-testid="rs-editorial-source">OFFICIAL ARTWORK & SCREENSHOTS © ROCKSTAR GAMES</span><a href="https://www.rockstargames.com/VI" target="_blank" rel="noreferrer" data-testid="rs-visit-official">Visit the official GTA VI website <ArrowUpRight size={15}/></a></div>
</section>;

export const RockstarExperience = ({ open }) => <section className="rockstar-experience" id="experience" data-testid="rockstar-experience"><OfficialPoster open={open}/><TrailerScene open={open}/><WorldFeature open={open}/></section>;