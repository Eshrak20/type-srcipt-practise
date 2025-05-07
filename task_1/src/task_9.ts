{
  //Objective: Use optional chaining with nested objects.
  type Person = {
    name: string;
    city?: string;
  };
  const worker: Person = {
    name: "Eshrak",
    // city: "Dhaka",
  };

  const getEmployeeCity = (employee:Person) => {
    return `${employee.name} ${employee?.city}`;
  };
  console.log(getEmployeeCity(worker));
  
}
