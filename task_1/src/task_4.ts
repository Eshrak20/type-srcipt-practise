{
  //Create union and intersection types using interfaces.

  interface Book {
    Name: string;
  }
  interface Magazine {
    Name: string;
  }

  type readAble = Book | Magazine;
  type Publican = Book & Magazine;
}
