import Crop from '../Crop.js';
export default new Crop({
  id: 'queens_lace',
  name: "Queen Anne's Lace",
  cat: 'Wild Edibles',
  emoji: '🌸',

  planting: {
    zone6:   'Direct sow seed in fall (October–November) for spring germination, or in early spring (March–April) — seeds need cold stratification. Typically naturalizes without intentional planting. Grows as a biennial: rosette first year, flowers and sets seed second year.',
    depth:   'Surface sow — needs light to germinate; barely cover with 0.1" of soil',
    spacing: '6–12 inches; self-sows freely',
    ph:      '6.0–7.5',
    sun:     'Full sun',
  },
  special: '⚠️ CAUTION: Queen Anne\'s Lace (Daucus carota) is the wild ancestor of the cultivated carrot and closely resembles Poison Hemlock (Conium maculatum) and Water Hemlock (Cicuta species), both deadly toxic. Learn to distinguish them before foraging: QAL has a hairy/bristly stem, carrot-scented root, single purple flower in the center of the flat white umbel, and pink-tinged new flowers. Poison hemlock has smooth purple-spotted stems and a musty smell. When in doubt, do not eat. A biennial wildflower widely considered a weed but with significant ecological and culinary value.',

  water: {
    in:   '0.5',
    note: 'Drought-tolerant — survives on natural rainfall in most regions. Found naturally in dry disturbed soils, roadsides, and meadows. No supplemental irrigation needed.',
  },

  fertilizer: {
    type:   'None required',
    amount: 'No fertilization needed',
    freq:   'Grows in poor to average soils. Excess fertility produces more foliage and reduces taproot quality.',
  },

  companions: {
    good: [
      { name: 'Tomatoes',      why: 'QAL flowers attract parasitic wasps (Ichneumonidae) and predatory insects that control tomato hornworm and other caterpillar pests.' },
      { name: 'Peppers',       why: 'Same beneficial insect attraction as with tomatoes.' },
      { name: 'Lettuce',       why: 'QAL provides light shade in hot weather, extending lettuce season.' },
      { name: 'Wild Blackberry', why: 'Co-occurs naturally in disturbed habitats — complementary wildlife value.' },
    ],
    bad: [
      { name: 'Carrots', why: 'Will cross-pollinate with cultivated carrots, compromising seed purity. Keep at least 1,000 ft separation if saving carrot seed.' },
      { name: 'Dill',    why: 'Both are in Apiaceae family — can cross-pollinate and also compete for the same beneficial insects and space.' },
    ],
  },
  companionDist: 'Most valuable as a permanent wildflower meadow component or along garden edges, not interplanted directly in vegetable beds. Allow to naturalize in a dedicated area and the beneficial insect effect radiates outward.',
  animals: 'Essential insectary plant — the flat compound umbels provide landing platforms for dozens of species of beneficial insects including parasitic wasps, soldier beetles, hoverflies, and native bees. Birds eat seeds in fall and winter. Host plant for the Eastern black swallowtail butterfly caterpillar.',

  diseases: [
    { name: 'Leaf Spot', desc: 'Minor fungal spots in wet conditions. Rarely significant. No treatment needed.' },
    { name: 'Powdery Mildew', desc: 'Late-season white coating on aging leaves. No action needed — plant completes lifecycle naturally.' },
  ],
  pests: 'Eastern black swallowtail caterpillars (yellow/black striped) are highly beneficial to have in the garden — they only feed on Apiaceae family plants and the adult butterflies pollinate widely. If caterpillar numbers are very high and the plant is young, relocate some caterpillars rather than treating.',

  rotation: {
    family: 'Apiaceae (Carrot/Umbellifer family)',
    cycle:  'Biennial — rosette in year 1, flowers in year 2, then dies. Self-sows prolifically so a colony perpetuates itself. Allow some plants to set seed to maintain naturalized planting.',
  },

  stages: [
    { label: 'Yr 1',   title: 'Rosette stage',    desc: 'First-year plants form a flat rosette of ferny, carrot-like foliage. The taproot develops. Root can be harvested in fall of year 1 or early spring of year 2 for eating (resembles a small, white carrot — flavor varies).' },
    { label: 'Yr 2',   title: 'Flowering stem',   desc: 'In the second year, a tall stem (2–5 ft) rises. Many compound flat-topped umbels of white flowers with a distinctive single purple-red floret in the center emerge. Flowers May–October.' },
    { label: 'Jun–Sep',title: 'Bloom/harvest',    desc: 'Harvest flowers for fritters or as garnish (confirm ID carefully first). Young flower clusters, dipped in batter and fried, are a traditional wild food. Use flowers fresh within hours of harvest.' },
    { label: 'Aug–Oct',title: 'Seed set',         desc: 'After flowering, the umbel curls upward into a "bird\'s nest" shape as seeds mature. Allow some to drop for naturalization. Green seeds can be dried and used as a carrot-flavored spice.' },
    { label: 'Fall',   title: 'Root harvest',     desc: '⚠️ Confirm species ID carefully. Year-1 roots can be dug in fall for eating — smaller and more pungent than cultivated carrot. Boiling mellows the flavor.' },
  ],

  nutrition: {
    calories: 0, water: 0, protein: 0, carbs: 0, fiber: 0, sugars: 0,
    fat: 0, saturated: 0, monounsat: 0, polyunsat: 0,
    notes: '⚠️ CRITICAL SAFETY NOTE: Do not forage Queen Anne\'s Lace without expert species identification training. Poison hemlock grows in the same habitats and is deadly. The root is edible (similar to wild carrot) when correctly identified, but nutritional data is not provided here. Cultivated carrot data better represents the edible root. Primarily grown for insectary, ornamental, and wildlife value.',
  },

  size: {
    weight:     'Plant: 2–5 ft tall; root: 3–6 inches long, 0.5–1 inch diameter',
    dimensions: 'Flower umbel: 2–5 inches across; plants spread 1–2 ft wide',
    notes:      'The classic "bird\'s nest" seed head is the curled-up umbel after flowering. Seeds are small and barbed, dispersed by catching on fur and clothing. Highly ornamental and ecologically valuable.',
  },
});
