import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
class Comment extends Component {
    render() {
        const style={
            img:{
                display: 'block',
                width:'50px',
                maxWidth: '100%',
                maxHeight: '100%',
            },
        }
        const comment = [
            {
                id:1,
                topicid:1,
                userid:1,
                username:"ประวิท คิดไม่ซื่อ",
                content: "ผนงรจตกม."
            },
            {
                id:2,
                topicid:1,
                userid:2,
                username:"เอ๋ นครบาล",
                content: "โถไอบักตูบแกทำให้ประเทศฉันดูแย่ ทำไมแกพูดแบบนี้ แกไม่กลัวตายรึไง ประชาชนจะอดตายกันหมดแล้ว"
            }
            ,
            {
                id:3,
                topicid:1,
                userid:3,
                username:"kawasaki kikapooo",
                content: `โถไอบักตูบแกทำให้ประเทศฉันดูแย่ ทำไมแกพูดแบบนี้ แกไม่กลัวตายรึไง ประชาชนจะอดตายกันหมดแล้ว
                ทำไมแกไม่ยอมสำนึกสักที ชั้นจะไม่ไหวแล้วนะว้อยยยยยยยยยยยยยยยยยยยยยยยยยย ไอบ้าเอ้ยยย ไอตูบบบบบบ
                ทำไมแกไม่ยอมสำนึกสักที ชั้นจะไม่ไหวแล้วนะว้อยยยยยยยยยยยยยยยยยยยยยยยยยย ไอบ้าเอ้ยยย ไอตูบบบบบบs`
            }
        ]
        fetchComment=()=>{
            const showComment = comment.map((comment) => {
                <div key={comment.id}>
                    <Grid container spacing={2} style={{marginTop:'20px'}}>
                        <Grid item style={{backgroundColor:'#d2e0fa'}}>
                            <div style={style.img}>
                                <h2>{comment.id}</h2>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm container style={{backgroundColor:'#fad2e3'}}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs className="comment-content">
                                    <Typography gutterBottom variant="body2">
                                        {comment.content}
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
                                            <Typography variant="body2">{comment.username}</Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            })
            return showComment
        }
        
        return (
            <div>
                {this.fetchComment()}
            </div>
            
        )
    }
}
export default Comment;
