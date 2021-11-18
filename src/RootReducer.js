import { combineReducers } from "redux";
import products from "./products/reducer";
import authReducer from "./auth/reducers/authReducer";
import CartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    products,
    authReducer,
    CartReducer,
})  

export default rootReducer;