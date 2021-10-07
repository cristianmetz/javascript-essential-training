/*
Create a new object type named "Book".
Use Class, object constructor function, or individual objects.
Add properties and methods.
Add at least five book objects
*/

import Book from "./Book.js";

const fictionBook = new Book(
  "Perfect Marriage",
  "Cristian Metz",
  1,
  "Fiction",
  "Like New",
  "Like New",
  false
);

console.log("The Fiction Book object:", fictionBook);

fictionBook.toggleConditon(true);

console.log("The Fiction Book object:", fictionBook.inUse);

fictionBook.condition.front = "damaged";
console.log(
  "The Fiction Book object's front cover is:",
  fictionBook.condition.front
);
