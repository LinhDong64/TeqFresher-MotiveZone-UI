import {CONSTANTS} from '../actions'

const initialState:object = {
    data:{
        fullName: '',
        email:'',
        message: ''
    },
    isShowFullName_Warning: false,
    isShowEmail_Warning: false,
    isShowMessage_Warning:false
};

const formReducer = (state=initialState, action:any)=>{
    switch(action.type){
        case CONSTANTS.SUBMIT_CONTACT_FORM:{
            console.log(action.payload);
            
            return state;
        }

        case CONSTANTS.ONCHANGE_FULLNAME:{
            let newState:object = {...state};
            if(action.payload.fullName){
                console.log(action.payload);
                newState = Object.assign(newState, {isShowFullName_Warning:false});
            }else{
                newState = Object.assign(newState, {isShowFullName_Warning:true});
            }
            return newState;
        }

        case CONSTANTS.ONCHANGE_EMAIL:{
            let newState:object = {...state};
            if(action.payload.email){
                console.log(action.payload);
                newState = Object.assign(newState, {isShowEmail_Warning:false});
            }else{
                newState = Object.assign(newState, {isShowEmail_Warning:true});
            }
            return newState;
        }

        case CONSTANTS.ONCHANGE_MESSAGE:{
            let newState:object = {...state};
            if(action.payload.message){
                console.log(action.payload);
                newState = Object.assign(newState, {isShowMessage_Warning:false});
            }else{
                newState = Object.assign(newState, {isShowMessage_Warning:true});
            }
            return newState;
        }
        default:
            return state;
    }
}
export default formReducer;