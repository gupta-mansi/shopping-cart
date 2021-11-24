import { createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";

import rootReducer from "./RootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
console.log(store.getState());

sagaMiddleware.run(rootSaga)

export default store;   