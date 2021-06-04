import { CONSTANTS } from './contactActions'

const initialState = {
    dataToSend: {
        fullName: '',
        email: '',
        message: ''
    },
    dataReceived: {},
    fullNameWarningMess: '',
    emailWarningMess: '',
    messageWarningMess: ''
};

const formReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CONSTANTS.SUBMIT_CONTACT_FORM: {
            let newState = { ...state };
            newState.dataReceived = { ...action.payload };

            return newState;
        }

        case CONSTANTS.ONCHANGE_FULLNAME: {
            let newState = {
                ...state,
                fullNameWarningMess: action.payload.warningMessage || '',
            };
            newState.dataToSend.fullName = action.payload.data || '';
            return newState;
        }

        case CONSTANTS.ONCHANGE_EMAIL: {
            let newState = {
                ...state,
                emailWarningMess: action.payload.warningMessage || ''
            };
            newState.dataToSend.email = action.payload.data || '';
        
            return newState;
        }

        case CONSTANTS.ONCHANGE_MESSAGE: {
            let newState = {
                ...state,
                messageWarningMess: action.payload.warningMessage || '',
            };
            newState.dataToSend.message = action.payload.data || '';

            return newState;
        }

        case CONSTANTS.RESET_FORM_DATA: {
            return {
                dataToSend: {
                    fullName: '',
                    email: '',
                    message: ''
                },
                dataReceived: {},
                fullNameWarningMess: '',
                emailWarningMess: '',
                messageWarningMess: ''
            }
        }

        default:
            return state;
    }
}
export default formReducer;