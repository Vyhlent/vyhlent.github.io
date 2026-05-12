import Crop from '../Crop.js';
export default new Crop({
  id:'corn',name:'Corn',cat:'Grain',emoji:'🌽',
  planting:{zone6:'Direct sow May 15–Jun 15 (soil 60°F+)',depth:'1–1.5" deep',spacing:'9–12" apart, rows 30–36"; plant in blocks',ph:'5.8–6.8',sun:'Full sun'},
  water:{in:'1–2',note:'Critical during tasseling and silking'},
  fertilizer:{type:'High nitrogen 46-0-0 (urea)',amount:'1.5 lbs per 100 sq ft',freq:'At planting; knee-high side-dress; again at tasseling'},
  companions:{
    good:[{name:'Beans',why:'Beans fix nitrogen which corn exhausts from soil — the Three Sisters system.'},{name:'Squash',why:"Squash's large leaves shade soil between corn rows, reducing weeds and retaining moisture."},{name:'Cucumbers',why:'Cucumbers can use corn stalks as natural trellises.'}],
    bad:[{name:'Tomatoes',why:'Corn earworm attacks both crops; growing them together creates a massive pest reservoir.'},{name:'Celery',why:'Celery releases compounds that stunt corn root development.'}],
  },
  companionDist:'Plant in blocks for pollination. Keep 3 ft from tomatoes.',
  animals:'Trichogramma wasps parasitize earworm eggs; birds eat worms.',
  diseases:[{name:"Stewart's Wilt",desc:'Yellow streaks, stunted plants; spread by flea beetles; resistant varieties.'},{name:'Common Rust',desc:'Reddish-brown pustules; cosmetic in most cases; resistant varieties.'}],
  pests:'Earworm — Bt or oil dropper on silks; corn borer — Bt spray.',
  rotation:{family:'Poaceae',cycle:'2–3 year rotation; follow with legumes to replenish nitrogen'},
  stages:[{label:'Germ',title:'Germination',desc:'Needs warm soil — cold causes poor emergence.'},{label:'V-stg',title:'Vegetative',desc:'Side-dress nitrogen at V6 (knee-high).'},{label:'Silk',title:'Tasseling & silking',desc:'Plant in blocks for wind pollination.'},{label:'Harv',title:'Harvest',desc:'Milk stage: 18–24 days after silking. 1–2 day window!'}],
  special:'Plant in blocks of 4+ rows for wind pollination. Succession plant every 2 weeks.',
  nutrition:{calories:86,protein:3.2,carbs:19,fat:1.2,fiber:2.7,vitC:7,notes:'Provides B vitamins, magnesium, and phosphorus. Best eaten within hours of harvest.'},
  size:{weight:'200–300g per ear',dimensions:'7–9" long ear, 1.5–2" diameter',notes:'Pierce a kernel — milky white sap = perfect. 1–2 day harvest window at peak.'},
});
