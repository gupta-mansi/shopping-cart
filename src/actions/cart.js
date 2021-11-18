const Cartctions = {
    ADD_CART: 'ADD_CART',

    AddtoCart: (product) => ({
        type: CartActions.ADD_CART,
        product
    })
}

export default Cartctions;