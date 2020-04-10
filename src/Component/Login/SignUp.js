import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Redirect,Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name : '',
      user_password : '',
      status : 0
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  submitForm(e){
    e.preventDefault();
    const {user_name,user_password} = this.state
    if(user_name != '' && user_password != ''){
      axios.post("http://192.168.5.11:8080/users",{user_name,user_password}).then(res=>{
        this.setState({
          user_name : '',
          user_password : '',
          status : 1
        })
        alert("ลงทะเบียนเสร็จสิ้น คุณสามารถเข้าสู่ระบบได้แล้ว")
      })
    }else{
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } 
  }
  render() {
    if(this.state.status){
      return <Redirect to='/Login'/>
    }

    const style={
      paper : {
        marginTop: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar : {
        margin: '8px',
        backgroundColor: '#ff0055',
      },
      form : {
        width: '100%', // Fix IE 11 issue.
        marginTop: '24px',
      },
      submit : {
        margin: '12px 0px 16px 0px',
      }
    }
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ลงทะเบียน
          </Typography>
          <form style={style.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.onChange}
                  id="user_name"
                  label="username"
                  name="user_name"
                  autoComplete="username"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.onChange}
                  name="user_password"
                  label="password"
                  type="password"
                  id="user_password"
                  autoComplete="current-password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.submitForm}
              style={style.submit}
            >
              ลงทะเบียน
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Link to='/Login' variant="body2">
                  มีบัญชีอยู่แล้ว ? เข้าสู่ระบบ
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default SignUp;
