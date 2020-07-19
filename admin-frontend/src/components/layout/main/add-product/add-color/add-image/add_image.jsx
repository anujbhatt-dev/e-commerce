import React, { Component } from 'react'
import axios from 'axios';
 
class AddImages extends Component {


    state= {
        colorName:"",
        images:[],
        addingImage:false
    }


    componentDidUpdate=()=>{

        if(this.state.addingImage)
        for (let i=0;i<this.state.images.length;i++){
            let formData = new FormData();
            formData.append("file",this.state.images[i]);
            axios.post("/v1/admin/product/addColorImage/"+this.props.id,formData).
            then(res=>{console.log(res.data)
                       this.setState({addingImage:false})}).
                       catch(err=>{alert("err")})
        }
    }

uploadHandler=(event)=>{
  
    let images=[]

    for(let i=0; i<event.target.files.length;i++)
         images.push(event.target.files[i]);
    this.setState({
      images:images
  })
}

submitHandler=()=>{
    this.setState({
        addingImage:true,
    })
}


    render() {
        
        return (
            <div>
                Color:{this.props.name}
                <input type="file" multiple onChange={this.uploadHandler}/>
                 <button  onClick={this.submitHandler}>SUBMIT</button>
            </div>
        )
    }
}


export default AddImages