 import React, {Component} from "react"
import SocialMedia from "./social-media/social-media"
import Footer from "./footer/footer"
import Main from "./main/main"
import Cart from "./main/cart/cart"

 class Layout extends Component{

   state={
     cart:[]
   }

   cartHandler=(e)=>{
      const newCartState=[...this.state.cart]
      newCartState.push(e)
      this.setState({cart:[...newCartState]})
   }


   render(){

     return (
        <>
           <Cart  cart={this.state.cart} count={this.state.cart.length}/>
           <SocialMedia />
           <Main cartHandler={this.cartHandler} />
           <Footer/>
        </>
     )
   }
 }


export default Layout;
