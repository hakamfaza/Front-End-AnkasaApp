/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_FAILED } from './types';

export const getDestination = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_PENDING,
      payload: null,
    });

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/destination`);

    dispatch({
      type: GET_USER_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAILED,
      payload: error.message,
    });
  }
};
