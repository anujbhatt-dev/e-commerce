 import React, {Component} from "react"
import go from "../../../assets/images/goLogo.png"
// import CustomDesign from "./custom-design/custom-design"
import CustomDesign from "./custom-design/custom-design"
import Subscribe from "./subscribe/subscribe"

 class Footer extends Component{










   render(){

     return (
       <>
              <CustomDesign />
              <Subscribe />
      <footer className="footer">
             <img style={{width:"28rem"}} className="footer__image" src={go} alt=""/>
             <div className="footer__copyright">&copy; copyright 2020 inner clan designs</div>
       </footer>
       </>
     )
   }
 }


export default Footer;
