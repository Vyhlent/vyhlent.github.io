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
  nutrition:{calories:0,protein:0,carbs:0,fat:0,fiber:0,vitC:0,notes:'Ornamental companion plant — not a food crop. Edible flowers are mildly bitter and peppery.'},
  size:{weight:'N/A — ornamental',dimensions:'French: 6–12" tall; African: 18–36" tall',notes:'Plant densely between vegetables for maximum pest suppression.'},
});
