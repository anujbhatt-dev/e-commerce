 import React, {Component} from "react"
import {Link} from "react-router-dom"

 class Catagory extends Component{

   render(){

     return (
       <div className="categories__box">
           <input value={this.props.categoryGender} disabled="true" className="categories__box--name" type="text"/>
           <input value={this.props.categoryName} disabled="true" className="categories__box--name" type="text"/>
           <ul className="addCategory__savedCategory--list">
               {this.props.categoryInfo.map((info,i)=>(
                   <li key={info+i} className="addCategory__savedCategory--list-item">{info}</li>
               ))}
           </ul>
           <Link to={{
             pathname:"/updateCategory",
             state:{
               name:this.props.categoryName,
               gender:this.props.categoryGender,
               id:this.props.categoryId,
               info:this.props.categoryInfo,
               index:this.props.categoryIndex
             }
           }}>
           <input className="categories__box--btn" value="update" type="submit"/>
           </Link>
       </div>
     )
   }
 }


export default Catagory;
