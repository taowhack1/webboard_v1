import React, { Component } from 'react';
import Header from './HeaderMui';
import Container from './Container';
class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        
        return (
            <div>
                <Header />
                <Container container={this.props.children}/>
            </div>
        );
    }
}

export default Layout;