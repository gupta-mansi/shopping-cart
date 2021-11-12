import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import ProductReducer from "./ProductReducer";
import counter from "./counter";
import products from "../products/reducer";

const rootReducer = combineReducers({
    ProductReducer,
    cartReducer,
    counter,
    products
})  

export default rootReducer;