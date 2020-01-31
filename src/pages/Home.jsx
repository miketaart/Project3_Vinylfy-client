import React from 'react';
import './Home.css';
import SideHero from '../components/sideHero.jsx';
import Header from '../components/header.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <div className="home-wrapper">
        <SideHero />

        <div className="main">
          <Header />
          <Route path="/auth/signup" component={Signup} />
          <Route path="/auth/login" component={Login} />
        </div>
      </div>
    </div>
  );
}

export default App;