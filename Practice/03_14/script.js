/*
Create a new object type named "Book".
Use Class, object constructor function, or individual objects.
Add properties and methods.
Add at least five book objects
*/

//Class Book roperties name,author,bookNum,genre,frontCondition,backCondition,inUse

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

const narutoBook = new Book(
  "Ninja Naruto",
  "Masashi Kishimoto",
  243,
  "Fiction",
  "Used",
  "Used",
  true
);

console.log("The Ninja Naruto book:", narutoBook);

const billBurr = new Book(
  "Bill Burr Biography",
  "Bill Burr",
  1,
  "Autobigraphy",
  "New",
  "New",
  false
);

console.log("The Bill Burr Autobiography:", billBurr);

billBurr.toggleConditon(true);

const onePiece = new Book(
  "One Peace",
  "Eiichiro Oda",
  12,
  "Fiction",
  "New",
  "Like New",
  false
);

console.log("This is the object One Piece:", onePiece);

const itWorld = new Book(
  "IT World",
  "Brian Paone",
  1,
  "Horror",
  "Used",
  "Used",
  false
);
console.log("This is the object IT World:", itWorld);
