import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as treasure from "./treasure/reducer";

let store = createStore(
  combineReducers({
    ...treasure,
  }),
  applyMiddleware(thunk)
);
export default store;
