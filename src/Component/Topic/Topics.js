import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import axios from "axios"
import AddTopic from './AddTopic'
import TopicList from './TopicList'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Topics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topics : null,
        }
        this.submitForm = this.submitForm.bind(this);
    }
    componentDidMount(){
        axios.get("http://192.168.5.11:8080/posts").then
        (
            res =>{ this.setState ({topics:res.data}) }
        )
    }
    submitForm(formValue,handleClose){
        const {post_title,post_detail,user_id} = formValue
        axios.post('http://192.168.5.11:8080/posts',{post_title,post_detail,user_id}).then(res=>{
        }).then(
            res=>{
                axios.get("http://192.168.5.11:8080/posts").then
                (
                    res =>{ this.setState ({topics:res.data}) },
                    alert('เพิ่มโพสใหม่แล้ว')
                )
            }
        )
        handleClose();
    }
    render() {
        const style={
            paper: {
                padding: '16px',
                color: 'black',
                backgroundColor:'#f8f8f8',
            },
            topicHeader:{
                position:'relative',
                paddingBottom:'20px'
            },

        }
        return (
                <Grid item xs={12} style={{minWidth:'600px'}}>
                    <Paper style={style.paper}>
                        <div style={style.topicHeader}>
                            <Typography variant="h6" gutterBottom align='left'>
                                บทความล่าสุด
                            </Typography>
                            <AddTopic submitForm={this.submitForm}/>
                        </div>
                        <Divider />
                        <TopicList topics={this.state.topics}/>
                    </Paper>
                </Grid>
        )
    }
}
export default Topics
