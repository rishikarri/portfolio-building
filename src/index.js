import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js';
import './CSS/index.css';


// going to need to import components I will need
import Hi from './Components/Hi.js';
import About from './Components/About.js';
import Interests from './Components/Interests.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';

// bring in styles that are created with sass
import './CSS/styles.css'

// bring in the router - bring em out bring em out
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

// holds all routes for portfolio

ReactDOM.render(
    <Router history={hashHistory} >
		<Route path='/' component={App}>			
			<IndexRoute component={Hi} />
			<Route path='hi' component={Hi} />
			<Route path='about' component={About} />			
			<Route path='interests' component={Interests} />
			<Route path='projects' component={Projects} />
			<Route path='contact' component={Contact} />							
		</Route>		  
	</Router>,
  document.getElementById('root')
);
