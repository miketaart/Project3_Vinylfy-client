import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css"
import Home from "./components/Home.jsx";
import List from "./components/List.jsx";

export default class App extends Component {
  render() {
    return (
      <div className="App">


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/collection" component={List} />
        </Switch>
      </div>
    );
  }
}
