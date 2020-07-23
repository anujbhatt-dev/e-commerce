 import React, {Component} from "react"
import SocialMedia from "./social-media/social-media"
import Footer from "./footer/footer"
import Main from "./main/main"
import Cart from "./main/cart/cart"
import Modal from "../../UI/modal/modal"
import Backdrop from "../../UI/backdrop/backdrop"

 class Layout extends Component{

   state={
     cart:[],
     show:false,
     caller:true,
     authenticated:false
   }

   modalToggleHandler=()=>{
      console.log("in");
      if(this.state.show){
        this.setState({show:false})
      }else{
        this.setState({show:true})
      }
   }

   cartHandler=(e)=>{
      const newCartState=[...this.state.cart]
      newCartState.push(e)
      this.setState({cart:[...newCartState]})
   }


   render(){

     let modal=null;
     if(this.state.cart.length!==0){
       modal = <Modal clicked={this.modalToggleHandler} show={this.state.show}><div className="modalCart">
                  {this.state.cart.map((product,i)=>(
                    <div className="modalCart__box">
                        <div className="modalCart__box--item">Name: {product.name}</div>
                        <div className="modalCart__box--item">Size: {product.size}</div>
                        <div className="modalCart__box--item">Quantity: {product.quantity}</div>
                        <div className="modalCart__box--item">color: {product.seletedColorName}</div>
                        <div className="modalCart__box--item">delete</div>
                        <div className="modalCart__box--item">order now</div>
                    </div>
                  ))}
               </div></Modal>
     }

     return (
        <>
           {modal}
           <Backdrop clicked={this.modalToggleHandler} show={this.state.show}/>
           <Cart clicked={this.modalToggleHandler} cart={this.state.cart} count={this.state.cart.length}/>
           <SocialMedia />
           <Main cartHandler={this.cartHandler} />
           <Footer/>
        </>
     )
   }
 }


export default Layout;
