import React from 'react';
import './../pages/Home.css';
import heroImg from './../images/hero-img.jpg';

function SideHero() {
    return (
        <div className="hero-wrapper">
            <img src={heroImg} alt="pic" />

            <div className="hero-text">
                <h1 className="hero-h1">View and play</h1><br></br>
                <h1 className="hero-h1">your vinyl collection</h1>
            </div>

        </div>
    );
}

export default SideHero; 