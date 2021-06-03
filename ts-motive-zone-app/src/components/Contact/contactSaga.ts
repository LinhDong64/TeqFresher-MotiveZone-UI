import { call, put} from 'redux-saga/effects';
import * as contactActions from './contactActions'
import * as validateFunction from '../../utils/function/validateContactForm'
import * as callAPI from '../../services/callAPI'

export function* checkFullName(action:any){
    const data:object = yield call(validateFunction.validateFullName, action.payload.data);
    yield put(contactActions.onChangeFullName(data));
}

export function* checkEmail(action:any){
    const data:object = yield call(validateFunction.validateEmail, action.payload.data);
    yield put(contactActions.onChangeEmail(data));
}

export function* checkMessage(action:any){
    const data:object = yield call(validateFunction.validateMessage, action.payload.data);
    yield put(contactActions.onChangeMessage(data));
}

export function* sendForm(action:any){
    const data:object = yield call(callAPI.sendContactForm, action.payload);
    yield put(contactActions.submitContactForm(data));
}