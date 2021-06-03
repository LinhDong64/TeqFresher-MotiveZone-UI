export const validateFullName = (fullName: string) => {
    let ret = {};
    ret = fullName ? { invalid: false, warningMessage: '', data: fullName }
        : { invalid: true, warningMessage: 'Please enter a valid full name!' }
    return ret;
}

export const validateEmail = (email: string) => {
    if (email === "") {
        return {
            invalid: true,
            warningMessage: 'Please enter a valid email!'
        }
    } else {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValidEmail = re.test(String(email).toLowerCase());
        return isValidEmail? {invalid: false, warningMessage: '', data: email}
            :{invalid: true, warningMessage: 'Email is invalid!'}
    }
}

export const validateMessage = (message: string) => {
    let ret = {};
    ret = message ? { invalid: false, warningMessage: '', data: message }
        : { invalid: true, warningMessage: 'Please enter a valid full name!' }
    return ret;
}
