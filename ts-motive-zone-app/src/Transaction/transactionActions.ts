export const CONSTANTS = {
  GET_TRANSACTION_DATA: 'GET_TRANSACTION_DATA',
  GET_CHART_DATA: 'GET_CHART_DATA'
}

export const getTransactionData = (data:any) => {
  return {
    type: CONSTANTS.GET_TRANSACTION_DATA, 
    payload: {...data}
  }
}

export const getChartData = (data:any) => {
  return {
    type: CONSTANTS.GET_CHART_DATA, 
    payload: {...data}
  }
}