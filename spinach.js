import Crop from '../Crop.js';

export default new Crop({
  id: 'spinach', name: 'Spinach', cat: 'Leafy Green', emoji: '🌿',
  planting: { zone6: 'Direct sow Mar 15–Apr 30 or Aug 15–Sep 30; tolerates light frost', depth: '0.5"', spacing: '3–6" apart, rows 12"', ph: '6.0–7.0', sun: 'Full sun / part shade' },
  water: { in: '1–1.5', note: 'Keep consistently moist; mulch helps' },
  fertilizer: { type: '10-10-10 balanced', amount: '1 lb per 100 sq ft', freq: 'At planting; side-dress nitrogen at 3 weeks' },
  companions: {
    good: [
      { name: 'Garlic',     why: "Garlic's sulfur compounds repel aphids and spider mites that commonly infest spinach leaves." },
      { name: 'Radishes',   why: 'Fast-growing radishes act as trap crops for leaf miners, drawing them away from spinach.' },
      { name: 'Peas',       why: 'Peas fix atmospheric nitrogen, enriching the soil that spinach feeds on.' },
    ],
    bad: [
      { name: 'Fennel', why: 'Fennel releases allelopathic chemicals that inhibit germination and growth of most vegetables including spinach.' },
    ],
  },
  companionDist: 'Keep 12"+ from fennel.',
  animals: 'Ladybugs eat aphids; ground beetles prey on soil pests.',
  diseases: [
    { name: 'Downy Mildew',       desc: 'Yellow spots on upper leaf, gray-purple fuzz beneath. Use resistant varieties, avoid overhead watering.' },
    { name: 'Cercospora Leaf Spot', desc: 'Circular brown spots with white centers. Remove infected leaves; copper fungicide.' },
  ],
  pests: 'Row covers for aphids and leaf miners; neem oil spray.',
  rotation: { family: 'Chenopodiaceae', cycle: '3–4 year rotation; follow with legumes or grains, not beets or chard' },
  stages: [
    { label: 'Germ',  title: 'Germination', desc: '7–14 days at 50–70°F.' },
    { label: 'Seedl', title: 'Seedling',     desc: 'Thin to 3–6 inches at 2 weeks.' },
    { label: 'Grow',  title: 'Vegetative',   desc: 'Harvest outer leaves to extend production.' },
    { label: 'Bolt',  title: 'Bolting',      desc: 'Hot temps trigger bolting. Harvest immediately.' },
  ],
  special: 'Plant in succession every 2–3 weeks. Best flavor after a light frost.',
  nutrition: { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, vitC: 28, notes: 'Exceptionally high in vitamin K, folate, and iron.' },
  size: { weight: '150–250g per bunch', dimensions: 'Leaves 3–6" long', notes: 'Harvest at 3–4 inches for baby spinach, 6+ for mature.' },
});
