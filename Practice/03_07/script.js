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

/**
 * SECOND ROUND
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bedroom = {
  name: "Restoration room",
  size: 400,
  color: "grey",
  window: 1,
  pictures: 6,
  bed: {
    pillows: 2,
    mattresses: 2,
  },
};
console.log("This is the bedroom object: ", bedroom);
console.log("The number of pillows is: ", bedroom.bed.pillows);

/**
 * THIRD ROUND
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const garbadge = {
  name: "Office garbadge",
  color: "grey",
  weight: 3,
  shape: "rectangular"
};

console.log("This is the garbadge object:", garbadge);

const toolKit = {
  name: "Computer Tool Kit",
  color: "black",
  weight: 2,
  tools: {
      phillipsScrewdriver: 5,
      flatheadScrewdriver: 5,
      headAttchments: 5

  },
  zipped: false,
}

console.log("This is the toolKit object:", toolKit);
console.log("This is the zipped status:", toolKit.zipped);