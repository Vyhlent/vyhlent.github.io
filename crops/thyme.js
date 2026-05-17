import Crop from '../Crop.js';
export default new Crop({
  id:'thyme',name:'Thyme',cat:'Herb',emoji:'🌿',
  planting:{zone6:'Transplant Apr 15–May 15; hardy perennial in Zone 6',depth:'Same depth as pot; seeds surface-sow',spacing:'9–12" apart',ph:'6.0–8.0',sun:'Full sun'},
  water:{in:'0.5–1',note:'Excellent drainage; root rot common in wet soil'},
  fertilizer:{type:'Dilute balanced or compost',amount:'Minimal; prefers lean soil',freq:'Once spring with compost; rarely needs more'},
  companions:{
    good:[{name:'Tomatoes',why:'Thyme repels tomato hornworm moths with its aromatic thymol compounds.'},{name:'Potatoes',why:'Thyme deters potato beetles and whitefly that spreads viral diseases.'},{name:'Strawberries',why:'Thyme repels worms and slugs that damage strawberry fruit.'}],
    bad:[{name:'Mint',why:'Mint aggressively spreads by underground runners and overwhelms thyme, competing for everything.'},{name:'Fennel',why:"Fennel's allelopathic chemicals inhibit thyme and most other herbs."}],
  },
  companionDist:'Keep 12" from fennel; contain mint in pots.',
  animals:'Major bee and butterfly attractor when in bloom.',
  diseases:[{name:'Root Rot',desc:'Overwatering or clay soil; ensure excellent drainage.'}],
  pests:'Very pest-resistant. Occasional aphids/spider mites — neem oil.',
  rotation:{family:'Lamiaceae (perennial)',cycle:'Hardy perennial Zone 6; divide every 2–3 years'},
  stages:[{label:'Germ',title:'Germination',desc:'14–28 days from seed; transplants recommended.'},{label:'Est',title:'Establishment',desc:'Slow first year; hardy by end of season.'},{label:'Harv',title:'Harvest',desc:'Tips before flowering; cut back 1/3 max.'},{label:'Renew',title:'Renewal',desc:'Divide or cut back hard every 2–3 years.'}],
  special:'English thyme is classic culinary. Hardy in Zone 6 — returns each year. Allow to bloom for bees.',
  nutrition: {
    // — Macronutrients —
    calories:    101,
    water:       65.1,   // g
    protein:     5.6,   // g
    carbs:       24.5,   // g total
    fiber:       14,   // g
    sugars:      0,   // g
    fat:         1.7,   // g total
    saturated:   0.47,   // g
    monounsat:   0.08,   // g
    polyunsat:   0.53,   // g
    // — Fat-soluble vitamins —
    vitA:        238,   // µg RAE
    vitD:        0,   // µg
    vitE:        0,   // mg
    vitK:        141.5,   // µg
    // — Water-soluble vitamins —
    vitC:        160.1,   // mg
    vitB1:       0.048,  // mg thiamine
    vitB2:       0.471,  // mg riboflavin
    vitB3:       1.824,  // mg niacin
    vitB5:       0.409,  // mg pantothenic
    vitB6:       0.348,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       45,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     0,  // mg
    // — Macrominerals —
    calcium:     405,  // mg
    phosphorus:  106,  // mg
    magnesium:   160,  // mg
    sodium:      9,  // mg
    potassium:   609,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        17.45,  // mg
    zinc:        1.81,  // mg
    copper:      0.555,  // mg
    manganese:   1.719,  // mg
    selenium:    0.9,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Values per 100g fresh herb — typical culinary serving is ~1g. Extraordinary iron (17.5 mg), calcium (405 mg), vitamin C (160 mg), and vitamin K (142 µg) per 100g. Rich in thymol and carvacrol — powerful antimicrobial and antifungal compounds.',
  },
  size:{weight:'N/A — culinary herb',dimensions:'Plant: 6–12" tall, spreading',notes:'Harvest stem tips 2–3 inches long.'},
});
