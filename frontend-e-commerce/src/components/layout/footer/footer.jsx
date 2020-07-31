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
             <Link to="/whoAreWe">who are we</Link>
             <div className="footer__copyright">&copy; copyright 2020 inner clan designs</div>
       </footer>
       </>
     )
   }
 }


export default Footer;
