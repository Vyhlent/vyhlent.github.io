import Crop from '../Crop.js';

export default new Crop({
  id:    'lettuce',
  name:  'Lettuce',
  cat:   'Leafy Green',
  emoji: '🥬',

  planting: {
    zone6:   'Direct sow or transplant as soon as soil can be worked (late March–April); succession-plant every 2–3 weeks through May. Second planting in late August–September for fall harvest.',
    depth:   '⅛" (barely cover seed; needs light to germinate)',
    spacing: '6–12" apart (loose-leaf 6"; head types 10–12"); rows 12–18" apart. Can broadcast in beds and thin.',
    ph:      '6.0–7.0',
    sun:     'Full sun in spring/fall; partial shade (3–4 hrs) tolerated and preferred in summer to extend season',
  },
  special: 'Lettuce is a cool-season crop that bolts (goes to seed) quickly in heat above 75 °F. Use shade cloth in summer. For transplants, harden off carefully. Cut-and-come-again harvesting extends production.',

  water: {
    in:   '1–1.5',
    note: 'Shallow roots require consistent, even moisture. Drip irrigation or careful overhead watering in morning. Drought stress causes bitterness and early bolting.',
  },

  fertilizer: {
    type:   'Balanced nitrogen-forward (e.g., 10-5-5 or fish emulsion)',
    amount: '1–2 lbs 10-10-10 per 100 sq ft at bed prep; liquid feed every 2–3 weeks',
    freq:   'Pre-plant incorporation + liquid feeds during the season; avoid excess nitrogen late (causes tip-burn)',
  },

  companions: {
    good: [
      { name: 'Carrots',   why: 'Lettuce shades soil, keeping carrot area cool and moist' },
      { name: 'Radishes',  why: 'Fast-growing; break soil for lettuce roots and deter aphids' },
      { name: 'Strawberries', why: 'Mutually beneficial ground cover pairing' },
      { name: 'Chives',    why: 'Repel aphids and other soft-bodied insects' },
      { name: 'Nasturtiums', why: 'Trap crop for aphids; edible flowers' },
      { name: 'Tall crops (Corn, Pole Beans)', why: 'Provide afternoon shade to extend lettuce season in summer' },
    ],
    bad: [
      { name: 'Fennel',  why: 'Allelopathic to most vegetables including lettuce' },
      { name: 'Parsley', why: 'Can inhibit lettuce germination' },
      { name: 'Celery',  why: 'Competes heavily and shares some pests' },
    ],
  },
  companionDist: 'Interplant herbs and flowers freely; keep fennel 3+ feet away.',
  animals: 'Ladybugs and lacewings control aphids; attract with flowering herbs nearby.',

  diseases: [
    { name: 'Downy Mildew',   desc: 'Yellow patches on upper leaves, grey fuzz beneath; improve air circulation, avoid overhead watering, use resistant varieties.' },
    { name: 'Bottom Rot (Rhizoctonia)', desc: 'Slimy, collapsed base; caused by wet, warm conditions. Improve drainage and air flow.' },
    { name: 'Tip Burn',       desc: 'Brown leaf edges from calcium deficiency or heat stress; not a pathogen but a cultural issue. Increase airflow and maintain even moisture.' },
    { name: 'Lettuce Mosaic Virus', desc: 'Mottled, distorted leaves spread by aphids. Remove infected plants; control aphid populations.' },
  ],
  pests: 'Aphids (most common), slugs, snails, earwigs, cutworms, and rabbits. Row covers provide excellent protection early in the season.',

  rotation: {
    family: 'Asteraceae (Daisy/Composite family)',
    cycle:  'Rotate every 2–3 years; avoid following other Asteraceae (endive, chicory, artichoke). Fast-maturing, so it fits well as a gap crop in rotations between heavy feeders.',
  },

  stages: [
    { label: 'Day 0–7',   title: 'Germination',       desc: 'Seeds germinate at 40–75 °F (optimal 60–65 °F). Keep soil moist. Light aids germination — do not bury deeply.' },
    { label: 'Day 7–21',  title: 'Seedling',           desc: 'True leaves emerge; thin to proper spacing. Susceptible to damping-off — ensure good airflow.' },
    { label: 'Day 21–45', title: 'Vegetative Growth',  desc: 'Rapid leaf production. Begin cut-and-come-again harvesting for loose-leaf types. Maintain moisture and feed.' },
    { label: 'Day 45–70', title: 'Head Fill / Harvest', desc: 'Head types fill out and firm up. Harvest loose-leaf continuously; cut heads at base when firm.' },
    { label: 'Day 70+',   title: 'Bolting',            desc: 'Warm temperatures trigger seed stalk. Leaves become bitter. Pull plants and replant or sow fall crop.' },
  ],

  nutrition: {
    // — Macronutrients —
    calories:    15,
    water:       94.9,   // g
    protein:     1.4,   // g
    carbs:       2.9,   // g total
    fiber:       1.3,   // g
    sugars:      1.2,   // g
    fat:         0.2,   // g total
    saturated:   0.03,   // g
    monounsat:   0.01,   // g
    polyunsat:   0.12,   // g
    // — Fat-soluble vitamins —
    vitA:        166,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.29,   // mg
    vitK:        102.5,   // µg
    // — Water-soluble vitamins —
    vitC:        9.2,   // mg
    vitB1:       0.07,  // mg thiamine
    vitB2:       0.08,  // mg riboflavin
    vitB3:       0.375,  // mg niacin
    vitB5:       0.15,  // mg pantothenic
    vitB6:       0.09,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       73,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     13.4,  // mg
    // — Macrominerals —
    calcium:     36,  // mg
    phosphorus:  29,  // mg
    magnesium:   13,  // mg
    sodium:      28,  // mg
    potassium:   194,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0.86,  // mg
    zinc:        0.18,  // mg
    copper:      0.048,  // mg
    manganese:   0.25,  // mg
    selenium:    0.6,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Romaine values shown. High vitamin K (103 µg) and folate (73 µg). Romaine and red-leaf types are highest in vitamins A and K. Iceberg has the lowest nutrient density. All types are very low-calorie.',
  },

  size: {
    weight:     '150–600g per head depending on type (butterhead ~200g, romaine ~400g, iceberg ~600g)',
    dimensions: '8–14" tall (romaine); 6–10" diameter (head types)',
    notes:      'Types include loose-leaf, butterhead, romaine, and crisphead (iceberg). Loose-leaf varieties are easiest and most productive for home gardens.',
  },
});
