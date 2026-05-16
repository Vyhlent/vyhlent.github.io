import Crop from '../Crop.js';
export default new Crop({
  id:'corn',name:'Corn',cat:'Grain',emoji:'🌽',
  planting:{zone6:'Direct sow May 15–Jun 15 (soil 60°F+)',depth:'1–1.5" deep',spacing:'9–12" apart, rows 30–36"; plant in blocks',ph:'5.8–6.8',sun:'Full sun'},
  water:{in:'1–2',note:'Critical during tasseling and silking'},
  fertilizer:{type:'High nitrogen 46-0-0 (urea)',amount:'1.5 lbs per 100 sq ft',freq:'At planting; knee-high side-dress; again at tasseling'},
  companions:{
    good:[{name:'Beans',why:'Beans fix nitrogen which corn exhausts from soil — the Three Sisters system.'},{name:'Squash',why:"Squash's large leaves shade soil between corn rows, reducing weeds and retaining moisture."},{name:'Cucumbers',why:'Cucumbers can use corn stalks as natural trellises.'}],
    bad:[{name:'Tomatoes',why:'Corn earworm attacks both crops; growing them together creates a massive pest reservoir.'},{name:'Celery',why:'Celery releases compounds that stunt corn root development.'}],
  },
  companionDist:'Plant in blocks for pollination. Keep 3 ft from tomatoes.',
  animals:'Trichogramma wasps parasitize earworm eggs; birds eat worms.',
  diseases:[{name:"Stewart's Wilt",desc:'Yellow streaks, stunted plants; spread by flea beetles; resistant varieties.'},{name:'Common Rust',desc:'Reddish-brown pustules; cosmetic in most cases; resistant varieties.'}],
  pests:'Earworm — Bt or oil dropper on silks; corn borer — Bt spray.',
  rotation:{family:'Poaceae',cycle:'2–3 year rotation; follow with legumes to replenish nitrogen'},
  stages:[{label:'Germ',title:'Germination',desc:'Needs warm soil — cold causes poor emergence.'},{label:'V-stg',title:'Vegetative',desc:'Side-dress nitrogen at V6 (knee-high).'},{label:'Silk',title:'Tasseling & silking',desc:'Plant in blocks for wind pollination.'},{label:'Harv',title:'Harvest',desc:'Milk stage: 18–24 days after silking. 1–2 day window!'}],
  special:'Plant in blocks of 4+ rows for wind pollination. Succession plant every 2 weeks.',
  nutrition: {
    // — Macronutrients —
    calories:    86,
    water:       76.1,   // g
    protein:     3.2,   // g
    carbs:       19,   // g total
    fiber:       2.7,   // g
    sugars:      3.2,   // g
    fat:         1.2,   // g total
    saturated:   0.18,   // g
    monounsat:   0.35,   // g
    polyunsat:   0.56,   // g
    // — Fat-soluble vitamins —
    vitA:        10,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.07,   // mg
    vitK:        0.3,   // µg
    // — Water-soluble vitamins —
    vitC:        6.8,   // mg
    vitB1:       0.155,  // mg thiamine
    vitB2:       0.055,  // mg riboflavin
    vitB3:       1.77,  // mg niacin
    vitB5:       0.717,  // mg pantothenic
    vitB6:       0.093,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       42,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     29.2,  // mg
    // — Macrominerals —
    calcium:     2,  // mg
    phosphorus:  89,  // mg
    magnesium:   37,  // mg
    sodium:      15,  // mg
    potassium:   270,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0.52,  // mg
    zinc:        0.46,  // mg
    copper:      0.054,  // mg
    manganese:   0.163,  // mg
    selenium:    0.6,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Good source of B vitamins (B1, B3, B9), magnesium, and phosphorus. Best eaten within hours of harvest — sugars convert to starch rapidly. Yellow corn provides lutein and zeaxanthin for eye health.',
  },
  size:{weight:'200–300g per ear',dimensions:'7–9" long ear, 1.5–2" diameter',notes:'Pierce a kernel — milky white sap = perfect. 1–2 day harvest window at peak.'},
});
