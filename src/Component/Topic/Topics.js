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
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
class Topics extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topics : null,
        }
        
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
        console.log(this.state.topics)

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
            addTopicBtn:{
                position:'absolute',
                right:'0',
                top:'0',
                marginTop:'',
                backgroundColor:'white'
            }
        }
        return (
                <Grid item xs={12}>
                    <Paper style={style.paper}>
                        <div style={style.topicHeader}>
                            <Typography variant="h6" gutterBottom style={style.header2}>
                                บทความล่าสุด
                            </Typography>
                            <Button variant="outlined" size="small" style={style.addTopicBtn}>
                                   <PlaylistAddIcon style={{marginRight:'5px',fontSize:'16px'}}/>เพิ่มบทความ
                            </Button>
                        </div>
                        <Divider />
                        <TopicList topics={this.state.topics}/>
                    </Paper>
                </Grid>
        )
    }
}
export default Topics
