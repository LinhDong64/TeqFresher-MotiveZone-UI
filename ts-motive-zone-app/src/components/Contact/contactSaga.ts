import { call, put} from 'redux-saga/effects';
import {CONSTANTS} from './contactActions'
import * as validateFunction from '../../utils/function/validateContactForm'
import * as callAPI from '../../utils/function/callAPI'

export function* checkFullName(action:any){
    const data:object = yield call(validateFunction.validateFullName, action.payload.data);
    yield put({type: CONSTANTS.ONCHANGE_FULLNAME, payload:data });
}

export function* checkEmail(action:any){
    const data:object = yield call(validateFunction.validateEmail, action.payload.data);
    yield put({type: CONSTANTS.ONCHANGE_EMAIL, payload:data });
}

export function* checkMessage(action:any){
    const data:object = yield call(validateFunction.validateMessage, action.payload.data);
    yield put({type: CONSTANTS.ONCHANGE_MESSAGE , payload:data });
}

export function* sendForm(action:any){
    const data:object = yield call(callAPI.sendContactForm, action.payload);
    yield put({type: CONSTANTS.SUBMIT_CONTACT_FORM , payload:data });
}