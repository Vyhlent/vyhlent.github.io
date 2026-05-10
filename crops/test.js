import Crop from '../Crop.js';

export default new Crop({
  id: 'test',
  name: 'test',
  cat: '',
  emoji: '🌱',
  planting: {
    zone6: '',
    depth: '',
    spacing: '',
    ph: '6.0–7.0',
    sun: 'Full sun',
  },
  water: {
    in: '1',
    note: '',
  },
  fertilizer: {
    type: '',
    amount: '',
    freq: '',
  },
  companions: {
    good: [],
    bad: [],
  },
  companionDist: '',
  animals: '',
  diseases: [
    {
      name: '',
      desc: '',
    },
  ],
  pests: '',
  rotation: {
    family: '',
    cycle: '',
  },
  stages: [
    {
      label: '',
      title: '',
      desc: '',
    },
  ],
  special: '',
  nutrition: {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    vitC: 0,
    notes: '',
  },
  size: {
    weight: '',
    dimensions: '',
    notes: '',
  },
});
