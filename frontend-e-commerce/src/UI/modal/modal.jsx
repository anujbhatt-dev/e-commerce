 import React, {Component} from "react"


 class Modal extends Component{




   render(){
     console.log("in modal");
     let modal=null
     if(this.props.show){
       modal=<div style={{fontSize:"10rem"}} className="modal">
                  {this.props.children}
              </div>
     }
     return (
         modal
     )
   }
 }


export default Modal;
