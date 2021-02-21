import { User } from "../../../types/User";
import { UsersActionType } from "./types";

export const setUsers = (user: User[]): UsersActionType => {
  return {
    type: "SET_USERS",
    payload: user,
  };
};
