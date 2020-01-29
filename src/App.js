import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home.jsx";
import Collection from "./pages/Collection.jsx";
//import Signup from "./pages/Signup.jsx";
//import Login from "./pages/Login.jsx";
import Tracklist from "./components/Tracklist.jsx";
import Wantlist from "./pages/Wantlist.jsx";

//import testApi from "./pages/testApi.jsx"; //TESTAPI
//import getTracks from "./pages/getTracks.jsx";
export default class App extends Component {


  render() {
    return (
      <div className="App">

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/collection" component={Collection} />
          <Route path="wantlist" component={Wantlist} />
          <Route path="/auth/" component={Home} />
          <Route path="/tracklist" component={Tracklist} />


        </Switch>
      </div>
    );
  }
}
