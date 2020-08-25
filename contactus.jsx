
import Nav from './node_modules/react-bootstrap/Nav';
import React from './node_modules/react';
import { Router, Route, Link, browserHistory, IndexRoute  } 
from './node_modules/react-router';

class Contact extends React.Component {
   render() {
      return (
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
    <Nav.Link eventKey="link-2"><Link to="">Contact Us</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2"><Link to="login">Log Out</Link></Nav.Link>
  </Nav.Item>
</Nav>
<div className="aboutdiv">
      Please reach us through claimsupport@mail.com.
      Also you can reach us through 0486-29299222,9023232323,09912121212.
    

     
        </div>
        
        </div>
      );
   }
}

export default Contact;
