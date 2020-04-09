import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright Â© '}
      <Link color="inherit" to="/">
        Webboard
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class SignIn extends Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem('token')
    let isLoggedIn = true
    if(token == null){
        isLoggedIn = false
    }

    this.state ={
        user_name : '',
        user_password : '',
        success : false,
        data : null,
        isLoggedIn
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
  }
  onSubmit(e){
      e.preventDefault();
      const {user_name , user_password} = this.state;
      axios.post("http://192.168.5.11:8080/users/login",{user_name,user_password}).then(res =>{
          if(res.data.success == false){
            alert('username or password incorrect !!')
            this.setState({
              user_password : '',
              user_name : ''
            })
          }else{
            localStorage.setItem("user_id",res.data.data.user_id)
            localStorage.setItem("user_name",res.data.data.user_name)
            localStorage.setItem("token","sadiaghasdkolfasjfafjs")
            this.setState({
              data : res.data.data,
              success : res.data.success,
              isLoggedIn : true
            })
          }
      })
  }

  render() {
    if(this.state.isLoggedIn){
      console.log(this.state.isLoggedIn)
      return <Redirect to="/"/>
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
          backgroundColor: '#fce4ec',
        },
        form : {
          width: '100%', // Fix IE 11 issue.
          marginTop: '8px',
        },
        submit : {
          margin: '24px 0px 16px 0px',
        },
      }
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            เข้าสู่ระบบ
          </Typography>
          <form style={style.form} noValidate  onSubmit={this.onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="user_name"
              autoComplete="Username"
              autoFocus
              onChange={this.onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="user_password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.onChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={style.submit}
            >
              เข้าสู่ระบบ
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  ลืมรหัสผ่าน ?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/SignUp'>
                  {"ยังไม่มีบัญชี ? ลงทะเบียน"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
    </Container>
    );
  }
}

export default SignIn;