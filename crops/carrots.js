import Crop from '../Crop.js';
export default new Crop({
  id:'carrots',name:'Carrots',cat:'Root Vegetable',emoji:'🥕',
  planting:{zone6:'Direct sow Apr 1–May 15 (spring) or Jul 15–Aug 15 (fall)',depth:'0.25" deep; thin after sprouting',spacing:'2–3" apart, rows 12"',ph:'6.0–6.8',sun:'Full sun / part shade'},
  water:{in:'1',note:'Consistent moisture prevents forking; deep watering = deep roots'},
  fertilizer:{type:'Low-nitrogen 5-15-15',amount:'2 lbs per 100 sq ft',freq:'At planting; potassium side-dress at 4 weeks'},
  companions:{
    good:[{name:'Rosemary',why:"Rosemary's aromatic oils repel carrot fly, the primary pest that burrows into carrot roots."},{name:'Onions',why:'Onions repel carrot fly while carrots repel onion fly — classic mutual benefit.'},{name:'Tomatoes',why:'Tomato foliage shades carrot beds and reduces moisture loss; both coexist well.'}],
    bad:[{name:'Dill',why:'Dill cross-pollinates with carrot flowers when allowed to bolt, and also inhibits carrot growth.'},{name:'Anise',why:'Anise inhibits carrot germination and growth through root exudate competition.'}],
  },
  companionDist:'Keep 12"+ from dill and anise.',
  animals:'Parasitic wasps; hover flies attracted by umbellifer flowers.',
  diseases:[{name:'Alternaria Leaf Blight',desc:'Dark spots with yellow halos; remove infected tops.'},{name:'Cavity Spot',desc:'Elliptical pits — calcium deficiency; improve drainage, add lime.'}],
  pests:'Carrot rust fly — row covers; wireworms — beneficial nematodes.',
  rotation:{family:'Apiaceae',cycle:'3-year rotation; avoid parsnips, parsley, celery in sequence'},
  stages:[{label:'Germ',title:'Germination',desc:'14–21 days. Keep moist; burlap over bed helps.'},{label:'Thin',title:'Thinning',desc:'Thin to 2–3" when 2" tall.'},{label:'Root',title:'Root development',desc:'Cover exposed shoulders to prevent greening.'},{label:'Harv',title:'Harvest',desc:'60–80 days. Sweeter after light frost.'}],
  special:'Prepare soil 12" deep. Fall carrots are sweeter.',
  nutrition:{calories:41,protein:0.9,carbs:9.6,fat:0.2,fiber:2.8,vitC:6,notes:'One medium carrot provides over 200% of daily vitamin A as beta-carotene.'},
  size:{weight:'60–120g per carrot',dimensions:'6–8" long, 1" diameter',notes:'Baby carrots at 3–4 inches; mature at 6–8.'},
});
