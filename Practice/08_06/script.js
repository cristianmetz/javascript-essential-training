/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

/**
 * 1. Create a basic function declaration
 * 2. Make a change to an element in the DOM (querySelector, adding a class, and so on)
 * 3. Call the function declaration
 * 4. Create a basic function expression
 *
 * Additional practice
 * A. Find an element
 * B. Make a change to it
 * C. Call the function
 * D. Confirm that it works
 * E. Reapeat with an arrow function
 */

//Task 1
function letsMultiply(a, b) {
  let c = a * b;
  return c;
}

//Task 2
document.querySelector("main").classList.add("new-class");

//Task 3
console.log("Let's multiply result:", letsMultiply(5, 5));

//Task 4

const letsAdd = function (a = 5, b = 5) {
  let c = a + b;
  return c;
};
console.log("Let's add function results:", letsAdd());

const letsSubtract = () => {
  let a = 100,
    b = 50;
  return a - b;
};
console.log(letsSubtract());

/**
 * 1. Create a basic function declaration
 * 2. Make a change to an element in the DOM (querySelector, adding a class, and so on)
 * 3. Call the function declaration
 * 4. Create a basic function expression
 *
 * Additional practice
 * A. Find an element
 * B. Make a change to it
 * C. Call the function
 * D. Confirm that it works
 * E. Reapeat with an arrow function
 */

//Task 1
function adding(h = 15, e = 20) {
  let g = h + e;
  return g;
}

//Task 2
const firstArticle = document.createElement("article");
firstArticle.classList.add("id", "first-article");
document.body.append(firstArticle);

//Task 3
console.log(adding(10, 10));

//Task 4
const functionDeclaration = function (o, p) {
  let k = o * p;
  return k;
};
console.log(functionDeclaration(6, 6));
