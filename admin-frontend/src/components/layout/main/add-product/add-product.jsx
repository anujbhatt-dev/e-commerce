 import React, {Component} from "react"
import axios from "axios"
import AddColor from "./add-color/add_color"
import AddImages from "./add-color/add-image/add_image"


 class AddProduct extends Component{

    state={
       productForm:{
         productName:"",
         comment:"",
         actualPrice:"",
         productPrice:"",
         image:"",
         category:""
       },
       stage:0,
       savingProduct:false,
       savedProduct:null,
       savedColors:[],
       categories:[]
    }


    componentDidUpdate=()=>{

      if(this.state.savingProduct){
       let params={
        productName:this.state.productForm.productName,
        comment:this.state.productForm.comment,
        actualPrice:this.state.productForm.actualPrice,
        productPrice:this.state.productForm.productPrice,
       }
       const formData= new FormData();
       formData.append("file",this.state.productForm.image);
        axios.post("/v1/admin/product/addProduct/18",formData,{
          params:params
        })
        .then(res=>{
                     this.setState({savingProduct:false,stage:1,savedProduct:res.data});
        }).
        catch(err=>{
          console.log(err)
          alert(err.response.data[0]);
          this.setState({savingProduct:false});

        })
      }
    }

    componentDidMount=()=>{
    axios.get("/v1/admin/category").
    then(res=>{
      this.setState({categories:res.data});
       }).
    catch(err=>{
      alert("error");
    })
    }

    colorsSaved=(colors)=>{
      this.setState({
        stage:2,
        savedColors:colors
      })

      console.log(this.state.savedColors);
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
this.setState({savingProduct:true})
    }

    imageUploadHandler=(e)=>{

      let newProductForm={... this.state.productForm};
      newProductForm.image=e.target.files[0];

      this.setState({
        productForm: newProductForm,
    });
    }

   render(){

     let header=(
       <div className="addProduct">
          <form className="addProduct__form" onSubmit={this.onSubmitHandler}>
               <input
               name="productName"
               required
               onChange={this.onChangeHandler}
               value={this.state.productForm.productName}
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
               name="productPrice"
               required
               onChange={this.onChangeHandler}
               value={this.state.productForm.productPrice}
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
               required
               onChange={this.imageUploadHandler}
               className="addProduct__form--image"
               placeholder="product image"
               type="file"/>
               <input className="addProduct__form--btn" value="save" type="submit"/>
          </form>
       </div>
     )

     if(this.state.stage==1)
     header=(
      <div>
        name:{this.state.savedProduct.productName}
        <img src={'data:image/png;base64,'+this.state.savedProduct.defaultImage} alt=""/>
        <AddColor productId={this.state.savedProduct.id} colorsSaved={this.colorsSaved}/>
      </div>
     )
     else if(this.state.stage==2)
     header=(<div>
      name:{this.state.savedProduct.productName}
      ID:{this.state.savedProduct.id}
      <img src={'data:image/png;base64,'+this.state.savedProduct.defaultImage} alt=""/>

      {this.state.savedColors.map(color=>
          <AddImages id={color.id} name={color.colorName}/>
      )}
      </div>
     )

     return header
   }
 }


export default AddProduct;
