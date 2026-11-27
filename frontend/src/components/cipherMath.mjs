// Deterministic decorative cipher: punctuation, spaces, casing and numeric shape survive every frame.
const UPPER = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const LOWER = 'abcdefghjkmnpqrstuvwxyz';
const DIGITS = '0123456789';
export const CIPHER_MAX_LENGTH = 72;
export const CIPHER_DESKTOP_MS = 1050;
export const CIPHER_MOBILE_MS = 620;
export function cipherDuration(mobile,variant) {
  return Math.min(mobile ? CIPHER_MOBILE_MS : CIPHER_DESKTOP_MS,variant==='card'?780:variant==='number'?760:1050);
}
export function cipherFrame(value,progress,tick=0) {
  const target=String(value);
  const chars=Array.from(target);
  const p=Math.min(1,Math.max(0,Number.isFinite(progress)?progress:1));
  if(p===1||chars.length>CIPHER_MAX_LENGTH)return target;
  const eligible=chars.filter(ch=>/^[A-Za-z0-9]$/.test(ch)).length;
  if(!eligible)return target;
  let index=0;
  return chars.map(ch=>{
    const pool=/^[0-9]$/.test(ch)?DIGITS:/^[A-Z]$/.test(ch)?UPPER:/^[a-z]$/.test(ch)?LOWER:null;
    if(!pool)return ch;
    const rank=index++;
    if(p>=.12+.88*((rank+1)/eligible))return ch;
    const seed=((rank+1)*131+(Math.max(0,Math.floor(tick))*17)+(ch.charCodeAt(0)*7))>>>0;
    let next=pool[seed%pool.length];
    if(next===ch)next=pool[(seed+1)%pool.length];
    return next;
  }).join('');
}
