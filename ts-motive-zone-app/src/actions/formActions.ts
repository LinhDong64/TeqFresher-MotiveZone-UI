import {CONSTANTS} from '.'

export const submitContactForm = (fullName:string, email:string, message:string)=>{
    return{
        type: CONSTANTS.SUBMIT_CONTACT_FORM,
        payload:{
            fullName, 
            email,
            message
        }
    }
}