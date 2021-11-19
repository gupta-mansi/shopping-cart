import CartActions from "./cartAction"
const initState = {
    cartItems: [],
    totalPrice : 0,
    qty: 0
}


const CartReducer = (state = initState, action) => {
    switch (action.type) {

        case CartActions.ADD_CART:
            const item =  state.cartItems.find(item => item.id === action.payload.id);

            if(item){
                // console.log(action.payload.price * (item?.qty ? item.qty : 1));
                return{
                    ...state,
                    cartItems: state.cartItems.map(item => item.id === action.payload.id
                        ? {
                          ...item,
                          qty: item.qty ? item.qty += 1 : item.qty = 2,
                          itemPrice:  action.payload.price * item.qty
                        }
                        : {
                            item
                        }
                        
                      )
                }
            }
            else{
                console.log('else');
            }
            return{
                ...state,
                cartItems:[...state.cartItems, action.payload]
            }

            case CartActions.ADD_CART_SUCCESS:
            console.log('add_cart-reducer',action.payload);
            return state
            
        default:
            return state;
        }
    }


export default CartReducer;