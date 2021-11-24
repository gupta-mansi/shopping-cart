import { all } from '@redux-saga/core/effects';
import DetailSaga from '../productDetail/saga/ProductDetailSaga';
import ProductSaga from '../products/saga';

export default function* rootSaga(getState) {
    yield all([
      DetailSaga(),
      ProductSaga(),
    ]);
  }
  