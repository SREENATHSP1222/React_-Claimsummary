import React from './node_modules/react';
import Nav from './node_modules/react-bootstrap/Nav';
import { Button } from './node_modules/react-bootstrap';
import Form from './node_modules/react-bootstrap/Form';
import axios from './node_modules/axios';
import { Router, Route, Link, browserHistory, IndexRoute  } 
from './node_modules/react-router';



class UpdateClaim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: ' ',
        claim_num:null,
        claim_type:null,
        claim_pro: null,
        claim_sd:null,
        claim_ed:null,
 
        errors: {
            claim_num: ' ',
            claim_type: ' ',
            claim_pro: ' ',
            claim_sd: '',
            claim_ed: '',
        }
    }
    this.handleClaimNum = this.handleClaimNum.bind(this);
    this.handleClaimType = this.handleClaimType.bind(this);
    this.handleClaimPro = this.handleClaimPro.bind(this);
    this.handleClaimSD = this.handleClaimSD.bind(this);
    this.handleClaimED = this.handleClaimED.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
};
handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
        case 'claim_num':
            errors.claim_num =
                validateNumber.test(value)
                    ? ''
                    : 'NumberFormat is not valid!';
            break;
        case 'claim_type':
            errors.claim_type =
                value.length <= 0
                    ? 'Claim type must be Filled!'
                    : '';
            break;
        case 'claim_pro':
            errors.claim_pro =
                value.length <= 0
                    ? 'Claim Program must be Filled!'
                    : '';
            break;
        case 'claim_sd':
            errors.claim_sd =
                value.length <= 0
                    ? 'Claim Start Date must be Filled!'
                    : '';
            break;
        case 'claim_ed':
            errors.claim_ed =
                value.length <= 0
                    ? 'Claim End Date must be Filled!'
                    : '';
            break;
        default:
            break;
    }

    this.setState({ errors, [name]: value });
}
handleClaimNum(event) {
    this.setState({ claim_num: event.target.value });
}
handleClaimType(event) {
    this.setState({ claim_type: event.target.value });
}
handleClaimPro(event) {
    this.setState({ claim_pro: event.target.value });
}
handleClaimSD(event) {
    this.setState({ claim_sd: event.target.value });
}
handleClaimED(event) {
    this.setState({ claim_ed: event.target.value });
}
componentDidMount() {
  const { claimSummary } = this.props.location.state;
  this.setState({ claim : this.props.location.state });
  console.log(this.props.location.state);
}
handleSubmit(event) {
    event.preventDefault();
    const claim = this.state.claim;
    const params ={
    
   

      empId : claim.empId,
      empName : claim.empName,
      claimNumber : this.refs['claim_num'].value,
      claimType : this.refs['claim_type'].value,
      claimProgram : this.refs['claim_pro'].value,
      claimStartDate : this.refs['claim_sd'].value,
      claimEndDate : this.refs['claim_ed'].value
    }
  
    axios.put(`http://localhost:7000/claims/${claim.id}`, params)
        .then(res => {
            console.log(res.data);
         alert('Updated Successfully');
        })
       

}

  
  render() {
    return (
    <div>
        <div>
       

         <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/claimsummary"><Link to="home" className="navitem">Home  </Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1"> <Link to="claimsummary">Claim Summary  </Link></Nav.Link>
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

<Form onSubmit={this.handleSubmit} className="formclass">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Employee ID</Form.Label>
    <Form.Control type="ID" placeholder="Employee ID" defaultValue={this.props.location.state.empId} readOnly/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="Employee Name">
    <Form.Label>Employee Name</Form.Label>
    <Form.Control type="Name" placeholder="Employee Name" defaultValue={this.props.location.state.empName} readOnly/>
  </Form.Group>
  <Form.Group controlId="Employee Name">
    <Form.Label>Claim Number</Form.Label>
    <Form.Control ref="claim_num" name="claim_num" type="Number" placeholder="Claim Number" defaultValue={this.props.location.state.claimNumber} />
 
  </Form.Group>
  <Form.Group controlId="Employee Name">
    <Form.Label>Claim Type</Form.Label>
    
    <Form.Control as="select" ref="claim_type" name="claim_type" onChange={this.handleClaimType} onChange={this.handleChange}  >
    <option defaultValue={this.props.location.state.claimType?this.props.location.state.claimType:' '}>{this.props.location.state.claimType}</option>
                                        <option value="Submitted">Submitted</option>
                                        <option value="Cancelled">Cancelled</option>
                                        <option value="Claimed">Claimed</option>
                                        <option value="Denied">Denied</option>
                                        <option value="Received">Received</option>
                                        <option value="Paid">Paid</option>
                                        <option value="Rejected">Rejected</option>
                                       
                                    </Form.Control>
  </Form.Group>
  <Form.Group controlId="Claim Program">
    <Form.Label>Claim Program</Form.Label>
    <Form.Control ref="claim_pro" name="claim_pro"type="Name" placeholder="Claim Program" defaultValue={this.props.location.state.claimProgram}/>
  </Form.Group>
  <Form.Group controlId="Claim Start Date">
    <Form.Label>Claim Start Date</Form.Label>
    <Form.Control ref="claim_sd" name="claim_sd" type="Date" placeholder="Claim Start Date" defaultValue={this.props.location.state.claimStartDate}/>
  </Form.Group>
  <Form.Group controlId="Claim End Date">
    <Form.Label>Claim End Date</Form.Label>
    <Form.Control ref="claim_ed" name="claim_ed" type="Date" placeholder="Claim End Date" defaultValue={this.props.location.state.claimEndDate}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Button variant="outline-info" >
  <Link to="claimsummary">Cancel </Link>
  </Button>
</Form>


            
            
            
            



            </div>

        </div>

      );
    }
}



export default UpdateClaim;
