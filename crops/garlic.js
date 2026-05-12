import Crop from '../Crop.js';
export default new Crop({
  id:'garlic',name:'Garlic',cat:'Allium',emoji:'🧄',
  planting:{zone6:'Plant Oct 1–Nov 15 for summer harvest',depth:'2" deep, pointed end up',spacing:'6" apart, rows 12"',ph:'6.0–7.0',sun:'Full sun'},
  water:{in:'1',note:'Stop 2–4 weeks before harvest'},
  fertilizer:{type:'Blood meal 12-0-0 or fish emulsion',amount:'1 cup blood meal per 10 sq ft',freq:'Fall at planting; early spring; stop May'},
  companions:{
    good:[{name:'Tomatoes',why:"Garlic's sulfur compounds deter spider mites and aphids which heavily infest tomato plants."},{name:'Carrots',why:'Garlic repels carrot fly and other root pests that damage carrot crops.'},{name:'Spinach',why:'Garlic deters aphids and leaf miners that feed on spinach leaves.'}],
    bad:[{name:'Peas',why:"Garlic's allelopathic compounds inhibit the germination and root development of peas and legumes."},{name:'Beans',why:'Like peas, beans are significantly stunted by the chemical compounds garlic releases into the soil.'},{name:'Asparagus',why:'Garlic stunts asparagus growth and competes for the same deep soil nutrients.'}],
  },
  companionDist:'18"+ from peas and beans; 12" from asparagus.',
  animals:'Garlic naturally deters many pests throughout the garden.',
  diseases:[{name:'White Rot',desc:'White mold at bulb base; no cure — remove plants; avoid area 20 years.'},{name:'Botrytis Neck Rot',desc:'Gray mold on neck post-harvest; cure 3–4 weeks in dry airy space.'}],
  pests:'Thrips — insecticidal soap; onion maggot — row covers.',
  rotation:{family:'Alliaceae',cycle:'3–4 year rotation; do not follow other alliums'},
  stages:[{label:'Root',title:'Root establishment',desc:'Fall: roots grow, shoot emerges. Mulch after ground freezes.'},{label:'Grn',title:'Spring green',desc:'Shoots emerge; green garlic harvestable.'},{label:'Scape',title:'Scape formation',desc:'Remove curling scapes to push energy to bulb.'},{label:'Harv',title:'Harvest',desc:'Lower 1/3 of leaves brown (Jun–Jul). Cure 3–4 weeks.'}],
  special:'Plant hardneck varieties for best Zone 6 flavor. Plant Oct for Jun–Jul harvest.',
  nutrition:{calories:149,protein:6.4,carbs:33,fat:0.5,fiber:2.1,vitC:31,notes:'Rich in allicin, manganese, and vitamin B6. Powerful antimicrobial and cardiovascular benefits.'},
  size:{weight:'30–60g per bulb',dimensions:'1.5–2.5" diameter bulb',notes:'Each clove weighs 4–8g.'},
});
