 import React, {Component} from "react"
import ReactToolip from "react-tooltip"

 class Checkout extends Component{
   state={
     gTotal:null,
     formDetails:{
       firstName:"",
       lastName:"",
       email:"",
       address:"",
       city:"",
       state:"",
       pincode:"",
       phone:""
     },
     orderArray:[]
   }

   onChangeHandler=(e)=>{
     let  newForm = {...this.state.form}
     newForm[e.target.name]=e.target.value
     this.setState({
       formDetails:{...newForm}
     })
   }

   componentDidMount=()=>{
     let gt = this.props.cart.map(product=>(product.quantity*product.productPrice)).reduce((acc,value)=>acc+value)
     this.setState({gTotal:gt})
   }

   render(){
     if(!this.props.authenticated){
       window.location.href = "http://localhost:3000";

     }
     console.log(this.props.cart);
     return (
        <div className="checkout">
              <div className="checkout__detail">
                 <form className="checkout__form" onSubmit={this.SubmitHandler}>
                     <input onChange={this.onChangeHandler} name="email" value={this.state.formDetails.email} type="text"/>
                     <input onChange={this.onChangeHandler} name="firstName" value={this.state.formDetails.firstName} type="text"/>
                     <input onChange={this.onChangeHandler} name="lastName" value={this.state.formDetails.lastName} type="text"/>
                     <input onChange={this.onChangeHandler} name="address" value={this.state.formDetails.address} type="text"/>
                     <input onChange={this.onChangeHandler} name="city" value={this.state.formDetails.city} type="text"/>
                     <input onChange={this.onChangeHandler} name="state" value={this.state.formDetails.state} type="text"/>
                     <input onChange={this.onChangeHandler} name="pincode" value={this.state.formDetails.pincode} type="text"/>
                 </form>
              </div>
             <div className="checkout__product">
              {this.props.cart.map((product,i)=>(
                <div className="checkout__product--box">
                <img className="checkout__product--box-item checkout__product--box-img" src={'data:image/png;base64,'+product.seletedColorImage} alt=""/>
                <div className="checkout__product--box--col1">
                    <div data-tip={product.productName} className="checkout__product--box-item checkout__product--box-name">{(product.productName.length>25)?product.productName.slice(0,25):product.productName}{(product.productName.length>25)?"...":null}</div><ReactToolip/>
                    <div className="checkout__product--box--item checkout__product--box--size">{product.size}</div>
                    <div className="checkout__product--box--item checkout__product--box--color">{product.seletedColorName}</div>
                </div>
                <div className="checkout__product--box--item checkout__product--box--productPrice">₹ {product.productPrice}</div>
                <div className="checkout__product--box--item checkout__product--box--quantity">{product.quantity}</div>
                <div className="checkout__product--box--item checkout__product--box--productPrice">₹ {product.productPrice * product.quantity} {" <= Total"} </div>
                </div>
              ))}
              <h5 className="modalCart__box2--h5">Grand Total{" "}{this.state.gTotal}</h5>
            </div>
        </div>
     )
   }
 }


export default Checkout;
