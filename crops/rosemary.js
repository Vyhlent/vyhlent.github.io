import Crop from '../Crop.js';
export default new Crop({
  id:'rosemary',name:'Rosemary',cat:'Herb',emoji:'🌿',
  planting:{zone6:'Transplant May 15–Jun 1; annual in Zone 6 or overwinter in container',depth:'Same depth as pot',spacing:'18–24" apart',ph:'6.0–7.0',sun:'Full sun'},
  water:{in:'0.5–1',note:'Excellent drainage essential; allow to dry between waterings'},
  fertilizer:{type:'Low-N 5-10-10 or fish emulsion',amount:'Light application only',freq:'Once spring; once midsummer'},
  companions:{
    good:[{name:'Beans',why:'Rosemary repels Mexican bean beetles and bean weevils with its aromatic camphor compounds.'},{name:'Carrots',why:"Rosemary's strong aroma masks carrot scent that attracts carrot fly."},{name:'Marigolds',why:'Rosemary and marigolds together create a multi-sensory pest deterrent zone.'}],
    bad:[{name:'Cucumbers',why:"Rosemary's volatile aromatic oils inhibit cucumber vine growth and reduce fruit set."},{name:'Pumpkins',why:"Like cucumbers, pumpkins are inhibited by rosemary's allelopathic compounds."}],
  },
  companionDist:'Keep 12" from cucumbers and pumpkins.',
  animals:'Excellent pollinator attractor; volatile oils repel many vegetable pests.',
  diseases:[{name:'Root Rot',desc:'Yellowing, wilting; almost always overwatering; improve drainage immediately.'}],
  pests:'Generally pest-resistant. Spittlebugs — water spray; aphids — neem.',
  rotation:{family:'Lamiaceae (perennial/annual in Z6)',cycle:'Annual in Zone 6 unless protected; rotate position each year'},
  stages:[{label:'Est',title:'Establishment',desc:'Water regularly until established (4–6 weeks).'},{label:'Grow',title:'Growth',desc:'Pinch tips for bushing.'},{label:'Harv',title:'Harvest',desc:'Harvest tips continuously.'},{label:'Frost',title:'Pre-frost',desc:'Bring inside or mulch heavily before first frost.'}],
  special:'Zone 6: Arp or Hill Hardy varieties survive outdoors with heavy mulch. Otherwise grow in container.',
  nutrition: {
    // — Macronutrients —
    calories:    131,
    water:       67.8,   // g
    protein:     3.3,   // g
    carbs:       20.7,   // g total
    fiber:       14.1,   // g
    sugars:      0,   // g
    fat:         5.9,   // g total
    saturated:   2.84,   // g
    monounsat:   1.16,   // g
    polyunsat:   0.9,   // g
    // — Fat-soluble vitamins —
    vitA:        146,   // µg RAE
    vitD:        0,   // µg
    vitE:        0,   // mg
    vitK:        109.7,   // µg
    // — Water-soluble vitamins —
    vitC:        21.8,   // mg
    vitB1:       0.036,  // mg thiamine
    vitB2:       0.152,  // mg riboflavin
    vitB3:       0.912,  // mg niacin
    vitB5:       0.804,  // mg pantothenic
    vitB6:       0.336,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       109,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     0,  // mg
    // — Macrominerals —
    calcium:     317,  // mg
    phosphorus:  66,  // mg
    magnesium:   91,  // mg
    sodium:      26,  // mg
    potassium:   668,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        6.65,  // mg
    zinc:        0.93,  // mg
    copper:      0.301,  // mg
    manganese:   0.96,  // mg
    selenium:    0,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Values are per 100g fresh herb. Very high vitamin K (110 µg), iron (6.65 mg — 37% DV), calcium (317 mg), and folate (109 µg). Rich in rosmarinic acid and carnosic acid (antioxidants). Note: typical serving is 1–2 teaspoons (~1–2g).',
  },
  size:{weight:'N/A — culinary herb',dimensions:'Plant: 18–36" tall and wide',notes:'Harvest 2–3 inch stem tips.'},
});
