import Crop from '../Crop.js';
export default new Crop({
  id: 'field_garlic',
  name: 'Field Garlic',
  cat: 'Herbs & Alliums',
  emoji: '🧄',

  planting: {
    zone6:   'Typically not planted intentionally — naturalizes freely from bulblets and seeds. If cultivating, plant bulblets 2 inches deep in fall (October–November) or early spring.',
    depth:   '1–2 inches',
    spacing: '4–6 inches between plants',
    ph:      '6.0–7.5',
    sun:     'Full sun to partial shade',
  },
  special: 'Allium vineale (field garlic / crow garlic) is a naturalized wild plant across much of eastern North America. Common in lawns, meadows, and disturbed ground. Considered a weed in turfgrass but highly useful as a foraged food and companion plant. Entire plant is edible — leaves, bulblets, and small bulbs. Flavor is more pungent than cultivated garlic.',

  water: {
    in:   '0.5',
    note: 'Extremely drought-tolerant — survives on rainfall alone once established. No supplemental watering needed in most seasons.',
  },

  fertilizer: {
    type:   'None required',
    amount: 'No fertilization needed',
    freq:   'Grows well in poor soils. Excess nitrogen produces lush leaves at the expense of bulb and flavor concentration.',
  },

  companions: {
    good: [
      { name: 'Tomatoes',   why: 'Field garlic, like cultivated garlic, deters spider mites, aphids, and fungal disease around tomatoes.' },
      { name: 'Roses',      why: 'Companion planting tradition — garlic alliums reduce aphid pressure on roses.' },
      { name: 'Carrots',    why: 'Repels carrot fly; carrots may reciprocally deter onion fly from alliums.' },
      { name: 'Peppers',    why: 'Sulfur compounds from garlic roots deter soilborne fungi and aphids near peppers.' },
    ],
    bad: [
      { name: 'Peas',    why: 'Alliums inhibit pea growth — keep separated.' },
      { name: 'Beans',   why: 'Same inhibition as peas — avoid planting adjacent to legumes.' },
      { name: 'Brassicas', why: 'Mixed results; some sources note inhibition of transplant establishment near alliums.' },
    ],
  },
  companionDist: 'Can be scattered throughout beds as a living pest deterrent. Will naturalize freely — harvest often to keep from overwhelming a bed.',
  animals: 'Bulbs eaten by some birds and small mammals. Flowers visited by bees and small pollinators. Dairy animals avoid it — milk from cows that have grazed field garlic can carry off-flavor.',

  diseases: [
    { name: 'White Rot',  desc: 'Sclerotinia cepivorum — cottony white growth at bulb base; affects all alliums. No cure. Remove infected plants, do not compost. Avoid replanting alliums in same area for 10+ years.' },
    { name: 'Rust',       desc: 'Orange pustules on leaves in warm moist conditions. Usually cosmetic in wild plants. Improve airflow. Sulfur spray if severe.' },
  ],
  pests: 'Generally very pest-resistant due to sulfur compounds. Onion thrips can cause silvery streaking on leaves. Allium leaf miner is emerging as a concern in some regions — tunnels in leaves and bulbs.',

  rotation: {
    family: 'Amaryllidaceae — Allium genus',
    cycle:  'Perennial — naturalizes and spreads freely from aerial bulblets and seeds. Not typically rotated; manage spread by regular harvest and removal of flowering heads before seed set.',
  },

  stages: [
    { label: 'Fall',   title: 'Bulblet planting',  desc: 'Bulblets (aerial or soil) planted in fall to overwinter and emerge in early spring. Can also emerge from seed.' },
    { label: 'Mar–Apr',title: 'Spring growth',     desc: 'Hollow round leaves emerge. Harvest leaves as a chive substitute — mince finely as flavor is strong. Leaves die back in summer heat.' },
    { label: 'May–Jun',title: 'Flowering',         desc: 'Flower stalks emerge topped with a papery spathe that opens to reveal flowers and/or aerial bulblets. Harvest bulblets for eating or propagation before they drop.' },
    { label: 'Jun',    title: 'Harvest window',    desc: 'Dig small underground bulbs in late spring for the most cultivated-garlic-like flavor. Best used immediately — smaller and more fragrant than commercial garlic.' },
  ],

  nutrition: {
    calories: 149, water: 58.6, protein: 6.4, carbs: 33.1, fiber: 2.1, sugars: 1.0,
    fat: 0.5, saturated: 0.09, monounsat: 0.01, polyunsat: 0.25,
    vitA: 0, vitD: 0, vitE: 0.08, vitK: 1.7,
    vitC: 31.2, vitB1: 0.2, vitB2: 0.11, vitB3: 0.7, vitB5: 0.6, vitB6: 1.24,
    vitB7: 0, vitB9: 3, vitB12: 0, choline: 23.2,
    calcium: 181, phosphorus: 153, magnesium: 25, sodium: 17, potassium: 401, chloride: 0,
    iron: 1.7, zinc: 1.16, copper: 0.3, manganese: 1.67, selenium: 14.2, iodine: 0,
    notes: 'Values approximate based on wild Allium vineale; similar to cultivated garlic but slightly variable. Used in small quantities — nutritional contribution per serving is modest.',
  },

  size: {
    weight:     '1–5g per bulb (much smaller than cultivated garlic)',
    dimensions: '0.25–0.5" diameter bulb',
    notes:      'Underground bulbs are small and tightly clustered. Aerial bulblets are pea-sized. Leaves are hollow, round, and more cylindrical than flat chives.',
  },
});
