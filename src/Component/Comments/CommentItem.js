import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
                left:'0',
                // border:'1px solid blue'
            },
        }
        const {created , user_id , user_name ,comment_detail} = this.props.comment
        return (
            <Grid container spacing={2} style={{marginTop:'20px',backgroundColor:'#f0f2f5',borderRadius:'10px'}}>
                <Grid item style={{}}>
                    <div style={style.img}>
                        <h2>{"10"}</h2>
                    </div>
                </Grid>
                <Grid item xs={12} sm container style={{}}>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs className="comment-content">
                            <Typography gutterBottom variant="body2">
                                {comment_detail}
                            </Typography>
                        </Grid>
                        <Grid item container className="comment-control" style={style.userControl}>
                            <Grid style={style.scoreControl}>
                                <Button style={{ cursor: 'pointer' }}>
                                +1    
                                </Button>
                                |
                                <Button style={{ cursor: 'pointer' }}>
                                -1
                                </Button>
                            </Grid>
                            <Grid item style={style.user}>
                                <div style={{textAlign:'right',padding:'5px 5px 5px 50px'}}>
                                    <Typography variant="body2">{created}</Typography>
                                    <Typography variant="body2">{"user id : "+user_name}</Typography>
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