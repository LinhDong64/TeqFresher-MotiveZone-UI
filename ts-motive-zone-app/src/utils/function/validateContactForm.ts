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
    if(!email){
        return{
            invalid:true,
            warningMessage: 'Please enter a valid email!'
        }
    }
}

export const validateMessage = (message:string)=>{
    if(!message){
        return{
            invalid:true,
            warningMessage: 'Please enter a valid message!'
        }
    }
}

export const validateContactForm =()=>{

}