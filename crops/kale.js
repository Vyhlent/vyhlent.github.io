import Crop from '../Crop.js';
export default new Crop({
  id:'kale',name:'Kale',cat:'Leafy Green',emoji:'🥬',
  planting:{zone6:'Direct sow Mar 15–May 1 (spring) or Jul 15–Aug 15 (fall)',depth:'0.5"',spacing:'12–18" apart, rows 18–24"',ph:'6.0–7.5',sun:'Full sun / part shade'},
  water:{in:'1–1.5',note:'Consistent moisture; slight drought-stress in fall intensifies flavor'},
  fertilizer:{type:'High-nitrogen 10-10-10 or fish emulsion',amount:'2 lbs per 100 sq ft',freq:'At planting; side-dress nitrogen monthly'},
  companions:{
    good:[{name:'Beets',why:"Beets and kale are compatible root/leaf crop partners that don't compete for resources."},{name:'Marigolds',why:'Marigolds deter cabbage moths and whiteflies that devastate kale leaves.'},{name:'Nasturtiums',why:'Nasturtiums act as trap crops for aphids, drawing them away from kale foliage.'}],
    bad:[{name:'Tomatoes',why:'Tomatoes and brassicas like kale compete for calcium and magnesium, causing deficiencies in both.'},{name:'Beans',why:"Beans are inhibited by kale's glucosinolate root exudates, reducing bean yield."},{name:'Strawberries',why:'Strawberries are stunted near brassicas; they share fungal diseases.'}],
  },
  companionDist:'Keep 18" from beans; 12" from tomatoes/strawberries.',
  animals:'Parasitic wasps; ground beetles; spiders eat insects.',
  diseases:[{name:'Black Rot',desc:'Yellow V-shaped lesions, black veins; copper bactericide; rotate.'},{name:'Downy Mildew',desc:'Yellow spots above, gray fuzz below; copper spray; improve air flow.'}],
  pests:'Cabbage worms — Bt; aphids — neem; flea beetles — row covers.',
  rotation:{family:'Brassicaceae',cycle:'3–4 year rotation; not after broccoli, cabbage, cauliflower'},
  stages:[{label:'Germ',title:'Germination',desc:'5–8 days in cool soil.'},{label:'Juv',title:'Juvenile',desc:'Thin to 12–18"; thinnings are edible microgreens.'},{label:'Harv',title:'Harvest',desc:'Harvest outer leaves; central tip keeps producing.'},{label:'Winter',title:'Overwintering',desc:'Fall kale sweetens with frost; overwinters in Zone 6.'}],
  special:'Lacinato, Red Russian, Winterbor are excellent Zone 6 varieties. Sweeter after frost.',
  nutrition:{calories:35,protein:2.9,carbs:4.4,fat:1.5,fiber:4.1,vitC:93,notes:'One of the most nutrient-dense foods. Exceptional vitamin K, A, C, and calcium. Anti-cancer glucosinolates.'},
  size:{weight:'200–400g per bunch',dimensions:'Leaves 8–16" long',notes:'Harvest at 8–10 inches for best flavor.'},
});
