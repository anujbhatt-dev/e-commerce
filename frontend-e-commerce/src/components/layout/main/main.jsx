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
      name:"Collection",
      gender:""
    },
    sortBy:"sOrderByDate"

  }

  // componentDidUpdate=()=>{
  //
  // }

   selectedCategoryHandler=(selectedCategory)=>{
       this.setState({
         selectedCategory:selectedCategory
       })
       document.getElementById("heading").scrollIntoView()
   }

   searchHandler=(search)=>{
     if(search!==""){
       this.setState({
         searchValue:search,
         searchBy:true
       })
     }else{
       this.setState({
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
         <Navigation search={this.searchHandler}
         selectedCategoryHandler={this.selectedCategoryHandler}/>
         <BigImage/>
         {/* <div style="width:100%;height:0px;position:relative;padding-bottom:100.000%;"><iframe src="https://streamable.com/e/f1pcwf?autoplay=1&nocontrols=1" frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay" style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div> */}
         <Products
         cart={this.props.cart}
         cartHandler={this.props.cartHandler}
         selectedCategoryHandler={this.selectedCategoryHandler}
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
