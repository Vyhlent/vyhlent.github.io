import Crop from '../Crop.js';
export default new Crop({
  id:'raspberries',name:'Raspberries',cat:'Berry',emoji:'🍓',
  planting:{zone6:'Plant Mar–Apr (summer) or Apr–May (fall-bearing)',depth:'Crown at soil level, roots 2–4" deep',spacing:'2–3 ft apart, rows 6–8 ft',ph:'5.5–6.5',sun:'Full sun'},
  water:{in:'1–1.5',note:'Consistent moisture critical during cane and fruit development'},
  fertilizer:{type:'10-10-10 or ammonium nitrate',amount:'¼ lb per plant',freq:'Spring before growth; avoid late-season N'},
  companions:{
    good:[{name:'Garlic',why:'Garlic repels raspberry beetle and aphids that spread mosaic virus between canes.'},{name:'Marigolds',why:'Marigolds attract beneficial insects that prey on raspberry fruitworm larvae.'},{name:'Chives',why:'Chives deter aphids, the primary vector of raspberry mosaic virus.'}],
    bad:[{name:'Tomatoes',why:'Tomatoes share late blight and Verticillium wilt with raspberries, creating a disease reservoir.'},{name:'Potatoes',why:'Potatoes carry late blight and share fungal diseases that overwinter and attack raspberry roots.'}],
  },
  companionDist:'20 ft minimum from tomatoes/potatoes.',
  animals:'Ground beetles eat larvae; parasitic wasps; bees essential.',
  diseases:[{name:'Raspberry Mosaic Virus',desc:'Mottled distorted leaves; spread by aphids. Remove infected plants.'},{name:'Root Rot',desc:'Wilting, orange crown; improve drainage; resistant varieties.'}],
  pests:'Aphids — neem oil; cane borers — prune wilted tips; fruitworm — hand pick.',
  rotation:{family:'Rosaceae (perennial)',cycle:'Perennial; renovate every 8–10 years in new location'},
  stages:[{label:'Dorm',title:'Dormancy',desc:'Winter. Roots active underground.'},{label:'Prim',title:'Primocane',desc:'New canes grow; no fruit.'},{label:'Flor',title:'Floricane',desc:'Year 2 canes flower and fruit.'},{label:'Harv',title:'Harvest',desc:'Jun–Jul (summer) or Aug–Oct (fall).'}],
  special:'Summer-bearing: prune floricanes after harvest. Everbearing: mow all canes in early spring.',
  nutrition:{calories:52,protein:1.2,carbs:11.9,fat:0.7,fiber:6.5,vitC:26,notes:'High in ellagic acid, fiber, manganese, and vitamin C.'},
  size:{weight:'2–4g per berry',dimensions:'0.5–0.75" diameter',notes:'Hollow when picked; releases cleanly from core when ripe.'},
});
