import React, { Component } from 'react'

class PaymentResult extends Component {



    componentDidMount=()=>{

        console.log(this.props)
        this.props.setAuthorizationHeader("Bearer "+this.props.match.params.jwt,this.props.match.params.email,this.props.match.params.name);
        this.props.history.push("/myOrder");

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default PaymentResult;
