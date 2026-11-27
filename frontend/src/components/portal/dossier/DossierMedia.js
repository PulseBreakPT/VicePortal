import { useState } from 'react';
import { ArrowUpRight, Expand, Minimize, ImageOff, Play } from 'lucide-react';

export const imageCredit = item => item.imageSource ? `Image reference via ${item.imageSource}${item.sharedPortrait?' (shared scene)':''} · respective rights holders` : item.placeholderImage ? 'Placeholder · character portrait not verified' : item.source.includes('gtatown') ? 'Image reference via GTA Town · respective rights holders' : item.source.includes('gtabase') ? 'Image reference via GTABase · respective rights holders' : 'Official promotional imagery © Rockstar Games';

export const DossierMedia = ({item,expanded,setExpanded,onDimensions}) => {
  const [playing,setPlaying]=useState(false);
  const [failed,setFailed]=useState(false);
  const [fallback,setFallback]=useState(false);
  const [imageReady,setImageReady]=useState(false);
  const video=item.kind==='Video';
  const loaded=event=>{setImageReady(true);onDimensions({width:event.currentTarget.naturalWidth,height:event.currentTarget.naturalHeight});};
  return <div className="record-media-panel">
    <div className="record-media-toolbar"><span data-testid="detail-media-type">{video?'OFFICIAL TRAILER':item.kind==='Radio station'?'STATION ARTWORK':'IMAGE REFERENCE'}</span><div>{!video&&<button type="button" aria-label={expanded?'Fit image layout':'Expand image layout'} title={expanded?'Fit image layout':'Expand image layout'} aria-pressed={expanded} onClick={()=>setExpanded(!expanded)} data-testid="detail-expand-image">{expanded?<Minimize size={16}/>:<Expand size={16}/>}<span>{expanded?'Fit':'Expand'}</span></button>}<a href={video?item.source:item.image} target="_blank" rel="noreferrer" data-testid="detail-open-original" aria-label={video?'Open trailer on YouTube':'Open original image'} title={video?'Open on YouTube':'Open original image'}><ArrowUpRight size={17}/></a></div></div>
    <figure className={`record-image ${video?'record-video':''} ${!playing&&!failed?(imageReady?'cinema-media-ready':'cinema-media-pending'):''}`} data-testid="detail-media-frame">
      {video&&playing?<iframe data-testid="trailer-iframe" title={`Grand Theft Auto VI ${item.title}`} src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>:failed?<div className="record-image-error" data-testid="detail-image-error"><ImageOff size={30}/><p>Image unavailable.</p><a href={item.source} target="_blank" rel="noreferrer" data-testid="detail-image-error-source">Open source <ArrowUpRight size={15}/></a></div>:<><img src={fallback?item.imageFallback:item.image} referrerPolicy={item.imageSource?'no-referrer':undefined} alt={video?'GTA VI promotional artwork':(item.placeholderImage||fallback)?'Character portrait not verified':item.title} data-testid="detail-image" onLoad={loaded} onError={()=>{setImageReady(false);if(item.imageFallback&&!fallback)setFallback(true);else setFailed(true);}} decoding="async"/>{video&&<button type="button" className="record-video-play" data-testid="cinema-play" aria-label={`Play ${item.title}`} onClick={()=>setPlaying(true)}><Play size={27} fill="currentColor"/><span>Play {item.title}</span></button>}</>}
    </figure>
    <div className="record-image-caption"><span data-testid="detail-image-credit">{fallback?'Placeholder · external image unavailable':imageCredit(item)}</span><span aria-hidden="true">VI / ATLAS</span></div>
  </div>;
};