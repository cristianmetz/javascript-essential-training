/*
Create a new object type named "Book".
Use Class, object constructor function, or individual objects.
Add properties and methods.
Add at least five book objects
*/

class Book {
  constructor(name, author, genre, frontCondition, backCondition) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.condition = {
      front: frontCondition,
      back: backCondition,
    };
  }

  toggleConditon(bookStatus) {
    this.condition = bookStatus;
  }

  bookCondition(frontCondition, backCondition) {
    this.condition.front = frontCondition;
    this.condition.back = backCondition;
  }
}

export default Book;
