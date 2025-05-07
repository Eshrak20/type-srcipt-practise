{
  // Type Assertion and Narrowing

  const dynamicFun = <Me>(asho: Me): Me => {
    if (typeof asho === "number") {
        const res = asho*asho
        return res
        
    }
    if (typeof asho === "string") {
        const res = asho.length
        return res

        
    }

  };
  const res = dynamicFun<number>(7)
  console.log(res);
  
}
