import Crop from '../Crop.js';
export default new Crop({
  id:'red_onions',name:'Red Onions',cat:'Allium',emoji:'🧅',
  planting:{zone6:'Start seeds indoors Jan 15–Feb 28; transplant Apr 15–May 1; or sets Apr 1–30',depth:'Sets 1" deep; transplants at pot depth',spacing:'4–6" apart, rows 12"',ph:'6.0–7.0',sun:'Full sun'},
  water:{in:'1',note:'Reduce when tops fall; stop 1 week before harvest'},
  fertilizer:{type:'10-10-10, then 21-0-0',amount:'½ lb per 10 sq ft',freq:'At planting; nitrogen when pencil-thick; stop at bulb formation'},
  companions:{
    good:[{name:'Carrots',why:'Onions repel carrot fly while carrots repel onion fly — a classic mutual defense partnership.'},{name:'Tomatoes',why:'Onion compounds deter thrips and spider mites that damage tomato foliage.'},{name:'Marigolds',why:"Marigolds reinforce onion's pest-deterrent effect and attract beneficial predatory insects."}],
    bad:[{name:'Peas',why:'Onion allelopathic compounds reduce pea germination and inhibit nitrogen-fixing bacteria in pea roots.'},{name:'Beans',why:'Beans are strongly inhibited by allium root exudates, resulting in reduced yields.'},{name:'Sage',why:'Sage and onions compete for the same micronutrients and sage can inhibit onion bulb development.'}],
  },
  companionDist:'Keep 12" from sage; 18" from peas/beans.',
  animals:'Predatory midges eat thrips larvae.',
  diseases:[{name:'Botrytis Leaf Blight',desc:'White mold on leaves; copper fungicide.'},{name:'Fusarium Basal Rot',desc:'Pink-red rot at base; certified seed, rotation.'}],
  pests:'Thrips — insecticidal soap; onion maggot — row covers.',
  rotation:{family:'Alliaceae',cycle:'3–4 year rotation away from all alliums'},
  stages:[{label:'Seed',title:'Seedling',desc:'6–10 weeks indoor start.'},{label:'Bulb',title:'Bulb initiation',desc:'Triggered by day length; Zone 6 uses long-day varieties.'},{label:'Size',title:'Bulb sizing',desc:'Bulb swells rapidly.'},{label:'Cure',title:'Harvest & cure',desc:'Cure 3–4 weeks at 80–90°F.'}],
  special:'Zone 6: use long-day varieties (Redwing, Mars, Burgundy).',
  nutrition:{calories:40,protein:1.1,carbs:9.3,fat:0.1,fiber:1.7,vitC:7,notes:'Red pigment is quercetin, a powerful antioxidant.'},
  size:{weight:'100–200g per bulb',dimensions:'2–3.5" diameter',notes:'Cure thoroughly for storage up to 6 months.'},
});
