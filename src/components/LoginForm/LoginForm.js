import React from "react";
import "./LoginForm.scss";
import {NavLink} from 'react-router-dom'


const LoginForm = (props) => {
  return (
    <div className="LoginForm_Container">
        <h2>Login to Bookr</h2>
      <form action="" onSubmit={props.Login}>
        <input type="email" placeholder="Email" required/> <br />
        <input type="password" placeholder="Password" required/> <br />
        <button>Submit</button>
      </form>
      <span>Don’t have an account? <NavLink to="/signup">Register</NavLink> </span>
    </div>
  );
};

export default LoginForm;
