 import React, {Component} from "react"
import CustomDesign from "./custom-design/custom-design"
import Subscribe from "./subscribe/subscribe"
import {Link} from "react-router-dom"



 class Footer extends Component{










   render(){

     return (
       <>
            <CustomDesign />
            <Subscribe />
            <footer className="footer">
                   <Link to="/sizeChart">size chart</Link>
                   <Link to="/privacyPolicy">privacy policy</Link>
                   <Link to="/deliveryAndReturn">dilevery and returns</Link>
                   <span className="nav__list--item">contact us
                   <span className="dropdown">
                       <span className="dropdown__item">gmail@gmail.com</span>
                       <span className="dropdown__item">123456789</span>
                       <span className="dropdown__item instagram"><i className="fa fa-instagram" aria-hidden="true"></i></span>
                   </span></span>
                   <Link to="/whoAreWe">who are we</Link>
                   <div className="footer__copyright">&copy; copyright 2020 inner clan designs</div>
             </footer>
       </>
     )
   }
 }


export default Footer;
