import {CONSTANTS} from './contactActions'

const initialState:object = {
    data:{
        fullName: '',
        email:'',
        message: ''
    },
    isShowWarning_FullName:false,
    isShowWarning_Email:false,
    isShowWarning_Message:false,
    fullNameWarningMessage:'',
    emailWarningMessage:'',
    messageWarningMessage:''
};

const formReducer = (state=initialState, action:any)=>{
    switch(action.type){
        case CONSTANTS.SUBMIT_CONTACT_FORM:{
            console.log(action.payload);
            
            return state;
        }

        case CONSTANTS.ONCHANGE_FULLNAME:{
            let newState:object = {...state};
            newState=Object.assign(newState,{isShowWarning_FullName:action.data.invalid,
                 fullNameWarningMessage:action.data.warningMessage});
            return newState;
        }

        case CONSTANTS.ONCHANGE_EMAIL:{
            let newState:object = {...state};
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