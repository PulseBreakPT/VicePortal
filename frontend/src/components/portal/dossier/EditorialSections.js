import { isUnknown, editorialFields as fields, editorialAliases as aliases } from './dossierModel.mjs';

const usable = value => (typeof value==='string'||typeof value==='number')&&!isUnknown(value);

export function EditorialSections({item,atlas}) {
  if(item.spoiler&&!atlas.spoilers)return null;
  const sections=(fields[item.kind]||[]).map(title=>({title,values:[title,...(aliases[title]||[])].filter((v,i,a)=>a.indexOf(v)===i).map(key=>[key,item.attributes?.[key]]).filter(([,value])=>usable(value))})).filter(s=>s.values.length);
  return <>{sections.map(({title,values})=><section className="record-reading-section" key={title}><div className="record-section-title"><h2>{title}</h2></div>{title==='Fate'?<details><summary>Reveal character fate</summary><div className="record-prose">{values.map(([key,value])=><p key={key}>{value}</p>)}</div></details>:<div className="record-prose">{values.map(([key,value])=><p key={key}>{values.length>1&&<strong>{key}: </strong>}{value}</p>)}</div>}</section>)}</>;
}

export function VehiclePerformance({item}) {
  const stats=Object.entries(item.vehicleStats||{}).filter(([,v])=>Number.isFinite(v)&&v>=0&&v<=10);
  if(!stats.length)return null;
  return <section className="record-reading-section"><div className="record-section-title"><h2>Performance</h2></div><div className="weapon-stat-grid">{stats.map(([key,value])=><div className="weapon-stat" key={key}><div><span>{key==='offroad'?'Off-road':key.charAt(0).toUpperCase()+key.slice(1)}</span><strong>{value} / 10</strong></div><meter min="0" max="10" value={value} aria-label={key} style={{width:'100%',accentColor:'var(--portal-pink, #ff8cb4)'}}/></div>)}</div><p className="record-footnote">Community-reported ratings on a 0–10 scale. Speed rating is not measured MPH or KM/H.</p></section>;
}
