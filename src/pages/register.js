import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Welcome to Registar Page'
        }
    }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
            </div>
        );
    }
}

export default Register;