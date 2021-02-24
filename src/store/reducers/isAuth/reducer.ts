import { AuthActionType } from "./types";

const isAuth = (state: boolean = true, action: AuthActionType): boolean => {
  switch (action.type) {
    case "SET_AUTH":
      return (state = action.payload);
    default:
      return state;
  }
};

export default isAuth;
