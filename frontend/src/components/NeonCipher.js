import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cipherDuration, cipherFrame, CIPHER_MAX_LENGTH } from './cipherMath.mjs';

// The real text never changes. Only the aria-hidden decorative overlay is decoded.
export function NeonCipher({value, variant='title', block=false}) {
  const text=String(value ?? '');
  const root=useRef(null);
  const overlay=useRef(null);
  const played=useRef(false);
  const reduced=useReducedMotion();
  useEffect(()=>{
    const node=root.current, visual=overlay.current;
    if(!node||!visual||played.current||reduced||!/[A-Za-z0-9]/.test(text)||Array.from(text).length>CIPHER_MAX_LENGTH)return;
    const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile=window.matchMedia('(max-width: 899px), (pointer: coarse)');
    let observer, frame=0, started=false, startTime, lastTick=-1;
    const finish=()=>{
      cancelAnimationFrame(frame);
      node.removeAttribute('data-cipher-active');
      visual.removeAttribute('data-cipher-frame');
    };
    const stop=()=>{played.current=true;observer?.disconnect();finish();};
    const run=now=>{
      if(motion.matches||document.hidden){stop();return;}
      if(startTime===undefined)startTime=now;
      const duration=cipherDuration(mobile.matches,variant);
      const progress=Math.min(1,(now-startTime)/duration);
      if(progress>=1){finish();return;}
      const tick=Math.floor((now-startTime)/(mobile.matches?105:65));
      if(tick!==lastTick){
        lastTick=tick;
        visual.setAttribute('data-cipher-frame',cipherFrame(text,progress,tick));
      }
      frame=requestAnimationFrame(run);
    };
    const begin=()=>{
      if(started||played.current)return;
      if(motion.matches||document.hidden|| (mobile.matches&&variant==='card')){stop();return;}
      started=true;
      played.current=true;
      observer?.disconnect();
      visual.setAttribute('data-cipher-frame',cipherFrame(text,0,0));
      node.setAttribute('data-cipher-active','true');
      frame=requestAnimationFrame(run);
    };
    // Do not run decorative motion for off-screen content or during hidden tabs.
    if(typeof IntersectionObserver==='function'){
      observer=new IntersectionObserver(entries=>{
        if(entries.some(entry=>entry.isIntersecting))begin();
      },{threshold:.15});
      observer.observe(node);
    }else{
      // Static fallback is preferable to eagerly animating every catalogue entry.
      played.current=true;
    }
    const preferenceChanged=()=>{if(motion.matches||mobile.matches)stop();};
    const visibilityChanged=()=>{if(document.hidden)stop();};
    motion.addEventListener('change',preferenceChanged);
    mobile.addEventListener('change',preferenceChanged);
    document.addEventListener('visibilitychange',visibilityChanged);
    return ()=>{
      observer?.disconnect();finish();
      motion.removeEventListener('change',preferenceChanged);
      mobile.removeEventListener('change',preferenceChanged);
      document.removeEventListener('visibilitychange',visibilityChanged);
    };
  },[text,variant,reduced]);
  return <span ref={root} className={`neon-cipher neon-cipher-${variant}${block?' neon-cipher-block':''}`}><span className="neon-cipher-original">{text}</span><span ref={overlay} className="neon-cipher-overlay" aria-hidden="true"/></span>;
}
