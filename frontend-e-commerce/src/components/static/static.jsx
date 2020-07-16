import React,{ Component } from "react";
import logo from "../../assets/images/innerclan_page-0001.jpg"
import dwight from "../../assets/images/dwight.jpg"
import sidhu from "../../assets/images/sidhu.jpg"
import sidhu2 from "../../assets/images/sidhu2.jpg"
import thomas from "../../assets/images/thomas_for_ig.jpg"
import final from "../../assets/images/final_template.jpg"
import tshirt from "../../assets/images/t-shirt.jpg"
import go from "../../assets/images/goLogo.png"



class Static extends Component {



    render(){
        return(
            <main >
               <div className="cart">
                    <span className="cart__count">8</span>
                    <label htmlFor="cart__checkbox" className="cart__label"><i className="fa fa-shopping-bag cart__icon" aria-hidden="true"></i></label>
                    <input id="cart__checkbox" type="checkbox" className="cart__checkbox"/>
                    <div className="cart__component">
                         <ul className="cart__list">
                            <li className="cart__list-item">kart item</li>
                            <li className="cart__list-item">kart item</li>
                            <li className="cart__list-item">kart item</li>
                            <li className="cart__list-item">kart item</li>
                         </ul>
                    </div>

                </div>

               <div className="links">
                  <ul className="links__list">
                     <span className="links__list-item"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/innerclanofficial/?igshid=gpgcb833gqme"><i class="fa fa-instagram" aria-hidden="true"></i></a></span>
                     <span className="links__list-item"><a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/innerclanofficial/?igshid=gpgcb833gqme"><i class="fa fa-facebook" aria-hidden="true"></i></a></span>
                     <span className="links__list-item"><a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/innerclanofficial/?igshid=gpgcb833gqme"><i class="fa fa-twitter" aria-hidden="true"></i></a></span>
                  </ul>
               </div>

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
                      <span className="nav__list--item">Who are we?</span>
                  </div>
                  <div className="search">
                     <input className="search__checkbox" id="search" type="checkbox"/>
                     <input placeholder="Search" className="search__input" type="text"/>
                     <label className="search__label" htmlFor="search"><i className="search__icon fa fa-search " aria-hidden="true"></i></label>
                  </div>
               </nav>


               <div className="bigImage">
                  <img className="bigImage__image" src={tshirt} alt=""/>
                   <div className="bigImage__quote">
                        <span className="bigImage__quote-span1">Inner Clan</span>
                        <span className="bigImage__quote-span2">The 1960s was an era of big thoughts. And yet, amazingly, each of these thoughts could fit on a T-shirt</span>
                   </div>
               </div>


               <div className="heading">
                     <span className="heading__span">T-Shirt <sup style={{fontSize:"1rem",letterSpacing:"1px",marginLeft:"-1.5rem"}}>[MEN]</sup></span>
               </div>

              <div  className="sort">
              <div className="nav__list--item">Sort
              <span className="dropdown">
                  <span className="dropdown__item">Featured</span>
                  <span className="dropdown__item">Newest</span>
                  <span className="dropdown__item">Low to High</span>
                  <span className="dropdown__item">High to Low</span>
                  <span className="dropdown__item">Relavent</span>
              </span></div>
              <div className="sort__productCount">147 products</div>
              </div>

               <div className="feature">

                     <div className="card">
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

                     <div className="card">
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

                     <div className="card">
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

               <footer className="footer">
                      <ul className="footer__ul">
                         <li className="footer__ul-li">bla bla bla</li>
                         <li className="footer__ul-li">bla bla</li>
                         <li className="footer__ul-li">bla</li>
                      </ul>
                     <img className="footer__image" src={go} alt=""/>
                     <div className="footer__copyright">&copy; copyright 2020 inner clan designs</div>
               </footer>

            </main>
        )
    }
}

export default Static;
