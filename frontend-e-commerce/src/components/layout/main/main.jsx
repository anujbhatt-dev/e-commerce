import React, {Component} from "react"
import Navigation from "./navigation/navigation"
import BigImage from "./big-image/big-image"
import Products from "./products/products"


class Main extends Component{

  state={
    selectedCategory:{
      id:-1,
      name:"latest",
      gender:""
    },
    sortBy:"sort",

  }

   selectedCategoryHandler=(selectedCategory)=>{
       console.log(selectedCategory);
       this.setState({
         selectedCategory:{...selectedCategory}
       })
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
         <Navigation  selectedCategoryHandler={this.selectedCategoryHandler}/>
         <BigImage/>
         <Products sortBy={this.state.sortBy} selectedCategory={this.state.selectedCategory} sortByHandler={this.sortByHandler}/>
       </>
    )
  }
}


export default Main;
