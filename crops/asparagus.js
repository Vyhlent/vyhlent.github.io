import Crop from '../Crop.js';
export default new Crop({
  id:'asparagus',name:'Asparagus',cat:'Perennial Veg',emoji:'🌱',
  planting:{zone6:'Plant crowns Apr 1–30 (soil 40°F+)',depth:'6–8" deep in trench; fill in as shoots grow',spacing:'12–18" apart, rows 4–5 ft',ph:'6.5–7.5',sun:'Full sun'},
  water:{in:'1–2',note:'Consistent moisture first 2 years; critical during fern phase'},
  fertilizer:{type:'Balanced 10-10-10',amount:'2 lbs per 100 sq ft',freq:'Early spring; again after harvest ends'},
  companions:{
    good:[{name:'Tomatoes',why:'Tomatoes repel asparagus beetle while asparagus deters root nematodes that attack tomatoes.'},{name:'Basil',why:'Basil repels asparagus beetle and its oils confuse insects seeking to lay eggs in asparagus crowns.'},{name:'Marigolds',why:'Marigolds suppress nematodes in the deep soil layers where asparagus crowns grow.'}],
    bad:[{name:'Garlic',why:'Garlic stunts asparagus growth and competes directly for deep soil nutrients needed by the perennial crown.'},{name:'Onions',why:'Onions release allelopathic compounds that stunt the slow-developing asparagus crown.'},{name:'Potatoes',why:'Potato harvest physically disrupts asparagus root systems, and both share fungal diseases.'}],
  },
  companionDist:'Keep 24" from garlic/onions; 3 ft from potatoes.',
  animals:'Ladybugs eat beetle eggs; toads eat many pests.',
  diseases:[{name:'Asparagus Rust',desc:'Orange-red pustules on ferns; copper fungicide; Jersey series varieties.'},{name:'Crown Rot',desc:'Brown-orange crown, plant collapse; improve drainage.'}],
  pests:'Asparagus beetle — hand pick; pyrethrin if severe.',
  rotation:{family:'Asparagaceae (perennial)',cycle:'Permanent bed — productive 15–30 years'},
  stages:[{label:'Yr1',title:'Year 1 — no harvest',desc:'Do not harvest at all; build root reserves.'},{label:'Yr2',title:'Year 2 — 2 weeks',desc:'Harvest 2 weeks only.'},{label:'Yr3',title:'Year 3+ — full',desc:'Harvest 4–6 weeks; stop when spears thin.'},{label:'Fern',title:'Fern phase',desc:'Let ferns grow all season after harvest.'}],
  special:'First harvest year 3. Jersey Giant and Jersey Knight are excellent Zone 6 varieties.',
  nutrition:{calories:20,protein:2.2,carbs:3.9,fat:0.1,fiber:2.1,vitC:5,notes:'Outstanding source of folate, vitamin K, and prebiotic inulin fiber.'},
  size:{weight:'15–25g per spear',dimensions:'7–9" long spear, 0.5–0.75" diameter',notes:'Harvest at 6–8 inches. Pencil-thin spears signal the bed needs rest.'},
});
