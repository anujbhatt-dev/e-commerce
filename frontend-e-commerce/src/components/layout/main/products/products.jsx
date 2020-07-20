 import React, {Component} from "react"
 import dwight from "../../../../assets/images/dwight.jpg"
 import sidhu from "../../../../assets/images/sidhu.jpg"
 import sidhu2 from "../../../../assets/images/sidhu2.jpg"
 import thomas from "../../../../assets/images/thomas_for_ig.jpg"
 import final from "../../../../assets/images/final_template.jpg"
import axios from "axios"

 class Products extends Component{

   state={
     products:[],

   }

   componentDidMount=()=>{
      axios.get("/")
   }

   render(){

     return (
       <>
           <div className="heading">
                 <span className="heading__span">T-Shirt <sup style={{fontSize:"1rem",letterSpacing:"1px",marginLeft:"-1.5rem"}}>[MEN]</sup></span>
           </div>

          <div  className="sort">
          {(this.props.selectedCategory.id!==-1)?<div className="nav__list--item">Sort
          <span className="dropdown">
              <span className="dropdown__item">Newest</span>
              <span className="dropdown__item">₹ Low to High</span>
              <span className="dropdown__item">₹ High to Low</span>
              <span className="dropdown__item">Most Views</span>
              <span className="dropdown__item">Best Selling</span>
          </span></div>:null}
           <div className="sort__productCount">147 products</div>
          </div>


          <div className="feature">

                <div onClick={this.modalToggleHandler} className="card">
                    <img className="card__image" src={sidhu} alt="thomas"/>
                    <div className="card__details">
                       <div className="card__details-name">
                            Sidhu T-shirt
                       </div>
                       <hr className="card__details-hr"/>
                       <div className="card__details-priceBtn">
                            <div className="card__details-price">₹ 4500</div>
                            <i className="fa fa-shopping-cart card__details-cart" aria-hidden="true"></i>
                       </div>
                    </div>
                </div>
                <div className="card">
                    <img className="card__image" src={thomas} alt="thomas"/>
                    <div className="card__details">
                       <div className="card__details-name">
                            Sidhu T-shirt
                       </div>
                       <hr className="card__details-hr"/>
                       <div className="card__details-priceBtn">
                            <div className="card__details-price">₹ 6500</div>
                            <i className="fa fa-shopping-cart card__details-cart" aria-hidden="true"></i>
                       </div>
                    </div>
                </div>
                <div className="card">
                    <img className="card__image" src={dwight} alt="thomas"/>
                    <div className="card__details">
                       <div className="card__details-name">
                            Sidhu T-shirt
                       </div>
                       <hr className="card__details-hr"/>
                       <div className="card__details-priceBtn">
                            <div className="card__details-price">₹ 1500</div>
                            <i className="fa fa-shopping-cart card__details-cart" aria-hidden="true"></i>
                       </div>
                    </div>
                </div>
                <div className="card">
                    <img className="card__image" src={final} alt="thomas"/>
                    <div className="card__details">
                       <div className="card__details-name">
                            Sidhu T-shirt
                       </div>
                       <hr className="card__details-hr"/>
                       <div className="card__details-priceBtn">
                            <div className="card__details-price">₹ 8500</div>
                            <i className="fa fa-shopping-cart card__details-cart" aria-hidden="true"></i>
                       </div>
                    </div>
                </div>
                <div className="card">
                    <img className="card__image" src={sidhu2} alt="thomas"/>
                    <div className="card__details">
                       <div className="card__details-name">
                            Sidhu T-shirt
                       </div>
                       <hr className="card__details-hr"/>
                       <div className="card__details-priceBtn">
                            <div className="card__details-price">₹ 5500</div>
                            <i className="fa fa-shopping-cart card__details-cart" aria-hidden="true"></i>
                       </div>
                    </div>
                </div>
            </div>


            <div style={{display:"flex",justifyContent:"center"}}>
                <div className="pagination">
                     <span className="pagination__minus">-</span>
                     <span className="pagination__pageNumber">1/3</span>
                     <span className="pagination__plus">+</span>
                </div>
            </div>
       </>
     )
   }
 }


export default Products;
