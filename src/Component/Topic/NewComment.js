import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
 class NewComment extends Component {
    render() {
        const style={
            commentSection:{
                margin:'40px 0px 0px',
                // border:'1px solid black',
                // borderRadius:'10px',
                width:'100%',
                height:'35px',
                position:'relative',
                padding:'10px 0px',
                minWidth:'520px'
            },
            inputComment:{
                backgroundColor:'#f5f4f2',
                width:'80%',
                position:'absolute',
                left:'10px',
                top:'10',
                bottom:'10',
                margin:'auto',
                padding:'5px 5px 5px 10px',
                border:'0.5px solid #d1cfcb',
                borderRadius:'50px',
                outline:'none',
                fontSize:'16px',
                color:'black',
            },
            commentBtn:{
                position:'absolute',
                right:'5px',
                top:'10',
                bottom:'10',
                margin:'auto',
                textAlign:'center',
                padding:'3px 10px',
                color:'white',
                backgroundColor:'blue',
                border:'0',
                cursor:'pointer',
                borderRadius:'50px',
                outline:'none'
            }
        }
        return (
            <div>
                <Paper style={style.content2}>
                    <form onSubmit="submit" style={style.commentSection}>
                            <input style={style.inputComment} type="text" name="inputComment" className="inputComment" placeholder="comment here"/>
                            <Button style={style.commentBtn} type="submit" name="submitBtn">ส่ง</Button>
                    </form >
                </Paper>
            </div>
        )
    }
}
export default NewComment
