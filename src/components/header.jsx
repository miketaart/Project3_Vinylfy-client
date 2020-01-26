import React from 'react';
import './../pages/Home.css';
import logo from './../images/logo.png';

function Header() {
    return (
        <div className="header">
            <nav>
                <div className="logo">
                    <img src={logo} alt="pic" />
                </div>
                <ul className="nav-links">
                    <li>Log in</li>
                    <li>Sign Up</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header; 