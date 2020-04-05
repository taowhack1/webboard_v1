import React, { Component } from 'react';
import Layout from './Layout';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom'
import Topic from './Topic/Topic'


class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const style={
            root: {
              flexGrow: 1,
              margin:'0px 10%',
              marginTop:'20px',
              minWidth:'800px'
            },
            paper: {
              padding: '16px',
              textAlign: 'center',
              color: 'black',
              backgroundColor:'#f8f8f8',
            },
            header2:{
                textAlign:'left'
            },
            content1:{
                height:'auto'
            },

            contentHeader:{
                fontSize: '1.5rem',
                fontWeight: '400',
                lineHeight: '1.334',
                letterSpacing: '0em',
            },

        }
        return (
            <Layout>
                <div style={style.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} style={style.content1}>
                            <Paper style={style.paper}>
                                <div style={{height:'100%'}}>
                                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                        หัวข้อข่าว
                                    </Typography>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        เนื้อหาข่าว
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper style={style.paper}>
                                <Typography variant="h6" gutterBottom style={style.header2}>
                                    News
                                </Typography>
                                <Divider />
                                <Topic />
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        );
    }
}

export default Home;