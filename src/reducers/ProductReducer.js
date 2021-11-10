const initState = {
    content: []
}

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            console.log('actionPayload ',action.payload);
            return {
                ...state,
                content: action.payload,
              };
        default:
            return state;
    }
}

export default ProductReducer;