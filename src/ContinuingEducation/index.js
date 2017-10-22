import React, { Component } from 'react';


class ContinuingEducation extends Component{


	render(){
		return(
			<div className='row'>
				<div className='col-xs-12'>
					
					<div><img style={{borderRadius: '50%', }} src="../../Images/thinkingGorrilla.jpeg" /></div>
					<div style={{fontStyle: 'italic', fontWeight: 700,}}>Continuing Education</div>

					<div className="col-xs-12" style={{display: 'flex'}}><a href="http://online-learning.harvard.edu/course/cs50-introduction-computer-science">Harvard</a></div>
					<p className='col-xs-8 col-xs-offset-3' style={{marginLeft: 20, textAlign: 'left', }}> 
		                <li style={{fontSize: 14, color: 'black'}}><a href="http://online-learning.harvard.edu/course/cs50-introduction-computer-science">CS50 - Introduction to Computer Science </a>- 0% Complete </li>
					</p>

					<div className="col-xs-12" style={{display: 'flex'}}><a href="https://www.udemy.com/">Udemy</a></div>
					<p className='col-xs-10' style={{marginLeft: 20, textAlign: 'left', }}> 
		                <li style={{ fontSize: 14, color: 'black'}}>Advanced React & Redux - Stephen Grider - 29% Complete</li>
		                <li style={{ fontSize: 14, color: 'black',}}>NodeJS - Anthony Alicea - 71% Complete</li>
		                <li style={{ fontSize: 14, color: 'black'}}>React Native and Redux - Stephen Grider - 75% Complete</li> 
					</p>

					
					

				</div>
			</div>

		)
	}
}

export default ContinuingEducation;

// <div className='weakest-beast-text'>(Please Note: this website is stil under construction!) </div> 									