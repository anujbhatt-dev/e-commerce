 import React, {Component} from "react"


 class Subscribe extends Component{

   state={
     link:"",
     subject:"",
     body:""
   }

   onChangeHandler=(e)=>{
      const name= e.target.name
      const value= e.target.value
      let prevState = {...this.state}
      prevState[name]=value
      this.setState({
          ...prevState
      })
   }

   onSubmitHandler=(e)=>{
      console.log(this.state);
      e.preventDefault();
   }

   render(){

     return (
       <div className="subscribe">
           <div className="subscribe__box">
             <form onSubmit={this.onSubmitHandler}>
               <input required onChange={this.onChangeHandler} name="link" value={this.state.link} className="subscribe__box--name" type="text" placeholder="Link"/>
               <input required onChange={this.onChangeHandler} name="subject" value={this.state.subject} className="subscribe__box--name" type="text" placeholder="subject"/>
               <textarea required onChange={this.onChangeHandler} value={this.state.body} name="body" style={{height:"15rem"}} className="subscribe__box--name" placeholder="message"></textarea>
               <input className="subscribe__box--btn" value="update" type="submit"/>
             </form>
           </div>
           <table cellspacing="20px" className="subscribe__table">
               <thead>
                  <tr>
                     <th>email</th>
                     <th>subscribe on</th>
                  </tr>
               </thead>
               <tbody>
                   <tr>
                      <th>emailemailemailemailemailemailemail@gmail.com</th>
                      <th>email123</th>
                   </tr>
               </tbody>
           </table>
       </div>
     )
   }
 }


export default Subscribe;
