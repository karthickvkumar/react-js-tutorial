import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onLogin(){
        console.log(this.state)
    }

    render() {
        return (
            <div>
                {/* <h3 className="message">Welcome to Login Page, {this.state.username}</h3> */}
                <label>Enter your Email:</label>
                <input type="text" placeholder="Enter your email.." name="username" onChange={this.handleInput}/>
                <br></br>
                <label>Enter your Password:</label>
                <input type="password" placeholder="Enter your password" name="password" onChange={this.handleInput}/>
                <br></br>
                <button onClick={() => this.onLogin()}>Login</button>
                <div>
                    <h3>The user email is {this.state.username}</h3>
                    <h3>The user password is {this.state.password}</h3>
                </div>
            </div>
        );
    }
}

export default Login;