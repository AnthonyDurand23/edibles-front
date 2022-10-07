export const TOGGLE_SCAN = 'TOGGLE_SCAN';
export const SCAN_FAILURE = 'SCAN_FAILURE';
export const SCAN_SUCCESS = 'SCAN_SUCCESS';

export const setToggleScan = () => ({
  type: TOGGLE_SCAN,
});

export const setScanFailure = (error) => ({
  type: SCAN_FAILURE,
  error,
});

export const setScanSuccess = () => ({
  type: SCAN_SUCCESS,
});
