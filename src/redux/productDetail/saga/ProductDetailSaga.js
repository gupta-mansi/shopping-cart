import DetailAction from "../action";
import { takeEvery, fork, put, call } from "redux-saga/effects";
import { getProductsReq } from "../../../helpers/services/productServices";

export function* getProductDetailsEffect() {
   yield takeEvery(DetailAction.GET_DETAIL, function* () {
       console.log('detailsaga');
       try{
        //    console.log('saga_response',response.data.length);
            console.log('try block');
            const response = yield call(getProductsReq)
            console.log('nnnnnnn', response);
            yield put({
                type: DetailAction.GET_DETAIL_SUCCESS,
                payload: response.data
            });
       }
       catch (error) {
            console.log('errrorrrrrrrrrrrrrr');
      }
   });
  }

export default function* RootSaga() {
    yield fork(getProductDetailsEffect);
}