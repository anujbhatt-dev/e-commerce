 import React, {Component} from "react"
 import SecondaryNavigation from "../../secondary-nav/secondary-nav"


 class WhoAreWe extends Component{


   componentDidMount=()=>{
     document.getElementById("links").scrollIntoView();
   }

   render(){

     return (
       <>
       <SecondaryNavigation />
       <div id="cards" className="row">
              <h4>Developers</h4>
              <div className="cards" >
                       <div className="cards__side cards__side--front">
                         <div className="cards__picture cards__picture--1">
                            &nbsp;
                         </div>
                         <h4 className="cards__heading">
                           <span className="cards__heading-span cards__heading-span--1">Sagar Panwar <p>backend developer</p></span>
                        </h4>
                       </div>
                       <div className="cards__side cards__side--back cards__side--back-1">
                         <div className="cards__cta">
                             <div className="cards__detail">
                               <ul>
                                 <li><a href="https://www.linkedin.com/in/sagar-panwar-20a59914b/" target="_blank" rel="noopener noreferrer">{" "}<i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                 <li><a href="https://github.com/sagarmachine" target="_blank" rel="noopener noreferrer">{" "}<i className="fa fa-github" aria-hidden="true"></i></a></li>
                                 <li><a href="https://www.instagram.com/drunken_piglet_00/" target="_blank" rel="noopener noreferrer">{" "}<i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                               </ul>
                             </div>
                         </div>
                       </div>
              </div>

              <div className="cards">
                       <div className="cards__side cards__side--front">
                         <div className="cards__picture cards__picture--2">
                            &nbsp;
                         </div>
                         <h4 className="cards__heading">
                           <span className="cards__heading-span cards__heading-span--1">Anuj BhAtt <p>frontend developer</p></span>
                        </h4>
                       </div>
                       <div className="cards__side cards__side--back cards__side--back-1">
                         <div className="cards__cta">
                             <div className="cards__detail">
                               <ul>
                                   <li><a href="https://www.linkedin.com/in/anuj-bhatt-4271051a1/" target="_blank" rel="noopener noreferrer">{" "}<i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                   <li><a href="https://github.com/anujbhatt-dev" target="_blank" rel="noopener noreferrer">{" "}<i className="fa fa-github" aria-hidden="true"></i></a></li>
                                   <li><a href="https://www.instagram.com/bhatt5933/" target="_blank" rel="noopener noreferrer">{" "}<i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                               </ul>
                             </div>
                         </div>
                       </div>
              </div>


              <div className="cards">
                       <div className="cards__side cards__side--front">
                         <div className="cards__picture cards__picture--3">
                            &nbsp;
                         </div>
                         <h4 className="cards__heading">
                           <span className="cards__heading-span cards__heading-span--1">Nikhil Khari <p>backend developer</p></span>
                        </h4>
                       </div>
                       <div className="cards__side cards__side--back cards__side--back-1">
                         <div className="cards__cta">
                             <div className="cards__detail">
                               <ul>
                                 <li><a href="https://www.linkedin.com/in/nikhil-khari-0b3830152/" target="_blank" rel="noopener noreferrer">{" "}<i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                 <li><a href="https://github.com/NikhilKhari" target="_blank" rel="noopener noreferrer">{" "}<i className="fa fa-github" aria-hidden="true"></i></a></li>
                                 <li><a href="https://www.instagram.com/nikhil_khari/" target="_blank" rel="noopener noreferrer">{" "}<i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                               </ul>
                             </div>
                         </div>
                       </div>
              </div>
          </div>
      </>
     )
   }
 }


export default WhoAreWe;
