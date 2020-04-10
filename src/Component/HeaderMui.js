import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const style ={
    header:{
        margin:'0px 10%',
        width:'80%',
        minWidth:'600px',
        position:'fixed',
        top:'0',
        backgroundColor:'white',
        zIndex:'5'
        // boxShadow: '0px 3px 0px #dfe3eb'
        
    },
    toolbar: {
        borderBottom: `1px solid black`,
        
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        // backgroundColor:'blue',
        position:'relative',
        boxShadow: '-6px 0 white, 6px 0 white, 0 7px 5px -2px #dedede'
    },
    toolbarLink: {
        padding: '8px',
        flexShrink: 0,
        textDecoration:'none',
        color:'black'
    },
}

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
    }

    render() {
        return (
            <React.Fragment>
                <div style={style.header}>
                    <Toolbar style={style.toolbar}>
                        <Button size="small">Subscribe</Button>
                        <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        
                        style={style.toolbarTitle}
                        >
                        {"Webboard"}
                        </Typography>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                    </Toolbar>
                    <Toolbar component="nav" variant="dense" style={style.toolbarSecondary}>
                        <div style={{position:'absolute',right:'10px',}}>
                        {this.state.isLoggedIn ? 
                            <div>
                                <Link to="/" style={style.toolbarLink}>
                                    <Button variant="none" size="small">
                                    {localStorage.getItem("user_name")}
                                    </Button>
                                </Link>
                                <Link to="/Logout" style={style.toolbarLink}>
                                    <Button variant="outlined" size="small">
                                        ออกจากระบบ
                                    </Button>
                                </Link>
                            </div>
                            :
                            <div>
                                <Link to="/SignUp" style={style.toolbarLink}>
                                    <Button variant="outlined" size="small">
                                        ลงทะเบียน
                                    </Button>
                                </Link>
                                <Link to="/Login" style={style.toolbarLink}>
                                    <Button variant="outlined" size="small">
                                        เข้าสู่ระบบ
                                    </Button>
                                </Link>
                            </div>
                            }
                    </div>
                    </Toolbar>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;