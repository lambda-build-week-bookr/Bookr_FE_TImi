import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUp from "../../components/LoginForm/SignUp";
import "./Login.scss";

class login extends Component {
  render() {
    console.log(this.props.history.location.pathname)
    return (
      <div className="Login_section">
        {this.props.history.location.pathname === "/login" ? (
          <LoginForm />
        ) : (
          <SignUp />
        )}
      </div>
    );
  }
}

export default login;
