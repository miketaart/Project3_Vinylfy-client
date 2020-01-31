import React from 'react';
import './../pages/Home.css';
import logo from './../images/logo.png';
import { NavLink } from "react-router-dom";
import {getUser} from "../utils/auth";
import {Fragment} from "react";

const Header = () => {
    let user = getUser()
    return (
        <Fragment>
        <div>
            <nav className="header">
                <div className="logo">
                    <NavLink to="/"><img src={logo} alt="pic" /></NavLink>
                </div>
                <ul className="nav-links">
                    <li><NavLink to="/auth/login" activeClassName="selected">Log in</NavLink></li>
                    <li><NavLink to="/auth/signup" activeClassName="selected">Sign up</NavLink></li>
                </ul>
            </nav>
        </div>
        </Fragment>
    );
}

export default Header; 