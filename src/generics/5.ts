enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type margeRole = Record<UserRole, string>;

const RoleDescription: margeRole = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

console.log(RoleDescription[UserRole.admin]);
console.log(RoleDescription[UserRole.editor]); 
console.log(RoleDescription[UserRole.guest]); 
