import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();

        fetch('http://localhost:3000/auth_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                email: this.state.username,
                password: this.state.password
            },
        }).then((response) => {return response.json()})
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <label>User Name</label>
                    <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

                    <label>Password</label>
                    <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

                    <input type="submit" value="Log In" data-test="submit" />
                </form>
            </div>
        );
    }
}

export default Login