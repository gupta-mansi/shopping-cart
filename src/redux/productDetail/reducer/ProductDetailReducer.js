import DetailAction from "../action";
const initState = {
    products: []
}

const ProductDetailReducer = (state = initState,action) => {
    switch(action.type){
        case DetailAction.GET_DETAIL:
            console.log('get detail re');
            // const i = products.filter(data => data.id === id);
            // console.log(i);
            // return {
            //     ...state,
            //     products: i
            // }

            // return{ 
            //     ...state,
            //     products: products
            // }
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