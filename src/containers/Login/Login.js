import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUp from "../../components/LoginForm/SignUp";
import "./Login.scss";
import { connect } from "react-redux";
import { LoginAction } from "../../store/actions/Actions";

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
    console.log(data)
    //this.props.SignUpAction(data, this.props.history);
  };
  render() {
    const message =
      this.props.success === null ? (
        <p>{this.props.success}</p>
      ) : (
        <p>{this.props.failure}</p>
      );
      console.log(this.props.success)
    return (
      <div className="Login_section">
        {message}
        {this.props.history.location.pathname === "/login" ? (
          <LoginForm Login={this.LoginHandler} />
        ) : (
          <SignUp SignUp={this.SignUpHandler} />
        )}
      </div>
    );
  }
}

// export default login;

const mapStateToProps = state => {
  return {
    failure: state.failure,
    success: state.success
  };
};
export default connect(
  mapStateToProps,
  { LoginAction }
)(login);
