import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css"
//import "./Collection.css"
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Tracklist from "./pages/Tracklist.jsx";

import testApi from "./pages/testApi.jsx"; //TESTAPI

export default class App extends Component {


  render() {
    return (
      <div className="App">

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/collection" component={Collection} />
          <Route path="/auth/" component={Home} />
          <Route path="/collection/tracklist" component={Tracklist} />

          <Route path="/testApi" exact component={testApi} />

        </Switch>
      </div>
    );
  }
}
