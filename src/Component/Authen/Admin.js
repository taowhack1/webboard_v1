import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
class Admin extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token')

        let isLoggedIn = true
        if(token == null){
            isLoggedIn = false
        }
        this.state = {
            isLoggedIn
        }
    }
    
    render() {
        if(this.state.isLoggedIn === false){
            return <Redirect to="/Login"/>
        }
        return (
            <div>
                <h1>This is admin page.</h1>
                <Link to="/Logout">Logout</Link>
            </div>
        );
    }
}

export default Admin;