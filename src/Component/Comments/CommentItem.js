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
        }
        const {comment , userId} = this.props
        return (
            <Grid container spacing={2} style={{marginTop:'20px'}}>
                <Grid item style={{backgroundColor:'#d2e0fa'}}>
                    <div style={style.img}>
                        <h2>{"10"}</h2>
                    </div>
                </Grid>
                <Grid item xs={12} sm container style={{backgroundColor:'#fad2e3'}}>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs className="comment-content">
                            <Typography gutterBottom variant="body2" nowrap>
                                {comment}
                            </Typography>
                        </Grid>
                        <Grid item container className="comment-control" style={{position:'relative',height:'40px',margin:'5px 0px',border:'1px solid red'}}>
                            <Grid style={{position:'absolute',bottom:'0',left:'0',border:'1px solid blue'}}>
                                <Button style={{ cursor: 'pointer' }}>
                                +1    
                                </Button>
                                |
                                <Button style={{ cursor: 'pointer' }}>
                                -1
                                </Button>
                            </Grid>
                            <Grid item style={{border:'1px solid blue',position:'absolute',bottom:'0',right:'0'}}>
                                <div style={{textAlign:'right',padding:'5px 5px 5px 50px'}}>
                                    <Typography variant="body2">{"03/04/2563"}</Typography>
                                    <Typography variant="body2">{"user id : "+userId}</Typography>
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