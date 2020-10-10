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
            ]
    
        }
    }
    render() {
        let userProfiles = this.state.userList.map((value, index) => {
            return(
                <div key={index}>
                    <h3>The user first name is {value.first_name}</h3>
                    <h3>The user last name is {value.last_name}</h3>
                    <h3>The user email is {value.email}</h3>
                    <img src={value.avatar}></img>
                </div>
            )
        });

        return (
            <div>
                <h2>This is a List Page</h2>
                {userProfiles}
            </div>
        );
    }
}

export default ListPage;