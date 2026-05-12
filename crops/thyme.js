import Crop from '../Crop.js';
export default new Crop({
  id:'thyme',name:'Thyme',cat:'Herb',emoji:'🌿',
  planting:{zone6:'Transplant Apr 15–May 15; hardy perennial in Zone 6',depth:'Same depth as pot; seeds surface-sow',spacing:'9–12" apart',ph:'6.0–8.0',sun:'Full sun'},
  water:{in:'0.5–1',note:'Excellent drainage; root rot common in wet soil'},
  fertilizer:{type:'Dilute balanced or compost',amount:'Minimal; prefers lean soil',freq:'Once spring with compost; rarely needs more'},
  companions:{
    good:[{name:'Tomatoes',why:'Thyme repels tomato hornworm moths with its aromatic thymol compounds.'},{name:'Potatoes',why:'Thyme deters potato beetles and whitefly that spreads viral diseases.'},{name:'Strawberries',why:'Thyme repels worms and slugs that damage strawberry fruit.'}],
    bad:[{name:'Mint',why:'Mint aggressively spreads by underground runners and overwhelms thyme, competing for everything.'},{name:'Fennel',why:"Fennel's allelopathic chemicals inhibit thyme and most other herbs."}],
  },
  companionDist:'Keep 12" from fennel; contain mint in pots.',
  animals:'Major bee and butterfly attractor when in bloom.',
  diseases:[{name:'Root Rot',desc:'Overwatering or clay soil; ensure excellent drainage.'}],
  pests:'Very pest-resistant. Occasional aphids/spider mites — neem oil.',
  rotation:{family:'Lamiaceae (perennial)',cycle:'Hardy perennial Zone 6; divide every 2–3 years'},
  stages:[{label:'Germ',title:'Germination',desc:'14–28 days from seed; transplants recommended.'},{label:'Est',title:'Establishment',desc:'Slow first year; hardy by end of season.'},{label:'Harv',title:'Harvest',desc:'Tips before flowering; cut back 1/3 max.'},{label:'Renew',title:'Renewal',desc:'Divide or cut back hard every 2–3 years.'}],
  special:'English thyme is classic culinary. Hardy in Zone 6 — returns each year. Allow to bloom for bees.',
  nutrition:{calories:101,protein:5.6,carbs:24,fat:1.7,fiber:14,vitC:160,notes:'Rich in thymol and carvacrol — powerful antimicrobial compounds. Used in small culinary amounts.'},
  size:{weight:'N/A — culinary herb',dimensions:'Plant: 6–12" tall, spreading',notes:'Harvest stem tips 2–3 inches long.'},
});
