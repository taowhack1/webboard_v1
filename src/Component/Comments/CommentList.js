import React, { Component } from 'react';
import CommentItem from './CommentItem'
class CommentList extends Component {
    
    showComment(){
        return (
            this.props.comments && 
            this.props.comments.map(comment => (
                <CommentItem 
                    key={comment.comment_id}
                    comment={comment}
                />
            ))
        )
    }
    
    render() {
        return (<div>{this.showComment()}</div>);
        
    }
}

export default CommentList;