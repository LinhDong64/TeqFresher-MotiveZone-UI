import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {CONSTANTS} from './appActions'
import contactSaga from '../Contact/contactSaga'

// function* workerSaga(){
    // console.log('Hey from worker saga');
    // 
// }

function* rootSaga(){
    yield takeEvery('ONCHANGE', contactSaga);
    //yield takeLatest(CONSTANTS.ONCHANGE_FULLNAME, contactSaga);
}

export default rootSaga;