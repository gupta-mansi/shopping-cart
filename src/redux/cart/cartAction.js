const CartActions = {
    ADD_CART: 'ADD_CART',
    INCREASE_QUANTITY: 'INCREASE_QUANTITY',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY',
    REMOVE_CART: 'REMOVE_CART',

    AddtoCart: (payload) => ({
        type: CartActions.ADD_CART,
        payload
    }),

    IncreaseQuantity: (payload) => ({
        type: CartActions.INCREASE_QUANTITY,
        payload
    }),

    DecreaseQuantity: (payload) => ({
        type: CartActions.DECREASE_QUANTITY,
        payload
    }),

    RemoveCart: (id,qty) => ({
        type: CartActions.REMOVE_CART,
        id,
        qty
    })
}

export default CartActions;