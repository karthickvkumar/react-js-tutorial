import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h2>The page you are looking is Not Found</h2>
                <NavLink to="/">Go to Login Page</NavLink>
            </div>
        );
    }
}

export default PageNotFound;