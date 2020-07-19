 import React, {Component} from "react"


 class Cart extends Component{

   render(){

     return (
       <div className="cart">
            <span className="cart__count">{this.props.count}</span>
            <label onClick={this.modalToggleHandler} htmlFor="cart__checkbox" className="cart__label"><i className="fa fa-shopping-bag cart__icon" aria-hidden="true"></i></label>
        </div>
     )
   }
 }


export default Cart;
