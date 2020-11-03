import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            job: '',
            user: {}
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmitForm(){
        console.log(this.state)
        let url = "https://reqres.in/api/users/2";
        axios.put(url, this.state)
            .then((response) => {
                console.log(response)
                this.setState({
                    user : response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onDelete(){
        let url = "https://reqres.in/api/users/2";
        axios.delete(url)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h2>Update the User Information</h2>
                <label>Enter username:</label>
                <input type="text" placeholder="Enter username" name="name" onChange={this.handleInput}></input>
                <br></br>
                <label>Enter job description:</label>
                <input type="text" placeholder="Enter job description" name="job" onChange={this.handleInput}></input>
                <br></br>
                <button onClick={() => this.onSubmitForm()}>Update</button>
                <button onClick={() => this.onDelete()}>DELETE</button>
                <br></br>
        <h2>{this.state.user.updatedAt}</h2>
            </div>
        );
    }
}

export default Update;