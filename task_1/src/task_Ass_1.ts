{
  // const formatString = (input: string, toUpper?: boolean) => {
  //     if (toUpper == true) {
  //       return input.toUpperCase();
  //     } else {
  //       return input.toLowerCase();
  //     }
  //   };
  //   console.log(formatString('Hello',true));
  //   interface Book {
  //     title: string;
  //     rating: number;
  //   }
  //   const filterByRating = (items: Book[]):Book[] => {
  //     const result: Book[] = [];
  //     for (let i = 0; i < items.length; i++) {
  //       if (items[i].rating >= 4) {
  //         result.push(items[i]);
  //       }
  //     }
  //     return result;
  //   };
  //   const books = [
  //     { title: "Book A", rating: 4.5 },
  //     { title: "Book B", rating: 3.2 },
  //     { title: "Book C", rating: 5.0 },
  //   ];
  //   console.log(filterByRating(books));
  //   const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  //     const arr: T[] = [];
  //     const a = arr.concat(...arrays);
  //     return a;
  //   };
  //   console.log(concatenateArrays(["a", "b"], ["c"]));
  //   class Vehicle {
  //     constructor(private make: string, private year: number) {}
  //     getInfo() {
  //       console.log(`Make: ${this.make},Year: ${this.year}`);
  //     }
  //   }
  //   class Car extends Vehicle {
  //     constructor(make: string,year: number, private model: string) {
  //       super(make,year);
  //     }
  //     getModel() {
  //       console.log(`Model: ${this.model}`);
  //     }
  //   }
  //   const myCar = new Car("Toyota", 2020, "Corolla");
  //   myCar.getInfo();
  //   myCar.getModel();
  //   const processValue = (value: string | number): number => {
  //     if (typeof value === "number") {
  //       const res = 2 * value;
  //       console.log(res);
  //       return res;
  //     } else {
  //       const res = value.length;
  //       console.log(res);
  //       return res;
  //     }
  //   };
  //   processValue("hello");
  //   processValue(10);
  //   interface Product {
  //     name: string;
  //     price: number;
  //   }
  //   const getMostExpensiveProduct = (products: Product[]) => {
  //     let max = 0;
  //     let index = 0;
  //     for (let i = 0; i < products.length; i++) {
  //       const element = products[i];
  //       if (max < element.price) {
  //         max = element.price;
  //         index++;
  //       }
  //     }
  //     console.log(products[index - 1]);
  //   };
  //   const products = [
  //     { name: "Pen", price: 10 },
  //     { name: "Notebook", price: 25 },
  //     { name: "Bag", price: 50 },
  //   ];
  //   getMostExpensiveProduct(products);
  //   enum Day {
  //     Monday,
  //     Tuesday,
  //     Wednesday,
  //     Thursday,
  //     Friday,
  //     Saturday,
  //     Sunday,
  //   }
  //   const getDayType = (day: Day): string => {
  //     const a =
  //       day === Day.Saturday || day === Day.Sunday
  //         ? (console.log("Weekend"), "Weekend")
  //         : (console.log("Weekday"), "Weekday");
  //     return a;
  //   };
  //   getDayType(Day.Friday);
  // const squareAsync = async (n: number) => {
  //   return new Promise((accept, reject) => {
  //     n >= 0
  //       ? setTimeout(() => accept(n * n), 1000)
  //       : reject("Negative number not allowed");
  //   });
  // };
  // squareAsync(5).then(console.log);
  // squareAsync(-5).catch(console.error);
}
