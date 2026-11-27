import { useReducedMotion } from 'framer-motion';

// A distinct letter reveal for the cinematic experience heading; never nested inside Neon Cipher.
export function KineticTitle({value}){
  const reduced=useReducedMotion();
  if(reduced||value.length>60)return value;
  let index=0;
  return <span className="smooth-kinetic"><span className="smooth-sr-only">{value}</span><span aria-hidden="true">{value.split(' ').map((word,i)=><span className="smooth-kinetic-word" key={i}>{Array.from(word).map((letter,j)=><span className="smooth-kinetic-letter" style={{'--kinetic-order':Math.min(index++,24)}} key={j}>{letter}</span>)}{i<value.split(' ').length-1?' ':''}</span>)}</span></span>;
}
