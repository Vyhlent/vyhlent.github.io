import Crop from '../Crop.js';
export default new Crop({
  id: 'cherry_tree',
  name: 'Cherry Tree',
  cat: 'Fruit Trees',
  emoji: '🍒',
  type: 'tree',

  planting: {
    zone6:   'Plant bare-root trees in early spring (March–April) or container trees spring through fall. Avoid planting in midsummer heat.',
    depth:   'Crown at soil level',
    spacing: '18–25 ft apart (sweet cherry), 12–15 ft (sour cherry dwarf)',
    ph:      '6.0–7.0',
    sun:     'Full sun',
  },
  special: 'Most sweet cherries need a pollinator variety nearby. Sour (pie) cherries are self-fertile. Plant on a slight slope for cold-air drainage to protect blossoms from late frost.',

  water: {
    in:   '1–1.5',
    note: 'Deep watering weekly during first two years. Established trees are moderately drought-tolerant but need consistent moisture during fruit swell.',
  },

  fertilizer: {
    type:   'Balanced',
    amount: '1 lb 10-10-10 per year of tree age (up to 8 lb)',
    freq:   'Once in early spring before bud break. Avoid late-season nitrogen which encourages soft growth before winter.',
  },

  companions: {
    good: [
      { name: 'Garlic', why: 'Repels borers and aphids that commonly attack cherry bark.' },
      { name: 'Chives', why: 'Allium family deters aphids and can help confuse plum curculio.' },
      { name: 'Marigolds', why: 'Attract beneficial insects and deter soil nematodes near roots.' },
      { name: 'Nasturtiums', why: 'Trap crop for aphids; lure them away from foliage.' },
      { name: 'Comfrey', why: 'Dynamic accumulator — mine deep nutrients and mulch around base.' },
    ],
    bad: [
      { name: 'Potatoes', why: 'Share Verticillium wilt pathogens that can infect cherry roots.' },
      { name: 'Tomatoes', why: 'Same Verticillium wilt risk as potatoes.' },
      { name: 'Wheat', why: 'Hosts cherry blackfly populations that carry over to fruit trees.' },
    ],
  },
  companionDist: 'Plant beneficial companions within the drip line or just beyond. Keep alliums at least 12 inches from trunk to avoid competing with shallow feeder roots.',
  animals: 'Robins and cedar waxwings eat fruit (use netting during ripening). Honeybees are essential pollinators — avoid spraying during bloom.',

  diseases: [
    { name: 'Brown Rot',       desc: 'Fungal disease causing blossoms and fruit to rot. Remove mummified fruit and increase airflow by pruning. Apply copper or sulfur spray at bud break.' },
    { name: 'Black Knot',      desc: 'Olive-black galls on twigs (more common on plums but can appear on cherries). Prune out infected wood 4 inches below the gall; destroy clippings.' },
    { name: 'Cherry Leaf Spot',desc: 'Purple spots on leaves leading to early defoliation. Apply copper fungicide at petal fall and repeat every 7–10 days in wet seasons.' },
  ],
  pests: 'Spotted wing drosophila (SWD) is the primary threat — fine mesh netting at color change is the best defense. Plum curculio cuts crescent-shaped egg scars in young fruit. Japanese beetles skeletonize foliage. Aphid colonies cluster on shoot tips in spring.',

  rotation: {
    family: 'Rosaceae (Rose family)',
    cycle:  'Perennial tree — fixed position. Do not plant a new cherry where one recently died due to replant disease; wait 3+ years and amend with compost.',
  },

  stages: [
    { label: 'Yr 1–2', title: 'Establishment', desc: 'Focus on root development. Head back scaffold branches to promote strong structure. Remove any fruit that sets to redirect energy.' },
    { label: 'Yr 3–4', title: 'First crops',   desc: 'Light fruiting begins. Continue training. Thin fruit to 4–6 inches apart to prevent branch breakage and improve size.' },
    { label: 'Yr 5+',  title: 'Full bearing',  desc: 'Mature trees can produce 30–50 lbs annually. Annual dormant pruning keeps canopy open and renews fruiting wood.' },
    { label: 'Bloom',  title: 'Pollination',   desc: 'Typically April–May in Zone 6. Late frosts are the biggest risk — have row cover ready for cold snaps below 28°F.' },
    { label: 'Harvest',title: 'Fruit ripening', desc: 'Sour cherries ripen June–July; sweet varieties July–August. Harvest when fully colored and slightly soft. Birds will beat you to it — net early.' },
  ],

  nutrition: {
    calories: 63, water: 82.2, protein: 1.1, carbs: 16, fiber: 2.1, sugars: 12.8,
    fat: 0.2, saturated: 0.04, monounsat: 0.05, polyunsat: 0.05,
    vitA: 3, vitD: 0, vitE: 0.07, vitK: 2.1,
    vitC: 7, vitB1: 0.03, vitB2: 0.03, vitB3: 0.15, vitB5: 0.14, vitB6: 0.05,
    vitB7: 0, vitB9: 4, vitB12: 0, choline: 7.6,
    calcium: 13, phosphorus: 21, magnesium: 11, sodium: 0, potassium: 222, chloride: 0,
    iron: 0.36, zinc: 0.07, copper: 0.06, manganese: 0.07, selenium: 0, iodine: 0,
    notes: 'Values are for sweet cherries (Prunus avium) per 100g fresh weight. Sour cherries are higher in Vitamin C and anthocyanins.',
  },

  size: {
    weight:     '5–15g per fruit depending on variety',
    dimensions: '0.5–1" diameter',
    notes:      'Sweet cherries tend to be larger; sour/pie cherries are smaller and softer when ripe.',
  },
});
