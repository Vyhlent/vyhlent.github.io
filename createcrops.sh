cat > ../crops/raspberries.js << 'ENDOFFILE'
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
ENDOFFILE
cat > ../crops/cantaloupe.js << 'ENDOFFILE'
import Crop from '../Crop.js';
export default new Crop({
  id:'cantaloupe',name:'Cantaloupe',cat:'Vine Fruit',emoji:'🍈',
  planting:{zone6:'Start indoors Apr 15–May 1; transplant May 15–30',depth:'1" direct sow; transplant at pot depth',spacing:'2–3 ft per hill, hills 4–6 ft apart',ph:'6.0–6.5',sun:'Full sun (8+ hrs)'},
  water:{in:'1–2',note:'Taper off near ripeness to concentrate sugar'},
  fertilizer:{type:'5-10-10; switch to 0-0-60 at vine run',amount:'2 lbs per 100 sq ft',freq:'At transplant; vine run; first fruit set'},
  companions:{
    good:[{name:'Corn',why:'Tall corn acts as a windbreak for sprawling cantaloupe vines.'},{name:'Marigolds',why:'Marigolds deter cucumber beetles, the chief pest and virus vector for cantaloupe.'},{name:'Nasturtiums',why:'Nasturtiums act as trap crops for aphids, keeping them off the melon vines.'}],
    bad:[{name:'Potatoes',why:'Potatoes compete heavily for potassium and share fungal diseases that affect cantaloupe.'},{name:'Cucumbers',why:'Cucumbers share powdery mildew and cucumber beetle infestations, amplifying pressure on both crops.'}],
  },
  companionDist:'Keep 3 ft from cucumbers; 4+ ft from potatoes.',
  animals:'Bees essential for pollination; ground beetles eat larvae.',
  diseases:[{name:'Powdery Mildew',desc:'White coating on leaves; neem oil or potassium bicarbonate.'},{name:'Gummy Stem Blight',desc:'Water-soaked lesions with gummy exudate; chlorothalonil; rotate crops.'}],
  pests:'Cucumber beetles — row covers until flowering; aphids — neem.',
  rotation:{family:'Cucurbitaceae',cycle:'3–4 year rotation away from all cucurbits'},
  stages:[{label:'Germ',title:'Germination',desc:'5–10 days at 70–90°F.'},{label:'Vine',title:'Vine development',desc:'Rapid growth; train or let sprawl.'},{label:'Flwr',title:'Flowering',desc:'Male then female flowers; bees critical.'},{label:'Ripe',title:'Maturation',desc:'Slip test: slight pressure detaches at stem.'}],
  special:'Use black plastic mulch. Place board under fruits.',
  nutrition:{calories:34,protein:0.8,carbs:8.2,fat:0.2,fiber:0.9,vitC:36,notes:'Excellent source of beta-carotene (vitamin A) and potassium.'},
  size:{weight:'1–3 kg per fruit',dimensions:'5–7" diameter',notes:'Full-slip harvest: netting on rind, sweet aroma.'},
});
ENDOFFILE
cat > ../crops/garlic.js << 'ENDOFFILE'
import Crop from '../Crop.js';
export default new Crop({
  id:'garlic',name:'Garlic',cat:'Allium',emoji:'🧄',
  planting:{zone6:'Plant Oct 1–Nov 15 for summer harvest',depth:'2" deep, pointed end up',spacing:'6" apart, rows 12"',ph:'6.0–7.0',sun:'Full sun'},
  water:{in:'1',note:'Stop 2–4 weeks before harvest'},
  fertilizer:{type:'Blood meal 12-0-0 or fish emulsion',amount:'1 cup blood meal per 10 sq ft',freq:'Fall at planting; early spring; stop May'},
  companions:{
    good:[{name:'Tomatoes',why:"Garlic's sulfur compounds deter spider mites and aphids which heavily infest tomato plants."},{name:'Carrots',why:'Garlic repels carrot fly and other root pests that damage carrot crops.'},{name:'Spinach',why:'Garlic deters aphids and leaf miners that feed on spinach leaves.'}],
    bad:[{name:'Peas',why:"Garlic's allelopathic compounds inhibit the germination and root development of peas and legumes."},{name:'Beans',why:'Like peas, beans are significantly stunted by the chemical compounds garlic releases into the soil.'},{name:'Asparagus',why:'Garlic stunts asparagus growth and competes for the same deep soil nutrients.'}],
  },
  companionDist:'18"+ from peas and beans; 12" from asparagus.',
  animals:'Garlic naturally deters many pests throughout the garden.',
  diseases:[{name:'White Rot',desc:'White mold at bulb base; no cure — remove plants; avoid area 20 years.'},{name:'Botrytis Neck Rot',desc:'Gray mold on neck post-harvest; cure 3–4 weeks in dry airy space.'}],
  pests:'Thrips — insecticidal soap; onion maggot — row covers.',
  rotation:{family:'Alliaceae',cycle:'3–4 year rotation; do not follow other alliums'},
  stages:[{label:'Root',title:'Root establishment',desc:'Fall: roots grow, shoot emerges. Mulch after ground freezes.'},{label:'Grn',title:'Spring green',desc:'Shoots emerge; green garlic harvestable.'},{label:'Scape',title:'Scape formation',desc:'Remove curling scapes to push energy to bulb.'},{label:'Harv',title:'Harvest',desc:'Lower 1/3 of leaves brown (Jun–Jul). Cure 3–4 weeks.'}],
  special:'Plant hardneck varieties for best Zone 6 flavor. Plant Oct for Jun–Jul harvest.',
  nutrition:{calories:149,protein:6.4,carbs:33,fat:0.5,fiber:2.1,vitC:31,notes:'Rich in allicin, manganese, and vitamin B6. Powerful antimicrobial and cardiovascular benefits.'},
  size:{weight:'30–60g per bulb',dimensions:'1.5–2.5" diameter bulb',notes:'Each clove weighs 4–8g.'},
});
ENDOFFILE
cat > ../crops/red_onions.js << 'ENDOFFILE'
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
ENDOFFILE
cat > ../crops/asparagus.js << 'ENDOFFILE'
import Crop from '../Crop.js';
export default new Crop({
  id:'asparagus',name:'Asparagus',cat:'Perennial Veg',emoji:'🌱',
  planting:{zone6:'Plant crowns Apr 1–30 (soil 40°F+)',depth:'6–8" deep in trench; fill in as shoots grow',spacing:'12–18" apart, rows 4–5 ft',ph:'6.5–7.5',sun:'Full sun'},
  water:{in:'1–2',note:'Consistent moisture first 2 years; critical during fern phase'},
  fertilizer:{type:'Balanced 10-10-10',amount:'2 lbs per 100 sq ft',freq:'Early spring; again after harvest ends'},
  companions:{
    good:[{name:'Tomatoes',why:'Tomatoes repel asparagus beetle while asparagus deters root nematodes that attack tomatoes.'},{name:'Basil',why:'Basil repels asparagus beetle and its oils confuse insects seeking to lay eggs in asparagus crowns.'},{name:'Marigolds',why:'Marigolds suppress nematodes in the deep soil layers where asparagus crowns grow.'}],
    bad:[{name:'Garlic',why:'Garlic stunts asparagus growth and competes directly for deep soil nutrients needed by the perennial crown.'},{name:'Onions',why:'Onions release allelopathic compounds that stunt the slow-developing asparagus crown.'},{name:'Potatoes',why:'Potato harvest physically disrupts asparagus root systems, and both share fungal diseases.'}],
  },
  companionDist:'Keep 24" from garlic/onions; 3 ft from potatoes.',
  animals:'Ladybugs eat beetle eggs; toads eat many pests.',
  diseases:[{name:'Asparagus Rust',desc:'Orange-red pustules on ferns; copper fungicide; Jersey series varieties.'},{name:'Crown Rot',desc:'Brown-orange crown, plant collapse; improve drainage.'}],
  pests:'Asparagus beetle — hand pick; pyrethrin if severe.',
  rotation:{family:'Asparagaceae (perennial)',cycle:'Permanent bed — productive 15–30 years'},
  stages:[{label:'Yr1',title:'Year 1 — no harvest',desc:'Do not harvest at all; build root reserves.'},{label:'Yr2',title:'Year 2 — 2 weeks',desc:'Harvest 2 weeks only.'},{label:'Yr3',title:'Year 3+ — full',desc:'Harvest 4–6 weeks; stop when spears thin.'},{label:'Fern',title:'Fern phase',desc:'Let ferns grow all season after harvest.'}],
  special:'First harvest year 3. Jersey Giant and Jersey Knight are excellent Zone 6 varieties.',
  nutrition:{calories:20,protein:2.2,carbs:3.9,fat:0.1,fiber:2.1,vitC:5,notes:'Outstanding source of folate, vitamin K, and prebiotic inulin fiber.'},
  size:{weight:'15–25g per spear',dimensions:'7–9" long spear, 0.5–0.75" diameter',notes:'Harvest at 6–8 inches. Pencil-thin spears signal the bed needs rest.'},
});
ENDOFFILE
cat > ../crops/carrots.js << 'ENDOFFILE'
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
ENDOFFILE
cat > ../crops/marigolds.js << 'ENDOFFILE'
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
ENDOFFILE
cat > ../crops/tomatoes.js << 'ENDOFFILE'
import Crop from '../Crop.js';
export default new Crop({
  id:'tomatoes',name:'Tomatoes',cat:'Fruiting Veg',emoji:'🍅',
  planting:{zone6:'Start indoors Mar 15–Apr 15; transplant May 15–Jun 1',depth:'Bury stem deep — up to 2/3 of plant',spacing:'Determinate: 2 ft; indeterminate: 3 ft; rows 4 ft',ph:'6.0–6.8',sun:'Full sun (8+ hrs)'},
  water:{in:'1–2',note:'Deep consistent watering prevents blossom end rot; water at base'},
  fertilizer:{type:'8-32-16 at transplant; balanced once fruiting',amount:'2 lbs per 100 sq ft; ½ cup per plant',freq:'Pre-plant; 6 weeks after transplant; at first fruit set'},
  companions:{
    good:[{name:'Basil',why:'Basil repels thrips, aphids, and whiteflies from tomatoes and may improve fruit flavor.'},{name:'Marigolds',why:'Marigolds suppress root nematodes and deter whiteflies and aphids that damage tomato foliage.'},{name:'Carrots',why:'Carrots loosen soil around tomato roots and attract parasitic wasps.'}],
    bad:[{name:'Potatoes',why:'Tomatoes and potatoes share late blight (Phytophthora infestans) which spreads rapidly between them.'},{name:'Fennel',why:'Fennel releases allelopathic chemicals that stunt tomato growth.'},{name:'Corn',why:'Corn earworm attacks both crops; planting together concentrates this pest.'}],
  },
  companionDist:'Keep 3–4 ft from potatoes; 20 ft from blackberries/raspberries; 2 ft from corn.',
  animals:'Braconid wasps parasitize hornworms; lacewings eat aphids.',
  diseases:[{name:'Early Blight',desc:'Concentric-ring spots on lower leaves; copper fungicide; mulch.'},{name:'Late Blight',desc:'Gray-green patches, white mold; destroy plants; chlorothalonil.'},{name:'Septoria Leaf Spot',desc:'Small circular spots; same prevention as early blight.'}],
  pests:'Hornworm — hand pick; aphids — neem; cutworms — stem collar.',
  rotation:{family:'Solanaceae',cycle:'3–4 year rotation; not after potatoes, peppers, eggplant'},
  stages:[{label:'Seed',title:'Seedling (indoors)',desc:'6–8 weeks before transplant; 14–16 hours light.'},{label:'Trans',title:'Transplant',desc:'After last frost; bury deeply; harden off 7–10 days.'},{label:'Flwr',title:'Flowering',desc:'First flowers 6–8 weeks after transplant.'},{label:'Harv',title:'Harvest',desc:'~70–80 days after transplant.'}],
  special:'Choose <80 day maturity varieties for Zone 6. Sucker indeterminate varieties.',
  nutrition:{calories:18,protein:0.9,carbs:3.9,fat:0.2,fiber:1.2,vitC:14,notes:'Rich in lycopene — cooking increases lycopene bioavailability significantly.'},
  size:{weight:'100–250g (slicing); 10–30g (cherry)',dimensions:'2–4" diameter (slicing); 1–1.5" (cherry)',notes:'Determinate varieties produce all at once; indeterminate produce until frost.'},
});
ENDOFFILE
cat > ../crops/potatoes.js << 'ENDOFFILE'
import Crop from '../Crop.js';
export default new Crop({
  id:'potatoes',name:'Potatoes',cat:'Root Vegetable',emoji:'🥔',
  planting:{zone6:'Plant seed potatoes Apr 15–May 15 (soil 45°F+)',depth:'3–4" deep; hill up as plants grow',spacing:'12" apart, rows 30–36"',ph:'4.8–5.5',sun:'Full sun'},
  water:{in:'1–2',note:'Critical during tuber set; reduce after tops die back'},
  fertilizer:{type:'Low-nitrogen 5-10-10',amount:'3 lbs per 100 sq ft',freq:'Pre-plant; low-N when hilling; avoid N after flowering'},
  companions:{
    good:[{name:'Beans',why:'Beans fix nitrogen and the dense canopy repels Colorado potato beetle.'},{name:'Marigolds',why:'Marigolds repel nematodes and Colorado potato beetle with their root exudates and volatile oils.'},{name:'Corn',why:'Corn and potatoes occupy different root zones and coexist well with minimal resource competition.'}],
    bad:[{name:'Tomatoes',why:'Tomatoes and potatoes share late blight (Phytophthora infestans) which spreads rapidly between them.'},{name:'Cucumbers',why:'Cucumbers share Phytophthora fungal diseases and compete for potassium that both crops need.'},{name:'Raspberries',why:'Raspberry roots harbor Verticillium wilt which devastates potatoes.'}],
  },
  companionDist:'Keep 3+ ft from tomatoes/peppers/eggplant; 3 ft from cucumbers.',
  animals:'Ground beetles eat grubs; row covers exclude flies.',
  diseases:[{name:'Late Blight',desc:'Dark water-soaked patches; destroy all infected tissue; copper fungicide.'},{name:'Common Scab',desc:'Rough corky patches; lower soil pH to 4.8–5.2; certified seed.'}],
  pests:'Colorado potato beetle — hand pick eggs/adults; spinosad spray.',
  rotation:{family:'Solanaceae',cycle:'3–4 year rotation; not after tomatoes, peppers, eggplant'},
  stages:[{label:'Sprt',title:'Sprouting',desc:'Pre-sprout (chit) 2–4 weeks before planting.'},{label:'Veg',title:'Vegetative',desc:'Hill soil around stems every 2–3 weeks.'},{label:'Tuber',title:'Tuber set',desc:'At flowering; consistent water critical.'},{label:'Harv',title:'Harvest',desc:'Mature: 2–3 weeks after tops die; cure 2 weeks.'}],
  special:'Never plant where Solanaceae grew in 3 years. Green flesh is toxic.',
  nutrition:{calories:77,protein:2,carbs:17,fat:0.1,fiber:2.2,vitC:20,notes:'Good source of potassium, vitamin B6, and vitamin C. Most nutrients are just beneath the skin.'},
  size:{weight:'100–300g per tuber',dimensions:'2–4" diameter',notes:'New potatoes: golf ball size. Mature: after tops die back.'},
});
ENDOFFILE
cat > ../crops/cucumbers.js << 'ENDOFFILE'
import Crop from '../Crop.js';
export default new Crop({
  id:'cucumbers',name:'Cucumbers',cat:'Vine Vegetable',emoji:'🥒',
  planting:{zone6:'Start May 1–10; transplant or sow May 25–Jun 10 (soil 65°F+)',depth:'Direct sow 0.5–1"; transplant at pot depth',spacing:'Vining: 12" on trellis; bush: 18–24"',ph:'6.0–7.0',sun:'Full sun'},
  water:{in:'1–2',note:'Never let soil dry — causes bitter fruit'},
  fertilizer:{type:'Balanced 10-10-10',amount:'1 lb per 100 sq ft',freq:'At planting; every 3–4 weeks; reduce N after fruiting'},
  companions:{
    good:[{name:'Corn',why:'Corn provides physical support for vining cucumbers and creates a helpful microclimate.'},{name:'Beans',why:'Beans fix nitrogen that cucumber vines consume heavily during fruit production.'},{name:'Marigolds',why:'Marigolds deter cucumber beetles, the primary vector of bacterial wilt that devastates cucumbers.'}],
    bad:[{name:'Potatoes',why:'Potatoes and cucumbers share Phytophthora blight, amplifying fungal disease pressure.'},{name:'Sage',why:'Sage releases volatile compounds that inhibit cucumber vine development.'},{name:'Melons',why:'Melons share powdery mildew and cucumber beetle infestations, concentrating problems.'}],
  },
  companionDist:'Keep 3 ft from potatoes; 3 ft from melons; 12" from aromatic herbs.',
  animals:'Bees critical for pollination; ground beetles eat larvae.',
  diseases:[{name:'Cucumber Mosaic Virus',desc:'Mottled leaves, stunted plants; spread by aphids; remove infected plants.'},{name:'Angular Leaf Spot',desc:'Angular spots along veins; copper bactericide; avoid overhead watering.'}],
  pests:'Cucumber beetle — row covers until flowering; pickle worm — Bt.',
  rotation:{family:'Cucurbitaceae',cycle:'3–4 year rotation away from squash, pumpkins, melons'},
  stages:[{label:'Germ',title:'Germination',desc:'5–10 days at 70°F+.'},{label:'Vine',title:'Vine growth',desc:'Train up trellis early.'},{label:'Flwr',title:'Flowering',desc:'Bees essential; male flowers precede female.'},{label:'Harv',title:'Harvest',desc:'Every 1–2 days — overripe stops production.'}],
  special:'Trellis strongly recommended. Bitter cucumbers from irregular water or temps below 55°F.',
  nutrition:{calories:15,protein:0.7,carbs:3.6,fat:0.1,fiber:0.5,vitC:3,notes:'96% water — good source of vitamin K and silica for skin and connective tissue.'},
  size:{weight:'200–400g per cucumber',dimensions:'Slicing: 6–8" long; pickling: 3–4"',notes:'Harvest before yellowing for peak flavor.'},
});
ENDOFFILE
cat > ../crops/corn.js << 'ENDOFFILE'
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
ENDOFFILE
cat > ../crops/kale.js << 'ENDOFFILE'
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
ENDOFFILE
cat > ../crops/green_beans.js << 'ENDOFFILE'
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
ENDOFFILE
cat > ../crops/peppers.js << 'ENDOFFILE'
import Crop from '../Crop.js';
export default new Crop({
  id:'peppers',name:'Peppers (Green/Banana)',cat:'Fruiting Veg',emoji:'🫑',
  planting:{zone6:'Start indoors Feb 15–Mar 15; transplant Jun 1–10 (soil 65°F+)',depth:'Same as pot; slightly deeper OK',spacing:'18" apart, rows 24"',ph:'6.0–6.8',sun:'Full sun (8+ hrs)'},
  water:{in:'1–2',note:'Blossom drop in extreme heat or cold; mulch to stabilize soil temp'},
  fertilizer:{type:'5-10-10 starter; 8-8-8 once fruiting',amount:'1 lb per 100 sq ft',freq:'At transplant; every 3–4 weeks balanced; avoid excess N'},
  companions:{
    good:[{name:'Basil',why:'Basil repels thrips and aphids from peppers; both love the same warm, sunny conditions.'},{name:'Tomatoes',why:'Tomatoes and peppers have compatible pest profiles and can share beneficial insect populations.'},{name:'Marigolds',why:'Marigolds repel pepper weevil and thrips while attracting beneficial predatory insects.'}],
    bad:[{name:'Fennel',why:"Fennel's allelopathic chemicals inhibit pepper root development and reduce fruit set."},{name:'Blackberries',why:'Blackberries and peppers share Verticillium wilt fungus which persists in soil and is lethal to both.'},{name:'Kohlrabi',why:'Kohlrabi is allelopathically incompatible with peppers, competing for the same minerals.'}],
  },
  companionDist:'Keep 20+ ft from blackberries; 12" from fennel.',
  animals:'Braconid wasps; lacewings eat aphids; bees pollinate.',
  diseases:[{name:'Anthracnose',desc:'Sunken spots on ripe fruit; copper fungicide; rotate.'},{name:'Phytophthora Blight',desc:'Wilting, brown lesions; improve drainage; destroy infected plants.'}],
  pests:'Aphids — soap; pepper maggot — sticky traps; corn borer — Bt.',
  rotation:{family:'Solanaceae',cycle:'3–4 year rotation; not after tomatoes, potatoes, eggplant'},
  stages:[{label:'Seed',title:'Seedling (indoors)',desc:'8–12 weeks indoors; earliest Zone 6 indoor start.'},{label:'Trans',title:'Transplant',desc:'Harden 10–14 days; nights above 55°F consistently.'},{label:'Flwr',title:'Flowering',desc:'Self-pollinating; shake gently in morning.'},{label:'Harv',title:'Harvest',desc:'Green at any firm size; leave for color change.'}],
  special:'Zone 6: use black plastic mulch for heat. Banana peppers are very productive.',
  nutrition:{calories:20,protein:0.9,carbs:4.6,fat:0.2,fiber:1.7,vitC:80,notes:'Green peppers have 3x the vitamin C of oranges by weight.'},
  size:{weight:'100–200g per pepper',dimensions:'Bell: 3–4" wide; banana: 4–6" long',notes:'Leaving on plant longer = sweeter and more nutritious.'},
});
ENDOFFILE
cat > ../crops/rosemary.js << 'ENDOFFILE'
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
ENDOFFILE
cat > ../crops/thyme.js << 'ENDOFFILE'
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
ENDOFFILE
cat > ../crops/basil.js << 'ENDOFFILE'
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
ENDOFFILE
echo "All crop files created"
