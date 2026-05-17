import Crop from '../Crop.js';
export default new Crop({
  id: 'pokeweed',
  name: 'Pokeweed',
  cat: 'Wild Edibles',
  emoji: '🌿',

  planting: {
    zone6:   'Pokeweed is a native perennial that self-seeds prolifically. If establishing, plant seeds in fall (stratification helps) or transplant in early spring. Typically not planted — it volunteers freely from bird-dispersed seed.',
    depth:   'Surface sow or 0.25" deep; seeds need light to germinate',
    spacing: '4–6 ft minimum — plants become very large',
    ph:      '5.5–7.0',
    sun:     'Full sun to partial shade',
  },
  special: '⚠️ IMPORTANT SAFETY NOTE: Pokeweed (Phytolacca americana) is toxic in all parts when mature. However, young spring shoots under 6 inches tall (before leaves fully unfurl) are a traditional Appalachian and Southeastern US edible — "Poke Salat" — after boiling in multiple changes of water. Roots, mature leaves, berries, and seeds are toxic and should never be eaten. Wear gloves when handling mature plants as juice can irritate skin.',

  water: {
    in:   '0.5–1',
    note: 'Tap-rooted and drought-tolerant once established. Rarely needs supplemental watering. Found naturally in moist disturbed areas but adapts well to average garden moisture.',
  },

  fertilizer: {
    type:   'None required',
    amount: 'No fertilization needed',
    freq:   'Grows vigorously in almost any soil. Excess fertility is not needed and may produce excess growth.',
  },

  companions: {
    good: [
      { name: 'Wild Blackberry', why: 'Both are native species that coexist in disturbed woodland edge habitat naturally.' },
      { name: 'Elderberry',      why: 'Similar habitat preferences and wildlife value; can form a productive native hedge.' },
    ],
    bad: [
      { name: 'Tomatoes',     why: 'Pokeweed hosts tobacco mosaic virus and other viruses that can infect tomatoes and peppers.' },
      { name: 'Peppers',      why: 'Same viral transmission concern as tomatoes.' },
      { name: 'Potatoes',     why: 'Pokeweed can harbor potato virus Y — avoid proximity to Solanaceae.' },
    ],
  },
  companionDist: 'Best placed at wild garden edges, back of borders, or in naturalistic areas away from vegetable beds. Roots grow very deep and wide (8+ ft taproot on mature plants) — difficult to remove once established.',
  animals: 'High wildlife value — berries are eaten by 30+ bird species including mourning dove, mockingbird, cardinal, catbird, and cedar waxwing. Berries are toxic to humans and most mammals but birds process them without harm. Provides important fall and winter food for migrating birds.',

  diseases: [
    { name: 'Phytophthora Root Rot', desc: 'In waterlogged soils, Phytophthora can cause crown rot. Site in well-drained areas. Rarely a problem in typical garden conditions.' },
  ],
  pests: 'Pokeweed is rarely bothered by insects. Occasionally deer will browse young shoots. Caterpillars of the giant leopard moth feed on leaves but rarely cause serious damage.',

  rotation: {
    family: 'Phytolaccaceae (Pokeweed family)',
    cycle:  'Native perennial with a massive taproot that regrows each year. Cannot be easily rotated. The deep taproot actually improves soil structure. To remove, must dig the entire taproot — even small pieces will resprout.',
  },

  stages: [
    { label: 'Mar–Apr',title: 'Emerging shoots', desc: '⚠️ Only edible stage: harvest shoots under 6 inches when they first emerge in spring, before leaves fully unfurl and while stems are still white/pink at base. Boil in at least 2 changes of water before eating.' },
    { label: 'May–Jun',title: 'Rapid growth',   desc: 'Plants grow extremely fast — 6–12 ft tall by summer. Large tropical-looking leaves and sturdy reddish stems develop. Do not eat at this stage.' },
    { label: 'Jul–Aug',title: 'Flowering',      desc: 'Tall racemes of small white flowers followed by deep purple-black berries in hanging clusters. Spectacular ornamental appearance.' },
    { label: 'Aug–Oct',title: 'Berry season',   desc: 'Berries ripen to deep blackberry-purple. They are ⚠️ TOXIC to humans — do not eat. Birds consume them extensively, and the juice was historically used as ink and dye.' },
    { label: 'Nov',    title: 'Dormancy',       desc: 'Above-ground growth dies to the ground with hard frost. Massive root persists and resprouts in spring. Stalks may remain standing through winter as structure.' },
  ],

  nutrition: {
    calories: 0, water: 0, protein: 0, carbs: 0, fiber: 0, sugars: 0,
    fat: 0, saturated: 0, monounsat: 0, polyunsat: 0,
    notes: '⚠️ SAFETY WARNING: Pokeweed is toxic in all parts except properly prepared young shoots. Nutritional data is not provided as this is not a standard food crop. If foraging poke salat, consult a reliable regional foraging guide and use strict preparation protocols (multiple boilings with water changes). Do not eat berries, roots, or mature plant material.',
  },

  size: {
    weight:     'Individual plants reach 6–12 ft tall',
    dimensions: 'Taproot: 2–6 inches diameter, 6–8 ft deep in mature plants',
    notes:      'Berries are 8–10mm diameter, in hanging clusters 6–12 inches long. Stems are brilliant magenta-red in summer. One of the most dramatic native plants in the eastern US.',
  },
});
