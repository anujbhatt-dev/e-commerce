 import React, {Component} from "react"
 import axios from "axios"



 class MyOrders extends Component{

   state={
     myOrders:[],
     query:"",
     querying:false
   }

   componentDidMount=()=>{
     axios.get("/v1/order").then(res=>{

          let myOrders=[...res.data];
          myOrders.forEach(order=>{
            order.newQuery=""
          })
        this.setState({
          myOrders:[...myOrders]
        })


     }).catch(err=>{
       if(err.response && err.response.data[0]){
         alert(err.response.data[0]);
       }else{
         alert("something went wrong....!!!!");
       }
     })
   }

   onChangeHandler=(e,index)=>{

       let newOrders=[...this.state.myOrders]
       let newOrder=newOrders[index];
       newOrder.newQuery=e.target.value;
       this.setState({
           myOrders:[...newOrders]
       })
   }

   queryHandler=(e,id,index)=>{
     if(this.state.querying){
         axios.post("/v1/order/addQuery/"+id).then(res=>{
           let newOrders=[...this.state.myOrders]
           let newOrder=newOrders[index];
          let queries= [...newOrder[queries]];
          queries.push(newOrder.newQuery);
           newOrder.newQuery="";
          this.setState({
              myOrders:[...newOrders]
          })

         }).catch(err=>{
           if(err.response && err.response.data[0]){
             alert(err.response.data[0]);
           }else{
             alert("something went wrong....!!!!");
           }
         })
       }
     e.preventDefault()
   }



   render(){
     if(!this.props.authenticated){
       window.location.href = "http://localhost:3001";
     }

     return (
          <div className="myOrders">
             {this.state.myOrders.length!==0?this.state.myOrders.map((order,i)=>(
                <div className="myOrders__box">
                    <div className="myOrders__box--orderId">Date: <span>{order.orderedOnDate}</span></div>
                    <div className="myOrders__box--orderId">Time: <span>{order.orderedOnTime}</span></div>
                    <div className="myOrders__box--orderId">Status: <span>{order.status}</span></div>
                    <div className="myOrders__box--orderId">Total: ₹<span>{order.total}</span></div>
                    {order.transactionId?<div className="myOrders__box--orderId">TransactionId: <span>{order.transactionId}</span></div>:null}
                    <div className="myOrders__box--orderId">OrderId: <span>{order.orderId}</span></div>
                    <hr className="myOrders__box--hr"/>
                    <div className="flexer">
                        <div className="orderItems">
                             {order.orderItems.map((orderItem,ii)=>(
                                    <div className="orderItems__card">
                                        <img className="orderItems__card--item orderItems__card--image" src={'data:image/png;base64,'+orderItem.image} alt=""/>
                                        <div className="orderItems__card--items">
                                        <div className="orderItems__card--item orderItems__card--size">Size: <span>{orderItem.size}</span></div>
                                            <div className="orderItems__card--item orderItems__card--name">Name: <span>{orderItem.productName}</span></div>
                                            <div className="orderItems__card--item orderItems__card--quantity">Quantity: <span>{orderItem.quantity}</span></div>
                                            <div className="orderItems__card--item orderItems__card--price">Price: <span> ₹{orderItem.price}</span></div>
                                        </div>
                                    </div>
                             ))}
                         </div>
                         <div className="myOrders__box--address">
                             <h4 className="myOrders__box--address-head">Shipping Addres</h4>
                             <hr className="myOrders__box--hr"/>
                             <div className="myOrders__box--address-item">{order.address.customerName}</div>
                             <div className="myOrders__box--address-item">{order.address.customerPhone}</div>
                             <div className="myOrders__box--address-item">{order.address.houseNumber}</div>
                             <div className="myOrders__box--address-item">{order.address.location}</div>
                             <div className="myOrders__box--address-item">{order.address.landmark}</div>
                             <div className="myOrders__box--address-item">{order.address.city}</div>
                             <div className="myOrders__box--address-item">{order.address.state}</div>
                             <div className="myOrders__box--address-item">{order.address.pincode}</div>
                             {order.promoDiscount!==0?<h4 className="myOrders__box--address-head">Promo Details</h4>:null}
                             <hr className="myOrders__box--hr"/>
                             {order.promoDiscount!==0?<div className="myOrders__box--orderId">Promo Discount: ₹{order.promoDiscount}</div>:null}<br/>
                             {order.paymentMode?<div className="myOrders__box--orderId">Payment Mode: {order.paymentMode}</div>:null}
                         </div>
                         <div className="queries">
                               <form className="queries__form" onSubmit={(e)=>this.queryHandler(e,order.id,i)}>
                                    <input className="queries__form--input" onChange={(e)=>this.onChangeHandler(e,i)} value={this.state.myOrders[i].newQuery} placeholder="Post your Query" type="text"/>
                                    <button className="queries__form--btn">Post</button>
                               </form>
                               <div className="queries__posts">
                                   <ul className="queries__posts--list">
                                       {order.queries.map((query,i)=>(
                                         <li>{query.query}</li>
                                       ))}
                                   </ul>
                               </div>
                         </div>
                    </div>
                </div>
             )): <div>you dont have any order</div>}
          </div>
     )
   }
 }


export default MyOrders;
