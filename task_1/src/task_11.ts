{
  //Objective: Handle different types with the unknown type.
  // if (typeof data ==="string") {
  //     return data.toUpperCase();
  // }
  // if(typeof data ==="number") {
  //     return data*data;
  // }
  const processData = (data: unknown) => {
    const result =
      typeof data === "string"
        ? data.toUpperCase()
        : typeof data === "number"
        ? data * data
        : null;
    return result;
  };

  console.log(processData("awawdawdd"));
}
