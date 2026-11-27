import { useEffect } from 'react';
import { pointerEffects, parallaxOffset } from './cinematicMath.mjs';
import { velocityShift } from './smoothMath.mjs';

const targets = '.portal-card:not(.is-list .portal-card), .hub-tile, .article-card, .gallery-card, .portal-button, .atlas-button';
const heroTargets = '.portal-hero:not(.object-hero):not(.tool-hero), .pause-art, .town-experience-teaser';
const vars = ['--cinema-x','--cinema-y','--cinema-rx','--cinema-ry','--cinema-dx','--cinema-dy'];

export function useCinematicEffects(rootRef, path, reduced) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;
    const desktop = window.matchMedia('(min-width: 900px) and (hover: hover) and (pointer: fine)');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let dispose = () => {};
    const configure = () => {
      dispose();
      if (!desktop.matches || motion.matches) return;
      let active = null, point = null, frame = 0, scrollDirty = true;
      let previousY=window.scrollY, previousTime=performance.now(), velocityTimer=0, velocity=0;
      const heroes = Array.from(root.querySelectorAll(heroTargets));
      const visible = new Set(heroes);
      const reset = () => {
        if (active) {
          active.removeAttribute('data-cinema-active');
          vars.forEach(name => active.style.removeProperty(name));
        }
        active = null;
        point = null;
      };
      const update = () => {
        frame = 0;
        if (active && point && active.isConnected) {
          const values = pointerEffects(active.getBoundingClientRect(), point.x, point.y);
          [values.x+'%',values.y+'%',values.rx+'deg',values.ry+'deg',values.dx+'px',values.dy+'px']
            .forEach((value,i) => active.style.setProperty(vars[i],value));
          active.setAttribute('data-cinema-active','true');
        }
        if (scrollDirty) {
          scrollDirty = false;
          root.style.setProperty('--smooth-velocity',velocity+'px');
          visible.forEach(el => el.style.setProperty('--cinema-parallax',parallaxOffset(el.getBoundingClientRect(),window.innerHeight)+'px'));
        }
      };
      const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
      const move = event => {
        if (event.pointerType !== 'mouse') { reset(); return; }
        const target = event.target instanceof Element ? event.target.closest(targets) : null;
        if (target !== active) { reset(); active = target && root.contains(target) ? target : null; }
        if (active) { point = {x:event.clientX,y:event.clientY}; schedule(); }
      };
      const scroll = () => {
        const now=performance.now(), y=window.scrollY;
        velocity=velocityShift(y-previousY,now-previousTime);
        previousY=y;previousTime=now;
        clearTimeout(velocityTimer);
        velocityTimer=setTimeout(()=>{velocity=0;root.style.removeProperty('--smooth-velocity');},120);
        reset();scrollDirty=true;schedule();
      };
      const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(records => {
        for (const record of records) {
          if (record.isIntersecting) visible.add(record.target);
          else visible.delete(record.target);
        }
        scrollDirty = true; schedule();
      },{rootMargin:'80px'}) : null;
      heroes.forEach(el => observer?.observe(el));
      root.addEventListener('pointermove',move,{passive:true});
      root.addEventListener('pointerleave',reset);
      root.addEventListener('pointercancel',reset);
      window.addEventListener('scroll',scroll,{passive:true});
      window.addEventListener('resize',scroll,{passive:true});
      window.addEventListener('blur',reset);
      schedule();
      dispose = () => {
        cancelAnimationFrame(frame); observer?.disconnect(); reset();
        clearTimeout(velocityTimer);root.style.removeProperty('--smooth-velocity');
        heroes.forEach(el => el.style.removeProperty('--cinema-parallax'));
        root.removeEventListener('pointermove',move);
        root.removeEventListener('pointerleave',reset);
        root.removeEventListener('pointercancel',reset);
        window.removeEventListener('scroll',scroll);
        window.removeEventListener('resize',scroll);
        window.removeEventListener('blur',reset);
      };
    };
    configure();
    desktop.addEventListener('change',configure);
    motion.addEventListener('change',configure);
    return () => { dispose(); desktop.removeEventListener('change',configure); motion.removeEventListener('change',configure); };
  }, [rootRef,path,reduced]);
}
