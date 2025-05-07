{
  //Task 3: Object Types, Type Alias, & Literal Type
  //   type Person = {
  //     Name: string;
  //     Address: string;
  //     Hair: string;
  //     Eye: string;
  //     Income: string;
  //     Expense: string;
  //     Hobbies: string;
  //     Job: string;
  //     Skills: string;
  //     Friends: string;
  //     MaritalStatus: boolean;
  //     FamilyMembers: number;
  //   };
  type Person =
    | "Name"
    | "Address"
    | "Hair"
    | "Eye"
    | "Income"
    | "Expense"
    | "Hobbies"
    | "Job"
    | "Skills"
    | "Friends"
    | "MaritalStatus"
    | "FamilyMembers";

  type PersonString = {
    [k in Person]: string;
  };

  const user: PersonString = {
    Name: "Eshrak",
    Address: "Dhaka",
    Hair: "Black",
    Eye: "Blue",
    Income: "0",
    Expense: "0",
    Hobbies: "Problem Solving",
    FamilyMembers: "4",
    Job: "Next Level Developer",
    Skills: "Type Script",
    MaritalStatus: "false",
    Friends: "Siam",
  };
  console.log(user);













}
