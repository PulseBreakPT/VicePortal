import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { rollDirection } from '../hooks/smoothMath.mjs';

// Real values stay in the document; an aria-hidden pseudo-element rolls out the previous value.
export function Odometer({value}){
  const text=String(value);
  const old=useRef(text);
  const node=useRef(null);
  const reduced=useReducedMotion();
  useEffect(()=>{
    const el=node.current, before=old.current;
    old.current=text;
    if(!el||before===text||reduced||document.hidden||window.matchMedia('(prefers-reduced-motion: reduce)').matches||typeof el.animate!=='function')return;
    if(!/^\d+$/.test(before)||!/^\d+$/.test(text))return;
    const rect=el.getBoundingClientRect();
    if(rect.bottom<0||rect.top>window.innerHeight)return;
    const dir=rollDirection(before,text);
    el.setAttribute('data-roll-previous',before);
    el.style.setProperty('--roll-direction',dir);
    el.setAttribute('data-roll-active','true');
    const timer=setTimeout(()=>{el.removeAttribute('data-roll-active');el.removeAttribute('data-roll-previous');},320);
    return()=>{clearTimeout(timer);el.removeAttribute('data-roll-active');el.removeAttribute('data-roll-previous');el.style.removeProperty('--roll-direction');};
  },[text,reduced]);
  return <span className="smooth-odometer" ref={node}><span className="smooth-odometer-value">{text}</span><span className="smooth-odometer-old" aria-hidden="true"/></span>;
}
