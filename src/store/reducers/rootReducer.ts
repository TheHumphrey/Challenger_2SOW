import { combineReducers } from "redux";
import users from "./users/reducer";
import isAuth from "./isAuth/reducer";
import isLoading from "./isLoading/reducer";

const rootReducer = combineReducers({
  users,
  isAuth,
  isLoading,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
