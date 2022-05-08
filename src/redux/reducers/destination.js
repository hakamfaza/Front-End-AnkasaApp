/* eslint-disable default-param-last */
import { GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_FAILED } from '../actions/types';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: null,
};

const destinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PENDING:
      return { ...state, isLoading: true };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default destinationReducer;
