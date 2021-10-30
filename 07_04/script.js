/**
 * Challenge: Build and modify an array
 * - 1. Build an array with 8 items
 * - 2. Remove the last item
 * - 3. Add the last item as the first item on the array
 * - 4. Sort the items by alphabetical order
 * - 5. Use the find() method to find a specific item in the array
 * - 6. Remove the item you found using the find method from the array.
 */

//Task 1
// const workDesk = [
//   "computer",
//   "water bottle",
//   "docking station",
//   "phone",
//   "stappler",
//   "alcohol wipes",
//   "laptops",
//   "notpad",
// ];
// console.log("This is the work desk array:", workDesk);
// //Task 2
// console.log(workDesk.pop());
// //Task 3
// console.log(workDesk.unshift("notepad"));
// //Task 4
// console.log(workDesk.sort());
// //Task 5
// const found = workDesk.find((item) => item === "phone");
// console.log(found);
// //Task 6
// let remove = "phone";
// workDesk.splice(workDesk.indexOf(remove), 1);
// console.log(`Array with "${remove}" removed:`, workDesk);

/* Challenge: Build and modify an array
 * - 1. Build an array with 8 items
 * - 2. Remove the last item
 * - 3. Add the last item as the first item on the array
 * - 4. Sort the items by alphabetical order
 * - 5. Use the find() method to find a specific item in the array
 * - 6. Remove the item you found using the find method from the array.
 */

let color = "grey";
const kitchen = [
  "cabinets",
  "fridge",
  "stove",
  "countertop",
  color,
  "expresso machine",
  7,
  "toaster",
];
console.log("This is the Kitchen Array: ", kitchen);
// kitchen.pop();
console.log("After using the pop method:", kitchen);
kitchen.unshift(kitchen.pop());
console.log("After using the unshift method:", kitchen);
kitchen.sort();
console.log("Sorting the array in alphabetical order:", kitchen);

let longItems = kitchen.find(function (item) {
  if (item.length >= 12) {
    return item;
  }
});
console.log("Long items:", longItems);

let pos = kitchen.indexOf(longItems);
kitchen.splice(pos, 1);
console.log("After removing the found item:", kitchen);
