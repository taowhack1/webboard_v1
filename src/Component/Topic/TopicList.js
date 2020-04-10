import React, { Component } from 'react';
import TopicItem from './TopicItem'
class TopicList extends Component {
    showTopics(){
        return (
            this.props.topics && 
            this.props.topics.map(topic =>(
                <TopicItem 
                    key={topic.post_id}
                    topic={topic}
                />
            ))
        )
    }
    render() {
        return <div>{this.showTopics()}</div>
    }
}

export default TopicList;