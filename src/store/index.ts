import { createStore, Store } from "redux";

import rootReducer from "./reducers/rootReducer";

export type ApplicationState = {};

const store: Store<ApplicationState> = createStore(rootReducer);
export { store };
