import React, { Component } from 'react'

export default class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInStatus: "logged out",
            user: {}
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogoutClick(e) {

        axios.delete('http://localhost:8000/auth/logout')
            .then((response) => {
                this.handleLogout();
            })
            .catch((error) => {
                console.log("logout error", error)
            })
    }

    handleLogout() {
        this.setState = {
            loggedInstatus: "logged out",
            user: {}
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
