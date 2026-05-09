import Crop from '../Crop.js';

export default new Crop({
  id: 'blackberries', name: 'Blackberries', cat: 'Berry', emoji: '🫐',
  planting: { zone6: 'Plant bare-root canes Mar–Apr; fruit in year 2', depth: 'Crown at soil level, roots 2–3" deep', spacing: '3–4 ft apart, rows 8 ft', ph: '5.5–7.0', sun: 'Full sun' },
  water: { in: '1–2', note: 'Critical during fruit swell; drip preferred' },
  fertilizer: { type: '10-10-10 balanced', amount: '¼ lb per plant; ½ lb established', freq: 'Early spring; again after harvest' },
  companions: {
    good: [
      { name: 'Marigolds', why: 'Marigold root exudates suppress nematodes and deter aphids that attack blackberry canes.' },
      { name: 'Tansy',     why: 'Tansy repels Japanese beetles, one of the most damaging pests of blackberry fruit.' },
      { name: 'Chives',    why: 'Chives deter aphids and Japanese beetles with their pungent volatile oils.' },
    ],
    bad: [
      { name: 'Tomatoes', why: 'Tomatoes and blackberries share Verticillium wilt fungus, dramatically increasing disease risk.' },
      { name: 'Peppers',  why: 'Peppers are susceptible to Verticillium wilt which persists in soil and devastates blackberry roots.' },
    ],
  },
  companionDist: 'Keep 20–30 ft from tomatoes, peppers, eggplant.',
  animals: 'Bees and butterflies pollinate; net when fruiting.',
  diseases: [
    { name: 'Cane Blight',  desc: 'Dark brown lesions on canes; prune to healthy wood.' },
    { name: 'Anthracnose',  desc: 'Sunken purple spots on young canes; copper fungicide in early spring.' },
  ],
  pests: 'Netting for birds; hand-pick Japanese beetles; neem for stink bugs.',
  rotation: { family: 'Rosaceae (perennial)', cycle: 'Perennial — site carefully; replace after 8–12 years' },
  stages: [
    { label: 'Dorm', title: 'Dormancy',          desc: 'First winter. Roots establish.' },
    { label: 'Prim', title: 'Primocane',          desc: 'Year 1: vigorous canes grow, no fruit.' },
    { label: 'Flor', title: 'Floricane',          desc: 'Year 2 canes flower and fruit.' },
    { label: 'Harv', title: 'Harvest',            desc: 'Jun–Aug. Pick when fully black.' },
  ],
  special: 'Tie canes to trellis. Cut floricanes to ground after harvest.',
  nutrition: { calories: 43, protein: 1.4, carbs: 9.6, fat: 0.5, fiber: 5.3, vitC: 21, notes: 'High in anthocyanins, vitamin C, manganese, and fiber.' },
  size: { weight: '3–5g per berry', dimensions: '0.5–1" diameter per berry', notes: 'Full clusters weigh 20–40g.' },
});
