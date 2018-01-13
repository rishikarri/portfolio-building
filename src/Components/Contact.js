import React, { Component } from 'react';
//contact component will hold additional information about me and allow users to reach out 
// should add eslint 
// potentially add react helmet

// add in stack overflow link here 

// add copyright tag here 

class Contact extends Component{

	render(){
		return(
			<div>
				<div className='move-contact-me-section-down'>
					
					<div className='description-text'>
						I like building things and enjoy meeting new people! 
					</div>

					<div className='description-text'>
						Learn more / Contact Me:
					</div>					

					<div className='col-xs-6 col-xs-offset-3 contact-me-section margin-above'>
					</div>

				{/*outer div which holds icons */}
					<div className='col-xs-12 col-md-6 col-md-offset-3 margin-above'>
						<div className='col-xs-12 col-md-6'>	
							<ul className='no-bullet'>
								<li>
									{/*allow users to email you directly */}
									<a target="_blank" href='mailto:rishikarri1@gmail.com'><i className="fa fa-envelope fa-5x" aria-hidden="true"></i></a>								
									
								</li>
								<li>
									Email
								</li>
							</ul>						
						</div>

						<div className='col-xs-12 col-md-6'>	
							<ul className='no-bullet'>
								<li>
									<a target="_blank" href='https://github.com/rishikarri'><i className="fa fa-github-square fa-5x" aria-hidden="true"></i></a>
								</li>
								<li>
									Github
								</li>
							</ul>						
						</div>						

						<div className='col-xs-12 col-md-6'>	
							<ul className='no-bullet responsive-margin-above'>
								<li>
									<a target="_blank" href='../../Files/Rishi-Karri-Resume.pdf'><i className="fa fa-file-pdf-o fa-5x" aria-hidden="true"></i></a>
								</li>
								<li>
									Resume
								</li>
							</ul>						
						</div>						


						<div className='col-xs-12 col-md-6'>	
							<ul className='no-bullet responsive-margin-above'>
								<li>
									<a target="_blank" href='https://www.linkedin.com/in/rishi-karri-35898465'> <i className="fa fa-linkedin-square fa-5x" aria-hidden="true"></i></a>
								</li>
								<li>
									LinkedIn
								</li>
							</ul>						
						</div>																		

					

					</div>
					
				</div>

				 <div className='col-xs-12' style={{marginTop: 180, textAlign: 'center'}}> Copyright © www.rishikarri.com 2018. </div>

			</div>
		)
	}
}

export default Contact;

