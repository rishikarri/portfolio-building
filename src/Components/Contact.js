import React, { Component } from 'react';
//contact component will hold additional information about me and allow users to reach out 
// should add eslint 

// add in stack overflow link here 

// add copyright tag here 



class Contact extends Component{

	render(){
		return(
			<div>
				<div className='move-contact-me-section-down'>
					
					<div className='description-text'>
						I like building things and enjoy meeting new people
					</div>

					<div className='description-text'>
						Connect with me:
					</div>					

					<div className='col-xs-6 col-xs-offset-3 contact-me-section margin-above'>
					</div>

				{/*outer div which holds icons */}
					<div className='col-xs-12 col-md-6 col-md-offset-3 margin-above'>
						<div className='col-xs-12 col-md-6'>	
							<ul className='no-bullet'>
								<li>
									{/*allow users to email you directly */}
									<a target="_blank" href='https://www.instagram.com/rishikarri'><i className="fa fa-instagram fa-5x" aria-hidden="true"></i></a>								
									
								</li>
								<li>
									Instagram
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
									<a target="_blank" href='https://stackoverflow.com/users/7600089/rishikarri'> <i className="fa fa-stack-overflow fa-5x" aria-hidden="true"></i></a>
								</li>
								<li>
									Stack Overflow
								</li>
							</ul>						
						</div>									
						<div className='col-xs-12 col-md-6'>	
							<ul className='no-bullet responsive-margin-above'>
								<li>
									<a target="_blank" href='https://medium.com/@rishikarri'> <i className="fa fa-pencil-square-o fa-5x" aria-hidden="true"></i></a>
								</li>
								<li>
									Blog
								</li>
							</ul>						
						</div>									

						<div className='col-xs-12 col-md-6'>	
							<ul className='no-bullet responsive-margin-above'>
								<li>
									<a target="_blank" href='https://open.spotify.com/artist/5ad9XwiyzNIZJ1JuY8uNAm'><i className="fa fa fa-music fa-5x" aria-hidden="true"></i></a>
								</li>
								<li>
									Music
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

						<div className='col-xs-12 col-md-6'>	
							<ul className='no-bullet responsive-margin-above'>
								<li>
									<a target="_blank" href='https://www.youtube.com/channel/UCKl_Fz_RPqW7QkG4EhbrEUg'> <i className="fa fa-youtube fa-5x" aria-hidden="true"></i></a>
								</li>
								<li>
									YouTube
								</li>
							</ul>						
						</div>																		

						

					</div>
					
				</div>

				 <div className='col-xs-12' style={{marginTop: 180, textAlign: 'center'}}> Copyright © www.rishikarri.com 2025. </div>

			</div>
		)
	}
}

export default Contact;

