 import React, {Component} from "react"
import  axios  from "axios"
import validator from "validator"
import video from "../../../../assets/videos/custom-design-video.mp4"

 class CustomDesign extends Component{

   state={
     comment:"",
     image:"",
     customEmail:"",
     custom:false
   }



   customHandler=(e)=>{
     console.log("in custom");
     if(validator.isEmail(this.state.customEmail))
      this.setState({custom:true})
     else
      alert("enter a valid email")
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
       let newState={... this.state.productForm};
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
       console.log(this.state);
       axios.post("/v1/design/",formData,{
          params:params
       }).then(res=>{
         alert("successfully submitted")
         this.setState({custom:false,customEmail:"",comment:"",image:''})
       }).catch(err=>{
         // alert(err.response.data[0]);
          this.setState({custom:false})
       })
     }
   }

   render(){

     return (
          <div className="customDesign">
            <video autoplay="true" loop src={video} className="customDesign__video"></video>
            <div className="customDesign__videoGradient"></div>
            <form onSubmit={this.customHandler} className="customDesign__form">
              <h1 className="customDesign__form--head">Your First Customised Product</h1>
              <input required onChange={this.onChangeHandler} value={this.state.customEmail} name="customEmail" placeholder="enter your email" data-tip="enter your email" className="customDesign__form--input" type="email"/>
              <textarea required onChange={this.onChangeHandler} className="customDesign__form--description" name="comment" value={this.state.comment} data-tip="enter comment" placeholder="description"></textarea>
              <input required onChange={this.imageUploadHandler} id="customDesign__image" className="customDesign__form--image" name="image" type="file"/>
              <label className="customDesign__form--imageLabel"  htmlFor="customDesign__image"  data-tip="upload a file here"><i class="fa fa-camera" aria-hidden="true"></i>{" "} uplaod a image</label>
              <button className="customDesign__form--btn" type="submit">submit</button>
          </form>
          </div>
     )
   }
 }


export default CustomDesign;
