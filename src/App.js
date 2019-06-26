import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from "./containers/Bookr/Bookr";
import Login from "./containers/Login/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className='NavHeader'>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/login">Login</NavLink>
          </header>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Login} />
          </Switch>
          <Route />
        </Router>
      </div>
    );
  }
}

export default App;
