import React, { Component } from 'react'
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Comment from '../Comments/Comment'
import NewComment from '../Comments/NewComment'
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
        // axios.get("http://localhost:3001/topics").then
        // (
        //     res =>{ this.setState ({topics:res.data}) }
        // )
        axios.get("http://192.168.5.11:8080/posts").then
        (
            res =>{ this.setState ({topics:res.data}) }
        )
    }
    submitForm(formValue,handleClose){
        
        const {post_title,post_detail,user_id} = formValue
        axios.post('http://192.168.5.11:8080/posts',{post_title,post_detail,user_id}).then(res=>{
            alert('เพิ่มโพสใหม่แล้ว')
        }).then(
            res=>{
                axios.get("http://192.168.5.11:8080/posts").then
                (
                    res =>{ this.setState ({topics:res.data}) }
                )
            }
        )
        handleClose();
    }
    refreshTopicList(){
        
    }
    render() {
        const style={
            header2:{
                textAlign:'left'
            },
            paper: {
                padding: '16px',
                textAlign: 'center',
                color: 'black',
                backgroundColor:'#f8f8f8',
            },
            topicHeader:{
                position:'relative',
                paddingBottom:'20px'
            },

        }
        return (
                <Grid item xs={12}>
                    <Paper style={style.paper}>
                        <div style={style.topicHeader}>
                            <Typography variant="h6" gutterBottom style={style.header2}>
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
