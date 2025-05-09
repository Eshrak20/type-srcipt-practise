{
    //Task 13: Generics with Functions and Interfaces
    const anyTypeOFArray = <Me>(p: Me[]):Me[] =>{
        // return Array.isArray(p) ? p : [p]
        const a = [...new Set(p)]
        return a
    }
    const arr = [10,20,8,10,81,20]
    const res = anyTypeOFArray<number>(arr)
    console.log(res);
    
}