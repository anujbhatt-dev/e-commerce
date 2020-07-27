 import React, {Component} from "react"
import Orders from "./orders/orders"
import Products from "./products/products"
import Categories from "./categories/categories"
import AddProduct from "./add-product/add-product"
import AddCategory from "./add-category/add-category"
import UpdateCategory from "./categories/update-category/update-category"
import UpdateProduct from "./products/update-product/update-product"
import Subscribe from "./subscribe/subscribe"
import Promo from "./promo/promo"
import Designs from "./designs/designs"
import {Route , Switch} from "react-router-dom"
import ClientSideUI from "./client-side-ui/client-side-ui"

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
                  <Route exact path="/updateProduct" component={UpdateProduct}/>
                  <Route exact path="/subscribe" component={Subscribe}/>
                  <Route exact path="/promo" component={Promo}/>
                  <Route exact path="/designs" component={Designs}/>
                  <Route exact path="/clientui" component={ClientSideUI}/>

              </Switch>
         </div>
     )
   }
 }


export default Main;
