
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } 
from 'react-router';

class AboutUs extends React.Component {
   render() {
      return (
        <div>
       <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/claimsummary"><Link to="home" className="navitem">Home</Link></Nav.Link>
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
<div className="aboutdiv">
       Claim summary application provides all services regarding claim management.
       Here you can view claim information also you update your claim details.
       for more assistance please visit our contact us page
     
        </div></div>
      );
   }
}

export default AboutUs;
