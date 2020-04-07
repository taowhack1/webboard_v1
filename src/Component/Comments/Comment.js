import React, { Component } from 'react'
import axios from 'axios';
import CommentList from './CommentList'
import NewComment from './NewComment'
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments : null,
        }
        this.onUpdateComment = this.onUpdateComment.bind(this);
    }
    componentDidMount(){
        const post_id = this.props.post_id
        console.log("Comment : "+post_id)

        axios.get("http://192.168.5.11:8080/comments/findByPostId/"+this.props.post_id).then
        (
            res =>{ 
                this.setState ({comments:res.data}) 
            }
        )
    }
    onUpdateComment(){
        axios.get("http://192.168.5.11:8080/comments/findByPostId/"+this.props.post_id).then
        (
            res =>{ 
                this.setState ({comments:res.data}) 
            }
        )
    }

    render() {
        return (
            <div>
                <CommentList comments={this.state.comments} />
                <NewComment post_id={this.props.post_id} onUpdateComment={this.onUpdateComment}/>
            </div>
            
        )
    }
}
export default Comment;
