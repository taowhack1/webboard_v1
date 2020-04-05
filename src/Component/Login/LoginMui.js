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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="">
        Your Website
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
        username : '',
        password : '',
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
      const {username , password} = this.state;
      console.log(username,password);
      if(username === "1234" && password ==="1234"){
          localStorage.setItem("token","sadiaghasdkolfasjfafjs")
          this.setState({
              isLoggedIn : true
          })
      }else{
          alert("username or password incorrect !!");
          this.setState({
              username:"",
              password:""
          })
      }
  }

  render() {
    if(this.state.isLoggedIn){
      return <Redirect to="/Home"/>
    }
        const paper = {
          marginTop: '64px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }
        const avatar = {
          margin: '8px',
          backgroundColor: '#fce4ec',
        }
        const form = {
          width: '100%', // Fix IE 11 issue.
          marginTop: '8px',
        }
        const submit = {
          margin: '24px 0px 16px 0px',
        }
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={paper}>
          <Avatar style={avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form style={form} noValidate  onSubmit={this.onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="Username"
              autoFocus
              onChange={this.onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
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
              style={submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/SignUp'>
                  {"Don't have an account? Sign Up"}
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