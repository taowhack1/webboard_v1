import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    render() {
        const style={
            color:"white",
            backgroundColor:'lime',
            padding:'20px',
            textAlign:"center"
            // marginBottom:'10px',
        }
        return (
            <div>
                <div className="Header-Container">
                    <h1 style={style}>Footer</h1>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default Footer