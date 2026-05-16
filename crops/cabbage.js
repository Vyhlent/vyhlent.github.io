import Crop from '../Crop.js';

export default new Crop({
  id:    'cabbage',
  name:  'Cabbage',
  cat:   'Brassica',
  emoji: '🥬',

  planting: {
    zone6:   'Start indoors 6–8 weeks before last frost (late Feb–March). Transplant outdoors 2–4 weeks before last frost (early–mid April). For fall crop, start indoors in July and transplant in August.',
    depth:   '¼–½" for seeds; set transplants deep (to first true leaf)',
    spacing: '12–18" apart; rows 24–36" apart. Closer spacing produces smaller heads.',
    ph:      '6.0–7.5',
    sun:     'Full sun (6+ hrs); tolerates light afternoon shade in warm spells',
  },
  special: 'Cabbage is frost-hardy and actually sweetened by light frost. Use floating row covers to protect against pests (cabbage worms) from day one. Add lime if pH is below 6.5 to help prevent clubroot.',

  water: {
    in:   '1–1.5',
    note: 'Even, consistent moisture is critical — irregular watering causes heads to split. Water at the base; wet foliage encourages fungal disease. Reduce water slightly as heads mature.',
  },

  fertilizer: {
    type:   'High nitrogen early, then balanced (e.g., 10-10-10)',
    amount: '2–3 lbs 10-10-10 per 100 sq ft worked into bed; side-dress with nitrogen 3 weeks after transplant',
    freq:   'At planting, then side-dress once or twice during head development',
  },

  companions: {
    good: [
      { name: 'Dill',         why: 'Attracts parasitic wasps that prey on cabbage worms' },
      { name: 'Nasturtiums',  why: 'Trap crop for aphids; attract beneficial insects' },
      { name: 'Onions',       why: 'Strong scent confuses and deters cabbage moths' },
      { name: 'Celery',       why: 'Repels cabbage white butterfly' },
      { name: 'Chamomile',    why: 'Said to improve cabbage flavor and growth' },
      { name: 'Marigolds',    why: 'Deter nematodes and various insects' },
    ],
    bad: [
      { name: 'Strawberries', why: 'Inhibit each other\'s growth when planted close' },
      { name: 'Tomatoes',     why: 'Both are heavy feeders; compete and share some pests' },
      { name: 'Fennel',       why: 'Allelopathic; inhibits growth of most vegetables' },
      { name: 'Rue',          why: 'Reportedly inhibits cabbage and other brassicas' },
    ],
  },
  companionDist: 'Keep bad companions 4+ feet away; interplant alliums and herbs freely among brassicas.',
  animals: 'Ground beetles eat cabbage root fly eggs and slug eggs. Paper wasps and parasitic wasps prey on caterpillars. Encourage with leaf mulch and insectary flowers.',

  diseases: [
    { name: 'Clubroot',           desc: 'Soil-borne slime mold causing swollen, distorted roots; wilting plant. Raise soil pH to 7.0–7.5; long rotation (7+ years) out of brassicas; use resistant varieties.' },
    { name: 'Black Rot (Xanthomonas)', desc: 'V-shaped yellow lesions on leaves turning black veins. Use certified seed; avoid overhead watering; rotate crops.' },
    { name: 'Downy Mildew',       desc: 'Yellow patches on leaves with grey-purple fuzz below; cool, humid conditions. Improve airflow; avoid dense planting.' },
    { name: 'Sclerotinia Rot',    desc: 'White cottony mold on stems/base; watery rot. Improve drainage and avoid overhead watering.' },
  ],
  pests: 'Imported cabbageworm, cabbage looper, and diamondback moth caterpillars are the primary threats. Also aphids (especially woolly aphids), cabbage maggot root fly, flea beetles, and slugs. Row covers from transplant are the single best defense.',

  rotation: {
    family: 'Brassicaceae (Mustard family)',
    cycle:  'Do NOT follow any other brassica (broccoli, kale, cauliflower, radish, turnip). Rotate on a 3–4 year cycle minimum (7 years if clubroot is present). Good predecessors: legumes. Good successors: alliums or root veg.',
  },

  stages: [
    { label: 'Wk 0–2',   title: 'Germination & Seedling', desc: 'Germinates in 5–10 days at 65–75 °F. Start indoors; provide bright light to prevent leggy seedlings.' },
    { label: 'Wk 2–6',   title: 'Transplant & Establishment', desc: 'Harden off over 7–10 days. Transplant into garden; protect with row covers immediately.' },
    { label: 'Wk 6–10',  title: 'Leafy Growth',           desc: 'Large outer leaves develop. Side-dress with nitrogen. Scout for pests under leaves daily.' },
    { label: 'Wk 10–14', title: 'Head Initiation',        desc: 'Inner leaves begin cupping inward. Maintain even watering to prevent splitting.' },
    { label: 'Wk 14–18', title: 'Head Fill & Harvest',    desc: 'Head firms up. Harvest when head is solid and firm to the touch. Cut at base with a sharp knife.' },
  ],

  nutrition: {
    // — Macronutrients —
    calories:    25,
    water:       92.2,   // g
    protein:     1.3,   // g
    carbs:       5.8,   // g total
    fiber:       2.5,   // g
    sugars:      3.2,   // g
    fat:         0.1,   // g total
    saturated:   0.03,   // g
    monounsat:   0.02,   // g
    polyunsat:   0.04,   // g
    // — Fat-soluble vitamins —
    vitA:        5,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.15,   // mg
    vitK:        76,   // µg
    // — Water-soluble vitamins —
    vitC:        36.6,   // mg
    vitB1:       0.061,  // mg thiamine
    vitB2:       0.04,  // mg riboflavin
    vitB3:       0.234,  // mg niacin
    vitB5:       0.212,  // mg pantothenic
    vitB6:       0.124,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       43,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     10.7,  // mg
    // — Macrominerals —
    calcium:     40,  // mg
    phosphorus:  26,  // mg
    magnesium:   12,  // mg
    sodium:      18,  // mg
    potassium:   170,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0.47,  // mg
    zinc:        0.18,  // mg
    copper:      0.019,  // mg
    manganese:   0.16,  // mg
    selenium:    0.3,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Excellent source of Vitamin K (76 µg) and Vitamin C. Red cabbage contains 4–6× more anthocyanins and vitamin C than green. Fermented as sauerkraut or kimchi it becomes a probiotic-rich food.',
  },

  size: {
    weight:     '0.5–3 kg per head (typical garden harvest 1–2 kg)',
    dimensions: '6–10" diameter',
    notes:      'Varieties include green (most common), red/purple, savoy (crinkled), and napa/Chinese types. Early varieties mature in 60–70 days; main-season types in 80–120 days.',
  },
});
