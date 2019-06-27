import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUp from "../../components/LoginForm/SignUp";
import "./Login.scss";
import { connect } from "react-redux";
import { LoginAction, SignUpAction } from "../../store/actions/Actions";
import ErrorMessage from "../../components/Message/ErrorMessage";
class login extends Component {
  
  LoginHandler = e => {
    e.preventDefault();
    const data = {
      email: e.currentTarget[0].value,
      password: e.currentTarget[1].value
    };
    this.props.LoginAction(data, this.props.history);
  };
  SignUpHandler = e => {
    e.preventDefault();
    const data = {
      email: e.currentTarget[1].value,
      password: e.currentTarget[2].value,
      username: e.currentTarget[0].value
    };
    console.log(data);
    this.props.SignUpAction(data, this.props.history);
  };
  textPasswordHandler = e => {
    const x = e.currentTarget.form[1];
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  render() {
    return (
      <div className="Login_section">
        <ErrorMessage />
        {this.props.history.location.pathname === "/login" ? (
          <LoginForm
            Login={this.LoginHandler}
            textPassword={this.textPasswordHandler}
          />
        ) : (
          <SignUp SignUp={this.SignUpHandler} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    failure: state.failure,
    success: state.success
  };
};
export default connect(
  mapStateToProps,
  { LoginAction, SignUpAction }
)(login);
