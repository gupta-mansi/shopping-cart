import { createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./reducers/RootReducer";

import rootSaga from "./products/saga";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
console.log(store.getState());

sagaMiddleware.run(rootSaga)

// const action = type => store.dispatch({type})
export default store;