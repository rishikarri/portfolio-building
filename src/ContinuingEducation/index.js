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
					<div className="col-xs-12" style={{color: '#337ab7', textDecoration: 'none', textAlign: 'left', fontWeight: 'bold'}}>Test Scores / Certifications</div>
					<p className='col-xs-12' style={{marginLeft: 20, textAlign: 'left', }}> 
		                
						<li style={{ fontSize: 14, color: 'black'}}><a target="_blank" href="https://www.ets.org/gre">Graduate Record Examination (GRE)</a>
						<ul>
							<li>Score: 329, 5.0</li>
							<ul>
								<li>Quantitative: 166 / 170</li>
								<li>Verbal: 163 / 170</li>
								<li>Analytical Writing: 5.0 / 6.0</li>
							</ul>
							<li>Test Date: April 2021</li>
						</ul> 
						</li>
		                
						<li style={{ fontSize: 14, color: 'black'}}><a target="_blank" href="https://www.finra.org/registration-exams-ce/qualification-exams/series79">Series 79 – Investment Banking Representative Exam</a></li>
						<ul>
							<li>Score: PASS</li>
							<li>Test Date: August 2015</li>
						</ul>
					</p>

					<div className="col-xs-12" style={{display: 'flex', fontWeight: 'bold'}}><a target="_blank" href="https://www.udemy.com/">Udemy Courses</a></div>
					<p className='col-xs-12' style={{marginLeft: 20, textAlign: 'left', }}> 
		                <li style={{ fontSize: 14, color: 'black'}}>Advanced React & Redux - Stephen Grider</li>
		                <li style={{ fontSize: 14, color: 'black'}}>React Native and Redux - Stephen Grider</li> 
		                <li style={{ fontSize: 14, color: 'black',}}>NodeJS - Anthony Alicea</li>

					</p>

					<div className="col-xs-12" style={{display: 'flex', fontWeight: 'bold'}}><span style={{color: '#337ab7'}}>Tech Books Read</span></div>
					<p className='col-xs-12' style={{marginLeft: 20, textAlign: 'left', }}>
						<li style={{ fontSize: 14, color: 'black'}}>Functional Light JavaScript - Kyle Simpson</li> 						
						<li style={{ fontSize: 14, color: 'black'}}>ES6 & Beyond - Kyle Simpson</li> 						
						<li style={{ fontSize: 14, color: 'black'}}>YDKJS Async & Performance - Kyle Simpson</li> 						
						<li style={{ fontSize: 14, color: 'black'}}>YDKJS Types & Grammar - Kyle Simpson</li> 						
						<li style={{ fontSize: 14, color: 'black'}}>YDKJS this & Object Prototypes - Kyle Simpson</li> 						
						<li style={{ fontSize: 14, color: 'black'}}>YDKJS Scopes & Closures - Kyle Simpson</li> 						
						<li style={{ fontSize: 14, color: 'black'}}>YDKJS Up & Going - Kyle Simpson</li> 						
						<li style={{ fontSize: 14, color: 'black'}}>The Pragmatic Programmer - Andy Hunt and Dave Thomas</li> 						
						<li style={{ fontSize: 14, color: 'black'}}>The C Programming Language - Brian Kernighan and Dennis Ritchie</li> 						
		                <li style={{ fontSize: 14, color: 'black'}}>A Smarter Way to Learn JavaScript - Mark Myers</li>
		                <li style={{ fontSize: 14, color: 'black',}}>A Smarter Way to Learn HTML & CSS - Mark Myers</li>
		                <li style={{ fontSize: 14, color: 'black'}}>Learn Python the Hard Way - Zed Shaw</li> 
					</p>

					<div className="col-xs-12" style={{display: 'flex'}}><span style={{color: '#337ab7'}}>Other</span></div>
					<p className='col-xs-12' style={{marginLeft: 20, textAlign: 'left', }}> 
						<li style={{ fontSize: 14, color: 'black'}}>9 Books read in 2022 </li>
						<li style={{ fontSize: 14, color: 'black'}}>21 Books read in 2021 </li>
						<li style={{ fontSize: 14, color: 'black'}}>13 Books read in 2020 </li>
						<li style={{ fontSize: 14, color: 'black'}}>14 Books read in 2019 </li>
		                <li style={{ fontSize: 14, color: 'black'}}>29 Books read in 2018 </li>
		                <li style={{ fontSize: 14, color: 'black'}}>30 Books read in 2017 </li>
					</p>


					
					

				</div>
			</div>

		)
	}
}

export default ContinuingEducation;

// <div className='weakest-beast-text'>(Please Note: this website is stil under construction!) </div> 									