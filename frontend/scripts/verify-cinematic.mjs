import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pointerEffects,parallaxOffset } from '../src/hooks/cinematicMath.mjs';
const rect={left:10,top:20,width:200,height:100};
assert.deepEqual(pointerEffects(rect,110,70),{x:50,y:50,rx:0,ry:0,dx:0,dy:0});
assert.deepEqual(pointerEffects(rect,10,20),{x:0,y:0,rx:2.5,ry:-2.5,dx:-3,dy:-2});
assert.deepEqual(pointerEffects(rect,210,120),{x:100,y:100,rx:-2.5,ry:2.5,dx:3,dy:2});
assert.deepEqual(pointerEffects(rect,-999,999),pointerEffects(rect,10,120));
assert.ok(Object.values(pointerEffects({left:0,top:0,width:0,height:0},0,0)).every(Number.isFinite));
assert.equal(parallaxOffset({top:350,height:100},800),0);
assert.equal(parallaxOffset({top:5000,height:100},800),-16);
assert.equal(parallaxOffset({top:-5000,height:100},800),16);
let samples=0;
for(let x=-100;x<=350;x+=5)for(let y=-100;y<=250;y+=5){
  const v=pointerEffects(rect,x,y);
  assert.ok(v.x>=0&&v.x<=100&&v.y>=0&&v.y<=100&&Math.abs(v.rx)<=2.5&&Math.abs(v.ry)<=2.5&&Math.abs(v.dx)<=3&&Math.abs(v.dy)<=2);
  samples++;
}
const read=path=>readFile(new URL(path,import.meta.url),'utf8');
const [css,app,hook,cards,media]=await Promise.all([
  read('../src/Cinematic.css'),read('../src/App.js'),read('../src/hooks/useCinematicEffects.js'),
  read('../src/components/portal/CatalogGrid.js'),read('../src/components/portal/dossier/DossierMedia.js')
]);
assert.ok(app.indexOf("import './Cinematic.css'")>app.indexOf("import './Dossier.css'"));
assert.match(app,/useCinematicEffects\(cinematicRoot, path, reduced\)/);
assert.match(css,/prefers-reduced-motion: reduce/);
assert.match(css,/pointer: coarse/);
assert.match(css,/pointer: fine/);
assert.match(css,/forced-colors: active/);
assert.match(css,/cinema-shimmer 1\.8s linear 3/);
assert.match(hook,/cancelAnimationFrame\(frame\)/);
assert.match(hook,/observer\?\.disconnect\(\)/);
assert.match(hook,/removeEventListener\('pointermove'/);
assert.match(cards,/setMediaState\('ready'\)/);
assert.match(cards,/setMediaState\('failed'\)/);
assert.match(media,/setImageReady\(true\)/);
assert.match(media,/setFailed\(true\)/);
console.log('Cinematic effect geometry and integration checks passed:',samples,'pointer samples, 22 explicit assertions');
