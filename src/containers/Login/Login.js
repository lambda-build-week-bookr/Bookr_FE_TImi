import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUp from "../../components/LoginForm/SignUp";
import "./Login.scss";

class login extends Component {
  render() {
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
