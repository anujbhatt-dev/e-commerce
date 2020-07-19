 import React, {Component} from "react"
import tshirt from "../../../../assets/images/t-shirt.jpg"

 class BigImage extends Component{

   render(){

     return (
       <div className="bigImage">
          <img className="bigImage__image" src={tshirt} alt=""/>
           <div className="bigImage__quote">
                <span className="bigImage__quote-span1">Inner Clan</span>
                <span className="bigImage__quote-span2">The 1960s was an era of big thoughts. And yet, amazingly, each of these thoughts could fit on a T-shirt</span>
           </div>
       </div>
     )
   }
 }


export default BigImage;
