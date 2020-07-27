import React, { Component } from 'react'
import axios from 'axios'


class ClientSideUI extends Component {


    state={
       data:{
        quote:"",
        image1:"",
        image2:"",
       }
    }

    componentDidMount=()=>{

        axios.get("/v1/admin/ui").then(res=>{
            if(res.data.length==1){
               let data={... res.data[0]};
                this.setState({
                     data:data,
               })
            }
        })
    }


    onChangeHandler=(e)=>{
        let name=e.target.name;
        let value= e.target.value;

        let newData={...this.state.data};
          newData[name]=value;
          this.setState({
           data:newData
          })

    }


    onSubmitHandler=(e)=>{

      axios.put("/v1/admin/ui",this.state.data).
        then(res=>{
            alert("Updated");
        })

        e.preventDefault();
    }





    render() {
        return (
            <div className="subscribe">
            <div className="subscribe__box">
              <form onSubmit={this.onSubmitHandler}>
                <input required onChange={this.onChangeHandler} name="image1" value={this.state.data.image1} className="subscribe__box--name" type="text" placeholder="image 1 link"/>
                <input required onChange={this.onChangeHandler} name="image2" value={this.state.data.image2} className="subscribe__box--name" type="text" placeholder="image 2 link"/>
                <input required onChange={this.onChangeHandler} name="quote" value={this.state.data.quote} className="subscribe__box--name" type="text" placeholder="quote"/>
               <input className="subscribe__box--btn" value="update" type="submit"/>
              </form>
            </div>
            
        </div>
        )
    }
}


export default  ClientSideUI;