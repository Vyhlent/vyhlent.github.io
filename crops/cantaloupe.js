import Crop from '../Crop.js';
export default new Crop({
  id:'cantaloupe',name:'Cantaloupe',cat:'Vine Fruit',emoji:'🍈',
  planting:{zone6:'Start indoors Apr 15–May 1; transplant May 15–30',depth:'1" direct sow; transplant at pot depth',spacing:'2–3 ft per hill, hills 4–6 ft apart',ph:'6.0–6.5',sun:'Full sun (8+ hrs)'},
  water:{in:'1–2',note:'Taper off near ripeness to concentrate sugar'},
  fertilizer:{type:'5-10-10; switch to 0-0-60 at vine run',amount:'2 lbs per 100 sq ft',freq:'At transplant; vine run; first fruit set'},
  companions:{
    good:[{name:'Corn',why:'Tall corn acts as a windbreak for sprawling cantaloupe vines.'},{name:'Marigolds',why:'Marigolds deter cucumber beetles, the chief pest and virus vector for cantaloupe.'},{name:'Nasturtiums',why:'Nasturtiums act as trap crops for aphids, keeping them off the melon vines.'}],
    bad:[{name:'Potatoes',why:'Potatoes compete heavily for potassium and share fungal diseases that affect cantaloupe.'},{name:'Cucumbers',why:'Cucumbers share powdery mildew and cucumber beetle infestations, amplifying pressure on both crops.'}],
  },
  companionDist:'Keep 3 ft from cucumbers; 4+ ft from potatoes.',
  animals:'Bees essential for pollination; ground beetles eat larvae.',
  diseases:[{name:'Powdery Mildew',desc:'White coating on leaves; neem oil or potassium bicarbonate.'},{name:'Gummy Stem Blight',desc:'Water-soaked lesions with gummy exudate; chlorothalonil; rotate crops.'}],
  pests:'Cucumber beetles — row covers until flowering; aphids — neem.',
  rotation:{family:'Cucurbitaceae',cycle:'3–4 year rotation away from all cucurbits'},
  stages:[{label:'Germ',title:'Germination',desc:'5–10 days at 70–90°F.'},{label:'Vine',title:'Vine development',desc:'Rapid growth; train or let sprawl.'},{label:'Flwr',title:'Flowering',desc:'Male then female flowers; bees critical.'},{label:'Ripe',title:'Maturation',desc:'Slip test: slight pressure detaches at stem.'}],
  special:'Use black plastic mulch. Place board under fruits.',
  nutrition: {
    // — Macronutrients —
    calories:    34,
    water:       90.2,   // g
    protein:     0.8,   // g
    carbs:       8.2,   // g total
    fiber:       0.9,   // g
    sugars:      7.9,   // g
    fat:         0.2,   // g total
    saturated:   0.05,   // g
    monounsat:   0,   // g
    polyunsat:   0.06,   // g
    // — Fat-soluble vitamins —
    vitA:        169,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.05,   // mg
    vitK:        2.5,   // µg
    // — Water-soluble vitamins —
    vitC:        36.7,   // mg
    vitB1:       0.041,  // mg thiamine
    vitB2:       0.019,  // mg riboflavin
    vitB3:       0.734,  // mg niacin
    vitB5:       0.105,  // mg pantothenic
    vitB6:       0.072,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       21,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     7.6,  // mg
    // — Macrominerals —
    calcium:     9,  // mg
    phosphorus:  15,  // mg
    magnesium:   12,  // mg
    sodium:      16,  // mg
    potassium:   267,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0.21,  // mg
    zinc:        0.18,  // mg
    copper:      0.041,  // mg
    manganese:   0.041,  // mg
    selenium:    0.4,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Excellent source of beta-carotene (vitamin A — 169 µg, ~19% DV) and potassium. High vitamin C. Very hydrating at 90% water.',
  },
  size:{weight:'1–3 kg per fruit',dimensions:'5–7" diameter',notes:'Full-slip harvest: netting on rind, sweet aroma.'},
});
