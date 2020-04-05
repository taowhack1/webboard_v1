import React, { Component } from 'react'
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Comment from './Comment'
import NewComment from './NewComment'
export default class Topic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openMenu : false
        }
        this.openMore = this.openMore.bind(this);
    }
    
    openMore(e){
        this.setState({
            openMenu : !this.state.openMenu
        })
        console.log(this.state.openMenu)
    }
    render() {
        const style={
            content2:{
                padding:'16px',
                marginTop:'10px',
                textAlign:'left'
            },
        }
        return (
            <div>
                <Paper style={style.content2}>
                    <div className="Heading2">
                        <h2>หัวข้อข่าว 1</h2>
                    </div>
                    <div className="Heading3">
                        <h5>วันที่ 3 เม.ย. 2563 โดย <span style={{color:'blue'}}>ผู้เขียนบทความ</span></h5>
                    </div>
                    <Divider />
                    <div className="Content">
                        <p>ประยุทร์ บอกว่าจะไม่ลาออกถ้าคนจนไม่หมดไปจากประเทศ</p>
                    </div>
                    <Divider />
                    <Button onClick={this.openMore} style={{backgroundColor:'#f8f8f8',borderRadius:'5px',margin:'5px'}}><ChatBubbleOutlineRoundedIcon style={{fontSize:'22px',marginRight:'10px'}}/>{"แสดงความคิดเห็น"}</Button>
                    <Divider />
                    {/* ส่วนคอมเม้น */}
                    {this.state.openMenu ? 
                        <div>
                            <Comment />
                            <Comment />
                            <Comment />
                            <NewComment />
                        </div>
                        
                    : null                                     
                    }
                    {/* ส่วนคอมเม้น */}
                </Paper>
            </div>
        )
    }
}
