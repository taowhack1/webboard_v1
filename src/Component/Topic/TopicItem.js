import React,{Component} from 'react'
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import NewComment from '../Comments/NewComment'
import Comment from '../Comments/Comment'

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
        const {id, title , subTitle , content } = this.props.topic;
        
        const style ={
            content2:{
                padding:'16px',
                marginTop:'10px',
                textAlign:'left'
            },
        }
        return (
            <Paper style={style.content2}>
                <div className="Heading2">
                    <h2>{title}</h2>
                </div>
                <div className="Heading3">
                    {/* <h5>วันที่ 3 เม.ย. 2563 โดย <span style={{color:'blue'}}>ผู้เขียนบทความ</span></h5> */}
                    <h5>{subTitle}</h5>
                </div>
                <Divider />
                <div className="Content">
                    <p>{content}</p>
                </div>
                <Divider />
                <Button onClick={this.openMore} style={{backgroundColor:'#f8f8f8',borderRadius:'5px',margin:'5px'}}><ChatBubbleOutlineRoundedIcon style={{fontSize:'22px',marginRight:'10px'}}/>{"แสดงความคิดเห็น"}</Button>
                <Divider />
                {/* ส่วนคอมเม้น */}
                {this.state.openMenu ? 
                    <div>
                        <Comment topicId={id}/>
                        <NewComment topicId={id}/>
                    </div>
                    
                : null
                }
                {/* ส่วนคอมเม้น */}
            </Paper>
        )
    }
}
export default TopicItem