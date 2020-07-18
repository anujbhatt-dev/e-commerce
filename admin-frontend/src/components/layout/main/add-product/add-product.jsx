 import React, {Component} from "react"


 class AddProduct extends Component{

    state={
       productForm:{
         name:"",
         comment:"",
         actualPrice:"",
         price:"",
         image:"",
         catagory:""
       },
       productSaved:false,
       colors:[]
    }

    onChangeHandler=(e)=>{
       const name= e.target.name
       const value= e.target.value
       let prevState = {...this.state}
       prevState.productForm[name]=value
       this.setState({
           ...prevState
       })
    }

    onSubmitHandler=(e)=>{
       console.log(this.state);
       e.preventDefault();
    }

   render(){

     return (
       <div className="addProduct">
          <form className="addProduct__form" onSubmit={this.onSubmitHandler}>
               <input
               name="name"
               required onChange={this.onChangeHandler}
               value={this.state.productForm.name}
               className="addProduct__form--name"
               placeholder="product name" type="text"/>
               <input
               name="comment"
               required
               onChange={this.onChangeHandler}
               value={this.state.productForm.comment}
               className="addProduct__form--name"
               placeholder="product comment"
               type="text"/>
               <input
               name="actualPrice"
               required
               onChange={this.onChangeHandler}
               value={this.state.productForm.actualPrice}
               className="addProduct__form--name"
               placeholder="₹ product actual price"
               type="text"/>
               <input
               name="price"
               required
               onChange={this.onChangeHandler}
               value={this.state.productForm.price}
               className="addProduct__form--name"
               placeholder="product price"
               type="text"/>
               <label className="addProduct__form--imageLabel" htmlFor="productFormImage">
                {
                  <i className="fa fa-camera" aria-hidden="true"></i>
                }
               </label>
               <input
               id="productFormImage"
               name="image"
               required
               onChange={this.onChangeHandler}
               value={this.state.productForm.image}
               className="addProduct__form--image"
               placeholder="product image"
               type="file"/>
               <input className="addProduct__form--btn" value="save" type="submit"/>
          </form>
       </div>
     )
   }
 }


export default AddProduct;
