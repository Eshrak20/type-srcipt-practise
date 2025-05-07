{
  // Write a function that reverses a string.

  const rev = (word: string) => {
    const ulta = word.split("").reverse().join("");
    return ulta;
  };
  console.log(rev("hello"));
}
