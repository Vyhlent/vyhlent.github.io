import Crop from '../Crop.js';

export default new Crop({
  id:    'pawpaw-tree',
  name:  'Pawpaw Tree',
  cat:   'Fruit Tree',
  emoji: '🌳',

  planting: {
    zone6:   'Plant container-grown trees in spring (April–May) or early fall (September). Bare-root trees in early spring only. Zone 6 is within the native range — pawpaws are very winter-hardy once established.',
    depth:   'Same depth as container; do not bury graft union if grafted. Tap-root-sensitive — plant in final location; does not transplant well.',
    spacing: '8–10\' apart in a cluster of 2+ for cross-pollination (hand-pollination strongly recommended); allow 10–15\' for mature spread. Understory settings welcome.',
    ph:      '5.5–7.0',
    sun:     'Shade-tolerant as juveniles (first 1–3 years benefit from shade cloth or dappled shade); full sun produces best fruit on mature trees',
  },
  special: 'Pawpaw is the largest native fruit tree in North America. It is NOT self-fertile — plant at least 2 genetically distinct seedlings or named varieties for fruit set. Hand-pollination with a small brush greatly improves yields because native pollinators (carrion flies and beetles) are unreliable. Protect young trees from direct sun with shade cloth or tree tubes for the first 1–2 seasons. The tree spreads by clonal root sprouts — manage if desired.',

  water: {
    in:   '1–2',
    note: 'Requires consistent moisture, especially in the first 2–3 years. Pawpaws naturally grow along streams — they like moist but well-drained soil. Mulch heavily (4–6" around base) to retain moisture and mimic forest floor conditions. Drought stress in young trees is a primary cause of failure.',
  },

  fertilizer: {
    type:   'Balanced (10-10-10) or compost-based; low input once established',
    amount: 'Young trees: ½ lb balanced fertilizer per year of age; established trees: light topdressing of compost annually',
    freq:   'Once in early spring. Pawpaws are light feeders; over-fertilizing reduces fruit quality. Heavy compost mulch is preferred over synthetic fertilizer.',
  },

  companions: {
    good: [
      { name: 'Comfrey',         why: 'Deep root nutrient accumulation; excellent chop-and-drop mulch; attracts pollinators' },
      { name: 'Spicebush (Lindera benzoin)', why: 'Native understory shrub; shares habitat requirements; attracts spicebush swallowtail' },
      { name: 'Elderberry',      why: 'Compatible moisture needs; attracts pollinators and wildlife' },
      { name: 'Wild Ginger',     why: 'Native ground cover thriving under pawpaw canopy; forest floor companion' },
      { name: 'Ramps (Wild Leek)', why: 'Woodland ground cover; shares moist, shaded habitat' },
      { name: 'Nitrogen-fixing shrubs (e.g., Autumn Olive, Goumi)', why: 'Improve soil fertility in a food forest guild' },
    ],
    bad: [
      { name: 'Grass (turf)',   why: 'Strong competitor; keep a wide mulched circle at all times' },
      { name: 'Black Walnut',   why: 'Juglone sensitivity — pawpaws are moderately sensitive; maintain distance' },
      { name: 'Shallow-rooted annuals (directly under canopy)', why: 'Pawpaw roots spread wide and shallow; competition stresses trees' },
    ],
  },
  companionDist: 'Maintain a 4–6\' deep mulch circle from trunk to drip line. Keep black walnut 30+ feet away (some sources say pawpaws tolerate juglone better than most, but caution advised). Design as part of a food forest guild for best results.',
  animals: 'Carrion flies and beetles are the primary native pollinators (attracted by the faint scent of the maroon flowers). Hang fish meal or meat scraps in mesh bags near flowers during bloom to attract pollinators. Zebra swallowtail butterfly uses pawpaw exclusively as a larval host plant. Raccoons, opossums, foxes, and deer eagerly eat ripe fruit — harvest promptly.',

  diseases: [
    { name: 'Pawpaw Dieback',    desc: 'Poorly understood; may involve Botryosphaeria or other fungi. Prune out dead wood; ensure tree is not stressed by drought or nutrient deficiency.' },
    { name: 'Powdery Mildew',    desc: 'Occasional in humid conditions; rarely serious. Improve air circulation between trees.' },
    { name: 'Fruit Rots (various)', desc: 'Overripe fruit left on tree or ground rots quickly; harvest promptly at peak ripeness. Brown rot fungi can affect fruit in wet years.' },
  ],
  pests: 'Relatively pest-free compared to other fruit trees. Zebra swallowtail caterpillars feed on leaves but rarely cause serious damage (and the butterfly is beautiful — consider leaving them). Pawpaw peduncle borer (Talponia plummeriana) can damage flower buds. Raccoons, squirrels, and deer compete for ripe fruit.',

  rotation: {
    family: 'Annonaceae (Custard Apple family) — the only temperate member of an otherwise tropical family',
    cycle:  'Perennial tree; does not rotate. Pawpaws spread vegetatively by root sprouts, forming natural patches. Excellent long-term planting in a food forest, hedgerow, or riparian buffer.',
  },

  stages: [
    { label: 'Yr 1–2',   title: 'Slow Establishment',  desc: 'Pawpaws invest heavily in deep root development; top growth appears very slow. Provide consistent water, mulch, and shade protection. Do not be alarmed by minimal top growth.' },
    { label: 'Yr 2–4',   title: 'Accelerated Growth',  desc: 'Once roots are established, top growth accelerates significantly — often 2–4\' per year. Sun exposure can be increased as the tree becomes established.' },
    { label: 'Yr 4–7',   title: 'Pre-bearing',         desc: 'Tree develops full canopy and begins flowering. Hand-pollinate all flowers for first fruit. Some trees fruit in year 4–5 from a grafted nursery plant.' },
    { label: 'Yr 5–10+', title: 'Bearing',             desc: 'Consistent fruit production begins. Clusters of 2–9 fruits develop. Fruit ripens late August–October in Zone 6. Yield increases as tree matures.' },
    { label: 'Spring',   title: 'Bloom',               desc: 'Maroon, 6-petaled flowers emerge in April before leaves. Flowers have a faint yeasty/fetid scent to attract carrion pollinators. Hand-pollinate with a brush for reliable fruit set.' },
    { label: 'Late Summer', title: 'Fruit Ripening',   desc: 'Fruit turns from green to yellow-green and yields to gentle pressure when ripe (similar to a ripe avocado or banana). Skin blackens quickly after harvest; refrigerate or process immediately. Eaten fresh, frozen, or in baked goods.' },
  ],

  nutrition: {
    // — Macronutrients —
    calories:    80,
    water:       74.9,   // g
    protein:     1.2,   // g
    carbs:       18.8,   // g total
    fiber:       2.6,   // g
    sugars:      14.5,   // g
    fat:         1.2,   // g total
    saturated:   0.35,   // g
    monounsat:   0.51,   // g
    polyunsat:   0.22,   // g
    // — Fat-soluble vitamins —
    vitA:        8,   // µg RAE
    vitD:        0,   // µg
    vitE:        0,   // mg
    vitK:        0,   // µg
    // — Water-soluble vitamins —
    vitC:        18.3,   // mg
    vitB1:       0.04,  // mg thiamine
    vitB2:       0.1,  // mg riboflavin
    vitB3:       1.1,  // mg niacin
    vitB5:       0.26,  // mg pantothenic
    vitB6:       0.23,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       14,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     0,  // mg
    // — Macrominerals —
    calcium:     19,  // mg
    phosphorus:  37,  // mg
    magnesium:   20,  // mg
    sodium:      0,  // mg
    potassium:   345,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0.55,  // mg
    zinc:        0.16,  // mg
    copper:      0.12,  // mg
    manganese:   0.21,  // mg
    selenium:    0,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'One of the most nutritious native North American fruits. Higher in protein (1.2g) and fat (1.2g) than most fruit. Rich in potassium (345 mg) and Vitamins A and C. Flavor: banana + mango + vanilla custard.',
  },

  size: {
    weight:     '100–500g per fruit (wild); named varieties up to 700g',
    dimensions: '3–6" long, 2–4" diameter; oblong to oval shape',
    notes:      'Named grafted varieties offer better fruit size, flavor, and reliability than seedlings. Top varieties for Zone 6: Shenandoah, Susquehanna, Allegheny, Mango (Overleese), and KSU-Atwood. Fruit does not ship well commercially, making homegrown pawpaws especially valuable.',
  },
});
