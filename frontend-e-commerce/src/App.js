import React from 'react';
import "./App.scss"
import Layout from "./components/layout/layout"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import axios from "axios"
import ForgotPassword from './components/layout/forgot-password/forgot-password';
import OAuthAuthorization from './components/layout/oauth-authorization/oauth-authorization';


// let authenticated=false;
axios.interceptors.response.use(response =>{
 console.log("intercept->"+JSON.stringify(response.headers));
  let authorization=response.headers.authorization;
  if(authorization){
  axios.defaults.headers.common['authorization'] = authorization;
//authenticated=true;
}
  return response;});


class App extends React.Component{


state={
  authenticated:false,
  name:"",
  email:"",
}

componentDidUpdate(){
  console.log("APP.jsx updated--> "+ JSON.stringify(this.state));
}

componentDidMount=()=>{
  axios.interceptors.response.use(response =>{
   console.log("intercept->"+response.headers.authorization);
    let authorization=response.headers.authorization;
    if(authorization){
    axios.defaults.headers.common['authorization'] = authorization;
  this.setState({authenticated:true,name:response.headers.name,email:response.headers.name});
  }
    return response;});
}


setAuthorizationHeader=(jwt,email,name)=>{
  axios.defaults.headers.common['authorization'] = jwt;
  this.setState({authenticated:true,name:name,email:email});
}


logoutHandler(){
  this.setState({authenticated:true});
}

render(){



  return (
    <BrowserRouter>
      <Switch>
              <Route exact path="/forgotPassword/:id"><ForgotPassword/></Route>
              <Route exact path="/auth/:jwt/:email/:name"><OAuthAuthorization setAuthorizationHeader={this.setAuthorizationHeader}/></Route>
              <Route>  <Layout authenticated={this.state.authenticated}/>
      </Route>
      </Switch>
    </BrowserRouter>
  );
}
}

export default App;
