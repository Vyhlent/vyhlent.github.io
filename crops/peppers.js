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
  nutrition:{calories:20,protein:0.9,carbs:4.6,fat:0.2,fiber:1.7,vitC:80,notes:'Green peppers have 3x the vitamin C of oranges by weight.'},
  size:{weight:'100–200g per pepper',dimensions:'Bell: 3–4" wide; banana: 4–6" long',notes:'Leaving on plant longer = sweeter and more nutritious.'},
});
