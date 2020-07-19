 import React, {Component} from "react"
import SocialMedia from "./social-media/social-media"
import Footer from "./footer/footer"
import Main from "./main/main"
import Cart from "../../UI/cart/cart"

 class Layout extends Component{

   render(){

     return (
        <>
           <Cart count="5"/>
           <SocialMedia />
           <Main />
           <Footer/>
        </>
     )
   }
 }


export default Layout;
