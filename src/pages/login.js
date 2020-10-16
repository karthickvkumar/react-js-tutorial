import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            icon: true,
            passwordType: 'password'
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
                <br></br>
                <label>Enter your Password:</label>
                <input type={this.state.passwordType} placeholder="Enter your password" name="password" onChange={this.handleInput}/>

                {this.state.icon ? <img src={require("../images/open-eye.png")} className="open-eye" onClick={() => this.toggleIcon()}/> : 
                <img src={require("../images/close-eye.jpg")} className="close-eye" onClick={() => this.toggleIcon()}/>}

                <br></br>
                <button onClick={() => this.onLogin()}>Login</button>
                { age < 20 ? <div>
                    <h3>The user email is {this.state.username}</h3>
                    <h3>The user password is {this.state.password}</h3>
                </div> : 
                <h3>The condition fails!</h3>}

                
            </div>
        );
    }
}

export default Login;