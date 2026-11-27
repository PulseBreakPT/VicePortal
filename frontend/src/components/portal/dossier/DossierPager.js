import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';

export const DossierPager = ({item,peers,section}) => {
  if(peers.length<2)return null;
  const index=peers.findIndex(e=>e.id===item.id);const previous=peers[(index-1+peers.length)%peers.length];const next=peers[(index+1)%peers.length];const media=['Image','Artwork'].includes(item.kind);
  return <nav className="record-pager" aria-label="Browse entries"><Link to={previous.path} data-testid={media?'image-previous':'detail-previous'}><ArrowLeft size={18}/><img src={previous.image} alt="" loading="lazy"/><span><small>PREVIOUS</small><strong>{previous.title}</strong></span></Link><Link className="record-pager-index" to={section.path} aria-label={`Back to ${section.title}`} data-testid="detail-pager-collection"><LayoutGrid size={18}/><span data-testid={media?'image-position':'detail-position'}>{String(index+1).padStart(2,'0')} / {String(peers.length).padStart(2,'0')}</span></Link><Link to={next.path} data-testid={media?'image-next':'detail-next'}><span><small>NEXT</small><strong>{next.title}</strong></span><img src={next.image} alt="" loading="lazy"/><ArrowRight size={18}/></Link></nav>;
};