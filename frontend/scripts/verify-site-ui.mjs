import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
const root=new URL('../src/',import.meta.url);
let checks=0;const check=(condition,message)=>{checks++;assert.ok(condition,message);};
async function scan(dir){
 for(const file of await readdir(dir,{withFileTypes:true})){
  if(file.isDirectory()){if(file.name!=='ui')await scan(new URL(file.name+'/',dir));continue;}
  if(!/\.(js|jsx|tsx)$/.test(file.name))continue;
  const source=await readFile(new URL(file.name,dir),'utf8');
  check(!/<select\b/i.test(source),'Native HTML select remains: '+file.name);
  check(!/\bwindow\.(alert|confirm|prompt)\s*\(/.test(source),'Native system dialog remains: '+file.name);
 }
}
await scan(root);
const read=p=>readFile(new URL(p,root),'utf8');
const [select,grid,compare,directory,layout,nav,css,app]=await Promise.all(['components/ui/site-select.jsx','components/portal/CatalogGrid.js','components/portal/ComparePage.js','components/portal/DirectoryPage.js','components/portal/PortalLayout.js','components/portal/AtlasNavigation.js','SiteUI.css','App.js'].map(read));
check(select.includes('<SelectTrigger')&&select.includes('<SelectContent')&&select.includes('onValueChange'),'Radix Select is connected');
check(select.includes('<CommandInput')&&select.includes('<CommandList')&&select.includes('onSelect'),'Searchable comparator connected');
check(grid.includes('<SiteSelect')&&grid.includes('<PopoverContent')&&grid.includes('<Checkbox'),'Catalogue controls migrated');
check(compare.includes('<SiteSelect')&&compare.includes('searchable={!weapons}')&&compare.includes('disabled:selected.some'),'Comparison selection and duplicate protection');
check(directory.includes('<SiteSelect'),'Directory migrated');
check(layout.includes('<DropdownMenuContent')&&layout.includes('to={s.path}'),'Subcategory navigation migrated');
check(nav.includes('<SheetContent')&&nav.includes('setOpen(false)'),'Mobile site sheet and navigation closure');
check(css.includes('prefers-reduced-motion:reduce')&&css.includes('100dvh')&&css.includes('44px'),'Mobile and accessibility styles');
check(app.includes("import './SiteUI.css'"),'Site theme loaded');
console.log('Site UI checks passed:',checks);
