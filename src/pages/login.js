import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Mr.JOHN'
        }
    }

    onLogin() {
        this.setState({
            username: 'Miss.Jimmy'
        })
    }

    render() {
        return (
            <div>
                <h3 className="message">Welcome to Login Page, {this.state.username}</h3>
                <label>Enter your Email:</label>
                <input type="text" placeholder="Enter your email.." />
                <br></br>
                <label>Enter your Password:</label>
                <input type="password" placeholder="Enter your password" />
                <br></br>
                <button onClick={() => this.onLogin()}>Login</button>
            </div>
        );
    }
}

export default Login;