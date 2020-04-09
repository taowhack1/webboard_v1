import Home from "../src/Component/Home";
import SignIn from './Component/Login/LoginMui'
import Logout from './Component/Login/Logout'
import { Switch ,Route, BrowserRouter } from "react-router-dom";
import Admin from './Component/Authen/Admin'
import React, { Component } from 'react';
import SignUp from './Component/Login/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/Login" component={SignIn}/>
          <Route exact path="/Logout" component={Logout}/>
          <Route exact path="/Admin" component={Admin}/>
          <Route exact path="/SignUp" component={SignUp}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
