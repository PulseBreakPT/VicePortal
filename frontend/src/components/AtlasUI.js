import { NeonCipher } from './NeonCipher';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Bookmark, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const Logo = ({ footer = false }) => <Link to="/" className={`brand ${footer ? 'brand-footer' : ''}`} aria-label="Vice Atlas home" data-testid={footer ? 'footer-logo' : 'header-logo'}>
  <svg className="brand-mark" width="41" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true"><path d="M2 6h9l9 24L30 6h10L24 40h-9L2 6Z" fill="currentColor"/><path d="M26 7 22 0h15l-4 7z" fill="var(--gta-coral)"/><path d="M6 17h29M9 23h23" stroke="var(--gta-midnight)" strokeWidth="2"/></svg>
  <span className="brand-type">VICE<span>ATLAS<span className="brand-dot">®</span></span></span>
</Link>;

export const Reveal = ({ children, className = '', delay = 0, ...props }) => {
  const reduced = useReducedMotion();
  const blur = className === 'section-description';
  return <motion.div initial={reduced ? false : { opacity: 0, y: 30, ...(blur?{filter:'blur(3px)'}:{}) }} whileInView={{ opacity: 1, y: 0, ...(blur?{filter:'blur(0px)'}:{}) }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: reduced ? 0 : .65, delay: reduced ? 0 : Math.min(delay,.28), ease: [.22, 1, .36, 1] }} className={className} {...props}>{children}</motion.div>;
};

export const Action = ({ children, secondary = false, arrow = true, className = '', ...props }) => <Button className={`atlas-button ${secondary ? 'secondary' : ''} ${className}`} {...props}>{children}{arrow && <ArrowUpRight size={17}/>}</Button>;

export const SaveButton = ({ item, saved, toggleSave, prefix = 'save', text = false, compact = false }) => <button className={`save-button ${saved.includes(item.id) ? 'is-saved' : ''} ${text ? 'with-text' : ''}`} data-testid={`${prefix}-${item.id}`} aria-label={`${saved.includes(item.id) ? 'Remove' : 'Save'} ${item.title}`} title={`${saved.includes(item.id) ? 'Remove bookmark' : 'Save entry'}`} aria-pressed={saved.includes(item.id)} onClick={(e) => { e.stopPropagation(); toggleSave(item.id); }}>{saved.includes(item.id) ? <Check size={17}/> : <Bookmark size={17}/>} {text && (compact ? (saved.includes(item.id) ? 'Saved' : 'Save entry') : (saved.includes(item.id) ? 'Saved to your atlas' : 'Save to your atlas'))}</button>;

export const SectionHeading = ({ number, eyebrow, title, description, id }) => <div className="section-heading">
  <Reveal><span className="eyebrow" data-testid={`${id}-eyebrow`}><span className="section-index">{number}</span>{eyebrow}</span><h2 className="display section-title" data-testid={`${id}-heading`}><NeonCipher value={title} block/></h2></Reveal>
  {description && <Reveal className="section-description"><p data-testid={`${id}-description`}>{description}</p></Reveal>}
</div>;

export const Filters = ({ options, value, setValue, prefix }) => <div className="filter-list" aria-label={`${prefix} filters`}>
  {options.map(option => <button key={option} className={`filter-button ${value === option ? 'active' : ''}`} aria-pressed={value === option} data-testid={`${prefix}-filter-${option.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setValue(option)}>{option}</button>)}
</div>;