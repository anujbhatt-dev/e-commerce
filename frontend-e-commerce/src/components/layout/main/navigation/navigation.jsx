 import React, {Component} from "react"
import logo from "../../../../assets/images/innerclan_page-0001.jpg"
import axios from "axios"

 class Navigation extends Component{

    state={
      categories:[]
    }

   componentDidMount=()=>{
      axios.get("/v1/admin/category/").then(res=>{
        console.log(res.data);
        this.setState({
          categories:[...res.data]
        })
      }).catch(err=>{
        if(err.response && err.response.data[0]){
          alert(err.response.data[0]);
        }else{
          alert("something went wrong");
        }
      })
   }

   render(){
     let men=null;
     let women=null;
     if(this.state.categories.length!==0){
         men = <span className="nav__list--item">Men
               <span className="dropdown">
                  {this.state.categories.map((category,i)=>{
                    if(category.gender==="MALE"){
                      return <span key={category.id} className="dropdown__item">{category.name}</span>
                    }
                  })}
               </span></span>
               women = <span className="nav__list--item">Men
                     <span className="dropdown">
                        {this.state.categories.map((category,i)=>{
                          if(category.gender==="FEMALE"){
                            return <span key={category.id} className="dropdown__item">{category.name}</span>
                          }
                        })}
                     </span></span>
     }

     return (
       <nav className="nav">
          <img className="nav__image" src={logo} alt="logo"/>
          <div className="nav__list">
              {men}
              {women}
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
