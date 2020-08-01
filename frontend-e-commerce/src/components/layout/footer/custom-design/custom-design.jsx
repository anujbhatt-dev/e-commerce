 import React, {Component} from "react"
import  axios  from "axios"
import validator from "validator"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 class CustomDesign extends Component{

   state={
     comment:"",
     image:"",
     customEmail:"",
     custom:false,
     video:""
   }



   customHandler=(e)=>{
     console.log("in custom");
     if(validator.isEmail(this.state.customEmail))
      this.setState({custom:true})
     else
      toast.error("enter a valid email")
    e.preventDefault();
   }

   onChangeHandler=(e)=>{
      const name = e.target.name
      const value = e.target.value
      let prevState={...this.state};
      prevState[name]=value;
      prevState.categorySaved=false;
      this.setState({
        ...prevState
      })
   }

   imageUploadHandler=(e)=>{
       let newState={ ...this.state.productForm};
       newState.image = e.target.files[0];
       this.setState({
           ...newState
      }
    )
   }


   componentDidUpdate=()=>{
     if(this.state.custom){
       const formData= new FormData();
       formData.append("file",this.state.image);
       const params={
         email:this.state.customEmail,
         comment:this.state.comment
       }
       axios.post("/v1/design/",formData,{
          params:params
       }).then(res=>{
         toast.error("successfully submitted")
         this.setState({custom:false,customEmail:"",comment:"",image:''})
       }).catch(err=>{
         // toast.error(err.response.data[0]);
         if(err.response && err.response.data[0]){
          toast.error(err.response.data[0]);
        }else{
          toast.error("something went wrong");
        }
          this.setState({custom:false})
       })
     }
   }

   componentDidMount=()=>{
    axios.get("/v1/client/ui").then(res=>{
         this.setState({
           video:res.data[0].image2
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
          <div className="customDesign">
          <video muted autoPlay={true} loop src={this.state.video} className="customDesign__video"></video>
            <div className="customDesign__videoGradient"></div>
            <form onSubmit={this.customHandler} className="customDesign__form">
              <h1 className="customDesign__form--head">Your First Customised Product</h1>
              <input required onChange={this.onChangeHandler} value={this.state.customEmail} name="customEmail" placeholder="enter your email" data-tip="enter your email" className="customDesign__form--input" type="email"/>
              <textarea required onChange={this.onChangeHandler} className="customDesign__form--description" name="comment" value={this.state.comment} data-tip="enter comment" placeholder="description"></textarea>
              <input required onChange={this.imageUploadHandler} id="customDesign__image" className="customDesign__form--image" name="image" type="file"/>
              <label className="customDesign__form--imageLabel"  htmlFor="customDesign__image"  data-tip="upload a file here"><i className="fa fa-camera" aria-hidden="true"></i>uplaod a image</label>
              <button className="customDesign__form--btn" type="submit">submit</button>
          </form>
          </div>
     )
   }
 }


export default CustomDesign;
