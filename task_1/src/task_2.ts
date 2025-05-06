{
  //Task 2: Functions, Optional, and Literal Types
  type y = "admin" | "user" | "guest";

  const literalType = (name: string, age: number, role: y) => {
    console.log(name);
    console.log(age);
    console.log(role);
  };
  const x = literalType("Eshrak", 10, "user");
}
