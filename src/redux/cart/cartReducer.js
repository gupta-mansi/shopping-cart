import CartActions from "./cartAction"
const initState = {
    cartItems: []
}


const CartReducer = (state = [], action) => {
    switch (action.type) {

        case CartActions.ADD_CART:  
        console.log(action.payload);
            return { ...state, [action.payload.id]: action.payload };
        // console.log(state.totalPrice + action.payload.itemPrice);
            // const item =  state.cartItems.find(item => item.id === action.payload.id);

            // if(item){
            //     return{
            //         cartItems: state.cartItems.map(item => item.id === action.payload.id
            //             && {
            //               ...item,
            //               qty:  item.qty ? item.qty += 1 : item.qty = 2
            //             }
                    
            //           )
            //     }
            // }
            // else{
            //     return {
            //         cartItems: [...state.cartItems, action.payload]
            //     }
            // }
            // return{
            //     ...state,
            //     qty : action.payload.qty = 1,
            //     totalPrice: state.totalPrice + action.payload.price * action.payload.qty,
            //     cartItems:[...state.cartItems,action.payload]
            // }

            case CartActions.ADD_CART_SUCCESS:
            console.log('add_cart-reducer',action.payload);
            return state
            
        default:
            return state;
        }
    }


export default CartReducer;