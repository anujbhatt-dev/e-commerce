 import React, {Component} from "react"
import go from "../../../assets/images/goLogo.png"
import  axios  from "axios"
import validator from "validator"

 class Footer extends Component{

   state={
     subscribing:false,
     email:"",
     comment:"",
     image:"",
     customEmail:"",
     custom:false
   }

   componentDidUpdate=()=>{
     if(this.state.subscribing){
      let param={
        email:this.state.email
      }
       axios.post("/v1/subscribe/",null,{params:param}).then(res=>{
            alert("you have been successfully subscibed")
            this.setState({
              subscribing:false,
              email:""
            })
       }).catch(err=>{
         if(err.response && err.response.data[0]){
           alert(err.response.data[0]);
         }else{
           alert("something went wrong");
         }
       })
     }

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

   subscribeHandler=(e)=>{
     if(validator.isEmail(this.state.email))
      this.setState({subscribing:true})
     else
      alert("enter a valid email")
    e.preventDefault();
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



   render(){

     return (
       <footer className="footer">
              <ul className="footer__ul">
                 <li className="footer__ul-li">
                    <div className="subscribe">
                      <form onSubmit={this.subscribeHandler}>
                        <input data-tip="enter your email" required onChange={this.onChangeHandler} value={this.state.email} name="email" placeholder="subscribe to my Newsletter" className="subscribe__input" type="text"/>
                        <button data-tip="subscribe" className="subscribe__btn" type="submit">subscribe</button>
                      </form>
                    </div>
                 </li>
                 <li className="footer__ul-li">
                    <h1 className="customDesign__head">Form Customised Product</h1>
                    <form onSubmit={this.customHandler} className="customDesign">
                       <input required onChange={this.onChangeHandler} value={this.state.customEmail} name="customEmail" placeholder="enter your email" data-tip="enter your email" className="subscribe__input" type="email"/>
                       <textarea required onChange={this.onChangeHandler} className="customDesign__description subscribe__input" name="comment" value={this.state.comment} data-tip="enter comment" placeholder="description"></textarea>
                       <input required onChange={this.imageUploadHandler} id="customDesign__image" className="customDesign__image" name="image" type="file"/>
                       <label className="customDesign__imageLabel"  htmlFor="customDesign__image"  data-tip="upload a file here"><i class="fa fa-camera" aria-hidden="true"></i>{" "} uplaod a image</label>
                       <button data-tip="subscribe" className="subscribe__btn customDesign__btn" type="submit">submit</button>
                    </form>
                 </li>
                 <li className="footer__ul-li">bla</li>
              </ul>
             <img className="footer__image" src={go} alt=""/>
             <div className="footer__copyright">&copy; copyright 2020 inner clan designs</div>
       </footer>
     )
   }
 }


export default Footer;
