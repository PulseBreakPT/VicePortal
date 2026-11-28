import assert from 'node:assert/strict';
import {splitDossier,uniqueSources} from '../src/components/portal/dossier/dossierModel.mjs';
const item={title:'Example',kind:'Vehicle',status:'Community reference',subtitle:'Maker · Super',category:'Super',description:'Original overview.',paragraphs:['Original overview. Extra information.','Extra information.','A unique fact.'],details:['Maker','Super','A unique fact.','Special note','Special note'],attributes:{Manufacturer:'Maker',Class:'Super','Speed rating':'7.0 / 10',Acceleration:'5.0 / 10',Price:'$50',Seats:2,Other:'Unique','Top speed':'Not verified'},vehicleStats:{speed:7},source:'https://example.com/data',relatedSources:[{url:'https://example.com/data/'},{url:'https://example.com/other'},{url:'https://example.com/other'}]};
let view=splitDossier(item,true);
assert.equal(view.subtitle,'');
assert.deepEqual(view.body.paragraphs,['Extra information.','A unique fact.']);
assert.deepEqual(view.body.details,['Special note']);
assert.deepEqual(Object.keys(view.body.attributes),['Manufacturer','Class','Price','Seats']);
assert.deepEqual(Object.keys(view.meta.attributes),['Acceleration','Other']);
assert.equal(view.body.vehicleStats.speed,7);
assert.equal(uniqueSources(item).length,1);
assert.equal(item.attributes['Speed rating'],'7.0 / 10');
for(const kind of ['Character','Weapon','Radio station','Image','Guide','Region','Mission','Business','Video','Artwork','Story']){
 const sample={...item,kind,spoiler:false,attributes:{Role:'A', 'Credited performer':'B','Occupation / affiliation':'C','First documented mission':'D',Type:'E',Damage:5,Availability:'F',Price:10,Other:'G'}};
 view=splitDossier(sample,true);
 assert.deepEqual(Object.keys(view.body.attributes).filter(key=>key in view.meta.attributes),[]);
 assert.deepEqual([...Object.keys(view.body.attributes),...Object.keys(view.meta.attributes)].sort(),Object.keys(sample.attributes).sort());
}
view=splitDossier({...item,kind:'Character',spoiler:true,attributes:{Role:'Lead',Fate:'Secret','Credited performer':'Actor'}},false);
assert.deepEqual(Object.keys(view.body.attributes),[]);
assert.deepEqual(Object.keys(view.meta.attributes),['Role','Credited performer']);
assert.equal(view.subtitle,'');
console.log('Dossier presentation ownership, spoiler boundaries, and source deduplication verified.');
