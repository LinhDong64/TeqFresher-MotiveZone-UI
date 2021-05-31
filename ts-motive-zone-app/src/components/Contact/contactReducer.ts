import {CONSTANTS} from './contactActions'

const initialState:object = {
    isShowWarning_FullName:false,
    isShowWarning_Email:false,
    isShowWarning_Message:false,
    fullNameWarningMess:'',
    emailWarningMess:'',
    messageWarningMess:''
};

const formReducer = (state=initialState, action:any)=>{
    switch(action.type){
        case CONSTANTS.SUBMIT_CONTACT_FORM:{
            console.log(action.payload);
            
            return state;
        }

        case CONSTANTS.ONCHANGE_FULLNAME:{
            let newState:object = {...state};
            newState=Object.assign(newState,{isShowWarning_FullName:action.data.invalid || '',
                 fullNameWarningMess:action.data.warningMessage || ''});
            return newState;
        }

        case CONSTANTS.ONCHANGE_EMAIL:{
            let newState:object = {...state};
            newState=Object.assign(newState,{isShowWarning_Email:action.data.invalid || '',
                emailWarningMess:action.data.warningMessage || ''});
            return newState;
        }

        case CONSTANTS.ONCHANGE_MESSAGE:{
            let newState:object = {...state};
            return newState;
        }
        default:
            return state;
    }
}
export default formReducer;