import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            dob: '',
            gender: '',
            hobbies: [],
            address: '',
            state: ''
        }
    }

    handleInput = (event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Welcome to Registar Page</h3>
                <label>Enter your First Name:</label>
                <input type="text" placeholder="Enter first name" name="firstName" onChange={this.handleInput}/>
                <br></br>
                <label>Enter your Last Name:</label>
                <input type="text" placeholder="Enter last name" name="lastName" onChange={this.handleInput}/>
                <br></br>
                <label>Enter your Email:</label>
                <input type="text" placeholder="Enter email" name="email" onChange={this.handleInput}/>
                <br></br>
                <label>Enter your Password:</label>
                <input type="password" placeholder="Enter password" name="password" onChange={this.handleInput}/>
                <br></br>
                <label>Enter Date of Birth:</label>
                <input type="date" onChange={this.handleInput} name="dob"/>
                <br></br>
                <label>Select your Gender:</label>
                <input type="radio" value="male" name="gender"/>Male
                <input type="radio" value="female" name="gender"/>Female
                <input type="radio" value="others" name="gender"/>Others
                <br></br>
                <label>Select your Hobbies:</label>
                <input type="checkbox" value="cricket" name="hobbies"/>Cricket
                <input type="checkbox" value="football" name="hobbies"/>Football
                <input type="checkbox" value="hockey" name="hobbies"/>Hockey
                <input type="checkbox" value="chess" name="hobbies"/>Chess
                <br></br>
                <label>Enter your Address:</label>
                <textarea placeholder="Enter address" name="address" onChange={this.handleInput}></textarea>
                <br></br>
                <label>Select your State:</label>
                <select defaultValue={''}>
                    <option value='' disabled>Please select any one state</option>
                    <option value='Tamil Nadu'>Tamil Nadu</option>
                    <option value='Kerala'>Kerala</option>
                    <option value='Andra Pradesh'>Andra Pradesh</option>
                    <option value='Karnataka'>Karnataka</option>
                    <option value='Uttra Pradesh'>Uttra Pradesh</option>
                    <option value='Delhi'>Delhi</option>
                </select>
                <br></br>
                <div>
                    <h3>The user first name is {this.state.firstName}</h3>
                    <h3>The user last name is {this.state.lastName}</h3>
                    <h3>The user email is {this.state.email}</h3>
                    <h3>The user dob is {this.state.dob}</h3>
                    <h3>The user password is {this.state.password}</h3>
                    <h3>The user address is {this.state.address}</h3>
                </div>

            </div>
        );
    }
}

export default Register;