import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import logo from "./assets/bookr_logo.png";
import Home from "./containers/Bookr/Bookr";
import Login from "./containers/Login/Login";
import BookDetail from "./containers/BookrDetail/BookrDetail";
import { logOutAction } from "./store/actions/Actions";

class App extends Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.login !== false ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
    return (
      <div className="App">
        <Router>
          <header className="NavHeader">
          <Link to="/"> <img className="logo" src={logo} alt="" /> </Link>
            <div>
              <NavLink to="/" exact>
                Home
              </NavLink>
              
              {this.props.login ? (
                <Link to="/logins" onClick={this.props.logOutAction}>
                  Logout
                </Link>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
                
            </div>
          </header>
          <Switch>
            <PrivateRoute component={Home} path="/" exact />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Login} />
            <PrivateRoute path="/books/:id" exact component={BookDetail} />
            <Redirect from="*" to="/login" />
          </Switch>
          <Route />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  };
};
export default connect(
  mapStateToProps,
  { logOutAction }
)(App);
