import React from 'react';
import './Home.css';
import SideHero from '../components/sideHero.jsx';
import Header from '../components/header.jsx';
import Signup from './Signup.jsx';

function App() {
  return (
    <div className="App">
      <SideHero />

      <div className="main">
        <Header />
        <Signup />
      </div>
      
    </div>
  );
}

export default App;