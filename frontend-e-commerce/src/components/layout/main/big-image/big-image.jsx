 import React, {Component} from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 class BigImage extends Component{

  state={
    quote:"",
    image:""
  }

  componentDidMount=()=>{
    axios.get("/v1/client/ui").then(res=>{
         this.setState({
           quote:res.data[0].quote,
           image:res.data[0].image1
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
          <img className="bigImage__image" src={this.state.image} alt=""/>
           <div className="bigImage__quote">
                <span className="bigImage__quote-span1">Inner Clan</span>
                <span className="bigImage__quote-span2">{this.state.quote}</span>
           </div>
       </div>
     )
   }
 }


export default BigImage;
