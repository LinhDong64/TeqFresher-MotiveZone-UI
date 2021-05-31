export const validateFullName=(fullName:string)=>{
    console.log('from validate', fullName);
    
    if(fullName === ""){
        return{
            invalid:true,
            warningMessage: 'Please enter a valid full name!'
        }
    }else{
        return{
            invalid: false,
            warningMessage:''
        }
    }
}

export const validateEmail =(email:string)=>{
    console.log('validate email', email);
    
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
                warningMessage:''
            }
        }
    }
}

export const validateMessage = (message:string)=>{
    if(message===""){
        return{
            invalid:true,
            warningMessage: 'Please enter a valid message!'
        }
    }
}

export const validateContactForm =()=>{

}