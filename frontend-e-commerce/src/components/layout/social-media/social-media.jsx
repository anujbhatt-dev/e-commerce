 import React, {Component} from "react"


 class SocialMedia extends Component{

   render(){

     return (
       <div id="links" className="links">
          <ul className="links__list">
             <span style={{margin:"0 auto"}} className="nav__list--item  nav__list--item-modifier">{(this.props.name!=="")?"Welcome "+this.props.name:null}</span>
             <span style={{margin:"0 auto"}} className="nav__list--item  nav__list--item-modifier">Who are we?</span>
             <span className="links__list-item"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/innerclanofficial/?igshid=gpgcb833gqme">{""}<i className="fa fa-instagram" aria-hidden="true"></i></a></span>
             <span className="links__list-item"><a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/innerclanofficial/?igshid=gpgcb833gqme">{""}<i className="fa fa-facebook" aria-hidden="true"></i></a></span>
             <span className="links__list-item"><a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/innerclanofficial/?igshid=gpgcb833gqme">{""}<i className="fa fa-twitter" aria-hidden="true"></i></a></span>
             {this.props.authenticated?<span onClick={this.props.logout} style={{margin:"0 auto",padding:"1rem .5rem",width:"10rem"}} className="nav__list--item  nav__list--item-modifier">logout</span>:null}
          </ul>
       </div>
     )
   }
 }


export default SocialMedia;
