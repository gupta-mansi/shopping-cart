const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    let cart = state.cart;
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('action', action.payload);
            cart.push(action.payload);
            return {
                ...state,
                cart: action.payload
            };
    
        default:
            return state;
            break;
    }
}

export default cartReducer;