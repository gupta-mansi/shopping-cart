import { combineReducers } from "redux";
import products from "./products/reducer";
import authReducer from "./auth/reducers/authReducer";

const rootReducer = combineReducers({
    products,
    authReducer
})  

export default rootReducer;