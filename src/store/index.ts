import { createStore, Store } from "redux";

import { User } from "../types/User";

import rootReducer from "./reducers/rootReducer";

export type ApplicationState = {
  user: User[];
};

const store: Store<ApplicationState> = createStore(rootReducer);
export { store };
