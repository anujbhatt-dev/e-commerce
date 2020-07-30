 import React, {Component} from "react"
import {Link, withRouter} from "react-router-dom"
import axios from "axios"

 class Login extends Component{


   state={
     // cart:[],
     // show:false,
     // userDetail:{},
     // profile:false,
     register:{
       firstName:"",
       lastName:"",
       email:"",
       password:"",
       confirmPassword:""
     },
     login:{
       email:"",
       password:"",
     },
     loading:false
  }

   registerSubmitHandler=(e)=>{
     if(this.state.register.password===this.state.register.confirmPassword){
       axios.post("/v1/client/register",this.state.register).then(res=>{
         this.setState({
           // authenticated:true,
           register:{
             firstName:"",
             lastName:"",
             email:"",
             password:"",
             confirmPassword:""
           },
           show:false,
           profile:false,
           userDetail:{...res.data}
         })
       }).catch(err=>{
         if(err.response && err.response.data[0]){
           alert(err.response.data[0]);
         }else{
           alert("something went wrong search");
         }
       })
     }else{
       alert("password should match")
     }
     e.preventDefault();
   }

   logInSubmitHandler=(e)=>{
     axios.post("/v1/client/authenticate",this.state.login).then(res=>{
        this.setState({
          // authenticated:true,
          login:{
            email:"",
            password:"",
          },
          show:false,
          profile:false,
          userDetail:{...res.data}
        })
     }).catch(err=>{
       if(err.response && err.response.data[0]){
         alert(err.response.data[0]);
       }else{
         alert("something went wrong search");
       }
     })

     e.preventDefault();
   }

   logInChangeHandler=(e)=>{
       let newLogin = {...this.state.login}
       newLogin[e.target.name]= e.target.value
       this.setState({login:{...newLogin}})
   }

   registerChangeHandler=(e)=>{
     let newRegister = {...this.state.register}
     newRegister[e.target.name]= e.target.value
     this.setState({register:{...newRegister}})
   }


   componentDidUpdate=(prevProps,prevState)=>{
     if(!prevProps.authenticated && this.props.authenticated){
       this.props.history.push("/orders")
     }
   }

   render(){

     return (
       <div className="user">
                            <a href="http://innerclantest-env.eba-3xcbvtbq.ap-south-1.elasticbeanstalk.com/oauth2/authorization/google" className="user__google"><i className="fa fa-google" aria-hidden="true"></i> continue with google </a>
                            <hr/>
                            <form className="user__login" onSubmit={this.logInSubmitHandler}>
                                 <h3>logIn</h3>
                                 <input onChange={this.logInChangeHandler}  value={this.state.login.email} required placeholder="email" className="user__input" name="email" type="text"/>
                                 <input onChange={this.logInChangeHandler}  value={this.state.login.password} required placeholder="password" className="user__input" name="password" type="password"/>
                                 <button className="user__login--btn" type="submit">login</button>
                                 <Link to="/forgotPassword"><p className="user__login--forgotPassword">Forgot Password?</p></Link>
                            </form>
                            <hr/>
                            <form className="user__register" onSubmit={this.registerSubmitHandler}>
                                 <h3>Register</h3>
                                 <input value={this.state.register.firstName} onChange={this.registerChangeHandler} required placeholder="firstName" className="user__input" name="firstName" data-tip="enter a your first name" type="text"/>
                                 <input value={this.state.register.lastName} onChange={this.registerChangeHandler} required placeholder="lastName" className="user__input" name="lastName" data-tip="enter a your last name" type="text"/>
                                 <input value={this.state.register.email} onChange={this.registerChangeHandler} required placeholder="email" className="user__input" name="email" type="text"/>
                                 <input value={this.state.register.password} onChange={this.registerChangeHandler} required placeholder="password" className="user__input" name="password" type="password"/>
                                 <input value={this.state.register.confirmPassword} onChange={this.registerChangeHandler} required placeholder="confirm password" className="user__input" name="confirmPassword" type="password"/>
                                <button className="user__register--btn" type="submit">sighup</button>
                            </form>
        </div>
     )
   }
 }


export default withRouter(Login);
