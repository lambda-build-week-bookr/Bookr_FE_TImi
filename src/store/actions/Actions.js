import axios from "axios";
import * as actionTypes from "./ActionsTypes";

export const LoginAction = (payload, history) => dispatch => {
  axios
    .post("https://api-bookr.herokuapp.com/api/auth/login", payload)
    .then(res => {
      console.log(res.data)
      localStorage.setItem("token", res.data.user.token);
      dispatch(success(res.data.status));
      dispatch(logIn(true));
      setTimeout(() => {
        history.push("/");
      }, 3000);
    })
    .catch(err => {
      dispatch(failure(err.message));
    });
};
export const SignUpAction = (payload, history) => dispatch => {
  axios
    .post("https://api-bookr.herokuapp.com/api/auth/register", payload)
    .then(res => {
      localStorage.setItem("token", res.data.user.token);
      dispatch(success(res.data.status));
      dispatch(logIn(true));
      setTimeout(() => {
        history.push("/");
      }, 3000);
    })
    .catch(err => {
      dispatch(failure(err.message));
    });
};
export const getAllBooksAction = () => dispatch => {
  axios
    .get("https://api-bookr.herokuapp.com/api/books", {
      'headers': {
        'Authorization': localStorage.getItem("token")
      }
    })
    .then(res => {
      console.log(res.data)
      // dispatch({type: actionTypes.GETALLBOOKS, payload: res.data});
      dispatch(logIn(true));
    })
    .catch(err => {
      dispatch(failure(err.message));
    });
};

export const logIn = payload => {
  return {
    type: actionTypes.LOGIN,
    payload
  };
};

export const failure = payload => {
  return {
    type: actionTypes.FAILURE,
    payload
  };
};
export const success = payload => {
  return {
    type: actionTypes.SUCCESS,
    payload
  };
};
