import Crop from '../Crop.js';
export default new Crop({
  id:'tomatoes',name:'Tomatoes',cat:'Fruiting Veg',emoji:'🍅',
  planting:{zone6:'Start indoors Mar 15–Apr 15; transplant May 15–Jun 1',depth:'Bury stem deep — up to 2/3 of plant',spacing:'Determinate: 2 ft; indeterminate: 3 ft; rows 4 ft',ph:'6.0–6.8',sun:'Full sun (8+ hrs)'},
  water:{in:'1–2',note:'Deep consistent watering prevents blossom end rot; water at base'},
  fertilizer:{type:'8-32-16 at transplant; balanced once fruiting',amount:'2 lbs per 100 sq ft; ½ cup per plant',freq:'Pre-plant; 6 weeks after transplant; at first fruit set'},
  companions:{
    good:[{name:'Basil',why:'Basil repels thrips, aphids, and whiteflies from tomatoes and may improve fruit flavor.'},{name:'Marigolds',why:'Marigolds suppress root nematodes and deter whiteflies and aphids that damage tomato foliage.'},{name:'Carrots',why:'Carrots loosen soil around tomato roots and attract parasitic wasps.'}],
    bad:[{name:'Potatoes',why:'Tomatoes and potatoes share late blight (Phytophthora infestans) which spreads rapidly between them.'},{name:'Fennel',why:'Fennel releases allelopathic chemicals that stunt tomato growth.'},{name:'Corn',why:'Corn earworm attacks both crops; planting together concentrates this pest.'}],
  },
  companionDist:'Keep 3–4 ft from potatoes; 20 ft from blackberries/raspberries; 2 ft from corn.',
  animals:'Braconid wasps parasitize hornworms; lacewings eat aphids.',
  diseases:[{name:'Early Blight',desc:'Concentric-ring spots on lower leaves; copper fungicide; mulch.'},{name:'Late Blight',desc:'Gray-green patches, white mold; destroy plants; chlorothalonil.'},{name:'Septoria Leaf Spot',desc:'Small circular spots; same prevention as early blight.'}],
  pests:'Hornworm — hand pick; aphids — neem; cutworms — stem collar.',
  rotation:{family:'Solanaceae',cycle:'3–4 year rotation; not after potatoes, peppers, eggplant'},
  stages:[{label:'Seed',title:'Seedling (indoors)',desc:'6–8 weeks before transplant; 14–16 hours light.'},{label:'Trans',title:'Transplant',desc:'After last frost; bury deeply; harden off 7–10 days.'},{label:'Flwr',title:'Flowering',desc:'First flowers 6–8 weeks after transplant.'},{label:'Harv',title:'Harvest',desc:'~70–80 days after transplant.'}],
  special:'Choose <80 day maturity varieties for Zone 6. Sucker indeterminate varieties.',
  nutrition: {
    // — Macronutrients —
    calories:    18,
    water:       94.5,   // g
    protein:     0.9,   // g
    carbs:       3.9,   // g total
    fiber:       1.2,   // g
    sugars:      2.6,   // g
    fat:         0.2,   // g total
    saturated:   0.03,   // g
    monounsat:   0.03,   // g
    polyunsat:   0.08,   // g
    // — Fat-soluble vitamins —
    vitA:        42,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.54,   // mg
    vitK:        7.9,   // µg
    // — Water-soluble vitamins —
    vitC:        13.7,   // mg
    vitB1:       0.037,  // mg thiamine
    vitB2:       0.019,  // mg riboflavin
    vitB3:       0.594,  // mg niacin
    vitB5:       0.089,  // mg pantothenic
    vitB6:       0.08,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       15,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     6.7,  // mg
    // — Macrominerals —
    calcium:     10,  // mg
    phosphorus:  24,  // mg
    magnesium:   11,  // mg
    sodium:      5,  // mg
    potassium:   237,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0.27,  // mg
    zinc:        0.17,  // mg
    copper:      0.059,  // mg
    manganese:   0.114,  // mg
    selenium:    0,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Rich in lycopene (4–5 mg/100g raw; up to 3× more in cooked/processed tomatoes) — a powerful antioxidant linked to reduced cancer and cardiovascular disease risk. Cooking in oil significantly increases lycopene bioavailability.',
  },
  size:{weight:'100–250g (slicing); 10–30g (cherry)',dimensions:'2–4" diameter (slicing); 1–1.5" (cherry)',notes:'Determinate varieties produce all at once; indeterminate produce until frost.'},
});
