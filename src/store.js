import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counter from "./reducers/counter";
import { applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

const store = createStore(counter,composeWithDevTools());

export default store;