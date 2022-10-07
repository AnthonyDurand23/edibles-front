import {
  SET_CURRENT_SEARCH_API,
  RESET_CURRENT_SEARCH_API,
  SET_RESULT_FROM_OFF_API,
  SET_LOADING_OFF_API,
} from '../actions/openFoodFacts';

const initialState = {
  search: '',
  results: [],
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_SEARCH_API:
      return {
        ...state,
        search: action.search,
      };
    case RESET_CURRENT_SEARCH_API:
      return {
        ...state,
        search: '',
      };
    case SET_RESULT_FROM_OFF_API:
      return {
        ...state,
        results: action.results,
      };
    case SET_LOADING_OFF_API:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

export default reducer;
