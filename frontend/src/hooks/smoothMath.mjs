export const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
export function velocityShift(delta,elapsed){
  if(!Number.isFinite(delta)||!Number.isFinite(elapsed)||elapsed<=0)return 0;
  return clamp(delta/Math.max(16,elapsed)*1.5,-5,5);
}
export function imageFlight(from,to){
  if(![from.left,from.top,from.width,from.height,to.left,to.top,to.width,to.height].every(Number.isFinite)||Math.min(from.width,from.height,to.width,to.height)<1)return null;
  const x=to.left-from.left,y=to.top-from.top,sx=to.width/from.width,sy=to.height/from.height;
  if(sx<.12||sy<.12||sx>12||sy>12)return null;
  return {x,y,sx,sy};
}
export function rollDirection(before,after){
  return Number(after)<Number(before)?-1:1;
}
