class Book {
  constructor(
    name,
    author,
    bookNum,
    genre,
    frontCondition,
    backCondition,
    inUse
  ) {
    this.name = name;
    this.author = author;
    this.bookNum = bookNum;
    this.genre = genre;
    this.condition = {
      front: frontCondition,
      back: backCondition,
    };
    this.inUse = inUse;
  }

  toggleConditon(bookStatus) {
    this.inUse = bookStatus;
  }

  bookCondition(frontCondition, backCondition) {
    this.condition.front = frontCondition;
    this.condition.back = backCondition;
  }
}

export default Book;
