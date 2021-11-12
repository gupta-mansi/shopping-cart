import { getProductsReq } from "../helpers/services/productServices";
import actions from "./action";
import { takeEvery, fork, put, call } from "redux-saga/effects";

export function* getProductsEffect() {
   yield takeEvery(actions.GET_PRODUCTS, function* () {
       console.log('dfdf');
       try{
           const response = yield call(getProductsReq)
        //    console.log('saga_response',response.data.length);
           if (response.data.length > 0) {
            console.log('saga_response',response);
            yield put({
                type: actions.GET_PRODUCTS_SUCCESS,
                payload: response.data,
              });
          } else {
              console.log('found empty array');
            yield put({
              type: actions.GET_CATEGORIES_FAILED,
              payload: response.data.message,
            });
          }
       }
       catch (error) {
        yield put({
          type: actions.GET_CATEGORIES_FAILED,
          payload: error.message,
        });
      }
   });
  }

export default function* rootSaga() {
    yield fork(getProductsEffect);
}
  