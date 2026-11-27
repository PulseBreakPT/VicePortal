import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { articles, characters, image } from '../data/catalog';
import { Reveal, SaveButton, SectionHeading } from './AtlasUI';

export const Characters = ({ open, saved, toggleSave }) => <section id="characters" className="characters-section" data-testid="characters-section">
  <div className="characters-backdrop"><img src={image('jason_and_lucia_01')} alt="" loading="lazy"/></div>
  <div className="characters-inner">
    <Reveal className="characters-intro"><span className="eyebrow" data-testid="characters-eyebrow"><span className="section-index">02</span> PROTAGONISTS</span><h2 className="display" data-testid="characters-heading">JASON &<br/><span className="soft-pink">LUCIA.</span></h2><p data-testid="characters-description">Meet the two leads through Rockstar’s official introductions.</p><button className="text-link" data-testid="characters-watch-trailer" onClick={() => open({ type: 'trailer' })}>Watch Trailer 2 <Play size={12} fill="currentColor"/></button><div className="duo-note" data-testid="characters-note"><span className="duo-line"/>GRAND THEFT AUTO VI<br/><small>Their backstories stay under wraps until you enable spoilers.</small></div></Reveal>
    <div className="character-cards">{characters.map((item, i) => <Reveal className={`character-card character-${i}`} key={item.id} delay={i * .12}>
      <img src={item.image} alt={`${item.title} in Grand Theft Auto VI`} loading="lazy"/><div className="card-scrim"/>
      <button className="card-click-target" data-testid={`character-open-${item.id}`} aria-label={`Read ${item.title}'s story`} onClick={() => open({ type: 'detail', item })}/>
      <div className="character-card-top"><span className="card-eyebrow" data-testid={`character-tag-${item.id}`}>{item.tag}</span><SaveButton prefix="character-save" item={item} saved={saved} toggleSave={toggleSave}/></div>
      <div className="character-card-copy"><span className="character-firstname display" data-testid={`character-name-${item.id}`}>{item.title.split(' ')[0]}<span>{item.title.split(' ')[1]}</span></span><p data-testid={`character-subtitle-${item.id}`}>{item.subtitle}</p><span className="character-read">MEET THE CAST <ArrowUpRight size={17}/></span></div>
    </Reveal>)}</div>
  </div>
</section>;

export const Wire = ({ open, saved, toggleSave }) => <section id="wire" className="section wire-section" data-testid="wire-section">
  <SectionHeading number="03" eyebrow="THE VICE WIRE" title="Features" description="A closer look at the footage, frames and places Rockstar has revealed." id="wire"/>
  <div className="wire-label-row"><span className="eyebrow" data-testid="wire-curated-label">FAN EDITORIAL</span><button className="text-link" data-testid="wire-all-stories" onClick={() => open({ type: 'stories' })}>Read the wire <ArrowRight size={16}/></button></div>
  <div className="article-grid">{articles.map((item, i) => <Reveal className="article-card" delay={i * .1} key={item.id}>
    <div className="article-photo"><img src={item.image} alt={item.subtitle} loading="lazy"/><button className="card-click-target" data-testid={`article-image-open-${item.id}`} aria-label={`Read ${item.title}`} onClick={() => open({ type: 'detail', item })}/><span className="article-category" data-testid={`article-category-${item.id}`}>{item.category}</span><SaveButton prefix="article-save" item={item} saved={saved} toggleSave={toggleSave}/></div>
    <div className="article-meta" data-testid={`article-meta-${item.id}`}><span>VICE ATLAS EDITORIAL</span><span>{item.readTime}</span></div><button className="article-title" data-testid={`article-open-${item.id}`} onClick={() => open({ type: 'detail', item })}><h3>{item.title}</h3><ArrowUpRight size={22}/></button><p data-testid={`article-subtitle-${item.id}`}>{item.subtitle}</p>
  </Reveal>)}</div>
</section>;