import DetailAction from "../action";
const initState = {
    products: []
}

const ProductDetailReducer = (state = initState,action) => {
    switch(action.type){
        case DetailAction.GET_DETAIL:
            console.log('get detail reducer');
            return state;
        case DetailAction.GET_DETAIL_SUCCESS:
            console.log('detail success', action.payload);
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export default ProductDetailReducer;