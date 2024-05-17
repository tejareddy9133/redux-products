import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";

import { thunk } from "redux-thunk";
import { P_reducer } from "./reducer";
const rootReducer = combineReducers({ P_reducer });

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
