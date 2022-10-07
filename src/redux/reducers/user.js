import {
  SET_USER_FIELD, SIGNUP_USER, CONNECT_USER, LOGOUT_USER, REPORT_ERROR, SIGNUP_SUCCESS, CLEAR_AFTER_SUCCESS, TOGGLE_EDIT_PROFILE, SET_USER_CHANGES, CLEAR_USER_CHANGES,
} from '../actions/user';

export const initialState = {
  isLogged: false,
  isEditingProfile: false,
  successModal: false,
  email: '',
  password: '',
  repeatPassword: '',
  firstname: '',
  lastname: '',
  message: '',
  messageContact: '',
  sucessMessage: '',
  user: {},
  userChanges: {
    firstname: '',
    lastname: '',
    email: '',
    default_stock: '',
    expiration_date_notification: undefined,
  },
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SIGNUP_USER:
      return {
        ...state,
        email: '',
        password: '',
        repeatPassword: '',
        firstname: '',
        lastname: '',
      };
    case CLEAR_AFTER_SUCCESS:
      return {
        ...state,
        successModal: false,
        message: '',
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        successModal: true,
        message: action.message,
      };
    case CONNECT_USER:
      return {
        ...state,
        email: action.data.email,
        firstname: action.data.firstname,
        lastname: action.data.lastname,
        password: '',
        isLogged: true,
        user: action.data,
      };
    case LOGOUT_USER:
      return {
        ...state,
        email: '',
        firstname: '',
        lastname: '',
        user: {},
        isLogged: false,
      };
    case REPORT_ERROR:
      return {
        ...state,
        message: action.error,
      };
    case TOGGLE_EDIT_PROFILE:
      return {
        ...state,
        isEditingProfile: !state.isEditingProfile,
      };
    case SET_USER_CHANGES:
      return {
        ...state,
        userChanges: {
          ...state.userChanges,
          [action.name]: action.value,
        },
      };
    case CLEAR_USER_CHANGES:
      return {
        ...state,
        userChanges: {
          firstname: '',
          lastname: '',
          email: '',
          default_stock: '',
          expiration_date_notification: undefined,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
