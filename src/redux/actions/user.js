import axios from "axios";
import {
<<<<<<< HEAD
  GET_DETAIL_USER_PENDING,
  GET_DETAIL_USER_SUCCESS,
  GET_DETAIL_USER_FAILED,
=======
  GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_FAILED,
  GET_DETAIL_USER_PENDING, GET_DETAIL_USER_SUCCESS, GET_DETAIL_USER_FAILED
>>>>>>> master
} from "./types";

export const getDetailUser = (id, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    dispatch({
      type: GET_DETAIL_USER_PENDING,
      payload: null,
    });

<<<<<<< HEAD
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/${id}`,
      {
        headers: { token },
      }
    );
=======
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
>>>>>>> master

    dispatch({
      type: GET_DETAIL_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      if (parseInt(error.response.data.code, 10) === 401) {
        localStorage.clear();
        return navigate("/");
      }

      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_DETAIL_USER_FAILED,
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


