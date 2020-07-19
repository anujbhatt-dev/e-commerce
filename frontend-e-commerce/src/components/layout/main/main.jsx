import React, {Component} from "react"
import Navigation from "./navigation/navigation"
import BigImage from "./big-image/big-image"
import Products from "./products/products"


class Main extends Component{

  render(){

    return (
       <>
         <Navigation />
         <BigImage/>
         <Products />
       </>
    )
  }
}


export default Main;
