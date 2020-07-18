 import React, {Component} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

 class Catagories extends Component{

   state={
       catagories:[]
   }

   componentDidMount=()=>{
     // alert("c")
       axios.get("/catagories").then(res=>{
         this.setState({
           catagories:{...res.data}
         }).catch(err=>{
           if(err.response  && err.response.data){
             alert(err.response.data[0])
           }else{
             alert('something went wrong......!!!!')
           }
         })
       })
   }

   render(){

     return (
        <div className="catagories">
              <div className="search catagories__search">
                 <input className="search__checkbox" id="search" type="checkbox"/>
                 <input placeholder="Search" className="search__input" type="text"/>
                 <label className="search__label" htmlFor="search"><i className="search__icon fa fa-search " aria-hidden="true"></i></label>
              </div>

              <div className="catagories__box">
                  <input value="true" disabled="true" className="catagories__box--name" type="text"/>
                  <input value="true" disabled="true" className="catagories__box--name" type="text"/>
                  <ul className="addCatagory__savedCatagory--list">
                     <li className="addCatagory__savedCatagory--list-item">information</li>
                      <li className="addCatagory__savedCatagory--list-item">information</li>
                  </ul>
                  <Link to={{
                    pathname:"/updateCatagory"
                  }}>
                  <input className="catagories__box--btn" value="update" type="submit"/>
                  </Link>
              </div>
        </div>
     )
   }
 }


export default Catagories;
