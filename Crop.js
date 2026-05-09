/**
 * Crop.js
 * Base class for all garden crops.
 * Each crop file in /crops/ creates a new Crop instance and exports it.
 *
 * Usage:
 *   import Crop from '../Crop.js';
 *   export default new Crop({ id: 'tomatoes', name: 'Tomatoes', ... });
 */

export default class Crop {
  /**
   * @param {Object} data - All crop data fields.
   *
   * Required fields:
   *   id          {string}  - Unique slug, e.g. "tomatoes"
   *   name        {string}  - Display name, e.g. "Tomatoes"
   *   cat         {string}  - Category, e.g. "Fruiting Veg"
   *   emoji       {string}  - Single emoji, e.g. "🍅"
   *
   * Planting:
   *   planting.zone6      {string}  - Zone 6 timing
   *   planting.depth      {string}  - Planting depth, e.g. '0.5"'
   *   planting.spacing    {string}  - Spacing info
   *   planting.ph         {string}  - Soil pH range, e.g. "6.0–7.0"
   *   planting.sun        {string}  - Sunlight requirement
   *   special             {string}  - Any special instructions
   *
   * Water:
   *   water.in    {string}  - Inches per week, e.g. "1–1.5"
   *   water.note  {string}  - Watering notes
   *
   * Fertilizer:
   *   fertilizer.type     {string}
   *   fertilizer.amount   {string}
   *   fertilizer.freq     {string}
   *
   * Companions:
   *   companions.good  {Array<{name:string, why:string}>}
   *   companions.bad   {Array<{name:string, why:string}>}
   *   companionDist    {string}  - Distance note
   *   animals          {string}  - Beneficial animals
   *
   * Problems:
   *   diseases  {Array<{name:string, desc:string}>}
   *   pests     {string}
   *
   * Rotation:
   *   rotation.family  {string}  - Plant family
   *   rotation.cycle   {string}  - Rotation cycle description
   *
   * Growth:
   *   stages  {Array<{label:string, title:string, desc:string}>}
   *
   * Nutrition (per 100g fresh weight):
   *   nutrition.calories  {number}
   *   nutrition.protein   {number}
   *   nutrition.carbs     {number}
   *   nutrition.fat       {number}
   *   nutrition.fiber     {number}
   *   nutrition.vitC      {number}
   *   nutrition.notes     {string}
   *
   * Size:
   *   size.weight      {string}  - e.g. "100–250g per fruit"
   *   size.dimensions  {string}  - e.g. '2–4" diameter'
   *   size.notes       {string}
   */
  constructor(data) {
    // ── Identity ────────────────────────────────────────────────────────────
    this.id    = data.id    ?? '';
    this.name  = data.name  ?? '';
    this.cat   = data.cat   ?? '';
    this.emoji = data.emoji ?? '🌱';

    // ── Planting ─────────────────────────────────────────────────────────────
    this.planting = {
      zone6:   data.planting?.zone6   ?? '',
      depth:   data.planting?.depth   ?? '',
      spacing: data.planting?.spacing ?? '',
      ph:      data.planting?.ph      ?? '6.0–7.0',
      sun:     data.planting?.sun     ?? 'Full sun',
    };
    this.special = data.special ?? '';

    // ── Water ─────────────────────────────────────────────────────────────────
    this.water = {
      in:   data.water?.in   ?? '1',
      note: data.water?.note ?? '',
    };

    // ── Fertilizer ────────────────────────────────────────────────────────────
    this.fertilizer = {
      type:   data.fertilizer?.type   ?? '',
      amount: data.fertilizer?.amount ?? '',
      freq:   data.fertilizer?.freq   ?? '',
    };

    // ── Companions ────────────────────────────────────────────────────────────
    this.companions = {
      good: (data.companions?.good ?? []).map(g =>
        typeof g === 'string' ? { name: g, why: '' } : { name: g.name ?? '', why: g.why ?? '' }
      ),
      bad: (data.companions?.bad ?? []).map(b =>
        typeof b === 'string' ? { name: b, why: '' } : { name: b.name ?? '', why: b.why ?? '' }
      ),
    };
    this.companionDist = data.companionDist ?? '';
    this.animals       = data.animals       ?? '';

    // ── Diseases & pests ──────────────────────────────────────────────────────
    this.diseases = (data.diseases ?? []).map(d => ({
      name: d.name ?? '',
      desc: d.desc ?? '',
    }));
    this.pests = data.pests ?? '';

    // ── Rotation ──────────────────────────────────────────────────────────────
    this.rotation = {
      family: data.rotation?.family ?? '',
      cycle:  data.rotation?.cycle  ?? '',
    };

    // ── Growth stages ─────────────────────────────────────────────────────────
    this.stages = (data.stages ?? []).map(s => ({
      label: s.label ?? '',
      title: s.title ?? '',
      desc:  s.desc  ?? '',
    }));

    // ── Nutrition ─────────────────────────────────────────────────────────────
    this.nutrition = {
      calories: data.nutrition?.calories ?? 0,
      protein:  data.nutrition?.protein  ?? 0,
      carbs:    data.nutrition?.carbs    ?? 0,
      fat:      data.nutrition?.fat      ?? 0,
      fiber:    data.nutrition?.fiber    ?? 0,
      vitC:     data.nutrition?.vitC     ?? 0,
      notes:    data.nutrition?.notes    ?? '',
    };

    // ── Size ──────────────────────────────────────────────────────────────────
    this.size = {
      weight:     data.size?.weight     ?? '',
      dimensions: data.size?.dimensions ?? '',
      notes:      data.size?.notes      ?? '',
    };
  }

  // ── Serialization ───────────────────────────────────────────────────────────

  /** Returns a plain object safe for JSON.stringify / storage. */
  toJSON() {
    return {
      id: this.id, name: this.name, cat: this.cat, emoji: this.emoji,
      planting: { ...this.planting },
      special: this.special,
      water: { ...this.water },
      fertilizer: { ...this.fertilizer },
      companions: {
        good: this.companions.good.map(g => ({ ...g })),
        bad:  this.companions.bad.map(b => ({ ...b })),
      },
      companionDist: this.companionDist,
      animals: this.animals,
      diseases: this.diseases.map(d => ({ ...d })),
      pests: this.pests,
      rotation: { ...this.rotation },
      stages: this.stages.map(s => ({ ...s })),
      nutrition: { ...this.nutrition },
      size: { ...this.size },
    };
  }

  /** Reconstruct a Crop instance from a plain object (e.g. from storage). */
  static fromJSON(obj) {
    return new Crop(obj);
  }

  // ── Convenience getters ─────────────────────────────────────────────────────

  /** True if this crop has real nutritional data entered. */
  get hasNutrition() {
    return this.nutrition.calories > 0 || this.nutrition.protein > 0;
  }

  /** True if this crop is ornamental / non-food. */
  get isOrnamental() {
    return this.nutrition.calories === 0 && this.nutrition.protein === 0 && this.nutrition.carbs === 0;
  }

  /** Returns the good-companion names as a comma-separated string. */
  get goodCompanionNames() {
    return this.companions.good.map(g => g.name).join(', ');
  }

  /** Returns the bad-companion names as a comma-separated string. */
  get badCompanionNames() {
    return this.companions.bad.map(b => b.name).join(', ');
  }
}
