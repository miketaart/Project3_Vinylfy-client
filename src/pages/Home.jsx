import React from 'react';
import './Home.css';
import SideHero from '../layout/sideHero.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import { Route } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'
import {getUser} from '../utils/auth.jsx'
import ReactPlayer from 'react-player'

function App(props) {
  let user = getUser()
  return (
  
      <div className="App">
      <div className="home-wrapper">
        <SideHero />

        <div className="main">
          <Navbar />
          
          <Route path="/auth/signup" component={Signup} />
          <Route path="/auth/login" component={Login} />
        </div>
      </div>
    </div>
    
    
  );
}

export default App;