import { call, put } from "@redux-saga/core/effects"
import * as transactionAction from './transactionActions'
import { getTransactionData, getDataForChart } from "../services/callAPI"

export function* transactionData(action: any) {
  const data: object = yield call(getTransactionData);
  yield put(transactionAction.getTransactionData(data));
}

export function* chartData(action: any) {
  const data: object = yield call (getDataForChart);
  yield put(transactionAction.getChartData(data));
}