import { combineReducers } from 'redux';
import formReducer from '../Home/Contact/contactReducer'
const rootReducer = combineReducers({
    form: formReducer
})

export default rootReducer;
