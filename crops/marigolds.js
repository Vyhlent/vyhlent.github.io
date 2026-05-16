import Crop from '../Crop.js';
export default new Crop({
  id:'marigolds',name:'Marigolds',cat:'Flower',emoji:'🌼',
  planting:{zone6:'Start indoors Apr 1–15; transplant May 15; direct sow May 15',depth:'0.25"',spacing:'French: 6–8"; African: 10–12"',ph:'5.8–7.0',sun:'Full sun'},
  water:{in:'1',note:'Allow to dry slightly; overwatering reduces pest-repelling oils'},
  fertilizer:{type:'Low-nitrogen 5-10-5',amount:'Light application',freq:'Once at planting; deadhead to encourage bloom'},
  companions:{
    good:[{name:'Tomatoes',why:'Marigold root exudates suppress root-knot nematodes and volatiles deter whiteflies and aphids.'},{name:'Peppers',why:'Marigolds repel pepper weevils and thrips, and attract predatory beneficial insects.'},{name:'Cucumbers',why:'Marigolds deter cucumber beetles, the primary vector of bacterial wilt in cucumbers.'}],
    bad:[{name:'Fennel',why:'Fennel releases allelopathic chemicals that inhibit most plants including marigolds.'}],
  },
  companionDist:'Plant marigolds throughout the garden. Keep 12" from fennel.',
  animals:'Attracts hoverflies, parasitic wasps, ladybugs, and pollinators.',
  diseases:[{name:'Botrytis',desc:'Gray fuzzy mold on flowers; remove spent blooms.'},{name:'Powdery Mildew',desc:'White coating in dry heat; improve air flow.'}],
  pests:'Marigolds repel many pests. Spider mites — neem. Slugs — diatomaceous earth.',
  rotation:{family:'Asteraceae (annual)',cycle:'Annual; replant each year; suppresses nematodes in soil'},
  stages:[{label:'Germ',title:'Germination',desc:'5–7 days indoors.'},{label:'Seedl',title:'Seedling',desc:'Harden off before transplant.'},{label:'Bud',title:'Budding',desc:'Pinch early buds for branching.'},{label:'Bloom',title:'Continuous bloom',desc:'Deadhead to extend bloom until frost.'}],
  special:'French marigolds most effective for nematode suppression. Plant throughout the entire garden.',
  nutrition: {
    // — Macronutrients —
    calories:    0,
    water:       0,   // g
    protein:     0,   // g
    carbs:       0,   // g total
    fiber:       0,   // g
    sugars:      0,   // g
    fat:         0,   // g total
    saturated:   0,   // g
    monounsat:   0,   // g
    polyunsat:   0,   // g
    // — Fat-soluble vitamins —
    vitA:        0,   // µg RAE
    vitD:        0,   // µg
    vitE:        0,   // mg
    vitK:        0,   // µg
    // — Water-soluble vitamins —
    vitC:        0,   // mg
    vitB1:       0,  // mg thiamine
    vitB2:       0,  // mg riboflavin
    vitB3:       0,  // mg niacin
    vitB5:       0,  // mg pantothenic
    vitB6:       0,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       0,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     0,  // mg
    // — Macrominerals —
    calcium:     0,  // mg
    phosphorus:  0,  // mg
    magnesium:   0,  // mg
    sodium:      0,  // mg
    potassium:   0,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0,  // mg
    zinc:        0,  // mg
    copper:      0,  // mg
    manganese:   0,  // mg
    selenium:    0,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Ornamental companion plant — not a food crop. Edible flowers are mildly bitter and peppery. Nutritional data not applicable.',
  },
  size:{weight:'N/A — ornamental',dimensions:'French: 6–12" tall; African: 18–36" tall',notes:'Plant densely between vegetables for maximum pest suppression.'},
});
