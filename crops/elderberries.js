import Crop from '../Crop.js';

export default new Crop({
  id: 'elderberries', name: 'Elderberries', cat: 'Berry', emoji: '🍇',
  planting: { zone6: 'Plant bare-root or container shrubs Mar–Apr or Sep–Oct; fruit in year 2–3', depth: 'Same depth as container; roots 3–4" deep', spacing: '6–10 ft apart; plant 2+ for cross-pollination', ph: '5.5–6.5', sun: 'Full sun to light shade' },
  water: { in: '1–2', note: 'Consistent moisture especially in first 2 years; drought-tolerant once established' },
  fertilizer: { type: 'Balanced 10-10-10 or compost', amount: '½ cup 10-10-10 per plant; 2–3 inches compost annually', freq: 'Early spring; top-dress compost each fall' },
  companions: {
    good: [
      { name: 'Yarrow',   why: 'Yarrow attracts parasitic wasps and hoverflies that control aphids and other elderberry pests.' },
      { name: 'Comfrey',  why: "Comfrey's deep taproots mine nutrients and its leaves make excellent mulch for elderberries." },
      { name: 'Marigolds', why: 'Marigolds deter aphids and nematodes that affect elderberry roots and stems.' },
    ],
    bad: [
      { name: 'Walnut',   why: 'Black walnut releases juglone toxin which is highly toxic to elderberries and causes rapid decline.' },
      { name: 'Tomatoes', why: 'Tomatoes share several fungal and viral diseases with elderberries and compete for the same deep nutrients.' },
    ],
  },
  companionDist: 'Keep 60+ ft from black walnut trees. 10+ ft from tomatoes.',
  animals: 'Extremely valuable for pollinators (bees, butterflies) and birds. One of the most wildlife-friendly shrubs you can grow.',
  diseases: [
    { name: 'Elderberry Mosaic Virus', desc: 'Mottled, distorted leaves; spread by aphids. Remove infected plants; control aphids aggressively.' },
    { name: 'Botrytis (Gray Mold)',    desc: 'Gray mold on flowers and fruit in humid conditions. Improve air circulation; avoid overhead watering.' },
  ],
  pests: 'Aphids — neem oil or insecticidal soap; birds love the fruit — net when ripening.',
  rotation: { family: 'Adoxaceae (perennial shrub)', cycle: 'Permanent planting — site carefully. Shrubs live 20+ years. Prune 1/3 of oldest canes each spring.' },
  stages: [
    { label: 'Est',   title: 'Establishment',   desc: 'Year 1: roots establish, moderate top growth. Do not harvest fruit.' },
    { label: 'Yr2',   title: 'First fruiting',   desc: 'Year 2: first small fruit clusters. Limited harvest only.' },
    { label: 'Full',  title: 'Full production',  desc: 'Year 3+: full fruit clusters. Harvest Aug–Sep when deep purple-black.' },
    { label: 'Prune', title: 'Annual pruning',   desc: 'Each spring: remove 1/3 of oldest canes to ground.' },
  ],
  special: "Raw elderberries are mildly toxic — always cook before eating. 'Bob Gordon' and 'Adams' are excellent Zone 6 varieties. Plant two different varieties for best cross-pollination.",
  nutrition: {
    // — Macronutrients —
    calories:    73,
    water:       79.8,   // g
    protein:     0.7,   // g
    carbs:       18.4,   // g total
    fiber:       7,   // g
    sugars:      0,   // g
    fat:         0.5,   // g total
    saturated:   0.02,   // g
    monounsat:   0.08,   // g
    polyunsat:   0.25,   // g
    // — Fat-soluble vitamins —
    vitA:        30,   // µg RAE
    vitD:        0,   // µg
    vitE:        0,   // mg
    vitK:        0,   // µg
    // — Water-soluble vitamins —
    vitC:        36,   // mg
    vitB1:       0.07,  // mg thiamine
    vitB2:       0.06,  // mg riboflavin
    vitB3:       0.5,  // mg niacin
    vitB5:       0.14,  // mg pantothenic
    vitB6:       0.23,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       6,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     0,  // mg
    // — Macrominerals —
    calcium:     38,  // mg
    phosphorus:  39,  // mg
    magnesium:   5,  // mg
    sodium:      6,  // mg
    potassium:   280,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        1.6,  // mg
    zinc:        0.11,  // mg
    copper:      0.07,  // mg
    manganese:   0.25,  // mg
    selenium:    0,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Exceptionally high in anthocyanins, flavonoids, and vitamin C. Highest fiber of common berries (7g/100g). Raw berries contain sambunigrin — always cook before consuming.',
  },
  size: { weight: '3–5g per cluster (hundreds of berries per cluster)', dimensions: 'Individual berry: 0.2–0.3" diameter; clusters 4–8" wide', notes: 'Harvest entire clusters with scissors when 80%+ of berries are deep purple-black.' },
});
