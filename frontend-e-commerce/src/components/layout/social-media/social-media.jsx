 import React, {Component} from "react"


 class SocialMedia extends Component{

   render(){

     return (
       <div className="links">
          <ul className="links__list">
             <span className="links__list-item"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/innerclanofficial/?igshid=gpgcb833gqme"><i class="fa fa-instagram" aria-hidden="true"></i></a></span>
             <span className="links__list-item"><a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/innerclanofficial/?igshid=gpgcb833gqme"><i class="fa fa-facebook" aria-hidden="true"></i></a></span>
             <span className="links__list-item"><a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/innerclanofficial/?igshid=gpgcb833gqme"><i class="fa fa-twitter" aria-hidden="true"></i></a></span>
          </ul>
       </div>
     )
   }
 }


export default SocialMedia;
