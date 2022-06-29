import {
  SEARCH_DATA_ERROR,
  SEARCH_DATA_SUCCESS,
  FETCHING_SEARCH_DATA,
} from '../types';

const initialState = {
  isSearching: true,
  searchList: [],
  totalPages: 0,
};

export const searchReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FETCHING_SEARCH_DATA:
      return {...state, isSearching: payload};

    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        isSearching: false,
        searchList: payload.result,
        totalPages: payload.totalPages,
      };

    case SEARCH_DATA_ERROR:
      return {...state, isSearching: false, searchList: [], totalPages: 0};

    default:
      return state;
  }
};
