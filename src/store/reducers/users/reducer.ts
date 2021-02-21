import { User } from "../../../types/User";
import { UsersActionType } from "./types";

const INITIAL_STATE: User[] = [];

const users = (
  state: User[] = INITIAL_STATE,
  action: UsersActionType
): User[] => {
  switch (action.type) {
    case "SET_USERS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default users;
