import Crop from '../Crop.js';
export default new Crop({
  id: 'wild_blackberry',
  name: 'Wild Blackberry',
  cat: 'Berries',
  emoji: '🫐',
  type: 'shrub',

  planting: {
    zone6:   'Plant bare-root canes in early spring (March–April) or container plants spring through fall. Established colonies spread vigorously by root suckers.',
    depth:   '2–3 inches deep; roots should be well below soil surface',
    spacing: '3–5 ft between plants in rows; 8–10 ft between rows',
    ph:      '5.5–7.0',
    sun:     'Full sun to partial shade',
  },
  special: 'Wild blackberry (Rubus allegheniensis and related species) is native and far more vigorous than cultivated varieties. Spreads freely by root suckers and bird-dispersed seed — site with containment in mind or embrace its naturalistic growth. Biennial canes: first-year canes (primocanes) are vegetative; second-year canes (floricanes) flower and fruit, then die. Prune out dead floricanes after harvest.',

  water: {
    in:   '1–1.5',
    note: 'Consistent moisture during fruit development dramatically improves size and sweetness. Drought-tolerant once established but production suffers. Avoid wetting canes — drip irrigation is ideal.',
  },

  fertilizer: {
    type:   'Balanced',
    amount: '2–3 inches compost mulch annually',
    freq:   'Apply compost in early spring. A light balanced fertilizer (10-10-10) in spring at 0.5 lb per 25 ft of row is optional but helpful for maximum production.',
  },

  companions: {
    good: [
      { name: 'Comfrey',    why: 'Deep-rooting accumulator that provides potassium and improves berry quality.' },
      { name: 'Garlic',     why: 'Deters cane borers and spider mites when planted nearby.' },
      { name: 'Mint',       why: 'Repels aphids and Japanese beetles; keep contained as mint spreads aggressively.' },
      { name: 'Nasturtiums',why: 'Trap crop for aphids; fills bare ground between canes.' },
    ],
    bad: [
      { name: 'Tomatoes',   why: 'Share Verticillium wilt; plant on opposite sides of garden.' },
      { name: 'Potatoes',   why: 'Same Verticillium wilt concern as tomatoes.' },
      { name: 'Raspberries',why: 'Cross-contaminate viral diseases — maintain at least 300 ft separation or plant in separate garden areas.' },
    ],
  },
  companionDist: 'Thorny canes make close companion planting challenging. Plant companions at the row ends or in a separate adjacent area where they will not be impaled by canes.',
  animals: 'Exceptional wildlife value — fruit eaten by over 50 species of birds and mammals. Dense thorny thickets provide ideal nesting habitat for song sparrows, towhees, and catbirds. Flowers feed native bees and bumble bees.',

  diseases: [
    { name: 'Orange Rust',       desc: 'Systemic fungal disease producing bright orange pustules on leaf undersides in spring. No cure — dig and destroy infected plants immediately. Do not compost. Resistant cultivars available.' },
    { name: 'Cane Blight',       desc: 'Fungal lesions girdling canes after injury (insect damage, frost cracks). Prune infected canes to healthy wood; disinfect pruners between cuts.' },
    { name: 'Rosette (Double Blossom)', desc: 'Viral disease causing proliferating, distorted flower buds. Infected plants must be removed. Thrips spread it — control thrips in spring.' },
  ],
  pests: 'Spotted wing drosophila (SWD) attacks ripe fruit — harvest frequently and refrigerate promptly. Japanese beetles skeletonize leaves and feed on fruit. Cane borers cause wilting shoot tips — prune 6 inches below entry hole. Aphids on young growth in spring.',

  rotation: {
    family: 'Rosaceae — Rubus genus',
    cycle:  'Perennial spreading shrub. Canes are biennial — plant in rows and mow or cut out old floricanes after fruiting. New primocanes replace them annually.',
  },

  stages: [
    { label: 'Yr 1',   title: 'Primocane (vegetative)', desc: 'First-year canes grow tall (4–8 ft). Tip-prune in summer at 3–4 ft to encourage branching and more fruit buds for next year.' },
    { label: 'Yr 2',   title: 'Floricane (fruiting)',   desc: 'Side branches from tipped canes flower and fruit. After harvest, these canes die — cut to ground and remove entirely.' },
    { label: 'Spring', title: 'Bloom',                  desc: 'White 5-petaled flowers appear May–June. Each flower is a separate aggregated drupelet that becomes one section of the composite fruit.' },
    { label: 'Jul–Aug',title: 'Harvest',                desc: 'Wild blackberries ripen July–August in Zone 6. Fruit color goes from red to deep glossy black. Pick when fully black and they release from the receptacle with no resistance — do not force.' },
  ],

  nutrition: {
    calories: 43, water: 88.2, protein: 1.4, carbs: 9.6, fiber: 5.3, sugars: 4.9,
    fat: 0.5, saturated: 0.01, monounsat: 0.05, polyunsat: 0.28,
    vitA: 11, vitD: 0, vitE: 1.17, vitK: 19.8,
    vitC: 21, vitB1: 0.02, vitB2: 0.03, vitB3: 0.65, vitB5: 0.28, vitB6: 0.03,
    vitB7: 0, vitB9: 25, vitB12: 0, choline: 8.5,
    calcium: 29, phosphorus: 22, magnesium: 20, sodium: 1, potassium: 162, chloride: 0,
    iron: 0.62, zinc: 0.53, copper: 0.17, manganese: 0.93, selenium: 0.4, iodine: 0,
    notes: 'Wild blackberries are notably higher in fiber and antioxidants than cultivated varieties. Manganese content is exceptional. Values per 100g fresh fruit.',
  },

  size: {
    weight:     '3–7g per fruit (smaller than cultivated varieties)',
    dimensions: '0.5–0.75" diameter',
    notes:      'Wild fruits are smaller and more intensely flavored than cultivated. Flavor is strongest when fully ripe — seedy texture is characteristic of wild types.',
  },
});
