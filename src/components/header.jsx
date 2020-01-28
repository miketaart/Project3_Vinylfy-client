import React from 'react';
import './../pages/Home.css';
import logo from './../images/logo.png';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <nav>
                <div className="logo">
                    <NavLink to="/"><img src={logo} alt="pic" /></NavLink>
                </div>
                <ul className="nav-links">
                    <li><NavLink to="/auth/login" activeClassName="selected">Log in</NavLink></li>
                    <li><NavLink to="/auth/signup" activeClassName="selected">Sign up</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header; 