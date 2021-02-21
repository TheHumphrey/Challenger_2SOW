import { User } from "../../../types/User";

export const SET_USERS = "SET_USERS";

interface SetUsersAction {
  readonly type: typeof SET_USERS;
  readonly payload: User[];
}

export type UsersActionType = SetUsersAction;
