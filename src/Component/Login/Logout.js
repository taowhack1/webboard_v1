import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
class Logout extends Component {
    constructor(props) {
        super(props);
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
    }
    
    render() {
        return (
            <Redirect to="/"/>
        );
    }
}

export default Logout;