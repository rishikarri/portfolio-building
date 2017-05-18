import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

// This holds all of the navigation elements for my website

class SideNavBar extends Component{
	openNav(){
		console.log('open nav')
	}
	closeNav(){
		console.log('close nav')
	}

	render(){
		return(
			<div>
				<nav className="side-nav-bar">					
					<IndexLink activeClassName="active-link" className='nav-bar-link' to="/"> Hi :D</IndexLink>					
					<Link activeClassName="active-link" className='nav-bar-link' to="about">About Me</Link>
					<Link activeClassName="active-link" className='nav-bar-link' to="interests">Interests</Link>
					<Link activeClassName="active-link" className='nav-bar-link' to="projects">Projects</Link>
					<Link activeClassName="active-link" className='nav-bar-link' to="contact">Contact</Link>
				</nav>


			</div>
		)
	}
}

export default SideNavBar;