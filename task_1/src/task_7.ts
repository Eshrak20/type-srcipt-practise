{
  // Type Assertion and Narrowing

  //   const dynamicFun = <Me>(parameter: Me): number => {
  //     const result =
  //       typeof parameter === "number"
  //         ? parameter * parameter
  //         : typeof parameter === "string"
  //         ? parameter.length
  //         : null;
  //     return result;
  //   };
  //   const res = dynamicFun<string>("adw");
  //   console.log(res);
  // const dynamicFun = <Me extends number | string>(asho: Me): number | undefined => {
  //     if (typeof asho === 'number') {
  //     return asho * asho;
  //     }
  //     if (typeof asho === 'string') {
  //     return asho.length;
  //     }
  //     };
  //     const res = dynamicFun<string>('2');
  //     console.log(res);

  const a: any = "Hello";
  a.toUpperCase();
  a();
  console.log(a);
  
}
