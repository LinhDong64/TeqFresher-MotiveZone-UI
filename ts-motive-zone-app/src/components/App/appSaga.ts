import { takeLatest } from 'redux-saga/effects';
import* as contactSaga from '../Contact/contactSaga'

function* rootSaga(){
    yield takeLatest('CHECK_FULLNAME', contactSaga.checkFullName);
    yield takeLatest('CHECK_EMAIL', contactSaga.checkEmail);
}

export default rootSaga;