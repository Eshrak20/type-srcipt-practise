{
  //Objective: Practice using intersection types.

  type user = {
    name: string;
    email: string;
  };
  type admin = {
    adminLevel: string;
  };
  type AdminUser = user & admin;

  const describeAdmin = (user: AdminUser): string => {
    return `${user.name} ${user.email} ${user.adminLevel}`;

  };
  const adminUser = { name: "Eshrak", email: "eshrakg62@gmail.com", adminLevel: "Super Admin" };

  const res = describeAdmin(adminUser);
  console.log(res);
  
}
