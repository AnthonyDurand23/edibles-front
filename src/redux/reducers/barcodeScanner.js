import { TOGGLE_SCAN, SCAN_FAILURE, SCAN_SUCCESS } from '../actions/scanner';

export const initialState = {
  isScanning: false,
  hasScanFailed: false,
  scanError: '',
};

const barcodeScannerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SCAN:
      return {
        ...state,
        isScanning: !state.isScanning,
      };
    case SCAN_FAILURE:
      return {
        ...state,
        hasScanFailed: true,
        scanError: action.error,
      };
    case SCAN_SUCCESS:
      return {
        ...state,
        isScanning: false,
        hasScanFailed: false,
        scanError: '',
      };
    default:
      return state;
  }
};

export default barcodeScannerReducer;
