import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { cipherFrame,cipherDuration,CIPHER_MAX_LENGTH } from '../src/components/cipherMath.mjs';

const examples=['VICE ATLAS','YOUR GTA 6','PAUSE MENU','Lucia Caminos','Élodie — São Paulo','589','0','100%','12.5','1,024 × 768','AC/DC + 42','A','9','🙂 GTA VI','  ',''];
let checks=0;
const check=(condition,message)=>{checks++;assert.ok(condition,message);};
for(const original of examples){
  const chars=Array.from(original);
  for(let step=0;step<=100;step++){
    const result=Array.from(cipherFrame(original,step/100,step));
    check(result.length===chars.length,'Length changed');
    chars.forEach((c,i)=>{
      if(/^[0-9]$/.test(c))check(/^[0-9]$/.test(result[i]),'Digit class changed');
      else if(/^[A-Z]$/.test(c))check(/^[A-Z]$/.test(result[i]),'Uppercase changed');
      else if(/^[a-z]$/.test(c))check(/^[a-z]$/.test(result[i]),'Lowercase changed');
      else check(result[i]===c,'Punctuation or Unicode changed');
    });
  }
  check(cipherFrame(original,1,1)===original,'Final text changed');
  check(cipherFrame(original,2,1)===original,'Upper progress clamp');
  check(cipherFrame(original,NaN,1)===original,'Invalid progress');
  check(cipherFrame(original,.2,4)===cipherFrame(original,.2,4),'Non-deterministic frame');
}
for(const original of examples.filter(t=>/[A-Za-z0-9]/.test(t))){
  let previous=new Set();
  for(let step=0;step<=100;step++){
    const result=Array.from(cipherFrame(original,step/100,step));
    const locked=new Set(Array.from(original).map((ch,i)=>ch===result[i]?i:-1).filter(i=>i>=0));
    check([...previous].every(i=>locked.has(i)),'Previously resolved glyph changed');
    previous=locked;
  }
}
check(cipherFrame('A'.repeat(CIPHER_MAX_LENGTH+1),0,1)==='A'.repeat(CIPHER_MAX_LENGTH+1),'Long title must be static');
for(const variant of ['title','number','card']){
  check(cipherDuration(true,variant)<=620,'Mobile budget exceeded');
  check(cipherDuration(false,variant)<=1050,'Desktop budget exceeded');
}
const read=path=>readFile(new URL(path,import.meta.url),'utf8');
const [component,css,app,hero,layout,detail,grid,meta,hub,progress,ui]=await Promise.all([
'../src/components/NeonCipher.js','../src/NeonCipher.css','../src/App.js','../src/components/Hero.js','../src/components/portal/PortalLayout.js','../src/components/portal/DetailPage.js','../src/components/portal/CatalogGrid.js','../src/components/portal/dossier/DossierMeta.js','../src/components/TownHub.js','../src/components/portal/ProgressPage.js','../src/components/AtlasUI.js'].map(read));
for(const [source,required] of [[component,['IntersectionObserver','cancelAnimationFrame','aria-hidden="true"','document.hidden','useReducedMotion','observer?.disconnect()','{text}']], [css,['prefers-reduced-motion:reduce','pointer:coarse','pointer-events: none','forced-colors:active']], [app,["import './NeonCipher.css'"]],[hero,['<NeonCipher value={line} block/>']],[layout,['<NeonCipher value={section.title} block/>']],[detail,['<NeonCipher value={item.title} block/>']],[grid,['variant="card"','variant="number"']],[meta,['variant="number"']],[hub,['variant="number"']],[progress,['variant="number"']],[ui,['<NeonCipher value={title} block/>']]]){
  for(const marker of required)check(source.includes(marker),'Missing integration or accessibility marker: '+marker);
}
console.log('Neon Cipher checks passed:',checks);
