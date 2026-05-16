import Crop from '../Crop.js';

export default new Crop({
  id:    'pear-tree',
  name:  'Pear Tree',
  cat:   'Fruit Tree',
  emoji: '🍐',

  planting: {
    zone6:   'Plant bare-root trees in early spring as soon as ground can be worked (late March–April). Container trees can go in through late summer. Pears bloom early — site away from frost pockets.',
    depth:   'Set graft union 2–3" above soil line. Dig hole 2–3× width of root ball, same depth as container or root system.',
    spacing: 'Dwarf: 10–12\' apart; Semi-dwarf: 15–18\'; Standard: 20–25\'',
    ph:      '6.0–7.0',
    sun:     'Full sun (8+ hrs)',
  },
  special: 'Most European pears require cross-pollination — plant 2 different varieties. Asian pears are partially self-fertile but yield better with a pollinizer. Bartlett and Bosc are common Zone 6 choices. European pears must be picked BEFORE they ripen on the tree and ripened indoors (they go mealy if left on tree). Fire blight resistance is a key variety selection criterion.',

  water: {
    in:   '1–1.5',
    note: 'Deep, infrequent watering preferred after establishment. Consistent moisture during fruit development. Avoid waterlogged soil. Mulch to conserve moisture and moderate soil temperature.',
  },

  fertilizer: {
    type:   'Low-to-moderate nitrogen; excess nitrogen greatly increases fire blight susceptibility',
    amount: 'Young trees: ½–1 cup 10-10-10 per year of age (max 3 cups). Bearing trees: aim for 12–15" of shoot growth per season.',
    freq:   'Once in early spring before bud break only. Never fertilize after July.',
  },

  companions: {
    good: [
      { name: 'Comfrey',      why: 'Nutrient accumulator; living mulch; attracts pollinators' },
      { name: 'Chives',       why: 'Repel aphids; some evidence of fire blight suppression when planted at base' },
      { name: 'Fennel',       why: 'Attracts beneficial predatory insects (note: keep away from most crops but okay near pear trees specifically)' },
      { name: 'Marigolds',    why: 'Deter nematodes and pests at soil level' },
      { name: 'Clover',       why: 'Living mulch; nitrogen fixation; pollinator habitat' },
      { name: 'Daffodils',    why: 'Deter voles and deer from root zone' },
    ],
    bad: [
      { name: 'Grass (turf)',  why: 'Competes aggressively for water and nutrients; keep 3–4\' from trunk' },
      { name: 'Quince',        why: 'Shares fire blight and other diseases; avoid planting adjacent' },
      { name: 'Hawthorn',      why: 'Alternate host for fire blight and pear rust; keep away from orchard' },
      { name: 'Black Walnut',  why: 'Juglone toxicity damages pear root systems' },
    ],
  },
  companionDist: 'Maintain a 3–4\' mulched circle around trunk free of grass. Keep hawthorn and quince 30+ feet away. Black walnut should be 50–80\' away.',
  animals: 'Honeybees are critical pollinators during the early spring bloom (often before most other pollinators are active). Encourage with nearby early-blooming flowers. Parasitic wasps help control codling moth.',

  diseases: [
    { name: 'Fire Blight (Erwinia amylovora)', desc: 'Most serious pear disease. Bacterial infection causes shoot tips to wilt and blacken, appearing burned. Blossoms are the primary infection point. Plant highly resistant varieties (Harrow Delight, Seckel); prune out infected wood 12–18" below symptoms; sterilize tools between cuts with 10% bleach or 70% alcohol.' },
    { name: 'Pear Scab (Venturia pirina)',     desc: 'Similar to apple scab; dark olive lesions on fruit and leaves. Plant resistant varieties; apply fungicide at green tip if needed; remove leaf litter.' },
    { name: 'Fabraea Leaf Spot',              desc: 'Dark spots on leaves causing early defoliation. Worse in wet seasons. Clean up fallen leaves; copper or lime-sulfur sprays at bud break.' },
    { name: 'Crown Rot (Phytophthora)',        desc: 'Root and crown rot from poorly drained soil. Plant on well-drained site or raised bed; avoid burying graft union.' },
  ],
  pests: 'Codling moth (larvae tunnel fruit), pear psylla (sucking insect unique to pear; produces honeydew and sooty mold), pear slug (sawfly larva skeletonizes leaves), aphids, and scale insects. Deer and voles damage bark in winter.',

  rotation: {
    family: 'Rosaceae (Rose family)',
    cycle:  'Perennial tree; does not rotate. Avoid replanting pears or apples in the same ground (replant disease complex). Choose fresh ground or thoroughly amend/fumigate soil if replanting.',
  },

  stages: [
    { label: 'Yr 1–2',   title: 'Establishment',       desc: 'Develop root system and scaffold branches. Remove all flowers in year 1; limit fruit in year 2. Central leader training is standard for pears.' },
    { label: 'Yr 2–5',   title: 'Framework Development', desc: 'Train scaffold branches to wide (45–60°) angles to encourage fruiting. Begin annual dormant pruning. Pears often take 4–6 years to bear well.' },
    { label: 'Yr 4–7',   title: 'First Harvests',      desc: 'Meaningful crops begin. Thin fruit clusters to 1 pear per spur. Harvest European varieties when starch begins converting (before fully ripe).' },
    { label: 'Yr 7–25+', title: 'Full Production',     desc: 'Mature trees yield 150–300+ lbs per year. Annual dormant pruning, fire blight management, and pest control maintain production.' },
    { label: 'Spring',   title: 'Early Bloom',         desc: 'Pears bloom in early-to-mid April in Zone 6, often before apples. Late frost is a significant risk. Cold nights during bloom reduce set. Bees critical.' },
  ],

  nutrition: {
    // — Macronutrients —
    calories:    57,
    water:       83.7,   // g
    protein:     0.4,   // g
    carbs:       15.2,   // g total
    fiber:       3.1,   // g
    sugars:      9.8,   // g
    fat:         0.1,   // g total
    saturated:   0.01,   // g
    monounsat:   0.03,   // g
    polyunsat:   0.05,   // g
    // — Fat-soluble vitamins —
    vitA:        1,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.12,   // mg
    vitK:        4.4,   // µg
    // — Water-soluble vitamins —
    vitC:        4.3,   // mg
    vitB1:       0.012,  // mg thiamine
    vitB2:       0.026,  // mg riboflavin
    vitB3:       0.161,  // mg niacin
    vitB5:       0.049,  // mg pantothenic
    vitB6:       0.029,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       7,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     5.1,  // mg
    // — Macrominerals —
    calcium:     9,  // mg
    phosphorus:  12,  // mg
    magnesium:   7,  // mg
    sodium:      1,  // mg
    potassium:   116,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0.18,  // mg
    zinc:        0.1,  // mg
    copper:      0.082,  // mg
    manganese:   0.048,  // mg
    selenium:    0.1,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Good source of copper (0.08 mg) and vitamin K. Higher fiber than many fruits, largely from pectin which supports gut health. Asian pears have a crisper texture and slightly different profile.',
  },

  size: {
    weight:     '100–300g per fruit (Bartlett ~175g; Bosc ~200g; Asian pears up to 400g)',
    dimensions: '2.5–4" tall, 2–3" diameter (European/Bartlett shape); Asian pears more round at 2.5–4" diameter',
    notes:      'European varieties: Bartlett (Williams), Bosc, Anjou, Comice. Asian varieties: Hosui, Shinseiki, 20th Century. Zone 6 favorites with fire blight resistance: Harrow Delight, Moonglow, Magness.',
  },
});
