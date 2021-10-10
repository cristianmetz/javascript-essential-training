/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

/** Tasks
 * 1. Find an element and add two different classes"
 * 2. Remove only one of the new classes
 * 3. Add a new attribute to an element
 *
 * Additional Tasks
 * 4. Request the value of the attribute
 * 5. Change the value of the attribute
 * 6. Add some inline CSS to an elenment by specifying the style property and setting
 *    its value
 * 7. Query the style property of an element in the console to get a list of all the
 *    style properties available
 */

//Task 1
document.querySelector("main h1").classList.add("new-class");
document.querySelector("main h1").classList.add("new-class02");

//Task 2
document.querySelector("main h1").classList.remove("new-class02");

//Task 3
document
  .querySelector("article#pack02.backpack img")
  .setAttribute("alt", "image of a frog");

//Task 4
document.querySelector("article#pack02.backpack img").getAttribute("alt");
document.querySelector("article#pack02.backpack img").getAttribute("src");

//Task 5
document.querySelector(
  "article#pack01.backpack li:first-child"
).style.backgroundColor = "Blue";

//Task 6
document.querySelector("article#pack01.backpack h1").style.color =
  "rebeccapurple";

//Task 7
document.querySelector("article#pack01.backpack h1").style;
