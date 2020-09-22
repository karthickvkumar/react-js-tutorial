import React from 'react';

const Header = () => {
    let username = 'Mr.John';
    let user = {
        name: 'Mr.Jim',
        age: 22,
        location: 'chennai'
    }

    return (
        <div>
            <h1>Welcome to Home, {username}</h1>
            <h2>The user name is {user.name}</h2>
            <h2>The user age is {user.age}</h2>
            <h2>The user location is {user.location}</h2>
        </div>
    );
};

export default Header;