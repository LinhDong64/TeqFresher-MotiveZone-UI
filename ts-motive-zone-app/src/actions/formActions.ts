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

export const onChangeFullName = (fullName: string)=>{
    return{
        type: CONSTANTS.ONCHANGE_FULLNAME,
        payload: {
            fullName
        }
    }
}

export const onChangeEmail = (email: string)=>{
    return {
        type: CONSTANTS.ONCHANGE_EMAIL,
        payload: {
            email
        }
    }
}

export const onChangeMessage = (message:string)=>{
    return {
        type: CONSTANTS.ONCHANGE_MESSAGE,
        payload:{
            message
        }
    }
}