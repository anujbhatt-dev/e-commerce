 import React, {Component} from "react"
import Sidebar from "../../UI/sidebar/sidebar"
import Main from "./main/main"
import logo from "../../assets/images/innerclan_page-0001.jpg"
import {Link} from "react-router-dom"

 class Layout extends Component{
     state={
       sidebar:true
     }

   render(){

     return (
        <div className="layout">
          <Sidebar>
               <div className="nav">
                    <img className="nav__image" src={logo} alt="logo"/>
                    <ul className="nav__list">
                         <Link to="/orders"><li className="nav__list--item">orders</li></Link>
                         <Link to="/products"><li className="nav__list--item">Products</li></Link>
                         <Link to="/catagories"><li className="nav__list--item">Catagories</li></Link>
                         <Link to="/addProduct"><li className="nav__list--item">Add product</li></Link>
                         <Link to="/addCatagory"><li className="nav__list--item">add Catagory</li></Link>
                         <Link to="/subscribe"><li className="nav__list--item">subscribe</li></Link>
                         <Link to="/clients"><li className="nav__list--item">clients</li></Link>
                    </ul>
               </div>
          </Sidebar>
          <Main>

          </Main>
        </div>
     )
   }
 }


export default Layout;
