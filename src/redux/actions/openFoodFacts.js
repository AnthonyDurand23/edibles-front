export const SET_CURRENT_SEARCH_API = 'SET_CURRENT_SEARCH_API';
export const RESET_CURRENT_SEARCH_API = 'RESET_CURRENT_SEARCH_API';
export const SET_RESULT_FROM_OFF_API = 'SET_RESULT_FROM_OFF_API';
export const SET_LOADING_OFF_API = 'SET_LOADING_OFF_API';

export const setCurrentSearchApiValue = (search) => ({
  type: SET_CURRENT_SEARCH_API,
  search,
});

export const resetCurrentSearchApiValue = () => ({
  type: RESET_CURRENT_SEARCH_API,
});

export const setResultFromOffApi = (results) => ({
  type: SET_RESULT_FROM_OFF_API,
  results,
});

export const setLoadingOffApi = () => ({
  type: SET_LOADING_OFF_API,
});
