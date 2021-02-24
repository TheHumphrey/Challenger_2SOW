import { combineReducers } from "redux";
import users from "./users/reducer";
import isAuth from "./isAuth/reducer";

const rootReducer = combineReducers({
  users,
  isAuth,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
