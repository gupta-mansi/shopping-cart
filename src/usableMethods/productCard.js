import { useDispatch } from "react-redux";
import CartActions from "../redux/cart/cartAction";

const { IncreaseQuantity } = CartActions;


     
export function Increase(data){
    const dispatch = useDispatch();
        console.log(dispatch(IncreaseQuantity(data)))
    }





