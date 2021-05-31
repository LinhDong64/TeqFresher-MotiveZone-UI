import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {CONSTANTS} from '../actions'

function* rootSaga(){
    yield takeEvery(CONSTANTS.SUBMIT_CONTACT_FORM,()=>{
        console.log("Hello saga");
    });
}

export default rootSaga;