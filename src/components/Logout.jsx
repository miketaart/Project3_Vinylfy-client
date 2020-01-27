import React, { Component } from 'react'
import {Redirect } from "react-router-dom";
import { logout } from "../utils/auth";

export default class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navigate: false
        }
    }

    logout()
    
    render() {
        const { navigate } = this.state;

        if(navigate) {
            return (
            <Redirect to="/" push={true}/>
            )
        }

        return (
        <Button onClick={this.logout}> Log out</Button>
        )
        
    }
}
