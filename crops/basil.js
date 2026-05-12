import Crop from '../Crop.js';
export default new Crop({
  id:'basil',name:'Basil',cat:'Herb',emoji:'🌿',
  planting:{zone6:'Start indoors Apr 15–May 1; transplant Jun 1+ (very frost sensitive)',depth:'0.25" indoors; transplant at pot depth',spacing:'12–18" apart',ph:'6.0–7.0',sun:'Full sun (6+ hrs minimum)'},
  water:{in:'1–1.5',note:'Keep moist; cold water below 50°F causes black spots; water in morning'},
  fertilizer:{type:'Balanced 10-10-10 or fish emulsion',amount:'Light application',freq:'Every 3–4 weeks; heavy feeding reduces flavor'},
  companions:{
    good:[{name:'Tomatoes',why:'Basil repels thrips, aphids, and whiteflies from tomatoes and may improve fruit flavor.'},{name:'Peppers',why:'Basil and peppers have compatible needs; basil deters thrips that attack pepper flowers.'},{name:'Marigolds',why:'Marigolds and basil together create a powerful pest-deterrent zone for the whole bed.'}],
    bad:[{name:'Sage',why:"Sage releases allelopathic compounds that inhibit basil's growth — direct competition causes stunted growth."},{name:'Rosemary',why:'Rosemary and basil have conflicting water needs (dry vs moist), causing one to suffer.'},{name:'Fennel',why:"Fennel's allelopathic chemicals stunt basil and inhibit essential oil production."}],
  },
  companionDist:'Keep 18" from sage/rosemary; 12" from fennel.',
  animals:'Bees love basil flowers; allow some to bolt for pollinators.',
  diseases:[{name:'Fusarium Wilt',desc:'One-sided wilting, brown stem streaks; destroy plants; use resistant varieties.'},{name:'Downy Mildew',desc:'Yellow patches on leaves; resistant varieties; improve air circulation.'}],
  pests:'Japanese beetles — hand pick; aphids — neem; slugs — diatomaceous earth.',
  rotation:{family:'Lamiaceae (annual)',cycle:'Annual; rotate each year'},
  stages:[{label:'Seed',title:'Seedling (indoors)',desc:'5–7 days; very cold-sensitive.'},{label:'Est',title:'Establishment',desc:'Rapid in warm weather; pinch flower buds.'},{label:'Pinch',title:'Pinching phase',desc:'Continuously pinch flower stalks; longest productive phase.'},{label:'Bolt',title:'Flowering',desc:'Allow some to flower and set seed.'}],
  special:'Plant one basil per tomato. Below 50°F permanently damages basil. Genovese, Nufar excellent in Zone 6.',
  nutrition:{calories:23,protein:3.2,carbs:2.7,fat:0.6,fiber:1.6,vitC:18,notes:'Rich in eugenol (anti-inflammatory), vitamin K, and beta-carotene.'},
  size:{weight:'N/A — culinary herb',dimensions:'Plant: 12–24" tall',notes:'Harvest by pinching stems above a leaf node.'},
});
