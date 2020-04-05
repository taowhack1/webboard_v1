import React, { Component } from 'react';
import Layout from './Layout';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu : false
        }
        this.openMore = this.openMore.bind(this);
    }

    openMore(e){
        this.setState({
            openMenu : !this.state.openMenu
        })
        console.log(this.state.openMenu)
    }
    render() {
        const style={
            root: {
              flexGrow: 1,
              margin:'0px 150px',
              marginTop:'20px'
            },
            paper: {
              padding: '16px',
              textAlign: 'center',
              color: 'black',
            },
            header2:{
                textAlign:'left'
            },
            content1:{
                height:'auto'
            },
            content2:{
                padding:'16px',
                marginTop:'10px',
                textAlign:'left'
            },
            contentHeader:{
                fontSize: '1.5rem',
                fontWeight: '400',
                lineHeight: '1.334',
                letterSpacing: '0em',
            },
            img:{
                margin: 'auto',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
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
                                    {/* ส่วนของเนื้อหา */}
                                    <Paper style={style.content2}>
                                        <div className="Heading2">
                                            <h2>หัวข้อข่าว 1</h2>
                                        </div>
                                        <div className="Heading3">
                                            <h5>วันที่ 3 เม.ย. 2563 โดย <span style={{color:'blue'}}>ผู้เขียนบทความ</span></h5>
                                        </div>
                                        <Divider />
                                        <div className="Content">
                                            <p>ประยุทร์ บอกว่าจะไม่ลาออกถ้าคนจนไม่หมดไปจากประเทศ</p>
                                        </div>
                                        <Divider />
                                        <Button onClick={this.openMore}>{"<< คอมเม้น >>"}</Button>

                                        {/* ส่วนคอมเม้น */}
                                        {this.state.openMenu ? 
                                        <Paper style={style.content2}>
                                            <Grid container spacing={2}>
                                                <Grid item style={{backgroundColor:'#d2e0fa'}}>
                                                    <img style={style.img} alt="complex" src="/static/images/grid/complex.jpg" />
                                                </Grid>
                                                <Grid item xs={12} sm container style={{backgroundColor:'#fad2e3'}}>
                                                    <Grid item xs container direction="column" spacing={2}>
                                                        <Grid item xs className="comment-content">
                                                            <Typography gutterBottom variant="subtitle1">
                                                                โถไอบักตูบแกทำให้ประเทศฉันดูแย่
                                                            </Typography>
                                                            <Typography>
                                                                ผนงรจตกม.
                                                            </Typography>
                                                            <Typography color="textSecondary">
                                                                ID: 1030114
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item className="comment-control">
                                                            <Button style={{ cursor: 'pointer' }}>
                                                            +1    
                                                            </Button>
                                                            <Button style={{ cursor: 'pointer' }}>
                                                            Remove
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item style={{backgroundColor:'#b7e3fa',bottom:'0'}}>
                                                        <Typography variant="subtitle1">สมพง สมดุกดุ๋ย</Typography>
                                                        <Typography variant="subtitle1">Sompong.S@gmail.com</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                        : null
                                        
                                        
                                    }
                                        {/* ส่วนคอมเม้น */}
                                    </Paper>
                                    {/* ส่วนของเนื้อหา */}
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Layout>
        );
    }
}

export default Home;