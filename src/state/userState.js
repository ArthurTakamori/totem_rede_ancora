import { users } from "@/data/users";

var user = users[0]

export function getUser() {
  return user;
}

export function setUser(newUser) {
  user = newUser
}