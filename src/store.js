import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import RootReducer from "./reducers/RootReducer";
import product from "./reducers/ProductReducer";
import thunk from "redux-thunk";

const store = createStore(product,applyMiddleware(thunk));

export default store;