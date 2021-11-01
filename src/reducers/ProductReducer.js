const initState = {
    content: []
}

const product = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            console.log('actionPayload ',action.payload);
            return {
                ...state,
                content: action.payload,
              };

            
    
        case 'FETCH_PRODUCT_SUCCESS':
            console.log('action ',action.data);
            return{
                ...state,
                content: action.data
            }
        default:
            return state;
    }
}

export default product;