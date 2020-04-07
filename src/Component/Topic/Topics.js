import React, { Component } from 'react'
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Comment from '../Comments/Comment'
import NewComment from '../Comments/NewComment'
import axios from "axios"
import Layout from '../Layout'
import TopicList from './TopicList'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
class Topics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topics : null,
        }
        
    }
    componentDidMount(){
        axios.get("http://localhost:3001/topics").then
        (res =>{ this.setState ({topics:res.data}) })
    }

    editProduct(product){
        this.props.history.push('products/edit/'+product.id)
    }
    delTopic(topic){
        axios.delete("http://localhost:3001/topics/"+topic.id).then(res =>{
            axios.get("http://localhost:3001/topics").then(
                res=>{
                    this.setState({
                        topics:res.data
                })
            })
        })
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
        }
        console.log(this.state.comments)
        return (
                <Grid item xs={12}>
                    <Paper style={style.paper}>
                        <Typography variant="h6" gutterBottom style={style.header2}>
                            บทความล่าสุด
                        </Typography>
                        <Divider />
                        <TopicList topics={this.state.topics}/>
                    </Paper>
                </Grid>
        )
    }
}
export default Topics
