import Crop from '../Crop.js';
export default new Crop({
  id:'cucumbers',name:'Cucumbers',cat:'Vine Vegetable',emoji:'🥒',
  planting:{zone6:'Start May 1–10; transplant or sow May 25–Jun 10 (soil 65°F+)',depth:'Direct sow 0.5–1"; transplant at pot depth',spacing:'Vining: 12" on trellis; bush: 18–24"',ph:'6.0–7.0',sun:'Full sun'},
  water:{in:'1–2',note:'Never let soil dry — causes bitter fruit'},
  fertilizer:{type:'Balanced 10-10-10',amount:'1 lb per 100 sq ft',freq:'At planting; every 3–4 weeks; reduce N after fruiting'},
  companions:{
    good:[{name:'Corn',why:'Corn provides physical support for vining cucumbers and creates a helpful microclimate.'},{name:'Beans',why:'Beans fix nitrogen that cucumber vines consume heavily during fruit production.'},{name:'Marigolds',why:'Marigolds deter cucumber beetles, the primary vector of bacterial wilt that devastates cucumbers.'}],
    bad:[{name:'Potatoes',why:'Potatoes and cucumbers share Phytophthora blight, amplifying fungal disease pressure.'},{name:'Sage',why:'Sage releases volatile compounds that inhibit cucumber vine development.'},{name:'Melons',why:'Melons share powdery mildew and cucumber beetle infestations, concentrating problems.'}],
  },
  companionDist:'Keep 3 ft from potatoes; 3 ft from melons; 12" from aromatic herbs.',
  animals:'Bees critical for pollination; ground beetles eat larvae.',
  diseases:[{name:'Cucumber Mosaic Virus',desc:'Mottled leaves, stunted plants; spread by aphids; remove infected plants.'},{name:'Angular Leaf Spot',desc:'Angular spots along veins; copper bactericide; avoid overhead watering.'}],
  pests:'Cucumber beetle — row covers until flowering; pickle worm — Bt.',
  rotation:{family:'Cucurbitaceae',cycle:'3–4 year rotation away from squash, pumpkins, melons'},
  stages:[{label:'Germ',title:'Germination',desc:'5–10 days at 70°F+.'},{label:'Vine',title:'Vine growth',desc:'Train up trellis early.'},{label:'Flwr',title:'Flowering',desc:'Bees essential; male flowers precede female.'},{label:'Harv',title:'Harvest',desc:'Every 1–2 days — overripe stops production.'}],
  special:'Trellis strongly recommended. Bitter cucumbers from irregular water or temps below 55°F.',
  nutrition:{calories:15,protein:0.7,carbs:3.6,fat:0.1,fiber:0.5,vitC:3,notes:'96% water — good source of vitamin K and silica for skin and connective tissue.'},
  size:{weight:'200–400g per cucumber',dimensions:'Slicing: 6–8" long; pickling: 3–4"',notes:'Harvest before yellowing for peak flavor.'},
});
