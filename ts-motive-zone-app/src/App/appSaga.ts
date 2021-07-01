import { all, takeLatest } from 'redux-saga/effects';
import * as contactSaga from '../Home/Contact/contactSaga'
import * as transactionSaga from '../Transaction/transactionSaga'

function* rootSaga() {
    yield takeLatest('CHECK_CHOOSE_FILE', contactSaga.checkChooseFile)
    yield takeLatest('CHECK_FULLNAME', contactSaga.checkFullName);
    yield takeLatest('CHECK_EMAIL', contactSaga.checkEmail);
    yield takeLatest('CHECK_MESSAGE', contactSaga.checkMessage);
    yield all([
        takeLatest('SEND_FORM', contactSaga.sendForm),
        takeLatest('RESET_FORM', contactSaga.resetForm)
    ]);

    yield all([
      takeLatest('TRANSACTION_DATA', transactionSaga.transactionData),
      takeLatest('CHART_DATA', transactionSaga.chartData)
    ]);
}

export default rootSaga;