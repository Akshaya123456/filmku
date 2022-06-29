import {
  DASHBOARD_DATA_ERROR,
  DASHBOARD_DATA_SUCCESS,
  FETCHING_DASHBOARD_DATA,
  GENERIC_DATA_SUCCESS,
  GENERIC_DATA_ERROR,
} from '../types';

const initialState = {
  isFetching: true,
  movieList: [],
  genericData: {},
};

export const dashboardReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FETCHING_DASHBOARD_DATA:
      return {...state, isFetching: true};
    case DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movieList: payload,
      };
    case DASHBOARD_DATA_ERROR:
      return {...state, isFetching: false, movieList: []};

    case GENERIC_DATA_SUCCESS:
      let generic = {};
      payload.map(item => {
        generic[item.id] = item.name;
        return item;
      });
      return {
        ...state,
        isFetching: true,
        genericData: generic,
      };
    case GENERIC_DATA_ERROR:
      return {...state, isFetching: false, genericData: {}};

    default:
      return state;
  }
};
