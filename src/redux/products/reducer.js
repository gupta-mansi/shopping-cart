import actions from "./action";

const initState = {
    ProductData: []
}

const products = (state = initState, action) => {
    switch (action.type) {

        case actions.GET_PRODUCTS:
            console.log('action_get_products');
            return state;
        case actions.GET_PRODUCTS_SUCCESS:
            console.log('product_success-reducer',action.payload);
            return {
                ...state,
                ProductData: action.payload
            }
        case actions.GET_CATEGORIES_FAILED:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
        }
    }

export default products;