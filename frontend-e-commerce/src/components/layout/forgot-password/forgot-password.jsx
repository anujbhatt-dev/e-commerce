import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class ForgotPassword extends Component {


    state={
        uuid:null,
        email:null,
       password:null,
       confirmPassword:null,
    }


    componentDidMount=()=>{

        console.log(this.props);

        this.setState({
            uuid:this.props.match.params.id,
        })    }


    onChangeHandler=(e)=>{

        let name=e.target.name;
        let value=e.target.value;

        this.setState({
            [name]:value,
        })

    }

    onSubmitHandler=()=>{

       // this.props.history.push("/");

       console.log(this.state)

        axios.post("/v1/client/forgotPassword",null,{params:this.state})
        .then((res)=>{
              this.props.history.push("/");
        })
        .catch(err=>{
            
        })

    }

    render() {
        return (
            <div>
              <input onChange={this.onChangeHandler}   value={this.state.email} type="email" name="email" placeholder="email"/>
              <input onChange={this.onChangeHandler}   value={this.state.password} type="password" name="password" placeholder="new password"/>
              <input onChange={this,this.onChangeHandler}   value={this.state.confirmPassword} type="password" name="confirmPassword" placeholder="confirm password"/>
              <button  onClick={this.onSubmitHandler}>SAVE</button>
            </div>
        )
    }
}


export default  withRouter(ForgotPassword);