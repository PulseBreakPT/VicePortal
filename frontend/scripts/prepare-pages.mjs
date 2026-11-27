import { readdir, readFile, writeFile, copyFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// CRA handles PUBLIC_URL for emitted assets, but existing catalogue entries
// also contain root-relative paths to files copied from public/.
const build = fileURLToPath(new URL('../build/', import.meta.url));
const base = (process.env.PUBLIC_URL || '/VicePortal').replace(/\/$/, '');
if (!/^\/[A-Za-z0-9._/-]+$/.test(base)) throw new Error('Expected a project-relative PUBLIC_URL');

let rewrites = 0;
async function walk(dir) {
  for (const entry of await readdir(dir, {withFileTypes: true})) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) { await walk(path); continue; }
    if (!/\.(?:js|css)$/.test(entry.name)) continue;
    const original = await readFile(path, 'utf8');
    // Match root-relative public paths only; do not touch remote URLs.
    const patched = original.replace(/(["'`(])\/(images|fonts|assets|videos|media)\//g, (_, prefix, folder) => {
      rewrites++;
      return prefix + base + '/' + folder + '/';
    });
    if (patched !== original) await writeFile(path, patched);
  }
}
await walk(build);
const index = await readFile(join(build,'index.html'),'utf8');
if (!index.includes('id="root"') || !index.includes(base+'/static/')) throw new Error('React application entry or asset base missing');
await access(join(build,'images','leonida-night.webp'));
await access(join(build,'images','character-placeholder.svg'));
// BrowserRouter can render the requested client route from the Pages fallback.
await copyFile(join(build,'index.html'),join(build,'404.html'));
await writeFile(join(build,'.nojekyll'),'');
console.log('Prepared React deployment:', base, 'asset rewrites:', rewrites);
