 import React, {Component} from "react"
 import axios from "axios"



 class MyOrders extends Component{

   state={
     myOrders:[]
   }

   componentDidMount=()=>{
     axios.get("/v1/order").then(res=>{
         this.setState({
           myOrders:[...res.data]
         })
         console.log(res.data);
     }).catch(err=>{
       if(err.response && err.response.data[0]){
         alert(err.response.data[0]);
       }else{
         alert("something went wrong....!!!!");
       }
     })
   }

   render(){
     if(!this.props.authenticated){
       window.location.href = "http://localhost:3001";
     }

     return (
          <div className="myOrders">
             {this.state.myOrders.length!==0?this.state.myOrders.map((order,i)=>(
                <div className="myOrders__box">
                    <div className="myOrders__box--orderId">OrderId: <span>{order.orderId}</span></div>
                    <div className="myOrders__box--transactionId">TransactionId: <span>{order.transactionId}</span></div>
                    <div className="orderItems">
                         {order.orderItems.map((orderItem,ii)=>(
                                <div className="orderItems__card">
                                    <img className="orderItems__card--item orderItems__card--image" src={'data:image/png;base64,'+orderItem.image} alt=""/>
                                    <div className="orderItems__card--items">
                                        <div className="orderItems__card--item orderItems__card--name"><span>{orderItem.productName}</span></div>
                                        <div className="orderItems__card--item orderItems__card--size"><span>{orderItem.size}</span></div>
                                        <div className="orderItems__card--item orderItems__card--quantity"><span>{orderItem.quantity}</span></div>
                                        <div className="orderItems__card--item orderItems__card--price"><span>{orderItem.price}</span></div>
                                    </div>
                                </div>
                         ))}
                     </div>
                </div>
             )): <div>you dont have any order</div>}
          </div>
     )
   }
 }


export default MyOrders;
