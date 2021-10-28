const product = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return{
                ...state,
                data: action.data
            }
            break;
    
        default:
            break;
    }
}

export default product;