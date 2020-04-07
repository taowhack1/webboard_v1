import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {
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
        // console.log("login status(Header) : "+isLoggedIn+" \ntoken "+token);    
    }

    render() {
        const style={
            color:"white",
            backgroundColor:'DodgerBlue',
            padding:'20px',
            textAlign:"center"
        }

        return (
            <div>
                <div className="Header-Container">
                    <h1 style={style}>Header</h1>
                    <div style={{textAlign:"right",marginRight:"20px"}}>
                        <ul>
                            {
                                this.state.isLoggedIn ? <Link to='/Logout'>Logout</Link> :
                                <Link to='/Login'>Login</Link>
                            }
                        </ul>
                    </div>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default Header;