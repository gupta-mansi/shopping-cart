import useAxios from "axios-hooks";

// export const increment = () => {
//     return {
//         type: "INCREMENT",
//         payload: {
//             id: user.id,
//             first_name: user.first_name,
//             last_name: user.last_name,
//             email: user.email,
//             count: state.count
//         }
//     }
// }

// export const decrement = () => {
//     return {
//         type: "DECREMENT",
//         payload: {
//             id: user.id,
//             first_name: user.first_name,
//             last_name: user.last_name,
//             email: user.email,
//             count:  user.count
//         }
//     }
// }

export const FetchProducts = () => {
    return FetchProductInstance  ({
         type: "FETCH_PRODUCT",
         data: {}
    } )
}


export const FetchProductsSuccess = (type) => {
    return{
        type: "FETCH_PRODUCT_SUCCESS",
        data: type
    }
}