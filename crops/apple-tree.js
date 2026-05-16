import Crop from '../Crop.js';

export default new Crop({
  id:    'apple-tree',
  name:  'Apple Tree',
  cat:   'Fruit Tree',
  emoji: '🍎',

  planting: {
    zone6:   'Plant bare-root trees in early spring as soon as ground thaws (late March–April). Container trees can be planted spring through early fall. Avoid planting in summer heat.',
    depth:   'Set graft union 2–3" above soil line; do not bury it. Dig hole 2–3× width of root ball, same depth.',
    spacing: 'Dwarf: 8–10\' apart; Semi-dwarf: 12–15\'; Standard: 20–30\'. Rows 15–30\' apart by rootstock size.',
    ph:      '6.0–7.0',
    sun:     'Full sun (minimum 8 hrs for best fruit production)',
  },
  special: 'Most apple varieties require a pollinizer — plant at least 2 different varieties that bloom at the same time. Choose disease-resistant varieties (e.g., Liberty, Enterprise, Honeycrisp) to reduce spray needs. Select rootstock by desired tree size (M.9 dwarf, M.26 semi-dwarf, seedling standard).',

  water: {
    in:   '1–2',
    note: 'Critical in the first 2 years for establishment; deep, infrequent watering encourages deep roots. Mulch to conserve moisture. Reduce irrigation in late summer to harden wood before winter. Avoid wet soil around trunk (crown rot).',
  },

  fertilizer: {
    type:   'Balanced (10-10-10) or nitrogen-focused in early years; reduce nitrogen on bearing trees',
    amount: 'Young trees: 1 cup 10-10-10 per year of age (max 4 cups). Bearing trees: based on annual shoot growth (aim for 12–18" new growth per year)',
    freq:   'Once in early spring before bud break. Avoid fertilizing after July (promotes soft growth vulnerable to frost).',
  },

  companions: {
    good: [
      { name: 'Comfrey',      why: 'Deep roots mine nutrients; chop-and-drop mulch; attracts pollinators' },
      { name: 'Nasturtiums',  why: 'Trap crop for aphids; attract beneficial insects' },
      { name: 'Chives',       why: 'Repel aphids and apple scab; deter borers' },
      { name: 'Marigolds',    why: 'Deter nematodes and various pests at root zone' },
      { name: 'Clover (white)', why: 'Living mulch; fixes nitrogen; attracts pollinators' },
      { name: 'Daffodils',    why: 'Deter deer, voles, and other burrowing rodents near roots' },
    ],
    bad: [
      { name: 'Grass (turf)',  why: 'Competes heavily for water and nutrients; keep grass away from drip line' },
      { name: 'Potatoes',     why: 'Share fire blight susceptibility; can exchange diseases' },
      { name: 'Fennel',       why: 'Allelopathic; inhibits many plants including fruit trees' },
      { name: 'Walnut trees', why: 'Juglone toxicity from black walnut roots kills apple trees' },
    ],
  },
  companionDist: 'Keep grass turf 3–4\' from trunk (mulch circle). Black walnuts should be 50–80\' away. Interplant beneficial herbs and ground covers freely within the drip line.',
  animals: 'Honeybees are essential pollinators. Encourage by planting spring-blooming flowers. Beneficial predatory wasps and parasitic wasps attack codling moth and aphids. Bluebirds and chickadees eat insects.',

  diseases: [
    { name: 'Apple Scab (Venturia inaequalis)', desc: 'Most common disease; olive-brown lesions on leaves and fruit. Plant resistant varieties; apply fungicide at green tip through petal fall if needed; rake and remove fallen leaves.' },
    { name: 'Fire Blight (Erwinia amylovora)', desc: 'Bacterial disease causing shoot tips to wilt and turn brown ("shepherd\'s crook"). Cut out infected wood 12" below symptoms; sterilize tools. Plant resistant varieties.' },
    { name: 'Powdery Mildew',                  desc: 'White powdery coating on young leaves and shoots. Improve air circulation; avoid excess nitrogen; apply sulfur or neem sprays.' },
    { name: 'Cedar-Apple Rust',                desc: 'Requires both apple and juniper/cedar hosts. Causes orange lesions on leaves. Remove nearby junipers or plant resistant varieties.' },
  ],
  pests: 'Codling moth (primary pest; larvae in fruit), apple maggot, plum curculio, aphids, spider mites, scale insects, and borers. Deer and voles damage bark and roots. An integrated spray schedule and physical traps (kaolin clay, sticky traps, trunk guards) are essential for quality fruit.',

  rotation: {
    family: 'Rosaceae (Rose family)',
    cycle:  'Perennial tree; does not rotate. Do not replant apples in soil where apple, pear, or other Rosaceae trees recently grew (replant disease). Choose a fresh site or fumigate/amend heavily.',
  },

  stages: [
    { label: 'Yr 1–2',   title: 'Establishment',      desc: 'Focus on root and scaffold branch development. Remove all fruit in year 1; remove most in year 2. Water and mulch consistently. Train branch angles.' },
    { label: 'Yr 2–4',   title: 'Juvenile Growth',    desc: 'Tree fills out its framework. Begin light pruning to open canopy. Some trees begin bearing fruit. Continue training.' },
    { label: 'Yr 4–7',   title: 'Coming into Bearing', desc: 'First meaningful harvests. Thin fruit to 6" between apples for good size and to prevent biennial bearing. Annual dormant pruning important.' },
    { label: 'Yr 7–20+', title: 'Full Production',    desc: 'Mature bearing tree. Annual dormant pruning, pest management, and fertilization maintain productivity. Trees can produce for 50–100+ years.' },
    { label: 'Spring',   title: 'Bloom & Pollination', desc: 'Blooms mid-April to early May in Zone 6. Pollinators (especially bees) are critical during the 7–10 day bloom window. Late frost can destroy the crop.' },
  ],

  nutrition: {
    // — Macronutrients —
    calories:    52,
    water:       85.6,   // g
    protein:     0.3,   // g
    carbs:       13.8,   // g total
    fiber:       2.4,   // g
    sugars:      10.4,   // g
    fat:         0.2,   // g total
    saturated:   0.03,   // g
    monounsat:   0.01,   // g
    polyunsat:   0.05,   // g
    // — Fat-soluble vitamins —
    vitA:        3,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.18,   // mg
    vitK:        2.2,   // µg
    // — Water-soluble vitamins —
    vitC:        4.6,   // mg
    vitB1:       0.017,  // mg thiamine
    vitB2:       0.026,  // mg riboflavin
    vitB3:       0.091,  // mg niacin
    vitB5:       0.061,  // mg pantothenic
    vitB6:       0.041,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       3,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     3.4,  // mg
    // — Macrominerals —
    calcium:     6,  // mg
    phosphorus:  11,  // mg
    magnesium:   5,  // mg
    sodium:      1,  // mg
    potassium:   107,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0.12,  // mg
    zinc:        0.04,  // mg
    copper:      0.027,  // mg
    manganese:   0.035,  // mg
    selenium:    0,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Most antioxidants (quercetin, catechin) are in the skin — eat unpeeled. Pectin supports gut microbiome. Low glycemic index relative to many fruits.',
  },

  size: {
    weight:     '100–350g per fruit (varies widely by variety)',
    dimensions: '2.5–4" diameter',
    notes:      'Hundreds of varieties exist with wildly different flavor, color, and ripening times (early: Lodi/Yellow Transparent; mid: Honeycrisp, McIntosh; late: Fuji, Granny Smith, Enterprise). Zone 6 gardeners should select varieties with appropriate chilling requirements (800–1200 hrs typical).',
  },
});
