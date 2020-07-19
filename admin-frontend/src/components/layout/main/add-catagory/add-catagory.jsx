 import React, {Component} from "react"
 import axios from "axios";


 class AddCatagory extends Component{

   state={
      name:"",
      gender:"M",
      catagorySaved:false,
      catagorySaving:false,
      savedCatagory:{},
      information:[],
      addInfo:""
   }

   componentDidUpdate=()=>{
     let newState =  {
       name:this.state.name,
       gender:this.state.gender,
       information:[...this.state.information],
     }
     if(this.state.catagorySaving){
        axios.post("/v1/admin/category",newState).then(res=>{
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
              catagorySaving:false,
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
                        <div key={i} className="addCatagory__form--info-parent">
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
          <input className="addCatagory__form--btn" value="save" type="submit"/>
          </form>
          <hr className=".verticalHr"/>
          {savedCatagory}
       </div>
     )
   }
 }


export default AddCatagory;
