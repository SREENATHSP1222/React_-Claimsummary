
import Nav from './node_modules/react-bootstrap/Nav';
import React from './node_modules/react';
import { Router, Route, Link, browserHistory, IndexRoute  } 
from './node_modules/react-router';
import Image from './node_modules/react-bootstrap/Image';

class Home extends React.Component {
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
   render() {

      return (


        
        <div>
           <div className="timeDiv">
     

     { this.state.time}
     
     
     
           </div>
                    <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="/claimsummary"><Link to="claimsummary" className="navitem">Home</Link></Nav.Link>
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
                  <div className="homeStyle">
                  Welcome to Claim Summary Application
                  
                    </div>
                    <Image className="imgclass" src="/image.jpg" fluid />
                   
                   
        
        </div>
      );
   }
}

export default Home;
