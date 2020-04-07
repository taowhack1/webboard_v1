import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

class Login extends Component {
    constructor(props){
        super(props);
        const token = localStorage.getItem('token')

        let isLoggedIn = true
        if(token == null){
            isLoggedIn = false
        }
        this.state ={
            username : '',
            password : '',
            isLoggedIn
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const {username , password} = this.state;
        if(username === "1234" && password ==="1234"){
            localStorage.setItem("token","sadiaghasdkolfasjfafjs")
            this.setState({
                isLoggedIn : true
            })
        }else{
            alert("username or password incorrect !!");
            this.setState({
                username:"",
                password:""
            })
        }
    }
    render() {
        if(this.state.isLoggedIn){
            return <Redirect to="/admin"/>
        }
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <div className="Login-Header">
                        <h2>Login</h2>
                    </div>
                    
                        <div className="Login-Form">
                            <label>Username</label>
                            <input type="text" name="username" placeholder="username" onChange={this.onChange} value={this.state.username}/>
                            <br />
                            <label>Password</label>
                            <input type="text" name="password" placeholder="password" onChange={this.onChange} value={this.state.password}/>
                            <br/>
                            <button type="submit" className="btn btn-primary">submit
                                </button>
                        </div>
                </div>
            </form>
        );
    }
}

export default Login;