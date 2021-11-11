import { put } from 'redux-saga/effects'

export function* helloSaga(){
    console.log('hello');
    console.log(yield put({ type: 'INCREMENT' }))
}