import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import ProductReducer from "./ProductReducer";
import counter from "./counter";

const rootReducer = combineReducers({
    ProductReducer,
    cartReducer,
    counter
})  

export default rootReducer;