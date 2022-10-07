import {
  TOGGLE_NAVBAR, TOGGLE_SEARCHBAR, TOGGLE_PASSWORD_VISIBILITY, TOGGLE_MODAL, RESET_MODAL,
} from '../actions/interface';

export const initialState = {
  isNavbarOpen: false,
  isSearchBarOpen: false,
  passwordFieldType: 'password',
  isModalOpen: {},
};

const interfaceReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        isNavbarOpen: !state.isNavbarOpen,
      };
    case TOGGLE_SEARCHBAR:
      return {
        ...state,
        isSearchBarOpen: !state.isSearchBarOpen,
      };
    case TOGGLE_PASSWORD_VISIBILITY:
      return {
        ...state,
        passwordFieldType: action.newType,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: { [action.index]: action.value },
      };
    case RESET_MODAL:
      return {
        ...state,
        isModalOpen: {},
      };
    default:
      return state;
  }
};

export default interfaceReducer;
