import Crop from '../Crop.js';
export default new Crop({
  id:'kale',name:'Kale',cat:'Leafy Green',emoji:'🥬',
  planting:{zone6:'Direct sow Mar 15–May 1 (spring) or Jul 15–Aug 15 (fall)',depth:'0.5"',spacing:'12–18" apart, rows 18–24"',ph:'6.0–7.5',sun:'Full sun / part shade'},
  water:{in:'1–1.5',note:'Consistent moisture; slight drought-stress in fall intensifies flavor'},
  fertilizer:{type:'High-nitrogen 10-10-10 or fish emulsion',amount:'2 lbs per 100 sq ft',freq:'At planting; side-dress nitrogen monthly'},
  companions:{
    good:[{name:'Beets',why:"Beets and kale are compatible root/leaf crop partners that don't compete for resources."},{name:'Marigolds',why:'Marigolds deter cabbage moths and whiteflies that devastate kale leaves.'},{name:'Nasturtiums',why:'Nasturtiums act as trap crops for aphids, drawing them away from kale foliage.'}],
    bad:[{name:'Tomatoes',why:'Tomatoes and brassicas like kale compete for calcium and magnesium, causing deficiencies in both.'},{name:'Beans',why:"Beans are inhibited by kale's glucosinolate root exudates, reducing bean yield."},{name:'Strawberries',why:'Strawberries are stunted near brassicas; they share fungal diseases.'}],
  },
  companionDist:'Keep 18" from beans; 12" from tomatoes/strawberries.',
  animals:'Parasitic wasps; ground beetles; spiders eat insects.',
  diseases:[{name:'Black Rot',desc:'Yellow V-shaped lesions, black veins; copper bactericide; rotate.'},{name:'Downy Mildew',desc:'Yellow spots above, gray fuzz below; copper spray; improve air flow.'}],
  pests:'Cabbage worms — Bt; aphids — neem; flea beetles — row covers.',
  rotation:{family:'Brassicaceae',cycle:'3–4 year rotation; not after broccoli, cabbage, cauliflower'},
  stages:[{label:'Germ',title:'Germination',desc:'5–8 days in cool soil.'},{label:'Juv',title:'Juvenile',desc:'Thin to 12–18"; thinnings are edible microgreens.'},{label:'Harv',title:'Harvest',desc:'Harvest outer leaves; central tip keeps producing.'},{label:'Winter',title:'Overwintering',desc:'Fall kale sweetens with frost; overwinters in Zone 6.'}],
  special:'Lacinato, Red Russian, Winterbor are excellent Zone 6 varieties. Sweeter after frost.',
  nutrition: {
    // — Macronutrients —
    calories:    35,
    water:       89.6,   // g
    protein:     2.9,   // g
    carbs:       4.4,   // g total
    fiber:       4.1,   // g
    sugars:      0.99,   // g
    fat:         1.5,   // g total
    saturated:   0.19,   // g
    monounsat:   0.1,   // g
    polyunsat:   0.67,   // g
    // — Fat-soluble vitamins —
    vitA:        241,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.66,   // mg
    vitK:        389.6,   // µg
    // — Water-soluble vitamins —
    vitC:        93.4,   // mg
    vitB1:       0.113,  // mg thiamine
    vitB2:       0.347,  // mg riboflavin
    vitB3:       1,  // mg niacin
    vitB5:       0.37,  // mg pantothenic
    vitB6:       0.271,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       141,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     0.5,  // mg
    // — Macrominerals —
    calcium:     150,  // mg
    phosphorus:  92,  // mg
    magnesium:   47,  // mg
    sodium:      38,  // mg
    potassium:   447,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        1.47,  // mg
    zinc:        0.56,  // mg
    copper:      0.29,  // mg
    manganese:   0.659,  // mg
    selenium:    0.9,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'One of the most nutrient-dense foods. Extraordinary vitamin K (390 µg — 325% DV), vitamin A (241 µg), vitamin C (93 mg — 103% DV), folate (141 µg — 35% DV), and calcium. Anti-cancer glucosinolates.',
  },
  size:{weight:'200–400g per bunch',dimensions:'Leaves 8–16" long',notes:'Harvest at 8–10 inches for best flavor.'},
});
