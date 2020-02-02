import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
import Tracklist from "./components/Tracklist.jsx";


export default class App extends Component {


  render() {
    return (
      
      <div className="App">

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth/" component={Home} />
          <Route path="/collection" component={Collection} />
          <Route path="/tracklist" component={Tracklist} />
        </Switch>
      </div>
    );
  }
}
