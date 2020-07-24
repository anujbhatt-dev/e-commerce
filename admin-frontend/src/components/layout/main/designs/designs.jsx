 import React, {Component} from "react"
import axios from "axios"
import dwight from "../../../../assets/images/dwight.jpg"

 class Designs extends Component{

   state={
     customOrders:[]
   }

    componentDidMount=()=>{
      axios.get("/v1/admin/design/getDesigns").then(res=>{
        console.log(res.data);
        this.setState({customOrders:[...res.data]})
      }).catch(err=>{
        if(err.response && err.response.data)
        alert(err.response.data[0]);
        else
        alert("contact the team");
       })
  }


   render(){
     let customOrders = null;
     if(this.state.customOrders.length!==0){
        customOrders = <div className="designs">
                            {this.state.customOrders.map((customOrder,i)=>(
                              <div className="designs__box" key={customOrder.id}>
                                <div className="designs__box--item">{customOrder.email}</div>
                                <div className="designs__box--item">{customOrder.createdOn}</div>
                                <div className="designs__box--item">{customOrder.comment}</div>
                                <img className="designs__box--image" src={dwight} alt="dwight"/>
                              </div>
                            ))}
                       </div>
     }

     return (
        customOrders

     )
   }
 }


export default Designs;
