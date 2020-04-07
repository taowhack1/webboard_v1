import React, { Component } from 'react';
import CommentItem from './CommentItem'
class CommentList extends Component {
    
    showComment(){
        return (
            this.props.comments && 
            this.props.comments.map(comment => (
                <CommentItem 
                    key={comment.id}
                    userId={comment.userId}
                    comment={comment.comment}
                />
            ))
        )
    }
    
    render() {
        
        return (<div>{this.showComment()}</div>);
        
    }
}

export default CommentList;