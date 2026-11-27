import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { velocityShift,imageFlight,rollDirection } from '../src/hooks/smoothMath.mjs';
let checks=0;
const check=(condition,message)=>{checks++;assert.ok(condition,message);};
for(let delta=-1000;delta<=1000;delta+=10){
  for(const ms of [0,1,16,33,60,120,500,1000]){
    const v=velocityShift(delta,ms);
    check(Number.isFinite(v)&&Math.abs(v)<=5,'Velocity bound exceeded');
    check(v===0||Math.sign(v)===Math.sign(delta),'Wrong velocity direction');
  }
}
const from={left:10,top:50,width:200,height:100};
const to={left:300,top:150,width:600,height:300};
check(JSON.stringify(imageFlight(from,to))===JSON.stringify({x:290,y:100,sx:3,sy:3}),'Flight geometry mismatch');
check(imageFlight({...from,width:0},to)===null,'Empty image should not fly');
check(imageFlight(from,{...to,width:10000})===null,'Excessive image scale');
check(imageFlight({...from,left:NaN},to)===null,'Invalid rectangle');
check(rollDirection(10,9)===-1&&rollDirection(9,10)===1,'Odometer direction');
for(let w=20;w<=1000;w+=20){
 for(let h=20;h<=600;h+=20){
   const f=imageFlight({left:0,top:0,width:w,height:h},to);
   check(!f||(f.sx>=.12&&f.sx<=12&&f.sy>=.12&&f.sy<=12),'Flight scale outside budget');
 }
}
const read=path=>readFile(new URL(path,import.meta.url),'utf8');
const paths=['../src/Smooth.css','../src/App.js','../src/hooks/useCardFlight.js','../src/hooks/useCinematicEffects.js','../src/components/Navigation.js','../src/components/Hero.js','../src/components/AtlasUI.js','../src/components/KineticTitle.js','../src/components/Odometer.js','../src/components/portal/CatalogGrid.js','../src/components/portal/ProgressPage.js','../src/components/portal/dossier/DossierMedia.js'];
const [css,app,flight,scroll,nav,hero,reveal,kinetic,odo,cards,progress,media]=await Promise.all(paths.map(read));
const requirements=[
 [css,['smooth-flight-ghost','smooth-letter','smooth-aurora','smooth-sweep','smooth-roll-in','smooth-roll-out','::details-content','smooth-accordion-in','data-cinema-active','--smooth-velocity','--cinema-parallax','prefers-reduced-motion:reduce','pointer:coarse','radial-gradient','focus-within']],
 [app,["import './Smooth.css'","import './NeonCipher.css'","useCardFlight(path,hiddenVehicle?undefined:item?.id)",'<KineticTitle value="THE GTA VI EXPERIENCE"/>']],
 [flight,['event.ctrlKey','event.metaKey','source.id!==itemId','image.currentSrc||image.src','duration:420','animation.finished.then(stop,stop)','ghost.remove()','cancelAnimationFrame(frame)','document.hidden']],
 [scroll,['velocityShift','clearTimeout(velocityTimer)','--smooth-velocity','requestAnimationFrame(update)']],
 [nav,['ResizeObserver','smooth-nav-indicator','type:"spring"','observer?.disconnect()']],
 [hero,['AnimatePresence mode="sync"',"filter:'blur(2px)'","filter:'blur(0px)'"]],
 [reveal,["className === 'section-description'","filter:'blur(3px)'"]],
 [kinetic,['smooth-kinetic-letter','aria-hidden="true"','useReducedMotion']],
 [odo,['previousVisual','aria-hidden="true"','clearTimeout(timer)','before===text']],
 [cards,['captureCardFlight(event,item)','<NeonCipher']],
 [progress,['<Odometer value={count}/>','<Odometer value={savedItems.length}/>']],
 [media,['layoutDependency={expanded}','type:"spring"','reduced||video?false:true']]
];
for(const [source,markers] of requirements)for(const marker of markers)check(source.includes(marker),'Missing '+marker);
check(!/animation:[^;{}]*infinite/.test(css),'Permanent animation introduced');
console.log('Smooth motion checks passed:',checks);
