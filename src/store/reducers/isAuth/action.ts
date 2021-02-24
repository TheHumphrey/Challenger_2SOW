import { AuthActionType } from "./types";

export const setAuth = (isAuth: boolean): AuthActionType => {
  return {
    type: "SET_AUTH",
    payload: isAuth,
  };
};
