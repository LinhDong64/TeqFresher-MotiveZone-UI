import { call, put} from 'redux-saga/effects';
import {CONSTANTS} from './contactActions'
import * as validateFunction from '../../utils/function/validateContactForm'

export function* checkFullName(action:any){
    const data:object = yield call(validateFunction.validateFullName, action.payload.data);
    yield put({type: CONSTANTS.ONCHANGE_FULLNAME, data });
}

export function* checkEmail(action:any){
    const data:object = yield call(validateFunction.validateEmail, action.payload.data);
    yield put({type: CONSTANTS.ONCHANGE_EMAIL, data });
}