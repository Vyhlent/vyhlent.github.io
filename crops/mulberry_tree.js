import Crop from '../Crop.js';
export default new Crop({
  id: 'mulberry_tree',
  name: 'Mulberry Tree',
  cat: 'Fruit Trees',
  emoji: '🫐',
  type: 'tree',

  planting: {
    zone6:   'Plant in early spring (March–April) before leafing out. Container-grown trees can be planted spring through early fall. Avoid planting in low-lying frost pockets.',
    depth:   'Crown level with soil surface',
    spacing: '25–30 ft for standard; 10–15 ft for dwarf or Illinois Everbearing',
    ph:      '5.5–7.0',
    sun:     'Full sun',
  },
  special: 'Mulberries fruit heavily with almost no care once established. White and red mulberries are considered invasive in some regions — check local regulations. Illinois Everbearing is a popular self-fertile cultivar for Zone 5–8.',

  water: {
    in:   '1',
    note: 'Drought-tolerant once established. Water deeply every 2 weeks during first year. Established trees rarely need supplemental irrigation except during severe drought.',
  },

  fertilizer: {
    type:   'Low nitrogen',
    amount: 'Minimal — 1–2 inches compost mulch annually',
    freq:   'Apply compost around drip line each spring. Excess nitrogen produces lush foliage at the expense of fruiting.',
  },

  companions: {
    good: [
      { name: 'Comfrey',     why: 'Dynamic accumulator that mines potassium and other minerals; chop-and-drop mulch beneath tree.' },
      { name: 'Nasturtiums', why: 'Ground cover that attracts aphid predators; edible trap crop.' },
      { name: 'Clover',      why: 'Nitrogen-fixing ground cover under the canopy.' },
      { name: 'Garlic',      why: 'Repels borers and fungal issues around the trunk.' },
    ],
    bad: [
      { name: 'Grass',     why: 'Competitive with young trees for water and nutrients; keep a mulched circle 3–4 ft radius.' },
    ],
  },
  companionDist: 'Mulberries drop abundant fruit — avoid planting above patios or pathways. Site near a chicken run: the fruit drop is prized feed.',
  animals: 'Exceptional wildlife tree. Robins, cedar waxwings, orioles, tanagers, mockingbirds, and many others feed heavily during fruiting. Provides cover. Caterpillar host plant (silkworm on white mulberry).',

  diseases: [
    { name: 'Popcorn Disease', desc: 'Fungal disease (Ciboria carunculoides) causes fruits to enlarge and harden to look like popcorn. Remove and destroy infected fruit. Usually cosmetic — only affects a portion of the crop.' },
    { name: 'Bacterial Blight', desc: 'Water-soaked spots on leaves in wet springs. Prune for airflow and avoid overhead irrigation. Copper spray at bud break in severely affected trees.' },
  ],
  pests: 'Generally pest-resistant. Japanese beetles may feed on foliage but rarely cause serious damage. Birds are the main "pest" — if you want the harvest for yourself, net portions of the tree.',

  rotation: {
    family: 'Moraceae (Mulberry family)',
    cycle:  'Perennial tree — permanent planting. Long-lived (100+ years in some species). Position carefully as the staining fruit drop makes it difficult to move.',
  },

  stages: [
    { label: 'Yr 1–3', title: 'Establishment',   desc: 'Grows rapidly — can put on 6–10 ft per year. Little to no fruit. Prune to a strong scaffold. Stake in first year if in windy location.' },
    { label: 'Yr 3–5', title: 'First bearing',   desc: 'Light fruit production begins. Flavor improves with age. Harvest by laying a sheet and shaking branches — fruit bruises easily.' },
    { label: 'Yr 5+',  title: 'Full production', desc: 'Mature trees produce prodigiously (sometimes 100+ lbs). Season extends over 3–6 weeks as fruit ripens progressively from tip to base.' },
    { label: 'Jun–Jul',title: 'Harvest season',  desc: 'Zone 6 fruiting is typically June through July. Everbearing varieties may have a second smaller flush. Fruit is sweet-tart and highly perishable — eat fresh or freeze immediately.' },
  ],

  nutrition: {
    calories: 43, water: 87.7, protein: 1.4, carbs: 9.8, fiber: 1.7, sugars: 8.1,
    fat: 0.4, saturated: 0, monounsat: 0.04, polyunsat: 0.2,
    vitA: 1, vitD: 0, vitE: 0.87, vitK: 7.8,
    vitC: 36.4, vitB1: 0.03, vitB2: 0.1, vitB3: 0.62, vitB5: 0.08, vitB6: 0.05,
    vitB7: 0, vitB9: 6, vitB12: 0, choline: 12.3,
    calcium: 39, phosphorus: 38, magnesium: 18, sodium: 10, potassium: 194, chloride: 0,
    iron: 1.85, zinc: 0.12, copper: 0.06, manganese: 0.05, selenium: 0.6, iodine: 0,
    notes: 'Notably high in Vitamin C and iron compared to most tree fruits. Values per 100g fresh mulberry.',
  },

  size: {
    weight:     '2–5g per fruit',
    dimensions: '0.5–1.5" long (cylindrical)',
    notes:      'White mulberries tend to be sweeter; red and black mulberries are more complex and tart. Stains hands, clothing, and pavement intensely.',
  },
});
