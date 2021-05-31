import { call, put, takeLatest } from 'redux-saga/effects';
import {CONSTANTS} from './contactActions'
import * as validateFunction from '../../utils/function/validateContactForm'

function* contactSaga(action:any){
    const data:object = yield call(validateFunction.validateFullName, action.payload.fullName);
    console.log('from contact saga', data);
    
    yield put({type: CONSTANTS.ONCHANGE_FULLNAME, data });
    //console.log('Hey from contact saga');
}

export default contactSaga;