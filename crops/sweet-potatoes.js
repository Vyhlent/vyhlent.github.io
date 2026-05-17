import Crop from '../Crop.js';

export default new Crop({
  id:    'sweet-potatoes',
  name:  'Sweet Potatoes',
  cat:   'Root Veg',
  emoji: '🍠',

  planting: {
    zone6:   'Plant slips outdoors after last frost (late May–early June); start slips indoors 6 weeks before transplant date',
    depth:   '4–6" deep',
    spacing: '12–18" apart in rows 3–4\' wide; raised beds or mounded rows preferred',
    ph:      '5.5–6.5',
    sun:     'Full sun (min. 6 hrs)',
  },
  special: 'Grow from slips (rooted sprouts), not seeds or tubers. Cure harvested roots at 85–90 °F with high humidity for 10–14 days to convert starches to sugar and heal skin.',

  water: {
    in:   '1–1.5',
    note: 'Keep evenly moist during vine establishment; reduce water the last 3–4 weeks before harvest to prevent cracking and improve flavor.',
  },

  fertilizer: {
    type:   'Low-nitrogen; high phosphorus & potassium (e.g., 5-10-10)',
    amount: '2–3 lbs per 100 sq ft at planting; side-dress with potassium at mid-season',
    freq:   'At planting, then once mid-season; avoid excess nitrogen (causes lush vines, small roots)',
  },

  companions: {
    good: [
      { name: 'Thyme',    why: 'Repels whiteflies and other insects' },
      { name: 'Oregano',  why: 'General pest deterrent; ground cover' },
      { name: 'Dill',     why: 'Attracts beneficial predatory wasps' },
      { name: 'Spinach',  why: 'Low-growing; uses space efficiently beneath vines' },
      { name: 'Beets',    why: 'Compatible root crops; don\'t compete heavily' },
    ],
    bad: [
      { name: 'Squash',     why: 'Both are vigorous sprawlers that compete for space' },
      { name: 'Sunflowers', why: 'Allelopathic; can inhibit sweet potato growth' },
      { name: 'Tomatoes',   why: 'Share similar pest and disease pressures' },
    ],
  },
  companionDist: 'Keep bad companions at least 6–8\' away; herbs can intermingle freely.',
  animals: 'Ground beetles prey on soil pests; attract with permanent mulch paths.',

  diseases: [
    { name: 'Black Rot',          desc: 'Fungal disease causing dark lesions on roots; use certified disease-free slips and practice crop rotation.' },
    { name: 'Fusarium Wilt',      desc: 'Soil-borne fungus causing yellowing and wilting; plant resistant varieties and rotate crops.' },
    { name: 'Scurf (Monilochaetes)', desc: 'Superficial dark patches on skin; cosmetic but reduced market value; improve drainage.' },
    { name: 'Stem Rot (Rhizopus)', desc: 'Post-harvest rot in storage; cure properly and store at 55–60 °F.' },
  ],
  pests: 'Sweet potato weevil (most serious; use certified slips), wireworms, flea beetles, whiteflies, and deer. Row covers help deter flying insects early in the season.',

  rotation: {
    family: 'Convolvulaceae (Morning Glory family)',
    cycle:  'Rotate out of the same bed every 3–4 years; do not follow other Convolvulaceae. Good predecessors: legumes (add nitrogen). Good successors: brassicas or alliums.',
  },

  stages: [
    { label: 'Wk 0–2',   title: 'Slip Establishment',  desc: 'Transplanted slips root in and begin vegetative growth; keep well-watered and protect from late cold snaps.' },
    { label: 'Wk 2–6',   title: 'Vine Run',             desc: 'Vines expand rapidly; weed carefully early, then vines will shade out weeds. Pinch runners to keep plants manageable if needed.' },
    { label: 'Wk 6–14',  title: 'Root Bulking',         desc: 'Roots enlarge underground; maintain consistent moisture. Avoid disturbing soil around plants.' },
    { label: 'Wk 14–16', title: 'Maturation',           desc: 'Vines begin to yellow; reduce watering. Harvest before first frost (roots are damaged below 50 °F).' },
    { label: 'Post-harvest', title: 'Curing & Storage', desc: 'Cure at 85–90 °F / 90% humidity for 10–14 days. Store cured roots at 55–60 °F; they keep 6–12 months.' },
  ],

  nutrition: {
    // — Macronutrients —
    calories:    86,
    water:       77.3,   // g
    protein:     1.6,   // g
    carbs:       20.1,   // g total
    fiber:       3,   // g
    sugars:      4.2,   // g
    fat:         0.1,   // g total
    saturated:   0.02,   // g
    monounsat:   0,   // g
    polyunsat:   0.04,   // g
    // — Fat-soluble vitamins —
    vitA:        961,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.26,   // mg
    vitK:        1.8,   // µg
    // — Water-soluble vitamins —
    vitC:        2.4,   // mg
    vitB1:       0.078,  // mg thiamine
    vitB2:       0.061,  // mg riboflavin
    vitB3:       0.557,  // mg niacin
    vitB5:       0.8,  // mg pantothenic
    vitB6:       0.286,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       11,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     12.3,  // mg
    // — Macrominerals —
    calcium:     30,  // mg
    phosphorus:  47,  // mg
    magnesium:   25,  // mg
    sodium:      55,  // mg
    potassium:   337,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0.61,  // mg
    zinc:        0.3,  // mg
    copper:      0.151,  // mg
    manganese:   0.258,  // mg
    selenium:    0.6,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Exceptional beta-carotene (vitamin A — 961 µg RAE, ~107% DV). One medium sweet potato provides more than a full day's vitamin A. Also rich in potassium and manganese. Orange-fleshed varieties highest in beta-carotene.',
  },

  size: {
    weight:     '150–400g per root (garden varieties); some can exceed 1 kg',
    dimensions: '4–8" long, 2–3" diameter (typical); shape varies by variety',
    notes:      'Beauregard and Covington are popular orange-fleshed varieties. Okinawan (purple flesh) and Japanese (white flesh) types also available.',
  },
});
