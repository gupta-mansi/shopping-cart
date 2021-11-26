import CartActions from "./cartAction"
const initState = {
    cartItems: [],
    totQty: 0
}


const CartReducer = (state = initState, action) => {
    switch (action.type) {

        case CartActions.ADD_CART:  
        const products = action.payload
        const data =  state.cartItems.find(item => item.id === products.id);

            return { ...state, 
                cartItems: data ? state.cartItems.map(item => item.id === products.id
                                ? {
                                  ...item,
                                  qty: item.qty += 1
                                } : item
                            
                              ) : [...state.cartItems, {...products,qty:1}],
                totQty: state.totQty += 1
            }; 

        case CartActions.INCREASE_QUANTITY:
            return{
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.payload
                    ? {
                        ...item,
                        qty: item.qty < 5 ? item.qty +=1 : item.qty
                    } : item)
            }

        case CartActions.DECREASE_QUANTITY:
            return{
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.payload 
                    ? {
                        ...item,
                        qty: item.qty > 1 ? item.qty -=1 : item.qty
                    } : item)
            }

        case CartActions.REMOVE_CART:
            const id = action.id;
            console.log('id',id,'q', action.qty);
            const newList = state.cartItems.filter(item => item.id !== id)
            return{ 
                ...state,
                cartItems: newList,
                totQty: state.totQty - action.qty

            }

        default:
            return state;
        }
    }


export default CartReducer;