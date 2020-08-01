import React from 'react';
import "./App.scss"
import Layout from "./components/layout/layout"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import axios from "axios"
import ForgotPassword from './components/layout/forgot-password/forgot-password';
import OAuthAuthorization from './components/layout/oauth-authorization/oauth-authorization';
import PaymentResult from './components/layout/payment-result/payment-result';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

axios.interceptors.response.use(response =>{
 // console.log("intercept->"+JSON.stringify(response.headers));
  let authorization=response.headers.authorization;
  if(authorization){
  axios.defaults.headers.common['authorization'] = authorization;
}
  return response;});


class App extends React.Component{


state={
  authenticated:false,
  name:"",
  email:"",
}

componentDidUpdate(){
  // console.log("APP.jsx updated--> "+ JSON.stringify(this.state));
}

componentDidMount=()=>{
  axios.interceptors.response.use(response =>{
    let authorization=response.headers.authorization;
    if(authorization){
      console.log("AUthorization 123")
    axios.defaults.headers.common['authorization'] = authorization;
  this.setState({authenticated:true,name:response.headers.name,email:response.headers.email});
  }
    return response;});
}


setAuthorizationHeader=(jwt,email,name)=>{
  axios.defaults.headers.common['authorization'] = jwt;
  this.setState({authenticated:true,name:name,email:email});
}


logoutHandler=()=>{
  window.location.href="http://sheltered-scrubland-77233.herokuapp.com/";
}

render(){



  return (
    <BrowserRouter>
      <Switch>
              <Route exact path="/forgotPassword/:id"><ForgotPassword/></Route>
              <Route exact path="/auth/:jwt/:email/:name"><OAuthAuthorization setAuthorizationHeader={this.setAuthorizationHeader}/></Route>
              <Route exact path="/paymentResult/:jwt/:email/:name"><PaymentResult setAuthorizationHeader={this.setAuthorizationHeader}/></Route>

              <Route>  <Layout logout={this.logoutHandler} name={this.state.name} email={this.state.email} authenticated={this.state.authenticated}/>
      </Route>
      </Switch>
    </BrowserRouter>
  );
}
}

export default App;
