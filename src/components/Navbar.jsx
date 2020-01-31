import React, { Component } from 'react';
import './../pages/Home.css';
import logo from './../images/logo.png';
import { NavLink, withRouter } from "react-router-dom"
import axios from "axios";

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        axios.delete('http://localhost:8000/auth/logout')
            .then((response) => {
                this.props.history.push("/");
            })
            .catch((error) => {
                console.log("logout error", error)
            })
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="logo">
                        <NavLink to="/collection"><img src={logo} alt="pic" /></NavLink>
                    </div>
                    <ul className="nav-links">
                        <li>Import</li>
                        <li><a href="#" onClick={this.handleLogout}>Log out</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}


export default withRouter(Navbar); 