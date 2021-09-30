/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: {
    front: "grey",
    back: "black",
  },
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  pocketsOpen: false,
  zipPocket: function (pocketStatus) {
    this.pocketsOpen = pocketStatus;
  },
  newBackpackColor: function (frontColor, backColor) {
    this.color.front = frontColor;
    this.color.back = backColor;
  },
};

console.log(backpack.pocketsOpened);
console.log("The backpack object:", backpack);
console.log("The pocketsOpen", backpack.pocketStatus);

console.log("Front color before:", backpack.color.front);
console.log("Back color before:", backpack.color.back);
backpack.newBackpackColor("green", "orange");
console.log("Front color after:", backpack.color.front);
console.log("Back color after:", backpack.color.back);
