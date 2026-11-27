import { useLayoutEffect } from 'react';
import { imageFlight } from './smoothMath.mjs';

let pending=null;
let activeCleanup=null;
const reduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const desktop=()=>window.matchMedia('(min-width: 900px) and (pointer: fine)').matches;

export function captureCardFlight(event,item){
  if(event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||reduced()||!desktop()||document.hidden)return;
  const img=event.currentTarget.closest('.portal-card')?.querySelector('.portal-card-image img');
  if(!img?.complete||!img.naturalWidth||item.placeholderImage||typeof img.animate!=='function')return;
  activeCleanup?.();
  pending={id:item.id,src:img.currentSrc||img.src,rect:img.getBoundingClientRect(),at:performance.now()};
}

// Capture is separate from navigation: normal links, history, and modified clicks stay native.
export function useCardFlight(path,itemId){
  useLayoutEffect(()=>{
    const source=pending;
    pending=null;
    if(!source||source.id!==itemId||performance.now()-source.at>1000||reduced()||!desktop())return;
    let frame=0,cleanup=()=>{};
    frame=requestAnimationFrame(()=>{
      if(reduced()||!desktop()||document.hidden)return;
      const image=document.querySelector('[data-testid="detail-image"]');
      if(!image||!image.complete||!image.naturalWidth||(image.currentSrc||image.src)!==source.src)return;
      const to=image.getBoundingClientRect();
      if(to.bottom<0||to.top>window.innerHeight)return;
      const flight=imageFlight(source.rect,to);
      if(!flight)return;
      const ghost=image.cloneNode(false);
      ghost.removeAttribute('id');ghost.removeAttribute('data-testid');ghost.removeAttribute('srcset');ghost.removeAttribute('sizes');
      ghost.setAttribute('aria-hidden','true');ghost.alt='';
      ghost.className='smooth-flight-ghost';
      Object.assign(ghost.style,{left:source.rect.left+'px',top:source.rect.top+'px',width:source.rect.width+'px',height:source.rect.height+'px'});
      document.body.appendChild(ghost);
      image.setAttribute('data-smooth-flight','true');
      let animation,stopped=false;
      const stop=()=>{
        if(stopped)return;
        stopped=true;
        animation?.cancel();ghost.remove();image.removeAttribute('data-smooth-flight');
        window.removeEventListener('scroll',stop);window.removeEventListener('resize',stop);
        document.removeEventListener('visibilitychange',stop);preference.removeEventListener('change',stop);
        if(activeCleanup===stop)activeCleanup=null;
      };
      const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
      cleanup=stop;activeCleanup=stop;
      try{
        animation=ghost.animate([
          {transform:'translate(0,0) scale(1,1)',opacity:1,borderRadius:'12px'},
          {transform:`translate(${flight.x}px,${flight.y}px) scale(${flight.sx},${flight.sy})`,opacity:.95,borderRadius:'3px'}
        ],{duration:420,easing:'cubic-bezier(.2,.8,.2,1)',fill:'forwards'});
        animation.finished.then(stop,stop);
      }catch{stop();return;}
      window.addEventListener('scroll',stop,{passive:true,once:true});window.addEventListener('resize',stop,{passive:true,once:true});
      document.addEventListener('visibilitychange',stop,{once:true});preference.addEventListener('change',stop,{once:true});
    });
    return()=>{cancelAnimationFrame(frame);cleanup();};
  },[path,itemId]);
}
