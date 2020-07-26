 import React, {Component} from "react"


 class Profile extends Component{

   render(){

     return (
       <div onClick={this.props.clicked} className="cart profile">
            <label onClick={this.props.modalProfileHandler} htmlFor="cart__checkbox" className="cart__label"><i className="fa fa-user cart__icon" aria-hidden="true"></i></label>
        </div>
     )
   }
 }


export default Profile;
