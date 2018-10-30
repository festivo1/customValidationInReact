// import React from "react";
// import Field from "./Fieldcomponent";
// class ReactForm extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             // name:'',
//             // names:[],
//             fields:{
//                 name:'',
//                 email:''
//             }, 
//             people:[],
//             fieldErrors:{}, 
//         }
//     }

//     handleSubmit=(e)=>{
//         // const name=this.state.name;
//         // console.log(name);
//         // const names=[...this.state.names, name];
//         // this.setState({names:names});
//         //  this.setState({name:''});
//         const person=this.state.fields;
//        // const people=[...this.state.people, person];
//        const people=this.state.people;
//        alert("hi i am submitting");
      
//        if(!this.validate()) return;
//        //const fieldsError=this.validate(person);
//        // this.setState({fieldsError});
        
//         // console.log(people);
//         //  console.log(Object.keys(people));
//         //  console.log(Object.keys(fieldsError).length);
//         // if(Object.keys(fieldsError).length) return;
        
//         this.setState({
//             people:people.concat(person),
//             fields:{
//                 name:'',
//                 email:'',
//             }
//         })
//         e.preventDefault();
//     }
//     handleChange=(name, value, error)=>{
//       //  const fields={};//warning : changing a controlled input of type to be 
//         //uncontrolled.
//        // const fields=this.state.fields;//local references to state.fields
//     //    console.log(name);
//     //    console.log(error);
//        const fields=Object.assign({}, this.state.fields) ;
//        const fieldErrors=Object.assign({}, this.state.fieldErrors);
//        console.log(fields);
//        console.log(fieldErrors);
//     //    fields[e.target.name]=e.target.value;
//     //     console.log(fields[e.target.name]);
//     //     this.setState({  fields :fields })
//       fields[name]=value;
//       fieldErrors[name]=error;
//       this.setState({fields, fieldErrors});
        
//     };
//     validate=()=>{
//         const person = this.state.fields;
//         const fieldErrors= this.state.fieldErrors;
//         const errMessages=Object.keys(fieldErrors).filter(k=>fieldErrors[k]);
//         if(!person.name) return false;
//         if(!person.email) return false;
//         if(errMessages.length) return false;
//         return true;
//     }
//     isEmail=(email)=>{
//         var emailPat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if(email.match(emailPat)==null){
//             return false;
//         }
//         return true;
//     }
   
//     render(){
//         return(
//             <div>
//              <form onSubmit={this.handleSubmit}>
                
//                  {/* <input name='name' type='text' onChange={this.handleChange} value={this.state.fields.name}></input>
//                  <span style={{color:'red'}}>{this.state.fieldsError.name}</span>
//                  <input name='email' type='text' onChange={this.handleChange} value={this.state.fields.email}></input>
//                  <span style={{color:'red'}}>{this.state.fieldsError.email}</span>
//                 <input type='submit'></input>  */}
//                 <Field
//                 placeholder="Name"
//                 name="name"
//                 value={this.state.fields.name}
//                 onChange={this.handleChange}
//                 validate={val=>(val?false:'Name Required')}
//                 />
                
//                 <Field
//                 placeholder="Email"
//                 name="email"
//                 value={this.state.fields.email}
//                 onChange={this.handleChange}
//                 validate={val=>(this.isEmail(val)?false:'Invalid Email')}
//                 />
//                 <input type='submit' disabled={!this.validate()}/>
//             </form> 
//             <div>
//                 <ul>

//         {this.state.people.map(({name, email},i)=><li key={i}>{name}({email})</li>)}
//                 </ul>
//             </div>
//             </div>
//         )
        
//     }

    
// }
// export default ReactForm;
import React , {Component} from 'react';
import Field from "./Fieldcomponent";
class ReactForm extends Component{
constructor(props) {
    super(props);
    this.state={
        fields:{
            name:'',
            email:''
        },
        fieldErrors:{},
        people:[],

    }
    
}
render(){
    return(
        <div>
        <Field
        placeholder='Name'
        name='name'
        value={this.state.fields.name}
        validate={val=>(val?false:'name required')}
        onChange={this.handleChange}
        />

        <Field
        placeholder='Email'
        name='email'
        value={this.state.fields.email}
        validate={val=>(val?false:'invalid email')}
        onChange={this.handleChange}
        />
        </div>
    );
}

}
export default ReactForm;