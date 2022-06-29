import api from '../../api/api';
import {urls} from '../../constants/urls';
import {
  DASHBOARD_DATA_ERROR,
  DASHBOARD_DATA_SUCCESS,
  FETCHING_DASHBOARD_DATA,
  GENERIC_DATA_SUCCESS,
  GENERIC_DATA_ERROR,
} from '../types';

export const getTrendingList = () => {
  return async dispatch => {
    dispatch({
      type: FETCHING_DASHBOARD_DATA,
      payload: true,
    });
    let dataObj = {
      url: `${urls.trending_list}?api_key=26eb4cd002747aa57b291dcf1883e6d2`,
      method: 'get',
    };
    try {
      const res = await api(dataObj);
      if (res?.status === 200 && res?.data?.results.length) {
        dispatch({
          type: DASHBOARD_DATA_SUCCESS,
          payload: res?.data?.results,
        });
      } else {
        dispatch({
          type: DASHBOARD_DATA_ERROR,
        });
      }
    } catch (err) {
      dispatch({
        type: DASHBOARD_DATA_ERROR,
      });
    }
  };
};

export const getGenericList = () => {
  return async dispatch => {
    dispatch({
      type: FETCHING_DASHBOARD_DATA,
      payload: true,
    });
    let dataObj = {
      url: `${urls.generic_list}?api_key=26eb4cd002747aa57b291dcf1883e6d2`,
      method: 'get',
    };
    try {
      const res = await api(dataObj);
      if (res?.status === 200 && res?.data?.genres) {
        dispatch({
          type: GENERIC_DATA_SUCCESS,
          payload: res?.data?.genres,
        });
      } else {
        dispatch({
          type: GENERIC_DATA_ERROR,
        });
      }
    } catch (err) {
      dispatch({
        type: GENERIC_DATA_ERROR,
      });
    }
  };
};

export const getDetails = async movieId => {
  let data = {
    url: `${urls.details}/${movieId}?api_key=26eb4cd002747aa57b291dcf1883e6d2`,
    method: 'get',
  };
  try {
    const res = await api(data);
    if (res?.status === 200) {
      return res?.data;
    }
  } catch (err) {
    console.log(err);
  }
};
