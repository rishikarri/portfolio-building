import React, { Component } from 'react';


class ContinuingEducation extends Component{


	render(){
		return(
			<div className='row'>
				<div className='col-xs-12'>
					
					<div><img style={{borderRadius: '50%', }} src="../../Images/thinkingGorrilla.jpeg" /></div>
					<div style={{fontStyle: 'italic', fontWeight: 700,}}>Continuing Education</div>

					{/*<div className="col-xs-12" style={{display: 'flex', color: '#337ab7'}}><a target="_blank" href="http://online-learning.harvard.edu/">Harvard</a></div>
					<p className='col-xs-8 col-xs-offset-3' style={{marginLeft: 20, textAlign: 'left', }}> 
		                <li style={{fontSize: 14, color: 'black'}}><a target="_blank" href="http://online-learning.harvard.edu/course/cs50-introduction-computer-science">CS50 - Introduction to Computer Science </a>- 0% Complete </li>
					</p>*/}

					<div className="col-xs-12" style={{display: 'flex'}}><a target="_blank" href="https://www.udemy.com/">Udemy</a></div>
					<p className='col-xs-12' style={{marginLeft: 20, textAlign: 'left', }}> 
		                <li style={{ fontSize: 14, color: 'black'}}>Advanced React & Redux - Stephen Grider - <em>29% Complete</em></li>
		                <li style={{ fontSize: 14, color: 'black'}}>React Native and Redux - Stephen Grider - <em>75% Complete</em></li> 
		                <li style={{ fontSize: 14, color: 'black',}}>NodeJS - Anthony Alicea - <em>100% Complete</em></li>

					</p>

					<div className="col-xs-12" style={{display: 'flex'}}><span style={{color: '#337ab7'}}>Tech Books Completed</span></div>
					<p className='col-xs-12' style={{marginLeft: 20, textAlign: 'left', }}> 						
		                <li style={{ fontSize: 14, color: 'black'}}>A Smarter Way to Learn JavaScript - Mark Myers</li>
		                <li style={{ fontSize: 14, color: 'black',}}>A Smarter Way to Learn HTML & CSS - Mark Myers</li>
		                <li style={{ fontSize: 14, color: 'black'}}>Learn Python the Hard Way - Zed Shaw</li> 
					</p>

					<div className="col-xs-12" style={{display: 'flex'}}><span style={{color: '#337ab7'}}>Other</span></div>
					<p className='col-xs-12' style={{marginLeft: 20, textAlign: 'left', }}> 
		                <li style={{ fontSize: 14, color: 'black'}}>10 Books Read in 2018 (See Interests Section for Details)</li>
		                <li style={{ fontSize: 14, color: 'black'}}>30 Books Read in 2017 (See Interests Section for Details)</li>
					</p>


					
					

				</div>
			</div>

		)
	}
}

export default ContinuingEducation;

// <div className='weakest-beast-text'>(Please Note: this website is stil under construction!) </div> 									