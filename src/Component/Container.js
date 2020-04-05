import React, { Component } from 'react';

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                {this.props.container}
            </div>
        );
    }
}

export default Container;