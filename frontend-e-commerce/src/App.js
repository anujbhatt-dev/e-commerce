import React from 'react';
import "./App.scss"
import Layout from "./components/layout/layout"
import {BrowserRouter} from "react-router-dom"
import axios from "axios"


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
}

componentDidUpdate(){
  console.log("APP.jsx updated-->");
}

componentDidMount=()=>{
  axios.interceptors.response.use(response =>{
   console.log("intercept->"+response.headers.authorization);
    let authorization=response.headers.authorization;
    if(authorization){
    axios.defaults.headers.common['authorization'] = authorization;
  this.setState({authenticated:true});
  }
    return response;});
}

logoutHandler(){
  this.setState({authenticated:true});
}

render(){



  return (
    <BrowserRouter>
        <Layout authenticated={this.state.authenticated}/>
    </BrowserRouter>
  );
}
}

export default App;
