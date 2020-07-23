 import React, {Component} from "react"
import Orders from "./orders/orders"
import Products from "./products/products"
import Categories from "./categories/categories"
import AddProduct from "./add-product/add-product"
import AddCategory from "./add-category/add-category"
import UpdateCategory from "./categories/update-category/update-category"
import Subscribe from "./subscribe/subscribe"
import Promo from "./promo/promo"
import Clients from "./clients/clients"

import {Route , Switch} from "react-router-dom"

 class Main extends Component{

   render(){

     return (
         <div className="main">
              <Switch>
                  <Route exact path="/orders" component={Orders}/>
                  <Route exact path="/products" component={Products}/>
                  <Route exact path="/categories" component={Categories}/>
                  <Route exact path="/addProduct" component={AddProduct}/>
                  <Route exact path="/addCategory" component={AddCategory}/>
                  <Route exact path="/updateCategory" component={UpdateCategory}/>
                  <Route exact path="/subscribe" component={Subscribe}/>
                  <Route exact path="/promo" component={Promo}/>
                  <Route exact path="/clients" component={Clients}/>
              </Switch>
         </div>
     )
   }
 }


export default Main;
