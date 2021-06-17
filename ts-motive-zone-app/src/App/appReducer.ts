import { combineReducers } from 'redux';
import formReducer from '../Home/Contact/contactReducer'
import transactionReducer from '../Transaction/transactionReducer';
const rootReducer = combineReducers({
    form: formReducer,
    transaction: transactionReducer
})

export default rootReducer;
