import React, { Component } from 'react'
import axios from 'axios'

class AddColor extends Component {
   
   
    state={
        colors:[],
        addingColors:false,
    }

    componentDidUpdate=()=>{
        if(this.state.addingColors){
            let productId=this.props.productId;
        axios.post("/v1/admin/product/addColors/"+productId,this.state.colors).
        then(res=>{
            console.log(res.data);
            this.setState({
                addingColors:false
            })
            this.props.colorsSaved(res.data);
        }).
        catch(err=>{
            if(err.response && err.response.data)
            alert(err.response.data[0])
            else
            alert("contact the team")
            this.setState({
                addingColors:false
            })
        })
    }
}


    submitHandler=()=>{
        this.setState({
            addingColors:true,
        })
    }

    onChangeHandler=(e)=>{

    let newColors=[];
    newColors.push(e.target.value);
    this.setState({
        colors:newColors, 
    })
  }



    render() {
        return (
            <div>
                <input type="text" onChange={this.onChangeHandler}/>
                <button onClick={this.submitHandler} >SUBMIT</button>
            </div>
        )
    }
}


export default  AddColor