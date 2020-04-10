import React,{Component} from 'react'
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import NewComment from '../Comments/NewComment'
import Comment from '../Comments/Comment'   
import moment from 'moment'

class TopicItem extends Component {
    constructor(props){
        super(props);
        this.state={
            openMenu : false,
        }
        this.openMore = this.openMore.bind(this);
    }
    
    openMore(e){
        this.setState({
            openMenu : !this.state.openMenu
        })
    }
    render(){
        const {post_id, post_title , post_detail ,user_name,created} = this.props.topic;
        const style ={
            content2:{
                padding:'16px',
                marginTop:'10px',
                textAlign:'left'
            },
            Heading3:{
                marginLeft:'5%'
                
            }
        }
        return (
            <Paper style={style.content2}>
                <div className="Heading2">
                    <h2>{post_title}</h2>
                </div>
                <div style={style.Heading3}>
                    <h5>{moment(created, "YYYY-MM-DD hh:mm:ss").fromNow()} <span style={{color:'blue'}}>{user_name}</span></h5>
                </div>
                <Divider />
                <div className="Content">
                    <p>{post_detail}</p>
                </div>
                <Divider />
                <Button onClick={this.openMore} style={{backgroundColor:'#f8f8f8',borderRadius:'5px',margin:'5px'}}><ChatBubbleOutlineRoundedIcon style={{fontSize:'22px',marginRight:'10px'}}/>{"แสดงความคิดเห็น"}</Button>
                <Divider />
                {/* ส่วนคอมเม้น */}
                {this.state.openMenu ? 
                    <div>
                        <Comment post_id={post_id}/>
                    </div>
                    
                : null
                }
                {/* ส่วนคอมเม้น */}
            </Paper>
        )
    }
}
export default TopicItem