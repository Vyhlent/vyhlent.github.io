import Crop from '../Crop.js';
export default new Crop({
  id: 'honey_locust',
  name: 'Honey Locust',
  cat: 'Trees',
  emoji: '🌳',
  type: 'tree',

  planting: {
    zone6:   'Plant bare-root in early spring or container trees spring through fall. Extremely adaptable — one of the toughest native trees for difficult sites.',
    depth:   'Crown at soil level; do not bury the root flare',
    spacing: '30–70 ft depending on purpose (shade, wildlife, silvopasture)',
    ph:      '6.0–8.0',
    sun:     'Full sun',
  },
  special: 'Gleditsia triacanthos var. inermis (thornless variety) is safest for gardens. Wild honey locust has formidable thorns up to 12 inches — use caution. Thornless cultivars include "Shademaster" and "Skyline." Nitrogen-fixing tree — adds fertility to surrounding soil.',

  water: {
    in:   '0.5–1',
    note: 'Extremely drought-tolerant once established. Deep taproot accesses subsoil moisture. Little to no supplemental watering needed after year 2.',
  },

  fertilizer: {
    type:   'None required',
    amount: 'Nitrogen-fixing — no fertilizer needed',
    freq:   'Mulch annually with wood chips to maintain soil biology. Compost around drip line every 3 years if in poor soils.',
  },

  companions: {
    good: [
      { name: 'Comfrey',      why: 'Fills understory niche and mines minerals; chop-and-drop accumulates around trunk.' },
      { name: 'Clover',       why: 'Guild ground cover that works alongside honey locust nitrogen fixation.' },
      { name: 'Wild Blackberry', why: 'Thrives in the dappled light beneath honey locust canopy.' },
      { name: 'Garlic',       why: 'Pest deterrent planted around the drip line.' },
    ],
    bad: [
      { name: 'Other nitrogen-fixing trees', why: 'Competing N-fixers in close proximity can inhibit each other\'s root nodule development.' },
    ],
  },
  companionDist: 'Honey locust casts light, dappled shade — many understory species tolerate this. Pods fall heavily in autumn; site away from paths and parking.',
  animals: 'Pods eaten by deer, cattle, squirrels, and historically by megafauna (pods are an evolutionary artifact of mastodons). Excellent wildlife tree. Flowers are important honey source for bees in late spring.',

  diseases: [
    { name: 'Canker',        desc: 'Thyronectria or Nectria canker on weakened trees. Prune infected branches; improve drainage. Healthy, vigorous trees resist canker effectively.' },
    { name: 'Mimosa Webworm',desc: 'Though named for mimosa, this pest also defoliates honey locust. Silken webs in branch crotches in late summer. Usually cosmetic — trees recover. Bacillus thuringiensis (Bt) spray at early instar stage if severe.' },
  ],
  pests: 'Honey locust plant bug causes small yellow spots on leaflets in spring. Leaf-hoppers occasionally feed on foliage. Spider mites in hot dry conditions. Thornless cultivars are somewhat more susceptible than wild types.',

  rotation: {
    family: 'Fabaceae (Legume family)',
    cycle:  'Perennial nitrogen-fixing tree — permanent site. Improves surrounding soil over decades. Coppices well if cut — can regrow from stump.',
  },

  stages: [
    { label: 'Yr 1–3', title: 'Rapid establishment', desc: 'One of the fastest growing native trees — 3–7 ft per year under good conditions. Minimal pruning needed; allow to develop natural structure.' },
    { label: 'Yr 3–7', title: 'Canopy development', desc: 'Begin producing seed pods. Dappled canopy allows diverse understory. Nitrogen accumulation in surrounding soil becomes measurable.' },
    { label: 'Yr 7+',  title: 'Full maturity',      desc: 'Large seed pod crops annually. Full canopy (30–70 ft tall, similar spread). Pods were historically used as livestock feed and are edible to humans (pulp is sweet).' },
    { label: 'Spring', title: 'Flowering',           desc: 'Fragrant cream-colored flowers in May–June attract enormous numbers of bees. One of the best honey trees in the eastern US.' },
    { label: 'Fall',   title: 'Pod harvest',         desc: 'Long brown twisted seed pods (8–18 inches) fall September–November. Sweet pulp surrounding seeds is edible — tastes faintly of vanilla and caramel. Pods useful as livestock fodder.' },
  ],

  nutrition: {
    calories: 0, water: 0, protein: 0, carbs: 0, fiber: 0, sugars: 0,
    fat: 0, saturated: 0, monounsat: 0, polyunsat: 0,
    notes: 'Honey locust pods have edible sweet pulp (high in sucrose) but are not typically consumed as a vegetable crop. Nutritional data not available for pod pulp. Primarily grown as a shade, wildlife, and nitrogen-fixing tree.',
  },

  size: {
    weight:     'Pods: 50–150g each',
    dimensions: 'Pod: 8–18 inches long, 1 inch wide, twisted',
    notes:      'Pods ripen to dark brown and fall from September onward. The thornless variety "Shademaster" grows to 45 ft tall with a 35 ft spread.',
  },
});
