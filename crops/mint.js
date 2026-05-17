import Crop from '../Crop.js';
export default new Crop({
  id: 'mint',
  name: 'Mint',
  cat: 'Herbs & Alliums',
  emoji: '🌿',

  planting: {
    zone6:   'Plant transplants in spring after last frost (mid-April through May) or in late summer for fall harvest. Can also plant in early fall to establish before winter. Best to start from divisions or transplants — seed is slow and variable.',
    depth:   '0.5 inches for rhizomes; crown at soil level for transplants',
    spacing: '18–24 inches — mint will fill the space regardless',
    ph:      '6.0–7.0',
    sun:     'Full sun to partial shade',
  },
  special: '⚠️ Plant in containers sunk in the ground, or in a dedicated bed with root barriers. Mint spreads aggressively via underground rhizomes and will colonize surrounding garden beds within 1–2 seasons if not contained. Sink a 12-inch deep barrier or use a buried pot. Many varieties available: spearmint (culinary standard), peppermint (menthol), apple mint, chocolate mint, mojito mint.',

  water: {
    in:   '1–1.5',
    note: 'Prefers consistently moist soil. Drought causes reduced essential oil content and bitter flavor. Avoid waterlogging — good drainage with consistent moisture is ideal.',
  },

  fertilizer: {
    type:   'Balanced',
    amount: 'Light application only — too much fertility reduces essential oil concentration',
    freq:   'Compost mulch annually in spring. A light balanced liquid feed (fish emulsion or compost tea) monthly during growing season if in containers. Avoid excess nitrogen.',
  },

  companions: {
    good: [
      { name: 'Tomatoes',   why: 'Mint repels aphids, flea beetles, and spider mites near tomatoes. Keep contained or use cut mint as mulch.' },
      { name: 'Cabbage',    why: 'Deters cabbage moth, aphids, and flea beetles — classic companion.' },
      { name: 'Peppers',    why: 'Repels aphids and spider mites; improves pest balance near peppers.' },
      { name: 'Peas',       why: 'Mint planted at row ends deters aphids from pea crops.' },
      { name: 'Wild Blackberry', why: 'Can be planted at row ends of blackberry beds to deter Japanese beetles.' },
    ],
    bad: [
      { name: 'Parsley',   why: 'Mint can be allelopathic near parsley — inhibits parsley growth in some conditions.' },
      { name: 'Chamomile', why: 'Mint can outcompete and suppress chamomile if not contained.' },
    ],
  },
  companionDist: 'Most effective as a companion when used as cut mulch placed near target plants rather than planted in the bed directly. The volatile oils provide pest deterrence even from dried leaves.',
  animals: 'Flowers attract a wide range of beneficial insects — bees, hover flies, parasitic wasps. The flowers are important late-season nectar sources. Deer occasionally browse but often dislike strong mint aroma.',

  diseases: [
    { name: 'Mint Rust',    desc: 'Puccinia menthae causes orange pustules on leaves and distorted growth. Remove and destroy infected plant material. Improve airflow. Resistant varieties available.' },
    { name: 'Verticillium Wilt', desc: 'Sudden wilting of shoots. No cure — remove infected plants and avoid replanting mint in that spot for several years.' },
    { name: 'Powdery Mildew',   desc: 'White powdery coating on leaves in humid conditions. Improve airflow; avoid overhead watering. Baking soda or sulfur spray if severe.' },
  ],
  pests: 'Mint aphids can cluster on shoot tips in spring — knock off with water spray. Spider mites in hot dry conditions — increase humidity. Cutworms occasionally sever stems at soil level.',

  rotation: {
    family: 'Lamiaceae (Mint family)',
    cycle:  'Perennial — permanent planting in its designated bed or container. No rotation — simply cut back to the ground in fall and it regrows from rhizomes in spring.',
  },

  stages: [
    { label: 'Spring', title: 'Emergence',     desc: 'New growth emerges from rhizomes in March–April. Begin harvest when stems reach 6 inches. Cut entire stems; this encourages bushy rather than leggy growth.' },
    { label: 'May–Sep',title: 'Main harvest',  desc: 'Harvest repeatedly throughout growing season. Best flavor before flowering. Cut stems to 1 inch above ground level — regrows vigorously within 2–3 weeks.' },
    { label: 'Jul–Aug',title: 'Flowering',     desc: 'Small pink, white, or purple flower spikes appear in midsummer. Flavor becomes slightly more bitter when in full bloom. Deadhead to prolong vegetative growth or allow to bloom for pollinators.' },
    { label: 'Fall',   title: 'Cut back',      desc: 'Cut plants to ground level after first frost. Mulch lightly to protect rhizomes. Divide crowded clumps every 2–3 years to maintain vigor.' },
  ],

  nutrition: {
    calories: 44, water: 85.6, protein: 3.3, carbs: 8.4, fiber: 6.8, sugars: 0.2,
    fat: 0.7, saturated: 0.19, monounsat: 0.02, polyunsat: 0.39,
    vitA: 203, vitD: 0, vitE: 0.56, vitK: 121.7,
    vitC: 31.8, vitB1: 0.08, vitB2: 0.18, vitB3: 0.95, vitB5: 0.24, vitB6: 0.13,
    vitB7: 0, vitB9: 114, vitB12: 0, choline: 0,
    calcium: 243, phosphorus: 73, magnesium: 80, sodium: 31, potassium: 569, chloride: 0,
    iron: 5.08, zinc: 1.11, copper: 0.24, manganese: 1.18, selenium: 0.6, iodine: 0,
    notes: 'Values per 100g fresh spearmint — used in much smaller culinary quantities (1–2 tbsp per serving). Exceptional in Vitamin K, folate, iron, and calcium for an herb. Peppermint has similar profile with higher menthol content.',
  },

  size: {
    weight:     'Herb — harvested by stem/leaf volume, not weight',
    dimensions: 'Plants reach 12–36 inches tall depending on variety',
    notes:      'Spearmint and peppermint are the most common culinary varieties. Apple mint has softer, fuzzier leaves and milder flavor. Mojito mint (Cuban mint) has a lime-forward character.',
  },
});
