import React, { Component } from 'react'
import './Home.css';
import { login } from '../utils/auth';

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
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

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLoginClick(e) {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        login(user)
        .then((response) => {
            this.props.history.push("/collection");
        })
        .catch((err) => { console.log('err', err) })

    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form-content">
                    <h1>Log in to your Vinylfy account</h1>

                    <p>Log in to view your vinyl collection and play your favourite records.</p>

                    <form onSubmit={this.handleLoginClick}>
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
                            Log In
                        </button>
                        
                    </form>
                </div>
            </div>
        )
    }
}
