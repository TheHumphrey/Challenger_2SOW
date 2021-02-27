import { createStore, Store } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { User } from "../types/User";

import rootReducer from "./reducers/rootReducer";

export type ApplicationState = {
  users: User[];
  isAuth: boolean;
  isLoading: boolean;
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["isAuth", "isLoading"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<ApplicationState> = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
