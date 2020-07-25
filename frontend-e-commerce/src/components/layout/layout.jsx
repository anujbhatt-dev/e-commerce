 import React, {Component} from "react"
import SocialMedia from "./social-media/social-media"
import Footer from "./footer/footer"
import Main from "./main/main"
import Cart from "./main/cart/cart"
import Profile from "./main/profile/profile"
import Modal from "../../UI/modal/modal"
import Backdrop from "../../UI/backdrop/backdrop"

 class Layout extends Component{

   state={
     cart:[],
     show:false,
     caller:true,
     authenticated:true,
     profile:false
   }

   modalToggleHandler=()=>{
      console.log("in");
      if(this.state.show){
        this.setState({show:false})
      }else{
        this.setState({show:true})
      }
   }

   modalProfileHandler=()=>{
      console.log("in modalProfileHandler");
      if(this.state.profile){
        this.setState({profile:false})
      }else{
        this.setState({profile:true})
      }
   }

   cartHandler=(e)=>{
       if(!this.state.authenticated){
           this.setState({profile:true})
           return false
       }
      const newCartState=[...this.state.cart]
      newCartState.push(e)
      this.setState({cart:[...newCartState]})
      
   }


   render(){

     let modal=null;
     let modalLogin=null;
     if(this.state.cart.length!==0){
       modal = this.state.authenticated?[<Modal clicked={this.modalToggleHandler} show={this.state.show}><div className="modalCart">
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
               </div></Modal>,<Backdrop clicked={this.modalToggleHandler} show={this.state.show}/>]
               :[<Modal clicked={this.modalToggleHandler} show={this.state.show}>
                               <div className="user">
                                   <button className="user__google"><i class="fa fa-google" aria-hidden="true"></i> continue with google </button>
                                   <hr/>
                                   <form className="user__login" onSubmit={this.logInSubmitHandler}>
                                        <h3>logIn</h3>
                                        <input required placeholder="email or username" className="user__input" name="email" type="text"/>
                                        <input required placeholder="password" className="user__input" name="password" type="text"/>
                                        <button className="user__login--btn" type="submit">login</button>
                                   </form>
                                   <hr/>
                                   <form className="user__register" onSubmit={this.registerSubmitHandler}>
                                        <h3>Register</h3>
                                        <input required placeholder="username" className="user__input" name="username" data-tip="enter a username" type="text"/>
                                        <input required placeholder="email" className="user__input" name="email" type="text"/>
                                        <input required placeholder="password" className="user__input" name="password" type="text"/>
                                        <input required placeholder="confirm password" className="user__input" name="confirmPassword" type="text"/>
                                       <button className="user__register--btn" type="submit">sighup</button>
                                   </form>
                               </div>
                          </Modal>, <Backdrop clicked={this.modalToggleHandler} show={this.state.show}/>]
     }
      modalLogin = [<Modal clicked={this.modalProfileHandler} show={this.state.profile}>
                      <div className="user">
                          <button className="user__google"><i class="fa fa-google" aria-hidden="true"></i> continue with google </button>
                          <hr/>
                          <form className="user__login" onSubmit={this.logInSubmitHandler}>
                               <h3>logIn</h3>
                               <input required placeholder="email or username" className="user__input" name="email" type="text"/>
                               <input required placeholder="password" className="user__input" name="password" type="text"/>
                               <button className="user__login--btn" type="submit">login</button>
                          </form>
                          <hr/>
                          <form className="user__register" onSubmit={this.registerSubmitHandler}>
                               <h3>Register</h3>
                               <input required placeholder="username" className="user__input" name="username" data-tip="enter a username" type="text"/>
                               <input required placeholder="email" className="user__input" name="email" type="text"/>
                               <input required placeholder="password" className="user__input" name="password" type="text"/>
                               <input required placeholder="confirm password" className="user__input" name="confirmPassword" type="text"/>
                              <button className="user__register--btn" type="submit">sighup</button>
                          </form>
                      </div>
                 </Modal>,<Backdrop clicked={this.modalProfileHandler} show={this.state.profile}/>]

     return (
        <>
           {modal}
           {modalLogin}
           <Cart clicked={this.modalToggleHandler} cart={this.state.cart} count={this.state.cart.length}/>
           <Profile clicked={this.modalProfileHandler}/>
           <SocialMedia />
           <Main cartHandler={this.cartHandler} />
           <Footer/>
        </>
     )
   }
 }


export default Layout;
