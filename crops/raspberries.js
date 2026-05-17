import Crop from '../Crop.js';
export default new Crop({
  id:'raspberries',name:'Raspberries',cat:'Berry',emoji:'🍓',
  planting:{zone6:'Plant Mar–Apr (summer) or Apr–May (fall-bearing)',depth:'Crown at soil level, roots 2–4" deep',spacing:'2–3 ft apart, rows 6–8 ft',ph:'5.5–6.5',sun:'Full sun'},
  water:{in:'1–1.5',note:'Consistent moisture critical during cane and fruit development'},
  fertilizer:{type:'10-10-10 or ammonium nitrate',amount:'¼ lb per plant',freq:'Spring before growth; avoid late-season N'},
  companions:{
    good:[{name:'Garlic',why:'Garlic repels raspberry beetle and aphids that spread mosaic virus between canes.'},{name:'Marigolds',why:'Marigolds attract beneficial insects that prey on raspberry fruitworm larvae.'},{name:'Chives',why:'Chives deter aphids, the primary vector of raspberry mosaic virus.'}],
    bad:[{name:'Tomatoes',why:'Tomatoes share late blight and Verticillium wilt with raspberries, creating a disease reservoir.'},{name:'Potatoes',why:'Potatoes carry late blight and share fungal diseases that overwinter and attack raspberry roots.'}],
  },
  companionDist:'20 ft minimum from tomatoes/potatoes.',
  animals:'Ground beetles eat larvae; parasitic wasps; bees essential.',
  diseases:[{name:'Raspberry Mosaic Virus',desc:'Mottled distorted leaves; spread by aphids. Remove infected plants.'},{name:'Root Rot',desc:'Wilting, orange crown; improve drainage; resistant varieties.'}],
  pests:'Aphids — neem oil; cane borers — prune wilted tips; fruitworm — hand pick.',
  rotation:{family:'Rosaceae (perennial)',cycle:'Perennial; renovate every 8–10 years in new location'},
  stages:[{label:'Dorm',title:'Dormancy',desc:'Winter. Roots active underground.'},{label:'Prim',title:'Primocane',desc:'New canes grow; no fruit.'},{label:'Flor',title:'Floricane',desc:'Year 2 canes flower and fruit.'},{label:'Harv',title:'Harvest',desc:'Jun–Jul (summer) or Aug–Oct (fall).'}],
  special:'Summer-bearing: prune floricanes after harvest. Everbearing: mow all canes in early spring.',
  nutrition: {
    // — Macronutrients —
    calories:    52,
    water:       85.8,   // g
    protein:     1.2,   // g
    carbs:       11.9,   // g total
    fiber:       6.5,   // g
    sugars:      4.4,   // g
    fat:         0.7,   // g total
    saturated:   0.02,   // g
    monounsat:   0.07,   // g
    polyunsat:   0.38,   // g
    // — Fat-soluble vitamins —
    vitA:        2,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.87,   // mg
    vitK:        7.8,   // µg
    // — Water-soluble vitamins —
    vitC:        26.2,   // mg
    vitB1:       0.032,  // mg thiamine
    vitB2:       0.038,  // mg riboflavin
    vitB3:       0.598,  // mg niacin
    vitB5:       0.329,  // mg pantothenic
    vitB6:       0.055,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       21,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     12.3,  // mg
    // — Macrominerals —
    calcium:     25,  // mg
    phosphorus:  29,  // mg
    magnesium:   22,  // mg
    sodium:      1,  // mg
    potassium:   151,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0.69,  // mg
    zinc:        0.42,  // mg
    copper:      0.09,  // mg
    manganese:   0.67,  // mg
    selenium:    0.2,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Highest fiber of common berries (6.5 g/100g). Exceptional manganese (0.67 mg — 29% DV). Rich in ellagic acid, anthocyanins, and vitamin C. Low sugar relative to other fruits.',
  },
  size:{weight:'2–4g per berry',dimensions:'0.5–0.75" diameter',notes:'Hollow when picked; releases cleanly from core when ripe.'},
});
