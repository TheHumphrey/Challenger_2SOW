import { combineReducers } from "redux";
import users from "./users/reducer";

const rootReducer = combineReducers({
  users,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
