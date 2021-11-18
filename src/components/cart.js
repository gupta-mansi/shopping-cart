import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import CartActions from '../cart/cartAction';

const Cart = () => {

    const s = useSelector(state => state.CartReducer.cart);
    console.log('s',s);
    const dispatch  = useDispatch();
    console.log('di');
    dispatch({type:CartActions.ADD_CART_SUCCESS})
    return (
        <div>
           <center> <h1>Cart Page</h1> </center>
        </div>
    )
}

export default Cart
