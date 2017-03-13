import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class TopNavBar extends Component{

	render(){
		return(
			<div>
				<nav className="top-nav-bar">					
					<IndexLink activeClassName="active-link" className=' nav-bar-link-top nav-bar-link-top-first' to="/"> Hi :D</IndexLink>					
					<Link activeClassName="active-link" className='nav-bar-link-top' to="about">About Me</Link>
					<Link activeClassName="active-link" className='nav-bar-link-top' to="interests">Interests</Link>
					<Link activeClassName="active-link" className='nav-bar-link-top' to="projects">Projects</Link>
					<Link activeClassName="active-link" className='nav-bar-link-top nav-bar-link-top-last' to="contact">Contact</Link>
				</nav>


			</div>
		)
	}
}

export default TopNavBar;