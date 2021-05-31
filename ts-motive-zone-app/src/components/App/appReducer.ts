import {combineReducers} from 'redux';
import formReducer from '../Contact/contactReducer'
const rootReducer = combineReducers({
    form: formReducer
})

export default rootReducer;
