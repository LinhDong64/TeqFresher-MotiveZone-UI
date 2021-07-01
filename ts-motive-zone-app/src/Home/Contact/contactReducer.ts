import { CONSTANTS } from './contactActions'

const initialState = {
  dataToSend: {
    fullName: '',
    email: '',
    message: '',
    file: null,
  },
  dataReceived: {},
  fullNameWarningMess: '',
  emailWarningMess: '',
  messageWarningMess: '',
  chooseFileWarningMess: ''
};

const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CONSTANTS.SUBMIT_CONTACT_FORM: {
      let newState = { ...state };
      newState.dataReceived = { ...action.payload };

      return newState;
    }

    case CONSTANTS.ONCHANGE_CHOOSE_FILE: {
      let newState = {
        ...state,
        chooseFileWarningMess: action.payload.warningMessages || '',
      };
      //console.log('contact reducer' ,action.payload.data );
      newState.dataToSend.file = action.payload.data || null;
      return newState
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
          message: '',
          file: null
        },
        dataReceived: {},
        fullNameWarningMess: '',
        emailWarningMess: '',
        messageWarningMess: '',
        chooseFileWarningMess: ''
      }
    }

    default:
      return state;
  }
}
export default formReducer;