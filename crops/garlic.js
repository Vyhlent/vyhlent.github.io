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
  nutrition: {
    // — Macronutrients —
    calories:    149,
    water:       58.6,   // g
    protein:     6.4,   // g
    carbs:       33,   // g total
    fiber:       2.1,   // g
    sugars:      1,   // g
    fat:         0.5,   // g total
    saturated:   0.09,   // g
    monounsat:   0.01,   // g
    polyunsat:   0.25,   // g
    // — Fat-soluble vitamins —
    vitA:        0,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.08,   // mg
    vitK:        1.7,   // µg
    // — Water-soluble vitamins —
    vitC:        31.2,   // mg
    vitB1:       0.2,  // mg thiamine
    vitB2:       0.11,  // mg riboflavin
    vitB3:       0.7,  // mg niacin
    vitB5:       0.596,  // mg pantothenic
    vitB6:       1.235,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       3,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     23.2,  // mg
    // — Macrominerals —
    calcium:     181,  // mg
    phosphorus:  153,  // mg
    magnesium:   25,  // mg
    sodium:      17,  // mg
    potassium:   401,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        1.7,  // mg
    zinc:        1.16,  // mg
    copper:      0.299,  // mg
    manganese:   1.672,  // mg
    selenium:    14.2,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Rich in allicin (antimicrobial), manganese (1.67 mg — 73% DV), selenium (14 µg — 26% DV), and vitamin B6 (1.24 mg — 73% DV). Powerful cardiovascular benefits. Note: typical serving is 3–9g.',
  },
  size:{weight:'30–60g per bulb',dimensions:'1.5–2.5" diameter bulb',notes:'Each clove weighs 4–8g.'},
});
