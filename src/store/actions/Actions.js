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
      dispatch({type: actionTypes.GETALLBOOKS, payload: res.data.books});
      dispatch(success(res.data.status));
    })
    .catch(err => {
      dispatch(failure(err.message));
    });
};
export const getOneBooksAction = (id) => dispatch => {
  axios
    .get("https://api-bookr.herokuapp.com/api/books/"+ id, {
      'headers': {
        'Authorization': localStorage.getItem("token")
      }
    })
    .then(res => {
      dispatch({type: actionTypes.GETONEBOOK, payload: res.data.book});
      dispatch(success(res.data.status));
    })
    .catch(err => {
      dispatch(failure(err.message));
    });
};
export const addReviewAction = (data, id) => dispatch => {
  axios
    .post("https://api-bookr.herokuapp.com/api/reviews/"+ id, data, {
      'headers': {
        'Authorization': localStorage.getItem("token")
      }
    })
    .then(res => {
      console.log(res.data)
      // dispatch({type: actionTypes.GETONEBOOK, payload: res.data.book});
      // dispatch(success(res.data.status));
    })
    .catch(err => {
      dispatch(failure(err.message));
    });
};
export const logOutAction = () => dispatch => {
  localStorage.clear()
  dispatch(logIn(false));
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
