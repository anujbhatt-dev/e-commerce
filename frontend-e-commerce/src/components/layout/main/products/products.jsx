 import React, {Component} from "react"
 // import dwight from "../../../../assets/images/dwight.jpg"
 import sidhu from "../../../../assets/images/sidhu.jpg"
 // import sidhu2 from "../../../../assets/images/sidhu2.jpg"
 // import thomas from "../../../../assets/images/thomas_for_ig.jpg"
 // import final from "../../../../assets/images/final_template.jpg"
import axios from "axios"
import Spinner from "../../../../UI/spinner/spinner"
import Modal from "../../../../UI/modal/modal"
import Backdrop from "../../../../UI/backdrop/backdrop"



 class Products extends Component{

   state={
     productSize:"M",
     productQuantity:1,
     products:[],
     maxIndex:null,
     selectedIndex:0,
     loading:false,
     show:false,
     caller:false,
     modalProductDetails:{
       colors:[{images:[{}]}],
       category:{
         information:[]
       }
     },
     selectedProductId:-1
   }

    loadingHandler=()=>{
      this.setState({loading:true})
    }



    modalToggleHandler=(id,id2=false)=>{
      alert(id)
      if(id2){
        if(id===-1)
          return ;
        this.setState({caller:true,selectedProductId:id})
          return ;
      }
       if(this.state.show){
         this.setState({show:false})
       }else{
         this.setState({
           show:true,
           selectedProductId:id,
           caller:true
         })
       }
    }


   quantityHandler=(count)=>{
       this.setState({
          productQuantity:count
       })
   }


   onChangeHandler=(name)=>{
      const index = this.state.selectedIndex
      console.log(name,index);
      if(name==="minus"){
        if(index!==0){
          this.setState({selectedIndex:index-1})
          this.loadingHandler()
        }
      }
      else if(name==="plus"){
        if(index!==this.state.maxIndex){
          this.setState({selectedIndex:index+1})
          this.loadingHandler()
        }
      }
      console.log(this.state);
   }

   componentDidMount=()=>{
      axios.get("/v1/product/getProductsOrderByDate/-1/0").then(res=>{
        this.setState({
          products:[...res.data],
          maxIndex:Math.ceil(res.data[0].size/8)-1
        })
      }).catch(err=>{
        if(err.response && err.response.data[0]){
          alert(err.response.data[0]);
        }else{
          alert("something went wrong");
        }
      })
   }

    // shouldComponentUpdate=(nextProps,nextState)=>{
    //   if(this.props.selectedCategory.id===-1){
    //     return true;
    //   }
    //    if(nextProps.selectedCategory.id===this.props.selectedCategory.id){
    //      return false;
    //    }
    //    return true;
    // }


   componentDidUpdate=(prevProps,prevState)=>{
     if(this.state.loading){
       axios.get("/v1/product/getProduct"+this.props.sortBy+"/"+this.props.selectedCategory.id+"/"+this.state.selectedIndex).then(res=>{
          this.setState({
              products:[...res.data],
              maxIndex:Math.ceil(res.data[0].size/8)-1,
              loading:false
            })
          }).catch(err=>{
            this.setState({
              loading:false
              })
            if(err.response && err.response.data[0]){
              alert(err.response.data[0]);
            }else{
              alert("something went wrong");
            }
          })
        }

     if(this.props.selectedCategory.id!==prevProps.selectedCategory.id){
       this.setState({loading:true})
     }

     if(this.props.sortBy!==prevProps.sortBy){
       this.setState({loading:true})
     }

     if(this.state.caller){
       console.log("in modal");
       axios.get("/v1/product/getProduct/"+this.state.selectedProductId).then(res=>{
            this.setState({
              modalProductDetails:{...res.data},
              caller:false
            })
            console.log(res.data);
       }).catch(err=>{
         this.setState({
           caller:false
           })
         if(err.response && err.response.data[0]){
           alert(err.response.data[0]);
         }else{
           alert("something went wrong....!!!!");
         }
       })
     }



   }

   render(){
     // if(this.state.loading)
     //    return <div className="feature"><div className="card"><Spinner /></div></div>


     let products= null;
     if(this.state.products.length!==0){
       console.log(this.state);
       products = <div className="feature">
                      {this.state.products.map((product,i)=>(
                        this.state.loading?<Spinner/>:<div key={product.id} onClick={()=>this.modalToggleHandler(product.id)} className="card">
                            <img className="card__image" src={'data:image/png;base64,'+product.defaultImage} alt="thomas"/>
                            <div className="card__details">
                               <div className="card__details-name">
                                    {product.productName}
                               </div>
                               <hr className="card__details-hr"/>
                               <div className="card__details-priceBtn">
                                    <div className="card__details-price">₹{product.productPrice+" "} <span style={{textDecorationLine:"line-through"}}> ₹{product.actualPrice}</span> </div>
                                    <i className="fa fa-shopping-cart card__details-cart" aria-hidden="true"></i>
                               </div>
                            </div>
                        </div>
                      ))}

                  </div>
     }

     let modal = null;
     if(this.state.modalProductDetails.length!==0){
         modal= <Modal clicked={this.modalToggleHandler} show={this.state.show}>
               <span onClick={()=>this.modalToggleHandler(this.state.selectedProductId-1,true)} className="productsTogglerLeft"> {"<"} </span>
               <div className="product">
                   <div className="product__imageBox">
                       <ul className="product__imageBox--angle">
                          <li className="product__imageBox--angle-item"><img src={'data:image/png;base64,'+this.state.modalProductDetails.image} alt="angle-1"/></li>
                       </ul>
                       <div className="product__imageBox--angle-image"><img src={'data:image/png;base64,'+this.state.modalProductDetails.image} alt="selected image"/></div>
                   </div>
                   <div className="product__details">
                      <div className="product__details--name">
                          {this.state.modalProductDetails.productName}
                      </div>
                      <div className="product__details--price">
                          <span className="product__details--price-actualPrice">₹ {this.state.modalProductDetails.actualPrice}</span>
                          <span className="product__details--price-salePrice">₹ {this.state.modalProductDetails.productPrice}</span>
                          <span className="product__details--price-savePrice"> Save ₹ {this.state.modalProductDetails.actualPrice-this.state.modalProductDetails.productPrice}</span>
                      </div>
                      <div className="product__details--similar">
                        {this.state.modalProductDetails.colors.map((color,i)=>(
                          <div onClick={()=>this.modalToggleHandler(color.images[i].id,true)} key={color.id} className="product__details--similar-item">
                              <img src={'data:image/png;base64,'+color.images[i].image} alt="image"/>
                              <div className="product__details--similar-color">{color.colorName}</div>
                          </div>
                        ))}
                      </div>
                      <div className="product__details--aspect">
                      <div className="nav__list--item product__details--aspect-size">Size : {this.state.productSize}
                      <span className="dropdown">
                          <span onClick={()=>this.setState({productSize:"S"})} className="dropdown__item">S</span>
                          <span onClick={()=>this.setState({productSize:"M"})} className="dropdown__item">M</span>
                          <span onClick={()=>this.setState({productSize:"L"})} className="dropdown__item">L</span>
                          <span onClick={()=>this.setState({productSize:"XL"})} className="dropdown__item">XL</span>
                          <span onClick={()=>this.setState({productSize:"XXL"})} className="dropdown__item">XXL</span>
                      </span></div>
                      <div className="nav__list--item product__details--aspect-quantity">Quantity
                      <span className="dropdown">
                          <span className="dropdown__item">
                             <span onClick={()=>this.quantityHandler(this.state.productQuantity-1)} className="product__details--aspect-quantity--minus">-</span>
                             <span className="product__details--aspect-quantity--amount">{this.state.productQuantity}</span>
                             <span onClick={()=>this.quantityHandler(this.state.productQuantity+1)} className="product__details--aspect-quantity--plus">+</span>
                          </span>
                      </span></div>
                      </div>
                      <div className="product__details--cart">
                          <div className="nav__list--item product__details--cart-btn">Add to cart</div>
                      </div>
                      <div className="product__details--comment">
                          <div className="product__details--comment-head">{this.state.modalProductDetails.comment}</div>
                          <ul className="product__details--comment-list">
                            {this.state.modalProductDetails.category.information.map((info,i)=>(
                              <li className="product__details--comment-item">{info}</li>
                            ))}
                          </ul>
                      </div>
                   </div>
               </div>
               <span onClick={()=>this.modalToggleHandler(this.state.selectedProductId+1,true)} className="productsTogglerRight">{">"}</span>
         </Modal>
     }

     return (
       <>
           {modal}
           <Backdrop clicked={this.modalToggleHandler} show={this.state.show}/>
           <div className="heading">
                 <span className="heading__span">{this.props.selectedCategory.name} <sup style={{fontSize:"1rem",letterSpacing:"1px",marginLeft:"-1.5rem"}}>[{(this.props.selectedCategory.id!==-1)?this.props.selectedCategory.gender==="MALE"?"MEN":"WOMEN":"ALL"}]</sup></span>
           </div>

          <div  className="sort">
          {(this.props.selectedCategory.id!==-1)?<div className="nav__list--item">Sort
          <span className="dropdown">
              <span onClick={()=>this.props.sortByHandler("sOrderByDate")} className="dropdown__item">Newest</span>
              <span onClick={()=>this.props.sortByHandler("ByPriceDesc")} className="dropdown__item">₹ high to low</span>
              <span onClick={()=>this.props.sortByHandler("ByPriceAsc")} className="dropdown__item">₹ low to high</span>
              <span onClick={()=>this.props.sortByHandler("ByView")} className="dropdown__item">most viewed</span>
              <span onClick={()=>this.props.sortByHandler("ByBestSelling")} className="dropdown__item">best selling</span>
          </span></div>:null}
           <div className="sort__productCount">{this.state.products.length!==0?this.state.products[0].size+" products":null}</div>
          </div>

          {products}
          {/*<div className="feature">

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
            </div>*/}


            <div style={{display:"flex",justifyContent:"center"}}>
                <div className="pagination">
                     <span onClick={()=>this.onChangeHandler("minus")} className="pagination__minus">-</span>
                     <span value={this.selectedIndex} className="pagination__pageNumber">{this.state.selectedIndex+1} / {this.state.maxIndex+1}</span>
                     <span onClick={()=>this.onChangeHandler('plus')} className="pagination__plus">+</span>
                </div>
            </div>
       </>
     )
   }
 }


export default Products;
