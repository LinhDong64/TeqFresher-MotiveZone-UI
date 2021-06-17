import { CONSTANTS } from './transactionActions'

const initialState = {
  transactionData: {},
  chartData: {}, 
  isLoading: true,
}

const transactionReducer = (state = initialState, action: any) => {
  switch(action.type){
    case CONSTANTS.GET_TRANSACTION_DATA:{
      let newState = {...state};
      newState.transactionData = {...action.payload};
      return newState;
    }
    case CONSTANTS.GET_CHART_DATA: {
      let newState = {...state};
      newState.chartData = {...action.payload};
      newState.isLoading=false;
      return newState;
    }

    default:
      return state;
  }
}

export default transactionReducer;