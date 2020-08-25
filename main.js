 import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import ClaimSummary from './claimsummary.jsx';
import UpdateClaim from './updateclaim.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import AboutUs from './about.jsx';
import Contact from './contactus.jsx';
import AppRouter from './AppRoute.jsx';
import Home from './home.jsx';
//ReactDOM.render(<Login/>, document.getElementById('LoginForm'));
//ReactDOM.render(<ClaimSummary/>, document.getElementById('claimsummary'));

//ReactDOM.render(<UpdateClaim/>, document.getElementById('updateclaim'));


// Router configuration to map the route 

 ReactDOM.render((
     <Router history = {browserHistory}>
     <Route path = "/" component = {AppRouter}>
            <IndexRoute component = {Login} />
            <Route path = "login" component = {Login} />
            <Route path = "login/false" component = {Home} />
            <Route path = "updateclaim" component = {UpdateClaim} />
            <Route path = "claimsummary" component = {ClaimSummary} />
            <Route path = "about" component = {AboutUs} />
            <Route path = "contactus" component = {Contact} />
            <Route path = "home" component = {Home} />
     </Route>
    </Router>
    ), document.getElementById('router'));  

   