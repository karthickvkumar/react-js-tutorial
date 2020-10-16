import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            icon: true,
            passwordType: 'password',
            usernameError: false,
            passwordError: false
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onLogin(){
        console.log(this.state.username, this.state.password)
        this.setState({
            usernameError : this.state.username == '' ? true : false,
            passwordError : this.state.password == '' ? true : false
         })
    }

    toggleIcon(){
        this.setState({
            icon : !this.state.icon,
            passwordType : this.state.icon ? 'text' : 'password'
        })
    }

    render() {
        let message = "Welcome to Loin page";
        let age = 30;
        return (
            <div>
               <h3>{message}</h3>
                <label>Enter your Email:</label>
                <input type="text" placeholder="Enter your email.." name="username" onChange={this.handleInput}/>
                { this.state.usernameError && <span className="error">Please enter the email value</span>}
                <br></br>
                <label>Enter your Password:</label>
                <input type={this.state.passwordType} placeholder="Enter your password" name="password" onChange={this.handleInput}/>
                {this.state.icon ? <img src={require("../images/open-eye.png")} className="open-eye" onClick={() => this.toggleIcon()}/> : 
                <img src={require("../images/close-eye.jpg")} className="close-eye" onClick={() => this.toggleIcon()}/>}
                {this.state.passwordError && <span className="error">Please enter the password value</span>}

                <br></br>
                <button onClick={() => this.onLogin()}>Login</button>
                
            </div>
        );
    }
}

export default Login;