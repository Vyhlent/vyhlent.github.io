import Crop from '../Crop.js';
export default new Crop({
  id:'potatoes',name:'Potatoes',cat:'Root Vegetable',emoji:'🥔',
  planting:{zone6:'Plant seed potatoes Apr 15–May 15 (soil 45°F+)',depth:'3–4" deep; hill up as plants grow',spacing:'12" apart, rows 30–36"',ph:'4.8–5.5',sun:'Full sun'},
  water:{in:'1–2',note:'Critical during tuber set; reduce after tops die back'},
  fertilizer:{type:'Low-nitrogen 5-10-10',amount:'3 lbs per 100 sq ft',freq:'Pre-plant; low-N when hilling; avoid N after flowering'},
  companions:{
    good:[{name:'Beans',why:'Beans fix nitrogen and the dense canopy repels Colorado potato beetle.'},{name:'Marigolds',why:'Marigolds repel nematodes and Colorado potato beetle with their root exudates and volatile oils.'},{name:'Corn',why:'Corn and potatoes occupy different root zones and coexist well with minimal resource competition.'}],
    bad:[{name:'Tomatoes',why:'Tomatoes and potatoes share late blight (Phytophthora infestans) which spreads rapidly between them.'},{name:'Cucumbers',why:'Cucumbers share Phytophthora fungal diseases and compete for potassium that both crops need.'},{name:'Raspberries',why:'Raspberry roots harbor Verticillium wilt which devastates potatoes.'}],
  },
  companionDist:'Keep 3+ ft from tomatoes/peppers/eggplant; 3 ft from cucumbers.',
  animals:'Ground beetles eat grubs; row covers exclude flies.',
  diseases:[{name:'Late Blight',desc:'Dark water-soaked patches; destroy all infected tissue; copper fungicide.'},{name:'Common Scab',desc:'Rough corky patches; lower soil pH to 4.8–5.2; certified seed.'}],
  pests:'Colorado potato beetle — hand pick eggs/adults; spinosad spray.',
  rotation:{family:'Solanaceae',cycle:'3–4 year rotation; not after tomatoes, peppers, eggplant'},
  stages:[{label:'Sprt',title:'Sprouting',desc:'Pre-sprout (chit) 2–4 weeks before planting.'},{label:'Veg',title:'Vegetative',desc:'Hill soil around stems every 2–3 weeks.'},{label:'Tuber',title:'Tuber set',desc:'At flowering; consistent water critical.'},{label:'Harv',title:'Harvest',desc:'Mature: 2–3 weeks after tops die; cure 2 weeks.'}],
  special:'Never plant where Solanaceae grew in 3 years. Green flesh is toxic.',
  nutrition: {
    // — Macronutrients —
    calories:    77,
    water:       79.4,   // g
    protein:     2,   // g
    carbs:       17,   // g total
    fiber:       2.2,   // g
    sugars:      0.8,   // g
    fat:         0.1,   // g total
    saturated:   0.03,   // g
    monounsat:   0,   // g
    polyunsat:   0.04,   // g
    // — Fat-soluble vitamins —
    vitA:        0,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.01,   // mg
    vitK:        1.9,   // µg
    // — Water-soluble vitamins —
    vitC:        19.7,   // mg
    vitB1:       0.081,  // mg thiamine
    vitB2:       0.032,  // mg riboflavin
    vitB3:       1.061,  // mg niacin
    vitB5:       0.296,  // mg pantothenic
    vitB6:       0.298,  // mg pyridoxine
    vitB7:       0.4,  // µg biotin
    vitB9:       16,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     12.1,  // mg
    // — Macrominerals —
    calcium:     12,  // mg
    phosphorus:  57,  // mg
    magnesium:   23,  // mg
    sodium:      6,  // mg
    potassium:   425,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0.78,  // mg
    zinc:        0.3,  // mg
    copper:      0.108,  // mg
    manganese:   0.153,  // mg
    selenium:    0.4,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Excellent source of potassium (425 mg — 9% DV) and vitamin B6 (0.30 mg — 18% DV). Most nutrients are concentrated just beneath the skin — eat unpeeled when possible. Green flesh contains solanine and must be discarded.',
  },
  size:{weight:'100–300g per tuber',dimensions:'2–4" diameter',notes:'New potatoes: golf ball size. Mature: after tops die back.'},
});
