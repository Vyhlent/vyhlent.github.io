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
   * ── Identity ──────────────────────────────────────────────────────────────
   *   id          {string}  - Unique slug, e.g. "tomatoes"
   *   name        {string}  - Display name, e.g. "Tomatoes"
   *   cat         {string}  - Category, e.g. "Fruiting Veg"
   *   emoji       {string}  - Single emoji, e.g. "🍅"
   *
   * ── Planting ──────────────────────────────────────────────────────────────
   *   planting.zone6      {string}  - Zone 6 timing (kept for back-compat)
   *   planting.depth      {string}  - Planting depth, e.g. '0.5"'
   *   planting.spacing    {string}  - Spacing info
   *   planting.ph         {string}  - Soil pH range, e.g. "6.0–7.0"
   *   planting.sun        {string}  - Sunlight requirement
   *   special             {string}  - Any special instructions
   *
   * ── Zone timing ───────────────────────────────────────────────────────────
   * Two complementary ways to store per-zone data — use whichever fits your
   * workflow; timing() will resolve either format.
   *
   * Option A — flat strings on planting (original format, still supported):
   *   planting.zone3  {string}  - e.g. "Start indoors May, transplant Jun"
   *   planting.zone4  {string}
   *   planting.zone5  {string}
   *   planting.zone6  {string}  - e.g. "Direct sow Apr–May, transplant May"
   *   planting.zone7  {string}
   *   planting.zone8  {string}
   *   planting.zone9  {string}
   *
   * Option B — structured zones object (preferred for new data):
   *   zones.3  {ZoneData}  - See ZoneData shape below
   *   zones.4  {ZoneData}
   *   zones.5  {ZoneData}
   *   zones.6  {ZoneData}
   *   zones.7  {ZoneData}
   *   zones.8  {ZoneData}
   *   zones.9  {ZoneData}
   *
   *   ZoneData shape:
   *   {
   *     timing        {string}   - Human-readable planting timing description
   *     plantingStart {number}   - Month planting window opens  (1=Jan … 12=Dec)
   *     plantingEnd   {number}   - Month planting window closes (1=Jan … 12=Dec)
   *     harvestStart  {number}   - Month harvest window opens
   *     harvestEnd    {number}   - Month harvest window closes
   *     notes         {string}   - Any zone-specific notes (optional)
   *   }
   *
   *   Months use 1-based integers. Windows that wrap across year-end are fine
   *   (e.g. garlic: plantingStart 10, plantingEnd 11 → harvestStart 6,
   *   harvestEnd 7). The UI treats start > end as a wrap-around.
   *
   * ── Water ─────────────────────────────────────────────────────────────────
   *   water.in    {string}  - Inches per week, e.g. "1–1.5"
   *   water.note  {string}  - Watering notes
   *
   * ── Fertilizer ────────────────────────────────────────────────────────────
   *   fertilizer.type     {string}
   *   fertilizer.amount   {string}
   *   fertilizer.freq     {string}
   *
   * ── Companions ────────────────────────────────────────────────────────────
   *   companions.good  {Array<{name:string, why:string}>}
   *   companions.bad   {Array<{name:string, why:string}>}
   *   companionDist    {string}  - Distance note
   *   animals          {string}  - Beneficial animals
   *
   * ── Problems ──────────────────────────────────────────────────────────────
   *   diseases  {Array<{name:string, desc:string}>}
   *   pests     {string}
   *
   * ── Rotation ──────────────────────────────────────────────────────────────
   *   rotation.family  {string}  - Plant family
   *   rotation.cycle   {string}  - Rotation cycle description
   *
   * ── Growth ────────────────────────────────────────────────────────────────
   *   stages  {Array<{label:string, title:string, desc:string}>}
   *
   * ── Nutrition (per 100g fresh weight) ────────────────────────────────────
   *
   *   — Macronutrients —
   *   nutrition.calories   {number}  - kcal
   *   nutrition.water      {number}  - g  (moisture content)
   *   nutrition.protein    {number}  - g
   *   nutrition.carbs      {number}  - g  (total carbohydrate)
   *   nutrition.fiber      {number}  - g  (dietary fiber)
   *   nutrition.sugars     {number}  - g  (total sugars)
   *   nutrition.fat        {number}  - g  (total fat)
   *   nutrition.saturated  {number}  - g  (saturated fat)
   *   nutrition.monounsat  {number}  - g  (monounsaturated fat)
   *   nutrition.polyunsat  {number}  - g  (polyunsaturated fat)
   *
   *   — Fat-soluble vitamins —
   *   nutrition.vitA       {number}  - µg RAE  (retinol activity equivalents)
   *   nutrition.vitD       {number}  - µg      (D2 + D3)
   *   nutrition.vitE       {number}  - mg      (alpha-tocopherol)
   *   nutrition.vitK       {number}  - µg      (phylloquinone)
   *
   *   — Water-soluble vitamins —
   *   nutrition.vitC       {number}  - mg  (ascorbic acid)
   *   nutrition.vitB1      {number}  - mg  (thiamine)
   *   nutrition.vitB2      {number}  - mg  (riboflavin)
   *   nutrition.vitB3      {number}  - mg  (niacin)
   *   nutrition.vitB5      {number}  - mg  (pantothenic acid)
   *   nutrition.vitB6      {number}  - mg  (pyridoxine)
   *   nutrition.vitB7      {number}  - µg  (biotin)
   *   nutrition.vitB9      {number}  - µg DFE (folate)
   *   nutrition.vitB12     {number}  - µg  (cobalamin — almost always 0 in plants)
   *   nutrition.choline    {number}  - mg
   *
   *   — Macrominerals —
   *   nutrition.calcium    {number}  - mg
   *   nutrition.phosphorus {number}  - mg
   *   nutrition.magnesium  {number}  - mg
   *   nutrition.sodium     {number}  - mg
   *   nutrition.potassium  {number}  - mg
   *   nutrition.chloride   {number}  - mg
   *
   *   — Trace minerals —
   *   nutrition.iron       {number}  - mg
   *   nutrition.zinc       {number}  - mg
   *   nutrition.copper     {number}  - mg
   *   nutrition.manganese  {number}  - mg
   *   nutrition.selenium   {number}  - µg
   *   nutrition.iodine     {number}  - µg
   *   nutrition.chromium   {number}  - µg
   *   nutrition.molybdenum {number}  - µg
   *   nutrition.fluoride   {number}  - mg
   *
   *   nutrition.notes      {string}  - free-text notes
   *
   * Daily values (adults, FDA 2020) stored as static Crop.DV for % calculations.
   *
   * ── Size ──────────────────────────────────────────────────────────────────
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
      // Per-zone timing strings (Option A — flat format)
      zone3:   data.planting?.zone3   ?? '',
      zone4:   data.planting?.zone4   ?? '',
      zone5:   data.planting?.zone5   ?? '',
      zone7:   data.planting?.zone7   ?? '',
      zone8:   data.planting?.zone8   ?? '',
      zone9:   data.planting?.zone9   ?? '',
    };
    this.special = data.special ?? '';

    // ── Zones (Option B — structured per-zone data) ───────────────────────
    // Keyed by zone number as a string: '3', '4', … '9'.
    // Each entry is a ZoneData object (see JSDoc above).
    this.zones = {};
    const rawZones = data.zones ?? {};
    for (let z = 3; z <= 9; z++) {
      const key = String(z);
      const src = rawZones[key] ?? rawZones[z] ?? null;
      if (src) {
        this.zones[key] = {
          timing:        src.timing        ?? '',
          plantingStart: src.plantingStart ?? null,
          plantingEnd:   src.plantingEnd   ?? null,
          harvestStart:  src.harvestStart  ?? null,
          harvestEnd:    src.harvestEnd    ?? null,
          notes:         src.notes         ?? '',
        };
      }
    }

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
    const n = data.nutrition ?? {};

    this.nutrition = {
      // — Macronutrients —
      calories:    n.calories    ?? 0,
      water:       n.water       ?? 0,   // g
      protein:     n.protein     ?? 0,   // g
      carbs:       n.carbs       ?? 0,   // g total
      fiber:       n.fiber       ?? 0,   // g
      sugars:      n.sugars      ?? 0,   // g
      fat:         n.fat         ?? 0,   // g total
      saturated:   n.saturated   ?? 0,   // g
      monounsat:   n.monounsat   ?? 0,   // g
      polyunsat:   n.polyunsat   ?? 0,   // g

      // — Fat-soluble vitamins —
      vitA:        n.vitA        ?? 0,   // µg RAE
      vitD:        n.vitD        ?? 0,   // µg
      vitE:        n.vitE        ?? 0,   // mg
      vitK:        n.vitK        ?? 0,   // µg

      // — Water-soluble vitamins —
      vitC:        n.vitC        ?? 0,   // mg
      vitB1:       n.vitB1       ?? 0,   // mg thiamine
      vitB2:       n.vitB2       ?? 0,   // mg riboflavin
      vitB3:       n.vitB3       ?? 0,   // mg niacin
      vitB5:       n.vitB5       ?? 0,   // mg pantothenic acid
      vitB6:       n.vitB6       ?? 0,   // mg pyridoxine
      vitB7:       n.vitB7       ?? 0,   // µg biotin
      vitB9:       n.vitB9       ?? 0,   // µg DFE folate
      vitB12:      n.vitB12      ?? 0,   // µg cobalamin
      choline:     n.choline     ?? 0,   // mg

      // — Macrominerals —
      calcium:     n.calcium     ?? 0,   // mg
      phosphorus:  n.phosphorus  ?? 0,   // mg
      magnesium:   n.magnesium   ?? 0,   // mg
      sodium:      n.sodium      ?? 0,   // mg
      potassium:   n.potassium   ?? 0,   // mg
      chloride:    n.chloride    ?? 0,   // mg

      // — Trace minerals —
      iron:        n.iron        ?? 0,   // mg
      zinc:        n.zinc        ?? 0,   // mg
      copper:      n.copper      ?? 0,   // mg
      manganese:   n.manganese   ?? 0,   // mg
      selenium:    n.selenium    ?? 0,   // µg
      iodine:      n.iodine      ?? 0,   // µg
      chromium:    n.chromium    ?? 0,   // µg
      molybdenum:  n.molybdenum  ?? 0,   // µg
      fluoride:    n.fluoride    ?? 0,   // mg

      notes:       n.notes       ?? '',
    };

    // ── Size ──────────────────────────────────────────────────────────────────
    this.size = {
      weight:     data.size?.weight     ?? '',
      dimensions: data.size?.dimensions ?? '',
      notes:      data.size?.notes      ?? '',
    };
  }

  // ── Daily values (FDA 2020, adults) ────────────────────────────────────────
  /**
   * Reference daily intakes used to compute % DV in the UI.
   * Units match their corresponding nutrition fields above.
   */
  static DV = {
    calories:    2000,
    fat:           78,   // g
    saturated:     20,   // g
    carbs:        275,   // g
    fiber:         28,   // g
    sugars:        50,   // g  (added-sugar DV; used as cap for display)
    protein:       50,   // g
    // Fat-soluble vitamins
    vitA:         900,   // µg RAE
    vitD:          20,   // µg
    vitE:          15,   // mg
    vitK:         120,   // µg
    // Water-soluble vitamins
    vitC:          90,   // mg
    vitB1:          1.2, // mg
    vitB2:          1.3, // mg
    vitB3:         16,   // mg NE
    vitB5:          5,   // mg
    vitB6:          1.7, // mg
    vitB7:          30,  // µg
    vitB9:         400,  // µg DFE
    vitB12:          2.4,// µg
    choline:       550,  // mg
    // Macrominerals
    calcium:      1300,  // mg
    phosphorus:   1250,  // mg
    magnesium:     420,  // mg
    sodium:       2300,  // mg
    potassium:    4700,  // mg
    chloride:     2300,  // mg
    // Trace minerals
    iron:          18,   // mg
    zinc:          11,   // mg
    copper:         0.9, // mg
    manganese:      2.3, // mg
    selenium:      55,   // µg
    iodine:       150,   // µg
    chromium:      35,   // µg
    molybdenum:    45,   // µg
    fluoride:       4,   // mg
  };

  // ── Zone helpers ────────────────────────────────────────────────────────────

  /**
   * Returns the planting timing string for the requested zone number (3–9).
   *
   * Resolution order:
   *   1. zones[zone].timing         (Option B structured data)
   *   2. planting['zone' + zone]    (Option A flat string)
   *   3. planting.zone6             (universal fallback)
   *
   * @param  {number|string} zone - USDA zone number, e.g. 6
   * @returns {string}
   */
  timing(zone) {
    const z = String(zone);

    // Option B — structured zones object
    if (this.zones[z]?.timing) return this.zones[z].timing;

    // Option A — flat keys on planting
    const flatKey = 'zone' + z;
    if (this.planting[flatKey]) return this.planting[flatKey];

    // Fallback to zone 6
    return this.planting.zone6 ?? '';
  }

  /**
   * Returns the ZoneData object for the given zone, or null if none stored.
   * Merges Option-A flat timing string into the result when Option-B data
   * exists but its `timing` field is empty.
   *
   * @param  {number|string} zone
   * @returns {ZoneData|null}
   */
  zoneData(zone) {
    const z     = String(zone);
    const entry = this.zones[z] ?? null;
    const flat  = this.planting['zone' + z] ?? '';

    if (!entry && !flat) return null;

    return {
      timing:        entry?.timing        || flat || '',
      plantingStart: entry?.plantingStart ?? null,
      plantingEnd:   entry?.plantingEnd   ?? null,
      harvestStart:  entry?.harvestStart  ?? null,
      harvestEnd:    entry?.harvestEnd    ?? null,
      notes:         entry?.notes         ?? '',
    };
  }

  /**
   * Returns true if the given month (1–12) falls within the planting window
   * for the requested zone. Returns null if no window data is stored.
   *
   * Handles wrap-around windows (e.g. Oct–Nov → month 10 or 11 is in-window).
   *
   * @param  {number} month  - 1-based month (1=Jan … 12=Dec)
   * @param  {number|string} zone
   * @returns {boolean|null}
   */
  inPlantingWindow(month, zone) {
    const d = this.zoneData(zone);
    if (!d || d.plantingStart == null || d.plantingEnd == null) return null;
    return Crop._inWindow(month, d.plantingStart, d.plantingEnd);
  }

  /**
   * Returns true if the given month falls within the harvest window for the
   * requested zone. Returns null if no window data is stored.
   *
   * @param  {number} month
   * @param  {number|string} zone
   * @returns {boolean|null}
   */
  inHarvestWindow(month, zone) {
    const d = this.zoneData(zone);
    if (!d || d.harvestStart == null || d.harvestEnd == null) return null;
    return Crop._inWindow(month, d.harvestStart, d.harvestEnd);
  }

  /**
   * Returns true if the planting window opens within `weeks` weeks from now
   * for the given zone and current month.
   *
   * @param  {number} currentMonth  - 1-based current month
   * @param  {number|string} zone
   * @param  {number} [weeks=4]
   * @returns {boolean|null}
   */
  plantingWindowSoon(currentMonth, zone, weeks = 4) {
    const d = this.zoneData(zone);
    if (!d || d.plantingStart == null) return null;
    const monthsAhead = Math.round(weeks / 4.33); // approx months
    for (let i = 1; i <= monthsAhead; i++) {
      const m = ((currentMonth - 1 + i) % 12) + 1;
      if (m === d.plantingStart) return true;
    }
    return false;
  }

  /**
   * Returns a list of all zones (3–9) that have any stored data (either
   * Option A string or Option B entry).
   *
   * @returns {number[]}
   */
  get supportedZones() {
    const out = [];
    for (let z = 3; z <= 9; z++) {
      if (this.zoneData(z) !== null) out.push(z);
    }
    return out;
  }

  // ── Internal helpers ────────────────────────────────────────────────────────

  /**
   * Returns true if `month` falls in the inclusive window [start, end].
   * Handles year-wrap (start > end means the window crosses Jan 1).
   *
   * @param  {number} month
   * @param  {number} start  - 1–12
   * @param  {number} end    - 1–12
   * @returns {boolean}
   */
  static _inWindow(month, start, end) {
    if (start <= end) {
      return month >= start && month <= end;
    }
    // Wraps across year boundary (e.g. garlic: Oct–Jul)
    return month >= start || month <= end;
  }

  // ── Serialization ───────────────────────────────────────────────────────────

  /** Returns a plain object safe for JSON.stringify / Firestore storage. */
  toJSON() {
    return {
      id: this.id, name: this.name, cat: this.cat, emoji: this.emoji,
      planting: { ...this.planting },
      special: this.special,
      zones: Object.fromEntries(
        Object.entries(this.zones).map(([k, v]) => [k, { ...v }])
      ),
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

  /** Reconstruct a Crop instance from a plain object (e.g. from Firestore). */
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
    const n = this.nutrition;
    return n.calories === 0 && n.protein === 0 && n.carbs === 0;
  }

  /** Returns the good-companion names as a comma-separated string. */
  get goodCompanionNames() {
    return this.companions.good.map(g => g.name).join(', ');
  }

  /** Returns the bad-companion names as a comma-separated string. */
  get badCompanionNames() {
    return this.companions.bad.map(b => b.name).join(', ');
  }

  /**
   * Returns % daily value for a given nutrition key (0–100+).
   * Returns null if the key has no DV reference or the value is 0.
   */
  dvPercent(key) {
    const dv = Crop.DV[key];
    if (!dv) return null;
    const val = this.nutrition[key];
    if (!val) return null;
    return Math.round((val / dv) * 100);
  }
}
