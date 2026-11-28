import assert from 'node:assert/strict';
import {performanceScale,metricTone} from '../src/components/portal/dossier/performanceModel.mjs';
import {readFile} from 'node:fs/promises';
for(const max of [10,100])for(let i=0;i<=1000;i++){
 const value=max*i/1000;const scale=performanceScale(value,max);
 assert.equal(scale.fraction,value/max);
 assert.ok(scale.fraction>=0&&scale.fraction<=1);
}
for(const v of ['5','30 rounds','unknown','12 / 10','-1 / 10','10 / 0','5 / 20',null,undefined])assert.equal(performanceScale(v),null);
for(const [v,max] of [[NaN,10],[Infinity,10],[-1,10],[11,10],[0,0]])assert.equal(performanceScale(v,max),null);
assert.deepEqual(performanceScale('7.5 / 10'),{value:7.5,max:10,fraction:.75});
assert.deepEqual(performanceScale('0 / 100'),{value:0,max:100,fraction:0});
assert.equal(metricTone('Handling'),'aqua');
const read=p=>readFile(new URL('../src/'+p,import.meta.url),'utf8');
const [component,css,content,app]=await Promise.all(['components/portal/dossier/PerformanceMeter.js','Performance.css','components/portal/dossier/DossierContent.js','App.js'].map(read));
for(const marker of ['role="meter"','aria-valuemin={0}','aria-valuemax={scale.max}','aria-valuenow={scale.value}','useReducedMotion','once:true'])assert.ok(component.includes(marker),marker);
for(const marker of ['prefers-reduced-motion:reduce','forced-colors:active','max-width:720px','calc(var(--performance-fill)*100%)'])assert.ok(css.includes(marker),marker);
assert.ok(!css.includes('infinite'));
assert.ok(content.includes('<PerformanceMeter')&&content.includes('<FactRows rows={unscaled}/>'));
assert.ok(app.includes("import './Performance.css'"));
console.log('Performance instruments: 2002 proportional scale cases plus invalid input, accessibility and integration checks passed.');
