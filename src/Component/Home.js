import React, { Component } from 'react';
import Layout from './Layout';
import Topics from './Topic/Topics'


class Home extends Component {

    render() {
        const style={
            root: {
              flexGrow: 1,
              margin:'20px 10%',
            }
        }
        return (
            <Layout>
                <div style={style.root}>
                    <Topics />
                </div>

            </Layout>
        );
    }
}

export default Home;