import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'mr.john',
            age: 25
        }
    }

    render() {
        return (
            <div>
                <h3>This is a Login Page!</h3>
                <h3>The username is {this.state.username}</h3>
                <h3>The user age is {this.state.age}</h3>
            </div>
        );
    }
}

export default Login;