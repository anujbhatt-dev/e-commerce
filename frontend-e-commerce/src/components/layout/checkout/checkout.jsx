 import React, {Component} from "react"
import ReactToolip from "react-tooltip"
import axios from "axios"

 class Checkout extends Component{
   state={
     gTotal:null,
     finalAmount:null,
     formDetails:{
       customerName:"",
       customerPhone:"",
       houseNumber:"",
       email:"",
       landmark:"",
       location:"",
       city:"",
       state:"",
       pincode:"",
       coupon:"-1",
     },
     couponDetails:{
       message:"",
       value:"-1"
     },
     validCouponName:"",
     orders:[],
     couponAppling:false,
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
         console.log(res.data);
         this.setState({
           couponAppling:false,
           couponDetails:{...res.data},
           finalAmount:(res.data.value!=="-1")?this.state.gTotal-res.data.value:this.state.gTotal,
           validCouponName:this.state.formDetails.coupon
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


   placeOrderHandler=(e)=>{

e.preventDefault();
     let param={}
     if(this.state.couponDetails.message==="VALID PROMO CODE"){
       param={
         promo:this.state.validCouponName,
       }
     }else if(this.state.couponDetails.message==="INVALID PROMO CODE"){
       param={
         promo:-1,
       }
     }else if(this.state.formDetails.coupon===""){
          param={
            promo:-1,
          }
      }



     axios.post("/v1/order/placeOrder",this.state.formDetails,{params:param})
     .then(res=>{
      let payload=res.data;

       let uri = "CALLBACK_URL="+encodeURIComponent(payload.CALLBACK_URL)+
         "&CHANNEL_ID="+encodeURIComponent(payload.CHANNEL_ID)+
         "&CHECKSUMHASH="+encodeURIComponent(payload.CHECKSUMHASH)+
         "&CUST_ID="+encodeURIComponent(payload.CUST_ID)+
         "&INDUSTRY_TYPE_ID="+encodeURIComponent(payload.INDUSTRY_TYPE_ID)+
         "&MID="+encodeURIComponent(payload.MID)+
         "&ORDER_ID="+encodeURIComponent(payload.ORDER_ID)+
         "&TXN_AMOUNT="+encodeURIComponent(payload.TXN_AMOUNT)+
         "&WEBSITE="+encodeURIComponent(payload.WEBSITE)

console.log(
"https://securegw-stage.paytm.in/theia/processTransaction?"+uri
)

window.location.href="https://securegw-stage.paytm.in/theia/processTransaction?"+uri;
     }
);
   }





   render(){
     if(!this.props.authenticated){
       window.location.href = "http://localhost:3001";
     }

     console.log(this.props.cart);
     return (
        <div className="checkout">
              <div className="checkout__details">
                 <form className="checkout__form" onSubmit={this.placeOrderHandler}>
                     <input required className="checkout__form--input" placeholder="email" onChange={this.onChangeHandler} name="email" value={this.state.formDetails.email} type="text"/>
                     <input required className="checkout__form--input" placeholder="name" onChange={this.onChangeHandler} name="customerName" value={this.state.formDetails.customerName} type="text"/>
                     <input required className="checkout__form--input" placeholder="number" onChange={this.onChangeHandler} name="customerPhone" value={this.state.formDetails.customerPhone} type="Number"/>
                     <input required className="checkout__form--input" placeholder="house number" onChange={this.onChangeHandler} name="houseNumber" value={this.state.formDetails.houseNumber} type="text"/>
                    <input required className="checkout__form--input checkout__form--location" placeholder="location" onChange={this.onChangeHandler} name="location" value={this.state.formDetails.location} type="text"/>
                    <input required className="checkout__form--input" placeholder="landmark" onChange={this.onChangeHandler} name="landmark" value={this.state.formDetails.landmark} type="text"/>
                     <input required className="checkout__form--input" placeholder="pincode" onChange={this.onChangeHandler} name="pincode" value={this.state.formDetails.pincode} type="text"/>
                     <input required className="checkout__form--input" placeholder="city" onChange={this.onChangeHandler} name="city" value={this.state.formDetails.city} type="text"/>
                     <input required className="checkout__form--input" placeholder="state" onChange={this.onChangeHandler} name="state" value={this.state.formDetails.state} type="text"/>
                     <button  className="checkout__form--input checkout__form--btn" type="submit">PAY</button>
                 </form>
              </div>
             <h5 className="checkout__h5">Grand Total:{" "} <span> ₹ {(this.state.gTotal===this.state.finalAmount && this.state.couponDetails.value==="-1")?this.state.finalAmount:<span>{this.state.gTotal+" - "+this.state.couponDetails.value+" = ₹ "+this.state.finalAmount}</span>}</span> </h5>
             <div className="checkout__product">
              {this.state.orders.length?this.state.orders.map((product,i)=>(
                <div className="checkout__product--box">
                    <img className="checkout__product--box-item checkout__product--box-img" src={'data:image/png;base64,'+product.selectedColorImage} alt=""/>
                    <div className="checkout__product--box-col1">
                        <div data-tip={product.productName} className="checkout__product--box-item checkout__product--box-name">{(product.productName.length>25)?product.productName.slice(0,25):product.productName}{(product.productName.length>25)?"...":null}</div><ReactToolip/>
                        <div className="checkout__product--box-item checkout__product--box-size">{product.size}</div>
                        <div className="checkout__product--box-item checkout__product--box-color">{product.selectedColorName}</div>
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
                  <div className="checkout__coupon--form-text">{this.state.couponDetails.length!==0?this.state.couponDetails.message:null}</div>
              </div>
              <h5 className="checkout__h5Desktop">Grand Total:{" "} <span> ₹ {(this.state.gTotal===this.state.finalAmount && this.state.couponDetails.value==="-1")?this.state.finalAmount:<span>{this.state.gTotal+" - "+this.state.couponDetails.value+" = ₹ "+this.state.finalAmount}</span>}</span> </h5>
            </div>
        </div>
     )
   }
 }


export default Checkout;
