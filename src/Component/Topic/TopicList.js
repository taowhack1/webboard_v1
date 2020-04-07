import React, { Component } from 'react';
import TopicItem from './TopicItem'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
class TopicList extends Component {
    showTopics(){
        return (
            this.props.topics && 
            this.props.topics.map(topic =>(
                <TopicItem 
                    key={topic.post_id}
                    topic={topic}
                    // onAddTopic={this.props.onAddTopic}
                    // onDelTopic={this.props.onDelTopic}
                    // onEditTopic={this.props.onEditTopic}
                />
            ))
        )
    }
    render() {
        const style={
            paper: {
                padding: '16px',
                textAlign: 'center',
                color: 'black',
                backgroundColor:'#f8f8f8',
            },
            header2:{
                textAlign:'left'
            },
        }
    return <div>{this.showTopics()}</div>
    }
}

export default TopicList;