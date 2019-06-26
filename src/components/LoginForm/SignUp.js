import React from "react";
import "./LoginForm.scss";
import {NavLink} from 'react-router-dom'

const LoginForm = (props) => {
  return (
    <div className="LoginForm_Container">
        <h2>Register on Bookr</h2>
      <form action="" onSubmit={props.SignUp} >
        <input type="text" placeholder="Name" required/> <br/>
        <input type="email" placeholder="Email" required/> <br />
        <input type="password" placeholder="Password" required/> <br />
        <button>Submit</button>
      </form>
      <span>Already have a Bookr account? <NavLink to="/login">Login</NavLink> </span>
    </div>
  );
};

export default LoginForm;
