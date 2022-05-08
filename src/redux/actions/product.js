import axios from 'axios';
import {
  GET_PRODUCT_PENDING,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
} from './types';

export const getListProduct = (url, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');

    dispatch({
      type: GET_PRODUCT_PENDING,
      payload: null,
    });

    const res = await axios.get(url, {
      headers: { token },
    });

    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      if (parseInt(error.response.data.code, 10) === 401) {
        localStorage.clear();
        return navigate('/');
      }

      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_PRODUCT_FAILED,
      payload: error.message,
    });
  }
};

