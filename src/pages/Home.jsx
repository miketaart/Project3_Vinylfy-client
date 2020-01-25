import React from 'react';
import './Home.css';
import SideHero from '../components/sideHero.jsx';
import Header from '../components/header.jsx';
import Signup from './Signup.jsx';

function App() {
  return (
    <div className="App">
      <SideHero />
      <Header />
      <Signup />
    </div>
  );
}

export default App;
