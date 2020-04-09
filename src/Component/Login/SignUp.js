import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Redirect,Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright Â© '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
        alert("เพิ่มข้อมูลเรียบร้อยแล้ว")
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
        backgroundColor: '#fce4ec',
      },
      form : {
        width: '100%', // Fix IE 11 issue.
        marginTop: '24px',
      },
      submit : {
        margin: '24px 0px 16px 0px',
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
              {/* <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.onChange}
                  id="user_name"
                  label="user_name"
                  name="user_name"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.onChange}
                  name="user_password"
                  label="user_password"
                  type="password"
                  id="user_password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
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
            <Grid container justify="flex-end">
              <Grid item>
                <Link to='/Login' variant="body2">
                  มีบัญชีอยู่แล้ว ? เข้าสู่ระบบ
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default SignUp;
