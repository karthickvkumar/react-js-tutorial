import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            job: '',
            user: {}
        }
    }
    submitForm(){
        console.log(this.state);
        let url = "https://reqres.in/api/users";
        axios.post(url, this.state)
            .then((response) => {
                console.log(response)
                this.setState({
                    user: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>This is a Post Page</h2>
                <label>Enter Your Name:</label>
                <input type="text" placeholder="Enter your name.." name="name" onChange={this.handleChange}/>
                <br></br>
                <label>Enter Your Job Description:</label>
                <input type="text" name="job" placeholder="Enter your job.." onChange={this.handleChange}/>
                <br></br>
                <button onClick={() => this.submitForm()}>Submit</button>
        <h2>{this.state.user.name}</h2>
        <h2>{this.state.user.job}</h2>
        <h2>{this.state.user.id}</h2>
        <h2>{this.state.user.createdAt}</h2>
            </div>
        );
    }
}

export default Post;