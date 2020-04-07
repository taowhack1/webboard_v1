import React, { Component } from 'react'
import axios from 'axios';
import CommentList from './CommentList'
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments : null
        }
    }
    componentDidMount(){
        const topicId = this.props.topicId
        axios.get("http://localhost:3001/comments?topicId="+topicId).then(res=>{
            
            {this.setState({
                comments : res.data
            })}
        });
    }

    render() {
        
        return (
            <div>
                <CommentList comments={this.state.comments} />
            </div>
            
        )
    }
}
export default Comment;
