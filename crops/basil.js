import Crop from '../Crop.js';
export default new Crop({
  id:'basil',name:'Basil',cat:'Herb',emoji:'🌿',
  planting:{zone6:'Start indoors Apr 15–May 1; transplant Jun 1+ (very frost sensitive)',depth:'0.25" indoors; transplant at pot depth',spacing:'12–18" apart',ph:'6.0–7.0',sun:'Full sun (6+ hrs minimum)'},
  water:{in:'1–1.5',note:'Keep moist; cold water below 50°F causes black spots; water in morning'},
  fertilizer:{type:'Balanced 10-10-10 or fish emulsion',amount:'Light application',freq:'Every 3–4 weeks; heavy feeding reduces flavor'},
  companions:{
    good:[{name:'Tomatoes',why:'Basil repels thrips, aphids, and whiteflies from tomatoes and may improve fruit flavor.'},{name:'Peppers',why:'Basil and peppers have compatible needs; basil deters thrips that attack pepper flowers.'},{name:'Marigolds',why:'Marigolds and basil together create a powerful pest-deterrent zone for the whole bed.'}],
    bad:[{name:'Sage',why:"Sage releases allelopathic compounds that inhibit basil's growth — direct competition causes stunted growth."},{name:'Rosemary',why:'Rosemary and basil have conflicting water needs (dry vs moist), causing one to suffer.'},{name:'Fennel',why:"Fennel's allelopathic chemicals stunt basil and inhibit essential oil production."}],
  },
  companionDist:'Keep 18" from sage/rosemary; 12" from fennel.',
  animals:'Bees love basil flowers; allow some to bolt for pollinators.',
  diseases:[{name:'Fusarium Wilt',desc:'One-sided wilting, brown stem streaks; destroy plants; use resistant varieties.'},{name:'Downy Mildew',desc:'Yellow patches on leaves; resistant varieties; improve air circulation.'}],
  pests:'Japanese beetles — hand pick; aphids — neem; slugs — diatomaceous earth.',
  rotation:{family:'Lamiaceae (annual)',cycle:'Annual; rotate each year'},
  stages:[{label:'Seed',title:'Seedling (indoors)',desc:'5–7 days; very cold-sensitive.'},{label:'Est',title:'Establishment',desc:'Rapid in warm weather; pinch flower buds.'},{label:'Pinch',title:'Pinching phase',desc:'Continuously pinch flower stalks; longest productive phase.'},{label:'Bolt',title:'Flowering',desc:'Allow some to flower and set seed.'}],
  special:'Plant one basil per tomato. Below 50°F permanently damages basil. Genovese, Nufar excellent in Zone 6.',
  nutrition: {
    // — Macronutrients —
    calories:    23,
    water:       92.1,   // g
    protein:     3.2,   // g
    carbs:       2.7,   // g total
    fiber:       1.6,   // g
    sugars:      0.3,   // g
    fat:         0.6,   // g total
    saturated:   0.04,   // g
    monounsat:   0.09,   // g
    polyunsat:   0.39,   // g
    // — Fat-soluble vitamins —
    vitA:        264,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.8,   // mg
    vitK:        414.8,   // µg
    // — Water-soluble vitamins —
    vitC:        18,   // mg
    vitB1:       0.034,  // mg thiamine
    vitB2:       0.076,  // mg riboflavin
    vitB3:       0.902,  // mg niacin
    vitB5:       0.209,  // mg pantothenic
    vitB6:       0.155,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       68,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     11.4,  // mg
    // — Macrominerals —
    calcium:     177,  // mg
    phosphorus:  56,  // mg
    magnesium:   64,  // mg
    sodium:      4,  // mg
    potassium:   295,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        3.17,  // mg
    zinc:        0.81,  // mg
    copper:      0.385,  // mg
    manganese:   1.148,  // mg
    selenium:    0.3,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Exceptional vitamin K (415 µg) and vitamin A content. Rich in eugenol (anti-inflammatory). High iron for an herb. Note: amounts eaten per serving are small.',
  },
  size:{weight:'N/A — culinary herb',dimensions:'Plant: 12–24" tall',notes:'Harvest by pinching stems above a leaf node.'},
});
