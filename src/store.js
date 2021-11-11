import { createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./reducers/RootReducer";

import { helloSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(helloSaga)

// const action = type => store.dispatch({type})
export default store;