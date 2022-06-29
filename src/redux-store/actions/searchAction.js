import api from '../../api/api';
import {urls} from '../../constants/urls';
import {
  FETCHING_SEARCH_DATA,
  SEARCH_DATA_ERROR,
  SEARCH_DATA_SUCCESS,
} from '../types';

export const getSearchList = (searchQuery, page = 0) => {
  return async (dispatch, getState) => {
    dispatch({
      type: FETCHING_SEARCH_DATA,
      payload: true,
    });
    let dataObj = {
      url: `${urls.search}?api_key=26eb4cd002747aa57b291dcf1883e6d2&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`,
      method: 'get',
    };
    try {
      const res = await api(dataObj);
      if (res?.status === 200 && res?.data?.results.length) {
        const {movieList} = getState().search;
        if (page > 1) {
          let tempMovies = [...movieList];
          dispatch({
            type: SEARCH_DATA_SUCCESS,
            payload: {
              result: [...tempMovies, ...res?.data?.results],
              totalPages: res?.data?.total_pages,
            },
          });
        } else {
          dispatch({
            type: SEARCH_DATA_SUCCESS,
            payload: {
              result: res?.data?.results,
              totalPages: res?.data?.total_pages,
            },
          });
        }
      } else {
        dispatch({
          type: SEARCH_DATA_ERROR,
        });
      }
    } catch (err) {
      dispatch({
        type: SEARCH_DATA_ERROR,
      });
    }
  };
};
