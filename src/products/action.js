const actions = {
    GET_PRODUCTS: "GET_PRODUCTS",
    GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
    GET_CATEGORIES_FAILED: "GET_CATEGORIES_FAILED",

    getProducts: () => ({
        type: actions.GET_PRODUCTS,
    })
};

export default actions;