import React, { Component } from 'react';

class ListPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            userList : [
                {
                    "id": 7,
                    "email": "michael.lawson@reqres.in",
                    "first_name": "Michael",
                    "last_name": "Lawson",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
                },
                {
                    "id": 8,
                    "email": "lindsay.ferguson@reqres.in",
                    "first_name": "Lindsay",
                    "last_name": "Ferguson",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
                },
                {
                    "id": 9,
                    "email": "tobias.funke@reqres.in",
                    "first_name": "Tobias",
                    "last_name": "Funke",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
                },
                {
                    "id": 10,
                    "email": "byron.fields@reqres.in",
                    "first_name": "Byron",
                    "last_name": "Fields",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
                },
                {
                    "id": 11,
                    "email": "george.edwards@reqres.in",
                    "first_name": "George",
                    "last_name": "Edwards",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
                },
                {
                    "id": 12,
                    "email": "rachel.howell@reqres.in",
                    "first_name": "Rachel",
                    "last_name": "Howell",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
                }
            ],
            username: 'Mr.Tom',
            age: 22,
            address: {
                street: 'ECR Road',
                state: 'Chennai'
            }
    
        }
    }
    render() {
        let userInformation = this.state.userList.map((value, inidex) => {
            return(
                <tr key={inidex}>
                    <td>{value.first_name}</td>
                    <td>{value.last_name}</td>
                    <td>
                        <img src={value.avatar}/>
                    </td>
                    <td>{value.email}</td>
                </tr>
            )
        }) 
        return (
            <div>
                <h2>This is a List Page</h2>
                <h2>{this.state.username}</h2>
                <h2>{this.state.age}</h2>
                <h2>{this.state.address.street}</h2>
                <h2>{this.state.address.state}</h2>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Profile Picture</th>
                            <th>Email Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userInformation}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListPage;