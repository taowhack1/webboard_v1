import React, { Component } from 'react';
import Layout from './Layout';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Topics from './Topic/Topics'


class Home extends Component {
    constructor(props) {
        super(props);
        //false - true
        console.log('start point')
        this.state={
            refresh : false
        }
        this.refreshState = this.refreshState.bind(this);
    }
    refreshState(){
        this.setState({
            refresh : !this.state.refresh
        }) 
    }

    render() {
        console.log('refresh state : '+this.state.refresh)
        console.log('addTopic : '+localStorage.getItem('addTopic'))
        if(localStorage.getItem('addTopic')){
            localStorage.removeItem('addTopic')
            console.log('remove addTopic')
            this.refreshState();
        }
        // if(localStorage.getItem('addTopic')) {
        //     console.log('add')
        //     localStorage.removeItem('addTopic')
        //     console.log('delLocal')
        // }
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
                        <Topics />
                    </Grid>
                </div>
            </Layout>
        );
    }
}

export default Home;