import React, { Component } from 'react';
import { withRouter } from "react-router-dom" 
import { signup } from "../utils/auth";


class Signup extends Component {

    constructor(props) {
        super(props)

        this.handleSignupClick = this.handleSignupClick.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: "",
            username: "",
            password: "",
            error: null
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSignupClick(e) {
        e.preventDefault();

        const user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        signup(user)
        .then((response) => {
            this.props.history.push("/collection");
        })
        .catch((err) => { console.log('err', err) })
    }

    render() {

        return (
            <div className="form-wrapper">
                <div className="form-content">
                    <h1>Create a Vinylfy account</h1>

                    <p>Sign up, import your vinyl collection and start listening to your favourite records.</p>
                    <form onSubmit={this.handleSignupClick}>
                        <div className="input-wrapper">
                            <label className="">Email</label>
                            <div className="">
                                <input
                                    className=""
                                    onChange={this.onChangeEmail}
                                    value={this.state.email}
                                    name="email"
                                    type="text"
                                    placeholder="email"
                                />
                            </div>
                        </div>

                        <div className="input-wrapper">
                            <label className="">Username</label>
                            <div className="">
                                <input
                                    className=""
                                    onChange={this.onChangeUsername}
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
                                    onChange={this.onChangePassword}
                                    value={this.state.password}
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                />
                            </div>
                        </div>

                        <button className="form-button" type="submit">
                            Sign Up
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup); 