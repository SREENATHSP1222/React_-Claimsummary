import React from './node_modules/react';
import Nav from './node_modules/react-bootstrap/Nav';
import Table from './node_modules/react-bootstrap/Table';
import axios from './node_modules/axios';
import { Router, Route, Link, browserHistory, IndexRoute  } 
from './node_modules/react-router';







class ClaimSummary extends React.Component {
  constructor(props){
   
    super(props);

     this.state= {

    //  claimList:[]
     };
     this.state = {
      time:new Date().toLocaleString()

    };
    this.props={

    }
    }
    
    getClaimData(){
      axios
      .get(`http://localhost:7000/claims`)
      .then(res =>{
        const data = res.data
        console.log(data);
        const claimlist = data.map(u =>
          
          <tr>
          <td>{u.empId}</td>
          <td>{u.empName}</td>
          <td>{u.claimNumber}</td>
          <td >{u.claimType}</td>
          <td >{u.claimProgram}</td>
          <td>{u.claimStartDate}</td>
          <td>{u.claimEndDate}</td>
          <td><Link  to={{pathname: "/updateclaim",state:{empId : u.empId,empName:u.empName,claimNumber:u.claimNumber,
             claimType:u.claimType,claimProgram:u.claimProgram,claimStartDate:u.claimStartDate,
             claimEndDate:u.claimEndDate,id:u.id }}} >Update </Link></td>
      </tr>
          )
            this.setState({claimlist})
      })
    }
    componentDidMount(){
      this.getClaimData()
     }
  handleVisibility(id) {
console.log('Handle');
  };
   render() {


  
    
 
    return (
    <div>
      <div className="timeDiv">
     

{ this.state.time}



      </div>
        <div id="claimsummary">
           <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href=""><Link to="home" className="navitem">Home</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1"> <Link to="claimsummary">Claim Summary </Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2"><Link to="about">About Us</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2"><Link to="contactus">Contact Us</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2"><Link to="login">Log Out</Link></Nav.Link>
  </Nav.Item>
</Nav>


<Table  striped bordered hover size="sm"  responsive="md" responsive="sm" className="claimsumTable">
  <thead>
    <tr>
      <th>Employee ID</th>
      <th>Employee Name</th>
      <th>Claim Number</th>
      <th>Claim Type</th>
      <th>Claim Program</th>
      <th>Claim Start Date</th>
      <th>Claim End Date</th>
      <th>Update</th>
    </tr>
  </thead>
  <tbody>

  
  {this.state.claimlist}
      
  </tbody>

</Table>



            
            
            
            
            



            </div>

        </div>

      );
    }
}



export default ClaimSummary;
