import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import logo from './assets/bookr_logo.png'
import Home from "./containers/Bookr/Bookr";
import Login from "./containers/Login/Login";
import BookDetail from "./containers/BookrDetail/BookrDetail";

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
            <img className='logo' src={logo} alt=""/>
            <NavLink to="/" exact>
              Home
            </NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/books/1">Bookr</NavLink>
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

export default App;
