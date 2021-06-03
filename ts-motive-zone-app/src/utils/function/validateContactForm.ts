export const validateFullName=(fullName:string)=>{

    if(fullName === ""){
        return{
            invalid:true,
            warningMessage: 'Please enter a valid full name!'
        }
    }else{
        return{
            invalid: false,
            warningMessage:'',
            data: fullName
        }
    }
}

export const validateEmail =(email:string)=>{

    if(email === ""){
        return{
            invalid:true,
            warningMessage: 'Please enter a valid email!'
        }
    }else{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValidEmail=re.test(String(email).toLowerCase());
        if(!isValidEmail){
            return{
                invalid:true,
                warningMessage: 'Email is invalid!'
            }
        }else{
            return{
                invalid: false,
                warningMessage:'',
                data: email
            }
        }
    }
}

export const validateMessage = (message:string)=>{
    if(message === ""){
        return{
            invalid:true,
            warningMessage: 'Please enter a message!'
        }
    }else{
        return{
            invalid: false,
            warningMessage:'',
            data: message
        }
    }
}

export const validateContactForm =()=>{

}