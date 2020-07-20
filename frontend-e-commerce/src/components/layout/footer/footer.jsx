 import React, {Component} from "react"
import go from "../../../assets/images/goLogo.png"
import  axios  from "axios"

 class Footer extends Component{

   state={
     subscribing:false,
     email:""
   }

   componentDidUpdate=()=>{
     if(this.state.subscribing){
      let param={
        email:this.state.email
      }
       axios.post("/v1/subscribe/",null,{params:param}).then(res=>{
            alert("you have been successfully subscibed")
            this.setState({
              subscribing:false,
              email:""
            })
       }).catch(err=>{
         if(err.response && err.response.data[0]){
           alert(err.response.data[0]);
         }else{
           alert("something went wrong");
         }
       })
     }
   }

   subscribeHandler=()=>{
     this.setState({subscribing:true})
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

   render(){

     return (
       <footer className="footer">
              <ul className="footer__ul">
                 <li className="footer__ul-li">
                    <div className="subscribe">
                        <input onChange={this.onChangeHandler} value={this.state.email} name="email" placeholder="subscribe to my Newsletter" className="subscribe__input" type="text"/>
                        <button onClick={this.subscribeHandler} className="subscribe__btn" type="submit">subscribe</button>
                    </div>
                 </li>
                 <li className="footer__ul-li">bla bla</li>
                 <li className="footer__ul-li">bla</li>
              </ul>
             <img className="footer__image" src={go} alt=""/>
             <div className="footer__copyright">&copy; copyright 2020 inner clan designs</div>
       </footer>
     )
   }
 }


export default Footer;
