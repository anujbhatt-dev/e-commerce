 import React, {Component} from "react"
import logo from "../../../../assets/images/innerclan_page-0001.jpg"

 class Navigation extends Component{

   render(){

     return (
       <nav className="nav">
          <img className="nav__image" src={logo} alt="logo"/>
          <div className="nav__list">
              <span className="nav__list--item">Men
              <span className="dropdown">
                  <span className="dropdown__item">t-shirt</span>
                  <span className="dropdown__item">t-shirt</span>
                  <span className="dropdown__item">t-shirt</span>
                  <span className="dropdown__item">t-shirt</span>
                  <span className="dropdown__item">t-shirt</span>
              </span></span>
              <span className="nav__list--item">Women
              <span className="dropdown">
                  <span className="dropdown__item">t-shirt</span>
                  <span className="dropdown__item">t-shirt</span>
                  <span className="dropdown__item">t-shirt</span>
              </span></span>
              <span className="nav__list--item  nav__list--item-modifier">Who are we?</span>
          </div>
          <div className="search">
             <input className="search__checkbox" id="search" type="checkbox"/>
             <input placeholder="Search" className="search__input" type="text"/>
             <label className="search__label" htmlFor="search"><i className="search__icon fa fa-search " aria-hidden="true"></i></label>
          </div>
       </nav>
     )
   }
 }


export default Navigation;
