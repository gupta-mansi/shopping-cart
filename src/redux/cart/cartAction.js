const CartActions = {
    ADD_CART: 'ADD_CART',
    ADD_CART_SUCCESS: 'ADD_CART_SUCCESS',

    AddtoCart: (payload) => ({
        type: CartActions.ADD_CART,
        payload
    })
}

export default CartActions;