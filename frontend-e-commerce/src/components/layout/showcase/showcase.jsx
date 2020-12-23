import React, { Component } from 'react'
import axios from 'axios';

class Showcase extends Component {

    
    state={
        data:[],
            }

    componentDidMount=()=>{
        axios.get("/v1/client/ui/showcase").
        then(res=>this.setState({data:res.data}));
    }
    render() {

        return (
            <div>
                 {this.state.data.map((d,i)=> 
                <div>
                <img src={d.image} alt=""/>
                </div>
           )}
                
            </div>
        )
    }
}


export default Showcase;
