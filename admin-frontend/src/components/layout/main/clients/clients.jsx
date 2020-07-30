import React, {Component} from "react"
import Spinner from "../../../../UI/spinner/spinner"

 class Clients extends Component{

   state={
     clients:[]
   }

   componentDidMount=()=>{

    // axios.get("/v1/admin/clients").
    // then(res=>{
    //    this.setState({
    //         clients:[...res.data]
    //    })
    // }).catch(err=>{
    //   if(err.response && err.response.data)
    //   alert(err.response.data[0]);
    //   else
    //     alert("contact the team");
    // })
   }

   render(){
     if(!this.props.authenticated){
       window.location.href=this.props.address;
     }
     let clients= null;
     if(this.state.clients.length!==0){
       clients = <>
                {this.state.clients.map((promo,i)=>{
          return    <tr key={promo.id}>
                     <th>{promo.name}</th>
                     <th>{promo.access}</th>
                     <th>{promo.value}</th>
                     <th>{promo.expiryDate}</th>
                     <th>{promo.createdOn}</th>
                     <th>{promo.usedBy}</th>
                     <th><input onClick={()=>this.deletePromoHandler(promo.id,i)} style={{background:"red"}} className="subscribe__box--btn" value="delete" type="submit"/></th>
                  </tr>
                })}
       </>
     }
     if(this.state.deleting){
       return <Spinner />
     }

     return (
       <div className="subscribe">
           <table cellspacing="20px" className="subscribe__table">
               <thead>
                  <tr>
                     <th>name</th>
                     <th>access</th>
                     <th>value</th>
                     <th>expiry date</th>
                     <th>created On</th>
                     <th>usedBy</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                   {clients}
               </tbody>
           </table>
       </div>
     )
   }
 }


export default Clients;
