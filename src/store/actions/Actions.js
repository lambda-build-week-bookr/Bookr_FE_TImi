import axios from "axios";
import * as actionTypes from './ActionsTypes'

export const LoginAction = (payload, history) => dispatch =>{
    axios
    .post("https://api-bookr.heroku.com/api/auth/login", payload)
    .then(res => {
        console.log(res.data)
    //   localStorage.setItem("token", res.data);
      dispatch(logIn(true));
    //   history.push('/')
    })
    .catch(err => {
      dispatch(failure(err.message));
    });
}


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

