export const validateFullName = (fullName: string) => {
    let ret = {};
    ret = fullName ? { warningMessage: '', data: fullName }
        : { warningMessage: 'Please enter a valid full name!' }
    return ret;
}

export const validateEmail = (email: string) => {
    if (email === "") {
        return {
            warningMessage: 'Please enter a valid email!',
            data: ''
        }
    } else {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValidEmail = re.test(String(email).toLowerCase());
        return isValidEmail ? { warningMessage: '', data: email }
            : { warningMessage: 'Email is invalid!', data: email }
    }
}

export const validateMessage = (message: string) => {
    let ret = {};
    ret = message ? { warningMessage: '', data: message }
        : { warningMessage: 'Please enter a valid full name!' }
    return ret;
}
