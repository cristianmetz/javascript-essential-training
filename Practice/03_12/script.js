/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Desktop from "./Desktop.js";

const everyHomeDesktop = new Desktop(
  "Every home Desktop",
  "black",
  15,
  "128GB_SSD",
  "1TB_HDD",
  true
);

console.log("The Every Home Desktop object:", everyHomeDesktop);
console.log("The hardDrives value:", everyHomeDesktop.hardDrives);

import Kitchen from "./Kitchen.js";

const everyHomeKitchen = new Kitchen(
  "400sqf",
  "white",
  12,
  12,
  10,
  10,
  8,
  true,
  false,
  8,
  3
);

console.log("The Every Home Kitchen object:", everyHomeKitchen);

everyHomeKitchen.togglelid(true);

console.log("The Every Home Kitchen lid status is:", everyHomeKitchen.lidOpen);
