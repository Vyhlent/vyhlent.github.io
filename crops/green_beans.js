import Crop from '../Crop.js';
export default new Crop({
  id:'green_beans',name:'Green Beans',cat:'Legume',emoji:'🫘',
  planting:{zone6:'Direct sow May 15–Jul 1; succession sow every 2–3 weeks',depth:'1–1.5" deep',spacing:'Bush: 4–6" rows 18"; Pole: 4–6" at trellis',ph:'6.0–7.0',sun:'Full sun'},
  water:{in:'1',note:'Critical at flowering and pod development; water at base'},
  fertilizer:{type:'Low-nitrogen 5-10-10',amount:'½ lb per 100 sq ft',freq:'At planting only; beans fix their own nitrogen'},
  companions:{
    good:[{name:'Carrots',why:'Beans fix nitrogen that feeds heavy-feeding carrots; carrots loosen soil that aids bean root development.'},{name:'Corn',why:'Three Sisters: beans fix nitrogen for corn, corn stalks provide a trellis for pole beans.'},{name:'Marigolds',why:'Marigolds repel Mexican bean beetles and bean leaf rollers with their volatile compounds.'}],
    bad:[{name:'Garlic',why:"Garlic's allelopathic sulfur compounds significantly inhibit bean growth and nitrogen-fixation activity."},{name:'Onions',why:'Onion root exudates stunt bean germination and suppress Rhizobium bacteria.'},{name:'Fennel',why:"Fennel's allelopathic chemicals inhibit almost all vegetables including beans."}],
  },
  companionDist:'Keep 18"+ from all alliums; 12" from beets.',
  animals:'Ground beetles; parasitic wasps; bees pollinate.',
  diseases:[{name:'Bean Mosaic Virus',desc:'Mottled leaves, stunted; spread by aphids; remove plants.'},{name:'Root Rot',desc:'Sunken lesions at soil line; improve drainage; avoid cold/wet soil.'}],
  pests:'Mexican bean beetle — hand pick; bean leaf roller — Bt; aphids — soap.',
  rotation:{family:'Fabaceae',cycle:'2–3 year rotation; follow with heavy feeders like corn/brassicas'},
  stages:[{label:'Germ',title:'Germination',desc:'7–14 days; do not plant in cold soil below 60°F.'},{label:'Grow',title:'Vegetative',desc:'Rapid growth; install pole trellis before planting.'},{label:'Flwr',title:'Flowering',desc:'Self-pollinating.'},{label:'Harv',title:'Harvest',desc:'Every 2–3 days when pods snap cleanly.'}],
  special:'Inoculate seeds with rhizobium bacteria for better nitrogen fixation in new beds.',
  nutrition: {
    // — Macronutrients —
    calories:    31,
    water:       90.3,   // g
    protein:     1.8,   // g
    carbs:       7,   // g total
    fiber:       2.7,   // g
    sugars:      3.3,   // g
    fat:         0.1,   // g total
    saturated:   0.03,   // g
    monounsat:   0.01,   // g
    polyunsat:   0.07,   // g
    // — Fat-soluble vitamins —
    vitA:        35,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.41,   // mg
    vitK:        43,   // µg
    // — Water-soluble vitamins —
    vitC:        12.2,   // mg
    vitB1:       0.082,  // mg thiamine
    vitB2:       0.104,  // mg riboflavin
    vitB3:       0.734,  // mg niacin
    vitB5:       0.225,  // mg pantothenic
    vitB6:       0.074,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       37,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     15.3,  // mg
    // — Macrominerals —
    calcium:     37,  // mg
    phosphorus:  38,  // mg
    magnesium:   25,  // mg
    sodium:      6,  // mg
    potassium:   211,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        1.03,  // mg
    zinc:        0.24,  // mg
    copper:      0.069,  // mg
    manganese:   0.216,  // mg
    selenium:    0.6,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Good source of folate (37 µg), vitamin K (43 µg — 36% DV), and silicon for connective tissue. Very low calorie with excellent digestive fiber.',
  },
  size:{weight:'10–15g per pod',dimensions:'4–6" long pod',notes:'Harvest at 4–6 inches before seeds bulge.'},
});
