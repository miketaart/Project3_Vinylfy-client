import React, { Component } from 'react'
//import DefaultLayout from "../layout/Default";
//import Form from "../layout/Form";
import {signup} from "../utils/auth";

export default class Signup extends Component {

    constructor (props) {
        super(props)
        this.state = {
            user: { username: "",
                    email: "",
                    password: ""
                },
            error: null
        }
    }

    handleInputChange (e) {
        let userCopy = {...this.state.user};
        userCopy[e.target.name] = e.target.value;
        this.setState({
            user: userCopy 
        });
    }

    handleSignupClick(){
        signup(this.state.user)
        .then((response)=> {
            this.setState({
                error: null
            }, ()=> {
                this.props.history.push("/user/profile")
            })
        })
        .catch((error)=> {
            this.setState({error: error.response && error.response.data})
        })
    }

    render() {
        debugger
        return (
        <div className="form-wrapper">
            <div className="form-content">
                <h1>Create a Vinylfy account</h1>

                <p>Sign up, import your vinyl collection and start listening to your favourite records.</p>

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
                    <label className="">Email</label>
                    <div className="">
                        <input 
                            className=""
                            onChange={this.handleInputChange}
                            value={this.state.email}  
                            name="email" 
                            type="text" 
                            placeholder="email"
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
                    Sign Up
                </button>
            </div>
        </div>
        )
    }
}
