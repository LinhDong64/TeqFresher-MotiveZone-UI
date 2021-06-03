export const CONSTANTS={
    SUBMIT_CONTACT_FORM: "SUBMIT_CONTACT_FORM",
    ONCHANGE_FULLNAME: "ONCHANGE_FULLNAME",
    ONCHANGE_EMAIL: "ONCHANGE_EMAIL", 
    ONCHANGE_MESSAGE: "ONCHANGE_MESSAGE"
}

export const submitContactForm = (data:any)=>{
    return{
        type: CONSTANTS.SUBMIT_CONTACT_FORM,
        payload:{
            dataReceived:data
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