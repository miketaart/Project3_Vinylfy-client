import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Tracklist from "./pages/Tracklist.jsx";

export default class App extends Component {
  render() {
    return (
      <div className="App">


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/collection" component={Collection} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/signup" component={Signup} />
          <Route path="/collection/tracklist" component={Tracklist} />
          
        </Switch>
      </div>
    );
  }
}
