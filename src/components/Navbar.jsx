import React from 'react';
import './../pages/Home.css';
import logo from './../images/logo.png';
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <NavLink to="/collection"><img src={logo} alt="pic" /></NavLink>
                </div>
                <ul className="nav-links">
                    <li>Log in</li>
                    <li>Sign Up</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar; 