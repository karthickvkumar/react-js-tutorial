import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            userList : []
        }
    }

    listUser(){
        let url = 'https://reqres.in/api/users?page=2';
        axios.get(url)
            .then((response) => {
                console.log(response.data.data)
                this.setState({
                    userList: response.data.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    
    render() {
        let users = this.state.userList.map((value, index) => {
            return(
                <div key={index}>
                    <h2>The User first name is {value.first_name}</h2>
                    <h2>The User last name is {value.last_name}</h2>
                    <h2>The User email id is {value.email}</h2>
                    <h2>-------------------------</h2>
                </div>
            )
        })
        return (
            <div>
                <h2>User Profile Page</h2>
                <button onClick={() => this.listUser()}>Load User Profile</button>
                <br></br>
                {users}
            </div>
        );
    }
}

export default UserProfile;