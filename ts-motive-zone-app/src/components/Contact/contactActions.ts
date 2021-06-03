export const CONSTANTS={
    SUBMIT_CONTACT_FORM: "SUBMIT_CONTACT_FORM",
    ONCHANGE_FULLNAME: "ONCHANGE_FULLNAME",
    ONCHANGE_EMAIL: "ONCHANGE_EMAIL", 
    ONCHANGE_MESSAGE: "ONCHANGE_MESSAGE",
    RESET_FORM_DATA: "RESET_FORM_DATA"
}

export const submitContactForm = (data:any)=>{
    return{
        type: CONSTANTS.SUBMIT_CONTACT_FORM,
         payload: {...data}
    }
}

export const onChangeFullName = (data: object)=>{
    return{
        type: CONSTANTS.ONCHANGE_FULLNAME,
        payload: {...data}
    }
}

export const onChangeEmail = (data: object)=>{
    return {
        type: CONSTANTS.ONCHANGE_EMAIL,
        payload: {...data}
    }
}

export const onChangeMessage = (data:object)=>{
    return {
        type: CONSTANTS.ONCHANGE_MESSAGE,
        payload: {...data}
    }
}

export const resetForm = ()=>{
    return {
        type: CONSTANTS.RESET_FORM_DATA,
    }
}