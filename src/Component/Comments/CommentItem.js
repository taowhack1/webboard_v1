import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment'
class CommentItem extends Component {
    render() {
        const style={
            img:{
                display: 'block',
                width:'50px',
                maxWidth: '100%',
                maxHeight: '100%',
            },
            user:{
                // border:'1px solid blue',
                position:'absolute',
                bottom:'0',right:'0'
            },
            userControl:{
                position:'relative',
                height:'40px',
                margin:'5px 0px',
                // border:'1px solid red'
            },
            scoreControl:{
                position:'absolute',
                bottom:'0',
                left:'10px',
                // border:'1px solid blue'
            },
        }
        const {created , user_name ,comment_detail} = this.props.comment
        return (
            <Grid container spacing={2} style={{paddingTop:'10px',marginTop:'20px',backgroundColor:'#f0f2f5',borderRadius:'40px'}}>
                <Grid item style={{}}>
                    <div style={style.img}>
                        <h2>{""}</h2>
                    </div>
                </Grid>
                <Grid item xs={12} sm container style={{}}>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs className="comment-content" style={{position:'relative'}}>
                            <Typography 
                                gutterBottom 
                                variant="body2" 
                                style={{
                                    margin:'10px 0px 10px 0px',
                                    padding:'5px'
                                }}
                            >
                                { comment_detail }
                            </Typography>
                            {localStorage.getItem('user_name') == user_name ? 
                                <Button style={{position:'absolute',top:'0',right:'0',cursor:'pointer',borderRadius:'25px'}}>
                                    <DeleteIcon style={{fontSize:'20px'}} onClick={() => this.props.onDelComment(this.props.comment)} />
                                </Button>
                            : null
                            }
                        </Grid>
                        <Grid item container className="comment-control" style={style.userControl}>
                            <Grid style={style.scoreControl}>
                                <Button size="small">
                                    <ThumbUpIcon style={{ cursor: 'pointer' ,marginRight:'5px'}}/> Like
                                </Button>
                                <Button size="small">
                                    <ThumbDownIcon style={{ cursor: 'pointer' ,marginLeft:'5px',marginRight:'5px'}}/> DisLike
                                </Button>
                            </Grid>
                            <Grid item style={style.user}>
                                <div style={{textAlign:'right',padding:'5px 5px 5px 50px'}}>
                                    <Typography variant="body2">{moment(created,'YYYY-MM-DD hh-mm-ss').fromNow()}</Typography>
                                    <Typography variant="body2">{"username : "+user_name}</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default CommentItem;