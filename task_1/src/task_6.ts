{
  //Objective: Write a function that uses the rest operator for variable-length arguments.
  let sum: number = 0;
  const num = (...numRest: number[]) => {
    numRest.forEach((eachNumber: number) => (sum = sum + eachNumber));
  };

  num(10, 20, 30);
  console.log(sum);
}
