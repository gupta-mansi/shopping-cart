import { combineReducers } from "redux";
import products from "../products/reducer";
import authReducer from "../auth/reducers/authReducer";
import CartReducer from "../cart/cartReducer";
import ProductDetailReducer from "../productDetail/reducer/ProductDetailReducer";

const rootReducer = combineReducers({
    products,
    authReducer,
    CartReducer,
    ProductDetailReducer,
})  

export default rootReducer;