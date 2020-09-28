 import React, {Component} from "react"
import  axios  from "axios"
import validator from "validator"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 class Subscribe extends Component{

   state={
     subscribing:false,
     email:"",
   }

   componentDidUpdate=()=>{
     if(this.state.subscribing){
       console.log("in subscribe");
      let param={
        email:this.state.email
      }
       axios.post("/v1/subscribe",null,{params:param}).then(res=>{
            toast.success("you have been successfully subscibed")
            this.setState({
              subscribing:false,
              email:""
            })
       }).catch(err=>{
         this.setState({
           subscribing:false,
           email:""
         })
         if(err.response && err.response.data[0]){
           toast.error(err.response.data[0]);
         }else{
           toast.error("something went wrong");
         }
       })
     }
   }

   onChangeHandler=(e)=>{
      const name = e.target.name
      const value = e.target.value
      let prevState={...this.state};
      prevState[name]=value;
      prevState.categorySaved=false;
      this.setState({
        ...prevState
      })
   }

   subscribeHandler=(e)=>{
     if(validator.isEmail(this.state.email))
      this.setState({subscribing:true})
     else
      toast.error("enter a valid email")
    e.preventDefault();
   }

   render(){

     return (
       <div className="subscribe">
         <div className="subscribe__head">Subscribe to our Newsletter</div>
         <div className="subscribe__subHead">Stay up to date with new product launches and exclusive discounts and offers</div>
         <form className="subscribe__form" onSubmit={this.subscribeHandler}>
           <input data-tip="enter your email" required onChange={this.onChangeHandler} value={this.state.email} name="email" placeholder="subscribe to my Newsletter" className="subscribe__form--input" type="text"/>
           <button data-tip="subscribe" className="subscribe__form--btn" type="submit">subscribe</button>
         </form>
       </div>
     )
   }
 }


export default Subscribe;
