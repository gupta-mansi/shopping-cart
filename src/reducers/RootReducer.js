import { combineReducers } from "redux";
import counter from "./counter";
import product from "./ProductReducer";

export default combineReducers({
    counter,
    product,
})