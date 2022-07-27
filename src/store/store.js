import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { todoReducer } from "../reducers/todoReducer";

import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
const rootReducer = combineReducers({
  todos: todoReducer,
});
let initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
