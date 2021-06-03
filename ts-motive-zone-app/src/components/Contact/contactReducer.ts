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
            let newState = {...state,
                isShowWarning_FullName:action.payload.invalid || '',
                fullNameWarningMess:action.payload.warningMessage || ''};

            return newState;
        }

        case CONSTANTS.ONCHANGE_EMAIL:{
            let newState = {...state,
                isShowWarning_Email:action.payload.invalid || '',
                emailWarningMess:action.payload.warningMessage || ''
            };

            return newState;
        }

        case CONSTANTS.ONCHANGE_MESSAGE:{
            let newState = {...state,
                isShowWarning_Message: action.payload.invalid || '',
                messageWarningMess: action.payload.warningMessage ||''
            };
            
            return newState;
        }
        default:
            return state;
    }
}
export default formReducer;