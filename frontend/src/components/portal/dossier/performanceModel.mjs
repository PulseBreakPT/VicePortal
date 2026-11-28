// A bar is only drawn when its original scale is documented.
export function performanceScale(value,max){
 if(max===undefined){
  const match=String(value??'').trim().match(/^(\d+(?:\.\d+)?)\s*\/\s*(10|100)$/);
  if(!match)return null;
  value=Number(match[1]);max=Number(match[2]);
 }
 if(!Number.isFinite(value)||!Number.isFinite(max)||max<=0||value<0||value>max)return null;
 return {value,max,fraction:value/max};
}
export function metricTone(label){
 const name=String(label).toLowerCase();
 if(/speed|fire rate|firerate/.test(name))return 'sunset';
 if(/acceleration|damage|strength/.test(name))return 'coral';
 if(/handling|accuracy/.test(name))return 'aqua';
 if(/off.road|range/.test(name))return 'violet';
 return 'accent';
}
