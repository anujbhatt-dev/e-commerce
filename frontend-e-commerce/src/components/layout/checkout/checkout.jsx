 import React, {Component} from "react"
import ReactToolip from "react-tooltip"
import axios from "axios"

 class Checkout extends Component{
   state={
     gTotal:null,
     finalAmount:null,
     formDetails:{
       customerName:"",
       customerNumber:"",
       email:"",
       landmark:"",
       location:"",
       city:"",
       state:"",
       pincode:"",
       coupon:""
     },
     orders:[],
     couponAppling:false,
     couponValue:null
   }

   couponSubmitHandler=(e)=>{
       this.setState({couponAppling:true})
       e.preventDefault();
   }

   onChangeHandler=(e)=>{
     let  newForm = {...this.state.formDetails}
     newForm[e.target.name]=e.target.value
     this.setState({
       formDetails:{...newForm}
     })
   }

   componentDidMount=()=>{
     let formDetails=null
     let gt = this.props.cart.map(product=>(product.quantity*product.productPrice)).reduce((acc,value)=>acc+value)
     this.setState({gTotal:gt,orders:[...this.props.cart],finalAmount:gt})
     axios.get("/v1/order/getAddress").then(res=>{

      formDetails={
         customerName:res.data.customerName,
         customerNumber:res.data.customerNumber,
         landmark:res.data.landmark,
         location:res.data.location,
         city:res.data.city,
         state:res.data.state,
         pincode:res.data.pincode,
         coupon:""
       }
       this.setState({formDetails:{...formDetails}})
     }).catch(err=>{
       if(err.response && err.response.data[0]){
         alert(err.response.data[0]);
       }else{
         alert("something went wrong search");
       }
     })
     formDetails={
       email:this.props.email
     }
     this.setState({formDetails:formDetails})
   }

   componentDidUpdate=()=>{
     if(this.state.couponAppling){
       axios.get('/v1/admin/promo/isValid/'+this.state.formDetails.coupon).then(res=>{
         console.log(res.data["Valid Promo Code"]);
         this.setState({
           couponAppling:false,
           couponValue:res.data["Valid Promo Code"],
           finalAmount:this.state.gTotal-res.data['Valid Promo Code']
         })
       }).catch(err=>{
         if(err.response && err.response.data[0]){
           alert(err.response.data[0]);
         }else{
           alert("something went wrong search");
         }
       })
     }
   }

   render(){
     if(!this.props.authenticated){
       window.location.href = "http://localhost:3000";

     }
     console.log(this.props.cart);
     return (
        <div className="checkout">
              <div className="checkout__details">
                 <form className="checkout__form" onSubmit={this.SubmitHandler}>
                     <input className="checkout__form--input" placeholder="Email" onChange={this.onChangeHandler} name="email" value={this.state.formDetails.email} type="text"/>
                     <input className="checkout__form--input" placeholder="Name" onChange={this.onChangeHandler} name="customerName" value={this.state.formDetails.customerName} type="text"/>
                     <input className="checkout__form--input" placeholder="Name" onChange={this.onChangeHandler} name="customerNumber" value={this.state.formDetails.customerNumber} type="Number"/>
                     <input className="checkout__form--input" placeholder="landmark" onChange={this.onChangeHandler} name="landmark" value={this.state.formDetails.landmark} type="text"/>
                     <input className="checkout__form--input" placeholder="Pincode" onChange={this.onChangeHandler} name="pincode" value={this.state.formDetails.pincode} type="text"/>
                     <input className="checkout__form--input" placeholder="location" onChange={this.onChangeHandler} name="location" value={this.state.formDetails.location} type="text"/>
                     <input className="checkout__form--input" placeholder="City" onChange={this.onChangeHandler} name="city" value={this.state.formDetails.city} type="text"/>
                     <input className="checkout__form--input" placeholder="State" onChange={this.onChangeHandler} name="state" value={this.state.formDetails.state} type="text"/>
                 </form>
              </div>
             <h5 className="checkout__h5">Grand Total:{" "} <span> ₹ {(this.state.gTotal===this.state.finalAmount)?this.state.finalAmount:<span>{this.state.gTotal+" - "+this.state.couponValue+" = ₹ "+this.state.finalAmount}</span>}</span> </h5>
             <div className="checkout__product">
              {this.state.orders.length?this.state.orders.map((product,i)=>(
                <div className="checkout__product--box">
                    <img className="checkout__product--box-item checkout__product--box-img" src={'data:image/png;base64,'+product.seletedColorImage} alt=""/>
                    <div className="checkout__product--box-col1">
                        <div data-tip={product.productName} className="checkout__product--box-item checkout__product--box-name">{(product.productName.length>25)?product.productName.slice(0,25):product.productName}{(product.productName.length>25)?"...":null}</div><ReactToolip/>
                        <div className="checkout__product--box-item checkout__product--box-size">{product.size}</div>
                        <div className="checkout__product--box-item checkout__product--box-color">{product.seletedColorName}</div>
                    </div>
                    <div className="checkout__product--box-item checkout__product--box-productPrice">₹ {product.productPrice}</div>
                    <div className="checkout__product--box-item checkout__product--box-quantity">{product.quantity}</div>
                    <div className="checkout__product--box-item checkout__product--box-productPrice">₹ {product.productPrice * product.quantity}</div>
                </div>
              )):null}
              <hr className="checkout__hr"/>
              <div className="checkout__coupon">
                  <form className="checkout__coupon--form" onSubmit={this.couponSubmitHandler}>
                      <input className="checkout__coupon--form-input" name="coupon" onChange={this.onChangeHandler} value={this.state.formDetails.coupon} type="text"/>
                      <button  className="checkout__coupon--form-btn" type="submit">Apply</button>
                  </form>
              </div>
              <h5 className="checkout__h5Desktop">Grand Total:{" "} <span> ₹ {(this.state.gTotal===this.state.finalAmount)?this.state.finalAmount:<span>{this.state.gTotal+" - "+this.state.couponValue+" = ₹ "+this.state.finalAmount}</span>}</span> </h5>
            </div>
        </div>
     )
   }
 }


export default Checkout;
