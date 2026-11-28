import {motion,useReducedMotion} from 'framer-motion';
import {Activity,Crosshair,Gauge,Mountain,Shield,Target,Zap} from 'lucide-react';
import {performanceScale,metricTone} from './performanceModel.mjs';

const metricIcon=label=>{
 const key=String(label).toLowerCase();
 if(/speed/.test(key))return Gauge;
 if(/acceleration|fire rate|firerate/.test(key))return Zap;
 if(/accuracy/.test(key))return Target;
 if(/damage|range/.test(key))return Crosshair;
 if(/strength/.test(key))return Shield;
 if(/off.road/.test(key))return Mountain;
 return Activity;
};
export function PerformanceMeter({label,value,max,displayValue}){
 const reduced=useReducedMotion();
 const scale=performanceScale(value,max);
 if(!scale)return null;
 const Icon=metricIcon(label);
 return <div className="performance-instrument" data-tone={metricTone(label)} data-testid="performance-instrument">
  <div className="performance-instrument-head"><span className="performance-metric"><span className="performance-icon" aria-hidden="true"><Icon size={17} strokeWidth={1.7}/></span><span>{label}</span></span><strong className="performance-reading">{displayValue!==undefined?displayValue:<>{scale.value}<small> / {scale.max}</small></>}</strong></div>
  <div className="performance-track" role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={scale.max} aria-valuenow={scale.value} aria-valuetext={displayValue||scale.value+' / '+scale.max} style={{'--performance-fill':scale.fraction}}>
    <motion.span className="performance-fill" aria-hidden="true" initial={false} whileInView={reduced?undefined:{clipPath:['inset(0 100% 0 0)','inset(0 0% 0 0)']}} viewport={{once:true,amount:0.35}} transition={{duration:reduced?0:.72,ease:[.22,1,.36,1]}}/>
    <span className="performance-ticks" aria-hidden="true"/>
  </div>
  <div className="performance-axis" aria-hidden="true"><span>0</span><span>{scale.max/2}</span><span>{scale.max}</span></div>
 </div>;
}
