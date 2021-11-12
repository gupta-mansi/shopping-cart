import fetchProduct from "../saga";
import React from 'react';
import { useDispatch } from "react-redux";

function ProductSaga() {
    const dispatch = useDispatch();
    const product = fetchProduct();
    const content = dispatch({type: "FETCH_PRODUCT", payload: product.data})

    // console.log('product',product);
    // console.log('content',content);
     
      return (
        <div>
            <h1>
                hdjd
            </h1>
        </div>   
    )
}

export default ProductSaga;