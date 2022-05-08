import axios from "axios";
import {
  GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_FAILED,
  GET_DETAIL_USER_PENDING, GET_DETAIL_USER_SUCCESS, GET_DETAIL_USER_FAILED
} from "./types";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_PENDING,
      payload: null,
    });

    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
      type: GET_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAILED,
      payload: error.message,
    });
  }
};


export const getDetailUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")

    console.log(token, id)

    dispatch({
      type: GET_DETAIL_USER_PENDING,
      payload: null,
    });

    const res = await axios.get(`http://localhost:5001/user/${id}`, {
      headers: {
        token: token
      }
    })

    dispatch({
      type: GET_DETAIL_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_DETAIL_USER_FAILED,
      payload: error.message,
    });
  }
};

export const updateUser = (body) => {
  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")

  // console.log(body)

  return new Promise((resolve, reject) => {
    axios.put(`http://localhost:5001/user/${id}`, body, {
      headers: {
        token: token
      }
    })
      .then((response) => {
        // resolve(response.data)
        console.log(response)
      })
      .catch((err) => {
        // reject(err)
        console.log(err)
      })
  })
};


