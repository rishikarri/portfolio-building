import React, { Component } from 'react';

// This section contains the technologies I know in addition to a slight blurb about me and the education I have received at DigitalCrafts and UW

class About extends Component{


	render(){
		return(
			<div className="padding-none">
				<div className='col-xs-12'>
					<div className='col-xs-12 col-sm-3 col-md-2 personal-photo-div col-lg-3'>
						<img className='personal-photo' src='../../Images/professional-picture-of-me.jpeg'/>
					</div>

					<div className='col-xs-12 col-sm-9 col-md-10 col-lg-6 description-text'>
						My name is Rishi. I love to code and have a passion for finance. 
					</div>	

					<div className='col-xs-12 col-sm-9 col-md-10 col-lg-6 description-text-smaller margin-above padding-right-zero'>
					Prior to web development, I worked as an investment banking analyst (Technology & Services Group) for <a target="_blank" href='http://www.rwbaird.com/investment-banking/'>Baird.</a>
					</div>			
				</div>


				

				

				{/* Education content starts here */}
				<div className='col-xs-12 col-lg-6 margin-above center-text'>
					<hr className='heading-spacer-about-me'/>				
					
					<div className='about-me-header'>Education</div>
					
					<hr className='heading-spacer-about-me'/>				

					<div> <img className='about-me-company-photo margin-above' src='../../Images/digitalcrafts-logo-1200-new.png' height="80" width="200" /> </div>
					{/* Text for dc description */}
					<div> 
						<p> DigitalCrafts is a sixteen week, immersive, full-time accelerated learning program. The goal of the program is to prepare its students to be full-stack developers and software engineers upon graduation. There is a strong emphasis on efficient code design, version control, responsive applications, and analytical thinking. Learn more <a target="_blank" href='http://www.digitalcrafts.com/'>here</a>!</p>						
					</div>

					<div> <img className='about-me-company-photo margin-above' src='../../Images/university-of-wisco-logo.png' /> </div>
				{/* Text university of wisconsin description */}
					<p> I graduated from the University of Wisconsin-Madison with a B.B.A in Finance. Outside of the classroom, I spent time working as a teaching assistant, working at a local bar, and playing tennis on the club team. </p>

				</div>

				{/* Skills, tools and qualifications starts here starts here */}

				<div className='col-xs-12 col-lg-6 margin-above center-text'>
					<hr className='heading-spacer-about-me'/>				

					<div className='about-me-header'>Skills, Tools, Qualifications </div>	
					
					<hr className='heading-spacer-about-me'/>								

					<div className='col-xs-12 margin-above'> 

						<div className='col-xs-4'>

							<img className='skill-image' src='../../Images/Icons/html-logo.png' height="512" width="512" />
							<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><div>HTML5</div></a>
						</div>

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/css3.png' />
							<a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank"><div>CSS</div></a>

						</div>

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/Bootstrap.png'/>
							<a href="http://getbootstrap.com/" target="_blank"><div>Bootstrap</div></a>

						</div>

						
					</div>


					<div className='col-xs-12 margin-above'> 

						<div className='col-xs-4 skill-image-only-hover'><img className='skill-image' src='../../Images/Icons/Sass.png' />
							<a href="http://sass-lang.com/" target="_blank"><div>Sass</div></a>
						</div>

						<div className='col-xs-4'><img className='skill-image' src='../../Images/Icons/javascript-logo.png' />
							<a href="https://www.javascript.com/" target="_blank"><div>JavaScript</div></a>
						</div>

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/jquery.png' />
							<a href="https://jquery.com/" target="_blank"><div>jQuery</div></a>
						</div>						

					</div>	


					<div className='col-xs-12 margin-above'> 

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/React.png' />
							<a href='https://facebook.github.io/react/' target="_blank"><div>React.js</div></a>

						</div>

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/Redux.png' />
							<a href='https://github.com/reactjs/redux' target="_blank"><div>Redux.js</div></a>
						</div>							


						<div className='col-xs-4'>
							<img className='skill-image-only-hover' src='../../Images/Icons/nodejs.png' />
							<a href='https://nodejs.org/en/' target="_blank"><div>Node.js</div></a>
						</div>
						
					</div>	

					<div className='col-xs-12 margin-above'> 	

						<div className='col-xs-4'>
							<img className='skill-image-only-hover' src='../../Images/Icons/ExpressLogov2.png' height="34" width="90"/>
							<a href='http://expressjs.com/' target="_blank"><div>Express.js</div></a>
						</div>						

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/python.png' />
							<a href='https://www.python.org/' target="_blank"><div>Python</div></a>
						</div>

						<div className='col-xs-4'><img className='skill-image-only-hover' src='../../Images/Icons/MySQL.png'/>
							<a href='https://www.mysql.com/' target="_blank"><div>MySQL</div></a>
						</div>												

					</div>	

					<div className='col-xs-12 margin-above'> 	

						<div className='col-xs-4'><img className='skill-image-only-hover' src='../../Images/Icons/git.png' />
							<a href='https://git-scm.com//' target="_blank"><div>Git</div></a>
						</div>

						<div className='col-xs-4'>
							<img className='skill-image' src='../../Images/Icons/github.png' />
							<a href='https://github.com' target="_blank"><div>GitHub</div></a>
							
						</div>

						<div className='col-xs-4'>
							<img className='skill-image-only-hover' src='../../Images/Icons/sourceTree.png'/>
							<a href='https://www.sourcetreeapp.com/' target="_blank"><div>Source Tree</div></a>
						</div>

						
						
						
						<div>&nbsp;</div>
					</div>	

					<div className='col-xs-12 margin-above'> 

						<div className='col-xs-4'><img className='skill-image-only-hover' src='../../Images/Icons/microsoftExcel.png'/>
							<a href="https://en.wikipedia.org/wiki/Microsoft_Excel" target="_blank"><div>Excel / Financial Modeling</div></a>
						</div>							


						<div className='col-xs-4'><img className='skill-image-only-hover' src='../../Images/Icons/microsoftPowerPoint.png'/>
							<a href="https://en.wikipedia.org/wiki/Microsoft_PowerPoint" target="_blank"><div>PowerPoint</div></a>
						</div>


						<div className='col-xs-4'><img className='skill-image-only-hover' src='../../Images/Icons/capitalIQLogo.png' height="43" width="40"/>
							<a href="http://marketintelligence.spglobal.com/" target="_blank"><div>Capital IQ</div></a>
						</div>																																																						
						
						<div>&nbsp;</div>
					</div>	
					
						
						
					{/*template div - <div className='col-md-2'><img className='skill-image' src='../../public/Images/Icons/React.png' /></div>*/}
					
					
					
				</div>				
				
				

			</div>




		)
	}
}

export default About;


