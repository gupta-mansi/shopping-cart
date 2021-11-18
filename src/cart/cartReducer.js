import CartActions from "./cartAction"
const initState = {
    cart: []
}

const CartReducer = (state = initState, action) => {
    switch (action.type) {

        case CartActions.ADD_CART:
            // console.log(action.payload);
            console.log('ggggggggggggg',state);
            return {
                ...state,
                cart:action.payload
            };
            case CartActions.ADD_CART_SUCCESS:
            console.log('add_cart-reducer',action.payload);
            return state
            
        default:
            return state;
        }
    }


export default CartReducer;