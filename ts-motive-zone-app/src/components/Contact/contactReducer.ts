import { CONSTANTS } from './contactActions'

const initialState = {
    dataToSend: {
        fullName: '',
        email: '',
        message: ''
    },
    dataReceived: {},
    isShowWarningFullName: false,
    isShowWarningEmail: false,
    isShowWarningMessage: false,
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
                isShowWarningFullName: action.payload.invalid || '',
                fullNameWarningMess: action.payload.warningMessage || '',
            };
            newState.dataToSend.fullName = action.payload.data || '';

            return newState;
        }

        case CONSTANTS.ONCHANGE_EMAIL: {
            let newState = {
                ...state,
                isShowWarningEmail: action.payload.invalid || '',
                emailWarningMess: action.payload.warningMessage || ''
            };
            newState.dataToSend.email = action.payload.data || '';
        
            return newState;
        }

        case CONSTANTS.ONCHANGE_MESSAGE: {
            let newState = {
                ...state,
                isShowWarningMessage: action.payload.invalid || '',
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
                isShowWarningFullName: false,
                isShowWarningEmail: false,
                isShowWarningMessage: false,
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