/**
 * patch_nutrition2.js — second batch of 8 crops
 * USDA FoodData Central, per 100g fresh weight (except rosemary/thyme which are fresh herb)
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const OUT = '/home/claude/output_crops2';
mkdirSync(OUT, { recursive: true });

const NUTRITION = {

  'potatoes': {
    calories: 77, water: 79.0, protein: 2.0, carbs: 17.5, fiber: 2.2, sugars: 0.8,
    fat: 0.1, saturated: 0.02, monounsat: 0.0, polyunsat: 0.04,
    vitA: 0, vitD: 0, vitE: 0.01, vitK: 1.9,
    vitC: 19.7, vitB1: 0.081, vitB2: 0.032, vitB3: 1.061, vitB5: 0.296, vitB6: 0.298,
    vitB7: 0, vitB9: 15, vitB12: 0, choline: 12.1,
    calcium: 12, phosphorus: 57, magnesium: 23, sodium: 6, potassium: 425, chloride: 0,
    iron: 0.81, zinc: 0.3, copper: 0.108, manganese: 0.153, selenium: 0.4,
    iodine: 0, chromium: 0, molybdenum: 0, fluoride: 0,
    notes: 'Excellent source of potassium (425 mg — 9% DV) and vitamin B6 (0.3 mg — 18% DV). Most nutrients concentrated just beneath the skin — eat unpeeled when possible. Green flesh contains solanine — discard.',
  },

  'raspberries': {
    calories: 52, water: 85.8, protein: 1.2, carbs: 11.9, fiber: 6.5, sugars: 4.4,
    fat: 0.7, saturated: 0.02, monounsat: 0.07, polyunsat: 0.38,
    vitA: 2, vitD: 0, vitE: 0.87, vitK: 7.8,
    vitC: 26.2, vitB1: 0.032, vitB2: 0.038, vitB3: 0.598, vitB5: 0.329, vitB6: 0.055,
    vitB7: 0, vitB9: 21, vitB12: 0, choline: 12.3,
    calcium: 25, phosphorus: 29, magnesium: 22, sodium: 1, potassium: 151, chloride: 0,
    iron: 0.69, zinc: 0.42, copper: 0.09, manganese: 0.67, selenium: 0.2,
    iodine: 0, chromium: 0, molybdenum: 0, fluoride: 0,
    notes: 'Highest fiber of common berries (6.5 g/100g). High in ellagic acid (anti-cancer), manganese (0.67 mg — 29% DV), vitamin C, and anthocyanins. Red and black raspberries differ in polyphenol profile.',
  },

  'red_onions': {
    calories: 40, water: 89.1, protein: 1.1, carbs: 9.3, fiber: 1.7, sugars: 4.2,
    fat: 0.1, saturated: 0.04, monounsat: 0.01, polyunsat: 0.02,
    vitA: 0, vitD: 0, vitE: 0.02, vitK: 0.4,
    vitC: 7.4, vitB1: 0.046, vitB2: 0.027, vitB3: 0.116, vitB5: 0.123, vitB6: 0.12,
    vitB7: 0, vitB9: 19, vitB12: 0, choline: 6.1,
    calcium: 23, phosphorus: 29, magnesium: 10, sodium: 4, potassium: 146, chloride: 0,
    iron: 0.21, zinc: 0.17, copper: 0.039, manganese: 0.129, selenium: 0.5,
    iodine: 0, chromium: 0, molybdenum: 0, fluoride: 0,
    notes: 'Red pigment is quercetin — one of the most potent dietary antioxidants, with anti-inflammatory and cardiovascular benefits. Red onions contain 2-3x more antioxidants than yellow varieties.',
  },

  'rosemary': {
    calories: 131, water: 67.8, protein: 3.3, carbs: 20.7, fiber: 14.1, sugars: 0,
    fat: 5.9, saturated: 2.84, monounsat: 1.16, polyunsat: 0.9,
    vitA: 146, vitD: 0, vitE: 3.93, vitK: 109.9,
    vitC: 21.8, vitB1: 0.036, vitB2: 0.152, vitB3: 0.912, vitB5: 0.804, vitB6: 0.336,
    vitB7: 0, vitB9: 109, vitB12: 0, choline: 0,
    calcium: 317, phosphorus: 66, magnesium: 91, sodium: 26, potassium: 668, chloride: 0,
    iron: 6.65, zinc: 0.93, copper: 0.301, manganese: 0.96, selenium: 0.1,
    iodine: 0, chromium: 0, molybdenum: 0, fluoride: 0,
    notes: 'Per 100g fresh herb. Rich in rosmarinic acid and carnosic acid (potent antioxidants). Exceptional iron (6.65 mg), calcium (317 mg), and vitamin K (110 ug). Note: typical serving is 1-2g.',
  },

  'spinach': {
    calories: 23, water: 91.4, protein: 2.9, carbs: 3.6, fiber: 2.2, sugars: 0.4,
    fat: 0.4, saturated: 0.06, monounsat: 0.01, polyunsat: 0.17,
    vitA: 469, vitD: 0, vitE: 2.03, vitK: 482.9,
    vitC: 28.1, vitB1: 0.078, vitB2: 0.189, vitB3: 0.724, vitB5: 0.065, vitB6: 0.195,
    vitB7: 0, vitB9: 194, vitB12: 0, choline: 19.3,
    calcium: 99, phosphorus: 49, magnesium: 79, sodium: 79, potassium: 558, chloride: 0,
    iron: 2.71, zinc: 0.53, copper: 0.13, manganese: 0.897, selenium: 1,
    iodine: 0, chromium: 0, molybdenum: 0, fluoride: 0,
    notes: 'Nutritional powerhouse. Highest vitamin K of common vegetables (483 ug — 403% DV). Exceptional folate (194 ug — 49% DV), vitamin A (469 ug — 52% DV), magnesium (79 mg), potassium (558 mg), and iron (2.71 mg). Oxalates reduce calcium absorption.',
  },

  'sweet-potatoes': {
    calories: 86, water: 77.3, protein: 1.6, carbs: 20.1, fiber: 3.0, sugars: 4.2,
    fat: 0.1, saturated: 0.02, monounsat: 0.0, polyunsat: 0.04,
    vitA: 961, vitD: 0, vitE: 0.26, vitK: 1.8,
    vitC: 2.4, vitB1: 0.078, vitB2: 0.061, vitB3: 0.557, vitB5: 0.8, vitB6: 0.286,
    vitB7: 0, vitB9: 11, vitB12: 0, choline: 12.3,
    calcium: 30, phosphorus: 47, magnesium: 25, sodium: 55, potassium: 337, chloride: 0,
    iron: 0.61, zinc: 0.3, copper: 0.151, manganese: 0.258, selenium: 0.6,
    iodine: 0, chromium: 0, molybdenum: 0, fluoride: 0,
    notes: 'Extraordinary vitamin A — 961 ug RAE per 100g (107% DV). One medium orange-fleshed sweet potato provides well over the entire daily vitamin A requirement. Also rich in potassium (337 mg) and manganese (0.26 mg).',
  },

  'thyme': {
    calories: 101, water: 65.1, protein: 5.6, carbs: 24.4, fiber: 14.0, sugars: 0,
    fat: 1.7, saturated: 0.47, monounsat: 0.11, polyunsat: 0.54,
    vitA: 238, vitD: 0, vitE: 0.75, vitK: 141.9,
    vitC: 160.1, vitB1: 0.048, vitB2: 0.471, vitB3: 1.824, vitB5: 0, vitB6: 0.348,
    vitB7: 0, vitB9: 45, vitB12: 0, choline: 0,
    calcium: 405, phosphorus: 106, magnesium: 160, sodium: 9, potassium: 609, chloride: 0,
    iron: 17.45, zinc: 1.81, copper: 0.555, manganese: 1.719, selenium: 0,
    iodine: 0, chromium: 0, molybdenum: 0, fluoride: 0,
    notes: 'Per 100g fresh herb. Exceptional vitamin C (160 mg), iron (17.5 mg), calcium (405 mg), magnesium (160 mg), and potassium (609 mg). Rich in thymol and carvacrol — powerful antimicrobial compounds. Note: typical serving is 1-3g.',
  },

  'tomatoes': {
    calories: 18, water: 94.5, protein: 0.9, carbs: 3.9, fiber: 1.2, sugars: 2.6,
    fat: 0.2, saturated: 0.03, monounsat: 0.03, polyunsat: 0.08,
    vitA: 42, vitD: 0, vitE: 0.54, vitK: 7.9,
    vitC: 13.7, vitB1: 0.037, vitB2: 0.019, vitB3: 0.594, vitB5: 0.088, vitB6: 0.08,
    vitB7: 0, vitB9: 15, vitB12: 0, choline: 6.7,
    calcium: 10, phosphorus: 24, magnesium: 11, sodium: 5, potassium: 237, chloride: 0,
    iron: 0.27, zinc: 0.17, copper: 0.059, manganese: 0.114, selenium: 0,
    iodine: 0, chromium: 0, molybdenum: 0, fluoride: 0,
    notes: 'Primary source of lycopene — a powerful antioxidant; cooking in oil increases lycopene bioavailability by 2-4x. Good source of potassium (237 mg) and vitamin K. Red varieties higher in lycopene; yellow/orange higher in other carotenoids.',
  },

};

function formatNutritionObj(nut, indent = '    ') {
  const lines = [];
  lines.push(`${indent}// — Macronutrients —`);
  lines.push(`${indent}calories:    ${nut.calories},`);
  lines.push(`${indent}water:       ${nut.water},   // g`);
  lines.push(`${indent}protein:     ${nut.protein},   // g`);
  lines.push(`${indent}carbs:       ${nut.carbs},   // g total`);
  lines.push(`${indent}fiber:       ${nut.fiber},   // g`);
  lines.push(`${indent}sugars:      ${nut.sugars},   // g`);
  lines.push(`${indent}fat:         ${nut.fat},   // g total`);
  lines.push(`${indent}saturated:   ${nut.saturated},   // g`);
  lines.push(`${indent}monounsat:   ${nut.monounsat},   // g`);
  lines.push(`${indent}polyunsat:   ${nut.polyunsat},   // g`);
  lines.push(`${indent}// — Fat-soluble vitamins —`);
  lines.push(`${indent}vitA:        ${nut.vitA},   // µg RAE`);
  lines.push(`${indent}vitD:        ${nut.vitD},   // µg`);
  lines.push(`${indent}vitE:        ${nut.vitE},   // mg`);
  lines.push(`${indent}vitK:        ${nut.vitK},   // µg`);
  lines.push(`${indent}// — Water-soluble vitamins —`);
  lines.push(`${indent}vitC:        ${nut.vitC},   // mg`);
  lines.push(`${indent}vitB1:       ${nut.vitB1},  // mg thiamine`);
  lines.push(`${indent}vitB2:       ${nut.vitB2},  // mg riboflavin`);
  lines.push(`${indent}vitB3:       ${nut.vitB3},  // mg niacin`);
  lines.push(`${indent}vitB5:       ${nut.vitB5},  // mg pantothenic`);
  lines.push(`${indent}vitB6:       ${nut.vitB6},  // mg pyridoxine`);
  lines.push(`${indent}vitB7:       ${nut.vitB7},  // µg biotin`);
  lines.push(`${indent}vitB9:       ${nut.vitB9},  // µg DFE folate`);
  lines.push(`${indent}vitB12:      ${nut.vitB12},  // µg cobalamin`);
  lines.push(`${indent}choline:     ${nut.choline},  // mg`);
  lines.push(`${indent}// — Macrominerals —`);
  lines.push(`${indent}calcium:     ${nut.calcium},  // mg`);
  lines.push(`${indent}phosphorus:  ${nut.phosphorus},  // mg`);
  lines.push(`${indent}magnesium:   ${nut.magnesium},  // mg`);
  lines.push(`${indent}sodium:      ${nut.sodium},  // mg`);
  lines.push(`${indent}potassium:   ${nut.potassium},  // mg`);
  lines.push(`${indent}chloride:    ${nut.chloride},  // mg`);
  lines.push(`${indent}// — Trace minerals —`);
  lines.push(`${indent}iron:        ${nut.iron},  // mg`);
  lines.push(`${indent}zinc:        ${nut.zinc},  // mg`);
  lines.push(`${indent}copper:      ${nut.copper},  // mg`);
  lines.push(`${indent}manganese:   ${nut.manganese},  // mg`);
  lines.push(`${indent}selenium:    ${nut.selenium},  // µg`);
  lines.push(`${indent}iodine:      ${nut.iodine},  // µg`);
  lines.push(`${indent}chromium:    ${nut.chromium},  // µg`);
  lines.push(`${indent}molybdenum:  ${nut.molybdenum},  // µg`);
  lines.push(`${indent}fluoride:    ${nut.fluoride},  // mg`);
  lines.push(`${indent}notes:       '${nut.notes}',`);
  return lines.join('\n');
}

const FILES = ['potatoes', 'raspberries', 'red_onions', 'rosemary', 'spinach', 'sweet-potatoes', 'thyme', 'tomatoes'];

for (const id of FILES) {
  const filename = id + '.js';
  const src = readFileSync(`/mnt/user-data/uploads/${filename}`, 'utf8');
  const nut = NUTRITION[id];

  const nutBlockRegex = /nutrition\s*:\s*\{[^}]*\}/s;
  const nutBlock = `nutrition: {\n${formatNutritionObj(nut)}\n  }`;

  let updated;
  if (nutBlockRegex.test(src)) {
    updated = src.replace(nutBlockRegex, nutBlock);
  } else {
    console.log(`WARNING: No nutrition block found in ${filename}`);
    updated = src;
  }

  writeFileSync(join(OUT, filename), updated, 'utf8');
  console.log(`✓ ${filename}`);
}

console.log('\nDone. Files in /home/claude/output_crops2/');
