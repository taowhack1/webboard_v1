import React, { Component } from 'react'
import axios from 'axios';
import CommentList from './CommentList'
import NewComment from './NewComment'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments : null,
            user_id : 1,
            post_id : null,
            comment_detail : '',
        }
        this.sendComment = this.sendComment.bind(this);
        this.onChange = this.onChange.bind(this);
        this.delComment = this.delComment.bind(this);
    }
    componentDidMount(){
        axios.get("http://192.168.5.11:8080/comments/findByPostId/"+this.props.post_id).then
        (
            res =>{ 
                this.setState ({
                    comments : res.data,
                    post_id : this.props.post_id
                })
            }
        )
    }
    onChange(e){
        this.setState({
           comment_detail : e.target.value
        })
    }
    sendComment(e){
        e.preventDefault();
       const {user_id,post_id,comment_detail} = this.state
       axios.post("http://192.168.5.11:8080/Comments",{user_id,post_id,comment_detail})
       .then(res=>{
           this.setState({
               comment_detail:''
           })
           axios.get("http://192.168.5.11:8080/comments/findByPostId/"+post_id).then
            (
                res =>{ 
                    this.setState ({
                        comments : res.data,
                        post_id : post_id
                    })
                }
            )
           
       })
    }
    delComment(comment){
        console.log("Delete : "+comment.comment_id)
        axios.delete("http://192.168.5.11:8080/comments/"+comment.comment_id).then(res =>{
            axios.get("http://192.168.5.11:8080/comments/findByPostId/"+this.state.post_id).then
            (
                res =>{ 
                    this.setState ({
                        comments : res.data,
                    })
                }
            )
        })
    }

    render() {
        const style={
            commentSection:{
                margin:'20px 0px 0px',
                // border:'1px solid black',
                // borderRadius:'10px',
                width:'100%',
                height:'35px',
                position:'relative',
                padding:'10px 0px',
                minWidth:'520px'
            },
            inputComment:{
                backgroundColor:'#f5f4f2',
                width:'80%',
                position:'absolute',
                left:'10px',
                top:'10',
                bottom:'10',
                margin:'auto',
                padding:'5px 5px 5px 10px',
                border:'0.5px solid #d1cfcb',
                borderRadius:'50px',
                outline:'none',
                fontSize:'16px',
                color:'black',
            },
            commentBtn:{
                position:'absolute',
                right:'5px',
                top:'10',
                bottom:'10',
                margin:'auto',
                textAlign:'center',
                padding:'3px 10px',
                color:'white',
                backgroundColor:'blue',
                border:'0',
                cursor:'pointer',
                borderRadius:'50px',
                outline:'none'
            }
        }
        return (
            <div>
                <CommentList comments={this.state.comments} onDelComment={this.delComment}/>
                <Paper style={style.content2}>
                    <form  style={style.commentSection}>
                        <input style={style.inputComment} type="text" name="inputComment" className="inputComment" placeholder="comment here"
                            onChange={this.onChange}
                            value={this.state.comment_detail}
                        />
                        <Button style={style.commentBtn} type="submit" name="submitBtn" onClick={this.sendComment}>ส่่ง</Button>
                    </form>
                </Paper>
                {/* <NewComment post_id={this.props.post_id} onUpdateComment={this.onUpdateComment}/> */}
            </div>
            
        )
    }
}
export default Comment;
