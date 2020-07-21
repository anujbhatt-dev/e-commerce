import React, {Component} from "react"
import Navigation from "./navigation/navigation"
import BigImage from "./big-image/big-image"
import Products from "./products/products"



class Main extends Component{

  state={
    searchValue:"",
    searchBy:false,
    selectedCategory:{
      id:-1,
      name:"Latest",
      gender:""
    },
    sortBy:"sOrderByDate"

  }

  componentDidUpdate=()=>{
    console.log(this.state);
  }

   selectedCategoryHandler=(selectedCategory)=>{
       this.setState({
         selectedCategory:selectedCategory
       })
   }

   searchHandler=(search)=>{
     if(search!==""){
       this.setState({
         searchValue:search,
         searchBy:true
       })
     }else{
       this.setState({
         searchValue:"",
         searchBy:false
       })
     }
   }

   sortByHandler=(sortBy)=>{
     console.log(sortBy);
     this.setState({
       sortBy:sortBy
     })
   }



  render(){

    return (
       <>
         <Navigation search={this.searchHandler} selectedCategoryHandler={this.selectedCategoryHandler}/>
         <BigImage/>
         <Products
         searchBy={this.state.searchBy}
         searchHandler={this.searchHandler}
         searchValue={this.state.searchValue}
         sortBy={this.state.sortBy}
         selectedCategory={this.state.selectedCategory}
         sortByHandler={this.sortByHandler}/>
       </>
    )
  }
}


export default Main;
