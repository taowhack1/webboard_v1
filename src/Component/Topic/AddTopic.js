

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import TelegramIcon from '@material-ui/icons/Telegram';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

class AddTopic extends Component {
    constructor(props) {
        super(props);
        const user_id = localStorage.getItem('user_id')
        this.state = {
            openModal : false,
            post_title : '',
            post_detail : '',
            user_id,
            addTopicStatus : false,
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    handleOpen(){
        this.setState({
            openModal : true
        })
    }
    handleClose(){
        this.setState({
            openModal : false,
            post_title : '',
            post_detail : ''
        })
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        if(localStorage.getItem('addTopic')){
            console.log("Added")
            return <Redirect to='/'/>
        }
        const style = {
            modal: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              paper: {
                width:'70%',
                backgroundColor: 'white',
                border: '2px solid #000',
                padding: '16px 32px 24px 16px',
              },
              FormControl:{
                  padding:'10px',
                  margin:'0',
                  position:'relative',
                  height:'20px',
                  marginLeft:'10px'
                 
              },
              addTopicBtn:{
                position:'absolute',
                right:'0',
                top:'0',
                marginTop:'',
                backgroundColor:'white'
            }
        }

        return (
            <div>
                {
                localStorage.getItem('user_name') ? 
                    <div>
                        <Button variant="outlined" size="small" style={style.addTopicBtn} onClick={this.handleOpen}>
                            <PlaylistAddIcon style={{marginRight:'5px',fontSize:'16px'}}/>เพิ่มบทความ
                        </Button>
                        <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        style={style.modal}
                        open={this.state.openModal}
                        onClose={this.handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                        >
                            <Fade in={this.state.openModal}>
                        <div style={style.paper}>
                            <TextField
                                id="standard-full-width"
                                label="หัวข้อเรื่อง"   
                                name="post_title"
                                onChange={this.onChange}
                                value={this.state.post_title}
                                style={{ margin: 8 }}
                                placeholder="หัวข้อเรื่อง"
                                helperText=""
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="เนื้อหา"
                                name="post_detail"
                                onChange={this.onChange}
                                value={this.state.post_detail}
                                multiline
                                style={{ margin: 8 }}
                                rows="8"
                                fullWidth
                                placeholder="เนื้อหา"
                                variant="outlined"
                            />
                            <div className="Form-Control" style={style.FormControl}>
                            {this.state.post_title && this.state.post_detail ?
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.props.submitForm(this.state,this.handleClose)}
                                    style={{
                                        padding:'8px 24px',
                                        margin:'8px',
                                        position:'absolute',
                                        top:'0',
                                        left:'0'
                                    }}
                                    startIcon={<TelegramIcon />}
                                     
                                >
                                    โพส
                                </Button>
                                :
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.props.submitForm(this.state,this.handleClose)}
                                    style={{
                                        padding:'8px 24px',
                                        margin:'8px',
                                        position:'absolute',
                                        top:'0',
                                        left:'0'
                                    }}
                                    startIcon={<TelegramIcon />}
                                    disabled
                                     
                                >
                                    โพส
                                </Button>
                            }
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={this.handleClose}
                                    style={{
                                        padding:'8px 24px',
                                        margin:'8px',
                                        position:'absolute',
                                        top:'0',
                                        right:'0'
                                    }}
                                    startIcon={<DeleteIcon />}
                                >
                                    ยกเลิก
                                </Button>
                            </div>
                        </div>
                        </Fade>
                    </Modal>
                    </div>
                : null
                }
            </div>
        );
    }
}

export default AddTopic;