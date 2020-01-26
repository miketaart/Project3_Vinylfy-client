import React, { Component } from 'react'
import './Home.css';
import SideHero from '../components/sideHero.jsx';
import Header from '../components/header.jsx';
//import {login} from "../utils/auth";

export default class Login extends Component {

    constructor (props) {
        super(props)
        this.state = {
            userSession: { username: "",
                           password: ""
                },
            error: null
        }
    }

    handleInputChange (e) {
        let userSessionCopy = {...this.state.userSession};
        userSessionCopy[e.target.name] = e.target.value;
        this.setState({
            userSession: userSessionCopy 
        });
    }

    render() {
        debugger
        return (
            <div className="App">
                <SideHero />

                <div className="main">
                    <Header />

                    <div className="form-wrapper">
                        <div className="form-content">
                            <h1>Log in to your Vinylfy account</h1>

                            <p>Log in to view your vinyl collection and play your favourite records.</p>

                            <div className="input-wrapper">
                                <label className="">Username</label>
                                <div className="">
                                    <input 
                                        className=""
                                        onChange={this.handleInputChange}
                                        value={this.state.username} 
                                        name="username" 
                                        type="text" 
                                        placeholder="username"
                                    />
                                </div>
                            </div> 

                            <div className="input-wrapper">
                                <label className="">Password</label>
                                <div className="">
                                    <input 
                                        className="" 
                                        onChange={this.handleInputChange}
                                        value={this.state.password} 
                                        name="password" 
                                        type="password" 
                                        placeholder="password"
                                    />
                                </div>
                            </div>
                            
                            <button 
                                className="form-button"
                                >
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
