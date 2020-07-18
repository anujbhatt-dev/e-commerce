 import React, {Component} from "react"
import Orders from "./orders/orders"
import Products from "./products/products"
import Catagories from "./catagories/catagories"
import AddProduct from "./add-product/add-product"
import AddCatagory from "./add-catagory/add-catagory"
import UpdateCatagory from "./add-catagory/update-catagory/update-catagory"
import Subscribe from "./subscribe/subscribe"
import Clients from "./clients/clients"

import {Route , Switch} from "react-router-dom"

 class Main extends Component{

   render(){

     return (
         <div className="main">
              <Switch>
                  <Route exact path="/orders" component={Orders}/>
                  <Route exact path="/products" component={Products}/>
                  <Route exact path="/catagories" component={Catagories}/>
                  <Route exact path="/addProduct" component={AddProduct}/>
                  <Route exact path="/addCatagory" component={AddCatagory}/>
                  <Route exact path="/updateCatagory" component={UpdateCatagory}/>
                  <Route exact path="/subscribe" component={Subscribe}/>
                  <Route exact path="/clients" component={Clients}/>
              </Switch>
         </div>
     )
   }
 }


export default Main;
