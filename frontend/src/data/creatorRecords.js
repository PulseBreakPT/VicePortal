import snapshot from './creatorData.json';
import {DATASETS,normalizeDataset,mergeWeapons,hideSpoiler} from './creatorDataModel.mjs';
export const creatorCoverage=Object.fromEntries(Object.keys(DATASETS).map(key=>[key,{expected:DATASETS[key].count,imported:snapshot.datasets[key]?.rows?.length||0}]));
export const creatorRecords=Object.keys(DATASETS).filter(key=>key!=='vehicles'&&key!=='weapons').flatMap(key=>normalizeDataset(snapshot.datasets[key]?.rows||[],key));
export const creatorWeapons=existing=>mergeWeapons(existing,normalizeDataset(snapshot.datasets.weapons?.rows||[],'weapons'));
export {hideSpoiler};
