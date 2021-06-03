import { takeLatest } from 'redux-saga/effects';
import* as contactSaga from '../Contact/contactSaga'

function* rootSaga(){
    yield takeLatest('CHECK_FULLNAME', contactSaga.checkFullName);
    yield takeLatest('CHECK_EMAIL', contactSaga.checkEmail);
    yield takeLatest('CHECK_MESSAGE', contactSaga.checkMessage);
    yield takeLatest('SEND_FORM', contactSaga.sendForm);
}

export default rootSaga;