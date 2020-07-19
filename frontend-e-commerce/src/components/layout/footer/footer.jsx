 import React, {Component} from "react"
import go from "../../../assets/images/goLogo.png"

 class Footer extends Component{

   render(){

     return (
       <footer className="footer">
              <ul className="footer__ul">
                 <li className="footer__ul-li">
                    <div className="subscribe">
                        <input placeholder="subscribe to my Newsletter" className="subscribe__input" type="text"/>
                        <button className="subscribe__btn" type="submit">subscribe</button>
                    </div>
                 </li>
                 <li className="footer__ul-li">bla bla</li>
                 <li className="footer__ul-li">bla</li>
              </ul>
             <img className="footer__image" src={go} alt=""/>
             <div className="footer__copyright">&copy; copyright 2020 inner clan designs</div>
       </footer>
     )
   }
 }


export default Footer;
