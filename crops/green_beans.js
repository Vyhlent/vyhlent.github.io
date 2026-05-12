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
  nutrition:{calories:31,protein:1.8,carbs:7,fat:0.1,fiber:2.7,vitC:12,notes:'Good source of folate, vitamin K, and silicon. Very low calorie with excellent digestive fiber.'},
  size:{weight:'10–15g per pod',dimensions:'4–6" long pod',notes:'Harvest at 4–6 inches before seeds bulge.'},
});
