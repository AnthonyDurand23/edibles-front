export const SET_USER_FIELD = 'SET_USER_FIELD';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const CONNECT_USER = 'CONNECT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const GET_USER_WITH_TOKEN = 'GET_USER_WITH_TOKEN';
export const REPORT_ERROR = 'REPORT_ERROR';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const CLEAR_AFTER_SUCCESS = 'CLEAR_AFTER_SUCCESS';
export const SEND_MESSAGE_CONTACT = 'SEND_MESSAGE_CONTACT';
export const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export const TOGGLE_EDIT_PROFILE = 'TOGGLE_EDIT_PROFILE';
export const SET_USER_CHANGES = 'SET_USER_CHANGES';
export const CLEAR_USER_CHANGES = 'CLEAR_USER_CHANGES';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const setUserField = (value, name) => ({
  type: SET_USER_FIELD,
  value,
  name,
});

export const signupUser = () => ({
  type: SIGNUP_USER,
});

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const connectUser = (data) => ({
  type: CONNECT_USER,
  data,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const getUserWithToken = (token) => ({
  type: GET_USER_WITH_TOKEN,
  token,
});

export const reportError = (error) => ({
  type: REPORT_ERROR,
  error,
});

export const setSignupSuccess = (message) => ({
  type: SIGNUP_SUCCESS,
  message,
});

export const clearAfterSuccess = () => ({
  type: CLEAR_AFTER_SUCCESS,
});

// -------------------Might have to move it later ------------------------------------------
export const sendMessageContact = () => ({
  type: SEND_MESSAGE_CONTACT,

});

export const toggleEditProfile = () => ({
  type: TOGGLE_EDIT_PROFILE,
});

export const setUserChanges = (name, value) => ({
  type: SET_USER_CHANGES,
  name,
  value,
});

export const clearUserChanges = () => ({
  type: CLEAR_USER_CHANGES,
});

export const updateProfile = () => ({
  type: UPDATE_PROFILE,
});

export const requestResetPassword = (email) => ({
  type: REQUEST_RESET_PASSWORD,
  email,
});

export const resetPassword = (token) => ({
  type: RESET_PASSWORD,
  token,
});
