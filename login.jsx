 import React from './node_modules/react';

import { Button, FormText } from './node_modules/react-bootstrap';

import axios from './node_modules/axios';

    
import { Router, Route, Link, browserHistory, IndexRoute  } 
from './node_modules/react-router';







class Login extends React.Component {
   
constructor(props){
   super(props);
   this.state={invalidUser:false};
   this.validatelogin=this.validatelogin.bind(this);
   this.state.cu;
}
validatelogin(e){
e.preventDefault();
console.log('authen user started');

axios.get('http://localhost:7001/users/')
.then(res =>{
   console.log("entered cred"+this.refs['userid'].value)
   console.log(res.data[0].userid);
   console.log(res.data[0].password)
   let foundUser=false;
   for(let i=0;i<res.data.length;i++){
      if(res.data[i].userid == this.refs['userid'].value
         && res.data[i].password == this.refs['password'].value){
            console.log('matching cred');
            foundUser=true;
            this.state.cu=res.data[i].userid;
         }
   }
   console.log('foun mat user',foundUser);
   if(foundUser){
      browserHistory.push('/login/false');
      

   }
   else{
      this.setState({invalidUser:true});
    
   alert("invalid Credentials !");
    
   }
}).catch(error => {this,this.setState({invalidUser:true})})



}
       render() {
         let loginstyle={
            
           width:'80%',
         }
       
   
 
    return (
        <div id="login" className="loginBody" > 

          

       
         <form className="Loginform" onSubmit={this.validatelogin} method="POST">  

    
         <div className="loginSection">
            
              <div className="textbox">
            
             <input ref="userid" type="" placeholder="Username" name="LoginEmail" style={loginstyle}></input>

             </div>
             <div className="textbox">
             <input ref="password" type="password" placeholder="Password" name="loginPassword" style={loginstyle}></input>
          
             </div>
           
           
               <Button variant="outline-primary" className="buttonlogin" type="submit" value="Sign In">Sign In</Button> 

          </div>
 
 
         </form>
      
   
     
    
     </div>
         
        
      );
   }
}



export default Login; 
