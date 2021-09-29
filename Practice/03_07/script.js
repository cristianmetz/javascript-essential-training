/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const Desktop = {
  name: "CyberPower",
  color: "Black",
  weight: 20,
  hardDrives: {
    main: "SSD 128GB",
    alt: "HDD 1T",
  },
};

console.log(Desktop.hardDrives["main"]);

const Kitchen = {
  size: "300sqf",
  color: "grey",
  cabinets: 12,
  drawers: {
    knifes: 10,
    forks: 10,
    plates: 20,
  },
  dishWasher: {
    cups: 6,
    fryingPan: 2,
  },
};
console.log(Kitchen.drawers["plates"]);
