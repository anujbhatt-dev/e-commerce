 import React, {Component} from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pic from "../../../../assets/images/innerclan_page-0001.jpg"

 class BigImage extends Component{

  state={
    arr:[]
  }

  componentDidMount=()=>{
    axios.get("/v1/client/ui").then(res=>{
         this.setState({
           arr:res.data
         })
    }).catch(err=>{
      if(err.response && err.response.data[0]){
        toast.error(err.response.data[0]);
      }else{
        toast.error("something went wrong");
      }
    })
    }

   render(){

     return (
       <div className="bigImage">
          <div className="bigImage__item">
             <img className="bigImage__image" src={pic} alt=""/>
             <div className="bigImage__quote">
                  <span className="bigImage__quote-span1">Inner Clan</span>
                  <span className="bigImage__quote-span2">{this.state.quote}</span>
             </div>
           </div>
           <div className="bigImage__item">
              <img className="bigImage__image" src={pic} alt=""/>
              <div className="bigImage__quote">
                   <span className="bigImage__quote-span1">Inner Clan</span>
                   <span className="bigImage__quote-span2">{this.state.quote}</span>
              </div>
            </div>
            <div className="bigImage__item">
               <img className="bigImage__image" src={pic} alt=""/>
               <div className="bigImage__quote">
                    <span className="bigImage__quote-span1">Inner Clan</span>
                    <span className="bigImage__quote-span2">{this.state.quote}</span>
               </div>
             </div>
       </div>
     )
   }
 }


export default BigImage;
