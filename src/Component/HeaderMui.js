import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        minWidth:'800px',
        position:'fixed',
        top:'0',
        backgroundColor:'white',
        zIndex:'1'
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
    },
    toolbarLink: {
        padding: '8px',
        flexShrink: 0,
        textDecoration:'none',
        color:'black'
    },
}
const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];

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
                        {this.state.isLoggedIn ? 
                        <Link to="/Logout" style={{textDecoration:'none'}}>
                            <Button variant="outlined" size="small">
                                Logout
                            </Button>
                        </Link>
                        :
                        <Link to="/Login" style={{textDecoration:'none'}}>
                            <Button variant="outlined" size="small">
                                Login
                            </Button>
                        </Link>
                        }
                    </Toolbar>
                    <Toolbar component="nav" variant="dense" style={style.toolbarSecondary}>
                        {sections.map((section) => (
                        <Link to={section.url}
                            color="inherit"
                           
                            key={section.title}
                            variant="body2"
                            style={style.toolbarLink}
                        >
                            <Button size="small">
                                {section.title}
                            </Button>
                        </Link>
                        ))}
                    </Toolbar>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;

Header.propTypes = {
  sections: PropTypes.array,
};