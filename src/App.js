import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import Home from "./containers/Bookr/Bookr";
import Login from "./containers/Login/Login";

class App extends Component {
  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          localStorage.getItem("token") !== null ? (
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
            <NavLink to="/" exact>
              Home
            </NavLink>
            <NavLink to="/login">Login</NavLink>
          </header>
          <Switch>
            <PrivateRoute component={Home} path="/" exact />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Login} />
            <Redirect from="*" to="/login" />
          </Switch>
          <Route />
        </Router>
      </div>
    );
  }
}

export default App;
