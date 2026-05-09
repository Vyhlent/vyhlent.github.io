/**
 * Crop.js
 * -------
 * Defines the Crop class. Each crop is one JSON file in the /crops folder.
 * This class loads that JSON, validates it, and exposes clean accessors.
 *
 * Usage (browser):
 *   const spinach = await Crop.load('crops/spinach.json');
 *   console.log(spinach.name);
 *   console.log(spinach.goodCompanions);
 *
 * Usage (Node.js / build tool):
 *   const spinach = Crop.fromObject(require('./crops/spinach.json'));
 */

export class Crop {
  // ─────────────────────────────────────────────
  // Static factory methods
  // ─────────────────────────────────────────────

  /**
   * Load a crop from a JSON file URL (browser fetch).
   * @param {string} url  Path to the crop JSON file, e.g. 'crops/spinach.json'
   * @returns {Promise<Crop>}
   */
  static async load(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load crop from ${url}: ${res.status}`);
    const data = await res.json();
    return Crop.fromObject(data);
  }

  /**
   * Construct a Crop directly from a plain JS object (already-parsed JSON).
   * @param {object} data
   * @returns {Crop}
   */
  static fromObject(data) {
    Crop._validate(data);
    return new Crop(data);
  }

  /**
   * Load every *.json file listed in a manifest array of URLs.
   * @param {string[]} urls
   * @returns {Promise<Crop[]>}
   */
  static async loadAll(urls) {
    return Promise.all(urls.map(url => Crop.load(url)));
  }

  // ─────────────────────────────────────────────
  // Constructor (private — use factory methods)
  // ─────────────────────────────────────────────

  constructor(data) {
    /** @type {object} Raw underlying data — use accessors instead */
    this._data = structuredClone(data);
  }

  // ─────────────────────────────────────────────
  // Core identity
  // ─────────────────────────────────────────────

  /** Stable unique identifier string, e.g. "spinach" */
  get id()    { return this._data.id; }

  /** Display name, e.g. "Spinach" */
  get name()  { return this._data.name; }

  /** Category label, e.g. "Leafy Green" */
  get cat()   { return this._data.category; }

  /** Emoji icon, e.g. "🌿" */
  get emoji() { return this._data.emoji; }

  // ─────────────────────────────────────────────
  // Planting
  // ─────────────────────────────────────────────

  /**
   * @returns {{ zone6: string, depth: string, spacing: string, ph: string, sun: string }}
   */
  get planting() { return this._data.planting; }

  get zone6Timing()  { return this._data.planting.zone6; }
  get plantingDepth(){ return this._data.planting.depth; }
  get spacing()      { return this._data.planting.spacing; }
  get soilPh()       { return this._data.planting.ph; }
  get sunlight()     { return this._data.planting.sun; }
  get specialNotes() { return this._data.special ?? ''; }

  // ─────────────────────────────────────────────
  // Water & fertilizer
  // ─────────────────────────────────────────────

  /**
   * @returns {{ in: string, note: string }}
   */
  get water() { return this._data.water; }

  /** Weekly water amount, e.g. "1–1.5" (inches) */
  get weeklyWater()  { return this._data.water.in; }
  get waterNote()    { return this._data.water.note; }

  /**
   * @returns {{ type: string, amount: string, freq: string }}
   */
  get fertilizer()        { return this._data.fertilizer; }
  get fertilizerType()    { return this._data.fertilizer.type; }
  get fertilizerAmount()  { return this._data.fertilizer.amount; }
  get fertilizerFreq()    { return this._data.fertilizer.freq; }

  // ─────────────────────────────────────────────
  // Companions
  // ─────────────────────────────────────────────

  /**
   * List of good companion objects.
   * @returns {{ name: string, why: string }[]}
   */
  get goodCompanions() { return this._data.companions.good ?? []; }

  /**
   * List of bad companion objects.
   * @returns {{ name: string, why: string }[]}
   */
  get badCompanions() { return this._data.companions.bad ?? []; }

  /** Plain distance/spacing note for companion planting */
  get companionDistNote() { return this._data.companionDist ?? ''; }

  /** Animals that benefit this crop */
  get beneficialAnimals() { return this._data.animals ?? ''; }

  // ─────────────────────────────────────────────
  // Diseases & pests
  // ─────────────────────────────────────────────

  /**
   * @returns {{ name: string, desc: string }[]}
   */
  get diseases() { return this._data.diseases ?? []; }

  /** Free-text pest control advice */
  get pestControl() { return this._data.pests ?? ''; }

  // ─────────────────────────────────────────────
  // Growth stages
  // ─────────────────────────────────────────────

  /**
   * @returns {{ label: string, title: string, desc: string }[]}
   */
  get stages() { return this._data.stages ?? []; }

  // ─────────────────────────────────────────────
  // Crop rotation
  // ─────────────────────────────────────────────

  /**
   * @returns {{ family: string, cycle: string }}
   */
  get rotation()       { return this._data.rotation; }
  get plantFamily()    { return this._data.rotation.family; }
  get rotationCycle()  { return this._data.rotation.cycle; }

  // ─────────────────────────────────────────────
  // Nutrition
  // ─────────────────────────────────────────────

  /**
   * Nutritional values per 100g fresh weight.
   * @returns {{ calories: number, protein: number, carbs: number, fat: number, fiber: number, vitC: number, notes: string }}
   */
  get nutrition() { return this._data.nutrition ?? {}; }

  get calories() { return this._data.nutrition?.calories ?? 0; }
  get protein()  { return this._data.nutrition?.protein  ?? 0; }
  get carbs()    { return this._data.nutrition?.carbs    ?? 0; }
  get fat()      { return this._data.nutrition?.fat      ?? 0; }
  get fiber()    { return this._data.nutrition?.fiber    ?? 0; }
  get vitC()     { return this._data.nutrition?.vitC     ?? 0; }
  get nutritionNotes() { return this._data.nutrition?.notes ?? ''; }

  /** True if this is a food crop with calorie data */
  get isFoodCrop() { return this.calories > 0; }

  // ─────────────────────────────────────────────
  // Size at harvest
  // ─────────────────────────────────────────────

  /**
   * @returns {{ weight: string, dimensions: string, notes: string }}
   */
  get size() { return this._data.size ?? {}; }

  get harvestWeight()     { return this._data.size?.weight     ?? ''; }
  get harvestDimensions() { return this._data.size?.dimensions ?? ''; }
  get harvestNotes()      { return this._data.size?.notes      ?? ''; }

  // ─────────────────────────────────────────────
  // Serialisation
  // ─────────────────────────────────────────────

  /** Return a plain object copy (safe to JSON.stringify and store) */
  toJSON() {
    return structuredClone(this._data);
  }

  /**
   * Apply an update object to this crop's data in-place.
   * @param {Partial<object>} updates  Plain object of fields to merge
   */
  update(updates) {
    Object.assign(this._data, updates);
  }

  // ─────────────────────────────────────────────
  // Validation (private)
  // ─────────────────────────────────────────────

  static _validate(data) {
    const required = ['id', 'name', 'category', 'emoji', 'planting', 'water', 'fertilizer', 'companions', 'diseases', 'stages', 'rotation'];
    for (const key of required) {
      if (data[key] === undefined || data[key] === null) {
        throw new Error(`Crop JSON missing required field: "${key}" (id: ${data.id ?? 'unknown'})`);
      }
    }
    if (!data.planting.zone6)  throw new Error(`Crop "${data.id}" missing planting.zone6`);
    if (!data.planting.ph)     throw new Error(`Crop "${data.id}" missing planting.ph`);
    if (!data.rotation.family) throw new Error(`Crop "${data.id}" missing rotation.family`);
  }
}
