 import React, {Component} from "react"
import axios from "axios"

 class UpdateCatagory extends Component{

       state={
          name:"",
          gender:"M",
          catagorySaved:false,
          catagorySaving:true,
          savedCatagory:{},
          information:[],
          addInfo:""
       }

       conponentDidUpdate=()=>{
         if(this.state.catagorySaving){
            axios.post("/").then(res=>{
              this.setState({
                  name:"",
                  gender:"M",
                  savedCatagory:{...res.data},
                  catagorySaved:true,
                  catagorySaving:false,
                  information:[],
                  addInfo:""
              })
            }).catch(err=>{
              this.setState({
                  name:"",
                  gender:"M",
                  catagorySaved:false,
                  catagorySaving:true,
                  savedCatagory:{}
              })
              if(err.response && err.response.data)
              alert(err.response.data[0])
              else {
              alert("something went wrong the team......!!!!")
              }
            })
         }
       }

       onChangeHandler=(e)=>{
          const name = e.target.name
          const value = e.target.value
          let prevState={...this.state};
          prevState[name]=value;
          prevState.catagorySaved=false;
          this.setState({
            ...prevState
          })
       }

       onSubmitHandler=(e)=>{
           alert("in");
           console.log(this.state);
           this.setState({catagorySaving:true})
           e.preventDefault();
       }

       removeInfoHandler=(i)=>{
          let newState= this.state
          newState.information.splice(i,1);
          this.setState({
             ...newState
          })
        }

        addInfoHandler=()=>{
          let newState= this.state
          if(newState.addInfo.length!==0){
            newState.information.push(newState.addInfo);
            newState.addInfo="";
            this.setState({
              ...newState
            })
          }
        }

       render(){
          let savedCatagory=null
          if(!this.state.catagorySaved)
             savedCatagory= <div className="addCatagory__savedCatagory">
                                <div className="addCatagory__savedCatagory--name">name</div>
                                <div className="addCatagory__savedCatagory--gender">male</div>
                                <img className="addCatagory__savedCatagory--image" src={""} alt="savedImage"/>
                                 <ul className="addCatagory__savedCatagory--list">
                                    <li className="addCatagory__savedCatagory--list-item">information</li>
                                     <li className="addCatagory__savedCatagory--list-item">information</li>
                                 </ul>
                            </div>


         return (
           <div className="addCatagory">
              <form className="addCatagory__form" onSubmit={this.onSubmitHandler}>
                <input
                name="name"
                required
                onChange={this.onChangeHandler}
                value={this.state.name}
                className="addCatagory__form--name"
                placeholder="product name"
                type="text"/>
                <select
                className="addCatagory__form--select"
                onChange={this.onChangeHandler}
                value={this.state.gender}
                name="gender"
                id="gender">
                  <option default className="addCatagory__form--select-option" value="M">Male</option>
                  <option className="addCatagory__form--select-option" value="F">Felmale</option>
                  <option className="addCatagory__form--select-option" value="U">Unisex</option>
                </select>
                <div className="addCatagory__form--info">
                        {this.state.information.map((info,i)=>(
                            <div className="addCatagory__form--info-parent">
                                  <input
                                  type="text"
                                  className="addCatagory__form--info-input"
                                  value={info}
                                  disabled="true"/>
                                  <i onClick={()=>this.removeInfoHandler(i)} className="fa fa-remove addCatagory__form--info-remover" aria-hidden="true"></i>
                            </div>
                        ))}
                      <div>
                        <div className="addCatagory__form--info-parent">
                            <input
                            type="text"
                            className="addCatagory__form--info-input"
                            placeholder="add info"
                            name="addInfo"
                            value={this.state.addInfo}
                            onChange={this.onChangeHandler}
                            />
                          <i onClick={this.addInfoHandler}  className="fa fa-plus addCatagory__form--info-adder" aria-hidden="true"></i>
                       </div>
                    </div>
              </div>
              <input className="addCatagory__form--btn" value="update" type="submit"/>
              <input style={{background:"red",width:"7.5rem",margin:"0 1rem"}}  className="addCatagory__form--btn" value="delete" type="text"/>
              </form>
              <hr className=".verticalHr"/>
              {savedCatagory}
           </div>
         )
       }
}


export default UpdateCatagory;
