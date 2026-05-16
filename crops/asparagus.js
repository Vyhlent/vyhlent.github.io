import Crop from '../Crop.js';
export default new Crop({
  id:'asparagus',name:'Asparagus',cat:'Perennial Veg',emoji:'🌱',
  planting:{zone6:'Plant crowns Apr 1–30 (soil 40°F+)',depth:'6–8" deep in trench; fill in as shoots grow',spacing:'12–18" apart, rows 4–5 ft',ph:'6.5–7.5',sun:'Full sun'},
  water:{in:'1–2',note:'Consistent moisture first 2 years; critical during fern phase'},
  fertilizer:{type:'Balanced 10-10-10',amount:'2 lbs per 100 sq ft',freq:'Early spring; again after harvest ends'},
  companions:{
    good:[{name:'Tomatoes',why:'Tomatoes repel asparagus beetle while asparagus deters root nematodes that attack tomatoes.'},{name:'Basil',why:'Basil repels asparagus beetle and its oils confuse insects seeking to lay eggs in asparagus crowns.'},{name:'Marigolds',why:'Marigolds suppress nematodes in the deep soil layers where asparagus crowns grow.'}],
    bad:[{name:'Garlic',why:'Garlic stunts asparagus growth and competes directly for deep soil nutrients needed by the perennial crown.'},{name:'Onions',why:'Onions release allelopathic compounds that stunt the slow-developing asparagus crown.'},{name:'Potatoes',why:'Potato harvest physically disrupts asparagus root systems, and both share fungal diseases.'}],
  },
  companionDist:'Keep 24" from garlic/onions; 3 ft from potatoes.',
  animals:'Ladybugs eat beetle eggs; toads eat many pests.',
  diseases:[{name:'Asparagus Rust',desc:'Orange-red pustules on ferns; copper fungicide; Jersey series varieties.'},{name:'Crown Rot',desc:'Brown-orange crown, plant collapse; improve drainage.'}],
  pests:'Asparagus beetle — hand pick; pyrethrin if severe.',
  rotation:{family:'Asparagaceae (perennial)',cycle:'Permanent bed — productive 15–30 years'},
  stages:[{label:'Yr1',title:'Year 1 — no harvest',desc:'Do not harvest at all; build root reserves.'},{label:'Yr2',title:'Year 2 — 2 weeks',desc:'Harvest 2 weeks only.'},{label:'Yr3',title:'Year 3+ — full',desc:'Harvest 4–6 weeks; stop when spears thin.'},{label:'Fern',title:'Fern phase',desc:'Let ferns grow all season after harvest.'}],
  special:'First harvest year 3. Jersey Giant and Jersey Knight are excellent Zone 6 varieties.',
  nutrition: {
    // — Macronutrients —
    calories:    20,
    water:       93.2,   // g
    protein:     2.2,   // g
    carbs:       3.9,   // g total
    fiber:       2.1,   // g
    sugars:      1.9,   // g
    fat:         0.1,   // g total
    saturated:   0.03,   // g
    monounsat:   0,   // g
    polyunsat:   0.05,   // g
    // — Fat-soluble vitamins —
    vitA:        38,   // µg RAE
    vitD:        0,   // µg
    vitE:        1.1,   // mg
    vitK:        41.6,   // µg
    // — Water-soluble vitamins —
    vitC:        5.6,   // mg
    vitB1:       0.143,  // mg thiamine
    vitB2:       0.141,  // mg riboflavin
    vitB3:       0.978,  // mg niacin
    vitB5:       0.274,  // mg pantothenic
    vitB6:       0.091,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       52,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     16,  // mg
    // — Macrominerals —
    calcium:     24,  // mg
    phosphorus:  52,  // mg
    magnesium:   14,  // mg
    sodium:      2,  // mg
    potassium:   202,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        2.14,  // mg
    zinc:        0.54,  // mg
    copper:      0.189,  // mg
    manganese:   0.158,  // mg
    selenium:    2.3,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Outstanding source of folate (52 µg), vitamin K, and prebiotic inulin fiber. Selenium and iron levels are notable for a green vegetable.',
  },
  size:{weight:'15–25g per spear',dimensions:'7–9" long spear, 0.5–0.75" diameter',notes:'Harvest at 6–8 inches. Pencil-thin spears signal the bed needs rest.'},
});
