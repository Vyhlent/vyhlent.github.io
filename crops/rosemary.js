import Crop from '../Crop.js';
export default new Crop({
  id:'rosemary',name:'Rosemary',cat:'Herb',emoji:'🌿',
  planting:{zone6:'Transplant May 15–Jun 1; annual in Zone 6 or overwinter in container',depth:'Same depth as pot',spacing:'18–24" apart',ph:'6.0–7.0',sun:'Full sun'},
  water:{in:'0.5–1',note:'Excellent drainage essential; allow to dry between waterings'},
  fertilizer:{type:'Low-N 5-10-10 or fish emulsion',amount:'Light application only',freq:'Once spring; once midsummer'},
  companions:{
    good:[{name:'Beans',why:'Rosemary repels Mexican bean beetles and bean weevils with its aromatic camphor compounds.'},{name:'Carrots',why:"Rosemary's strong aroma masks carrot scent that attracts carrot fly."},{name:'Marigolds',why:'Rosemary and marigolds together create a multi-sensory pest deterrent zone.'}],
    bad:[{name:'Cucumbers',why:"Rosemary's volatile aromatic oils inhibit cucumber vine growth and reduce fruit set."},{name:'Pumpkins',why:"Like cucumbers, pumpkins are inhibited by rosemary's allelopathic compounds."}],
  },
  companionDist:'Keep 12" from cucumbers and pumpkins.',
  animals:'Excellent pollinator attractor; volatile oils repel many vegetable pests.',
  diseases:[{name:'Root Rot',desc:'Yellowing, wilting; almost always overwatering; improve drainage immediately.'}],
  pests:'Generally pest-resistant. Spittlebugs — water spray; aphids — neem.',
  rotation:{family:'Lamiaceae (perennial/annual in Z6)',cycle:'Annual in Zone 6 unless protected; rotate position each year'},
  stages:[{label:'Est',title:'Establishment',desc:'Water regularly until established (4–6 weeks).'},{label:'Grow',title:'Growth',desc:'Pinch tips for bushing.'},{label:'Harv',title:'Harvest',desc:'Harvest tips continuously.'},{label:'Frost',title:'Pre-frost',desc:'Bring inside or mulch heavily before first frost.'}],
  special:'Zone 6: Arp or Hill Hardy varieties survive outdoors with heavy mulch. Otherwise grow in container.',
  nutrition:{calories:131,protein:3.3,carbs:21,fat:5.9,fiber:14,vitC:22,notes:'Used in small culinary amounts. High in rosmarinic acid and carnosic acid. Per 100g figures are for dried herb.'},
  size:{weight:'N/A — culinary herb',dimensions:'Plant: 18–36" tall and wide',notes:'Harvest 2–3 inch stem tips.'},
});
