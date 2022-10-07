export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';
export const TOGGLE_SEARCHBAR = 'TOGGLE_SEARCHBAR';
export const TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const RESET_MODAL = 'RESET_MODAL';

export const setToggleNavbar = () => ({
  type: TOGGLE_NAVBAR,
});

export const setToggleSearchbar = () => ({
  type: TOGGLE_SEARCHBAR,
});

export const setPasswordVisibility = (newType) => ({
  type: TOGGLE_PASSWORD_VISIBILITY,
  newType,
});

export const toggleModal = (index, value) => ({
  type: TOGGLE_MODAL,
  index,
  value,
});

export const resetModal = () => ({
  type: RESET_MODAL,
});
