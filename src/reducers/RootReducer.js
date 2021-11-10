import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import ProductReducer from "./ProductReducer";

const rootReducer = combineReducers({
    ProductReducer,
    cartReducer
})  

export default rootReducer;