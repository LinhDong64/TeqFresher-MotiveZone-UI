import {CONSTANTS} from '../actions'

const initialState:object = {
    data:{
        fullname: 'linhdong'
    }
};

const formReducer = (state=initialState, action:any)=>{
    switch(action.type){
        case CONSTANTS.SUBMIT_CONTACT_FORM:{
            const newState:object={
                data: action.payload
            }
            return newState;
        }

        default:
            return state;
    }
}
export default formReducer;