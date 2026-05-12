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
  nutrition:{calories:77,protein:2,carbs:17,fat:0.1,fiber:2.2,vitC:20,notes:'Good source of potassium, vitamin B6, and vitamin C. Most nutrients are just beneath the skin.'},
  size:{weight:'100–300g per tuber',dimensions:'2–4" diameter',notes:'New potatoes: golf ball size. Mature: after tops die back.'},
});
