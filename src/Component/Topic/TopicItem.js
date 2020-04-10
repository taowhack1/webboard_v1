import React,{Component} from 'react'
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Comment from '../Comments/Comment'   
import moment from 'moment'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const style={
    root: {
      minWidth: '600px',
      width:'100%',
      marginBottom:'20px'

    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: '0.2s'
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }
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
        return (
            <Card style={style.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" style={style.avatar}>
                            { user_name.substring(0,3) }
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={ post_title }
                    subheader={ moment(created, "YYYY-MM-DD hh:mm:ss").fromNow() }
                />
                <CardContent>
                    <Typography style={{paddingLeft:'5%'}}variant="body2" color="textSecondary" component="p">
                        { post_detail }
                    </Typography>
                </CardContent>
                <Divider />
                    <CardActions disableSpacing>
                        <Button onClick={ this.openMore } style={{ backgroundColor:'#f8f8f8',borderRadius:'5px',margin:'5px' }}><ChatBubbleOutlineRoundedIcon style={{fontSize:'22px',marginRight:'10px'}}/>{"แสดงความคิดเห็น"}</Button>
                    </CardActions>
                <Divider />
                    {this.state.openMenu ? 
                        <div>
                            <Comment post_id={post_id}/>
                        </div>
                    : null
                    }
          </Card>
        )
    }
}
export default TopicItem
                