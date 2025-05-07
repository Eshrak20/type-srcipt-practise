{
    //Objective: Use the never type for functions that don’t return. 

    const handleError = (message: string):never => {
        throw new Error(message);
    }
    handleError("Shit error hoise")
}