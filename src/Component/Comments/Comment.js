import React, { Component } from 'react'
import axios from 'axios';
import CommentList from './CommentList'
import NewComment from './NewComment'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link } from 'react-router-dom'
class Comment extends Component {
    constructor(props) {
        super(props);
        const user_id = localStorage.getItem('user_id');
        this.state = {
            comments : null,
            user_id,
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
                width:'90%',
                boxSizing: 'border-box',
                position:'absolute',
                left:'5px',
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
                width:'5%',
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
            },
            bgText : {
                backgroundColor: 'rgb(0,0,0)',
                backgroundColor: 'rgba(0,0,0, 0.4)',
                color: 'white',
                fontWeight: 'bold',
                border: '3px solid #f1f1f1',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '2',
                width: '100%',
                padding: '20px 5px 20px 5px',
                textAlign: 'center',
            },
            bgImage: {
                filter: 'blur(2px)',
                height: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }
        }
        return (
            <div>
                <CommentList comments={this.state.comments} onDelComment={this.delComment}/>
                {
                this.state.user_id ?
                <Paper style={style.content2}>
                    <form  style={style.commentSection}>
                        <input style={style.inputComment} type="text" name="inputComment" className="inputComment" placeholder="comment here"
                            onChange={this.onChange}
                            value={this.state.comment_detail}
                        />
                        <Button style={style.commentBtn} type="submit" name="submitBtn" onClick={this.sendComment}>ส่ง</Button>
                    </form>
                </Paper>
                : 
                <div style={{position:'relative'}}>
                <div style={style.bgImage}>
                    <Paper style={style.content2}>
                        <form  style={style.commentSection}>
                            <input style={style.inputComment} type="text" name="inputComment" className="inputComment" placeholder="comment here"
                                onChange={this.onChange}
                                value={this.state.comment_detail}
                            />
                            <Button style={style.commentBtn} type="submit" name="submitBtn" onClick={this.sendComment}>ส่ง</Button>
                        </form>
                    </Paper>
                </div>
                <div style={style.bgText}>
                    <Link  to='/login' style={{color:'white'}}>
                    กรุณาเข้าสู่ระบบเพื่อแสดงความคิดเห็น
                    </Link>
                </div>
                </div>
                }
            </div>
            
        )
    }
}
export default Comment;
