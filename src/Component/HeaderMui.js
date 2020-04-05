import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const style ={
    header:{
        margin:'0px 10%',
        minWidth:'800px',
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
                        noWrap
                        style={style.toolbarTitle}
                        >
                        {"Webboard"}
                        </Typography>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                        <Button variant="outlined" size="small">
                        Sign up
                        </Button>
                    </Toolbar>
                    <Toolbar component="nav" variant="dense" style={style.toolbarSecondary}>
                        {sections.map((section) => (
                        <Link
                            color="inherit"
                            noWrap
                            key={section.title}
                            variant="body2"
                            href={section.url}
                            style={style.toolbarLink}
                        >
                            {section.title}
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