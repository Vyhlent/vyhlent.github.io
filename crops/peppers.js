import Crop from '../Crop.js';
export default new Crop({
  id:'peppers',name:'Peppers (Green/Banana)',cat:'Fruiting Veg',emoji:'🫑',
  planting:{zone6:'Start indoors Feb 15–Mar 15; transplant Jun 1–10 (soil 65°F+)',depth:'Same as pot; slightly deeper OK',spacing:'18" apart, rows 24"',ph:'6.0–6.8',sun:'Full sun (8+ hrs)'},
  water:{in:'1–2',note:'Blossom drop in extreme heat or cold; mulch to stabilize soil temp'},
  fertilizer:{type:'5-10-10 starter; 8-8-8 once fruiting',amount:'1 lb per 100 sq ft',freq:'At transplant; every 3–4 weeks balanced; avoid excess N'},
  companions:{
    good:[{name:'Basil',why:'Basil repels thrips and aphids from peppers; both love the same warm, sunny conditions.'},{name:'Tomatoes',why:'Tomatoes and peppers have compatible pest profiles and can share beneficial insect populations.'},{name:'Marigolds',why:'Marigolds repel pepper weevil and thrips while attracting beneficial predatory insects.'}],
    bad:[{name:'Fennel',why:"Fennel's allelopathic chemicals inhibit pepper root development and reduce fruit set."},{name:'Blackberries',why:'Blackberries and peppers share Verticillium wilt fungus which persists in soil and is lethal to both.'},{name:'Kohlrabi',why:'Kohlrabi is allelopathically incompatible with peppers, competing for the same minerals.'}],
  },
  companionDist:'Keep 20+ ft from blackberries; 12" from fennel.',
  animals:'Braconid wasps; lacewings eat aphids; bees pollinate.',
  diseases:[{name:'Anthracnose',desc:'Sunken spots on ripe fruit; copper fungicide; rotate.'},{name:'Phytophthora Blight',desc:'Wilting, brown lesions; improve drainage; destroy infected plants.'}],
  pests:'Aphids — soap; pepper maggot — sticky traps; corn borer — Bt.',
  rotation:{family:'Solanaceae',cycle:'3–4 year rotation; not after tomatoes, potatoes, eggplant'},
  stages:[{label:'Seed',title:'Seedling (indoors)',desc:'8–12 weeks indoors; earliest Zone 6 indoor start.'},{label:'Trans',title:'Transplant',desc:'Harden 10–14 days; nights above 55°F consistently.'},{label:'Flwr',title:'Flowering',desc:'Self-pollinating; shake gently in morning.'},{label:'Harv',title:'Harvest',desc:'Green at any firm size; leave for color change.'}],
  special:'Zone 6: use black plastic mulch for heat. Banana peppers are very productive.',
  nutrition: {
    // — Macronutrients —
    calories:    20,
    water:       93.9,   // g
    protein:     0.9,   // g
    carbs:       4.6,   // g total
    fiber:       1.7,   // g
    sugars:      2.4,   // g
    fat:         0.2,   // g total
    saturated:   0.06,   // g
    monounsat:   0.01,   // g
    polyunsat:   0.11,   // g
    // — Fat-soluble vitamins —
    vitA:        18,   // µg RAE
    vitD:        0,   // µg
    vitE:        0.37,   // mg
    vitK:        7.4,   // µg
    // — Water-soluble vitamins —
    vitC:        80.4,   // mg
    vitB1:       0.057,  // mg thiamine
    vitB2:       0.028,  // mg riboflavin
    vitB3:       0.48,  // mg niacin
    vitB5:       0.317,  // mg pantothenic
    vitB6:       0.224,  // mg pyridoxine
    vitB7:       0,  // µg biotin
    vitB9:       10,  // µg DFE folate
    vitB12:      0,  // µg cobalamin
    choline:     5.5,  // mg
    // — Macrominerals —
    calcium:     10,  // mg
    phosphorus:  20,  // mg
    magnesium:   10,  // mg
    sodium:      3,  // mg
    potassium:   175,  // mg
    chloride:    0,  // mg
    // — Trace minerals —
    iron:        0.34,  // mg
    zinc:        0.13,  // mg
    copper:      0.066,  // mg
    manganese:   0.122,  // mg
    selenium:    0.1,  // µg
    iodine:      0,  // µg
    chromium:    0,  // µg
    molybdenum:  0,  // µg
    fluoride:    0,  // mg
    notes:       'Green peppers have ~80 mg vitamin C per 100g — more than oranges. Red ripe peppers have 3× more (190+ mg). Also good source of vitamin B6 (0.22 mg — 13% DV).',
  },
  size:{weight:'100–200g per pepper',dimensions:'Bell: 3–4" wide; banana: 4–6" long',notes:'Leaving on plant longer = sweeter and more nutritious.'},
});
