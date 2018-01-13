import React, { Component } from 'react';

// add hrimagination.life to this

class Project extends Component{


	render(){
		return(
			<div>
				<div className='row kill-margin'>

					<div className='col-xs-12 col-sm-5 col-sm-offset-1'>
						

						<div id='atlanta-vibes-div' className='section-heading project-image-div'>
							<h2>AtlantaVibes</h2>
							<p>AtlantaVibes is a full-stack application that aggregates data from the top music festivals, in Atlanta, into one easy to use website. AtlantaVibes lets users view, rate and comment on their favorite festivals in Atlanta.</p>
							<p> HTML & CSS, Bootstrap, Sass, Javascript, jQuery, React.js, Redux, Node.js, Express.js, MySql, AWS</p>
							{/*Link to youtube video */}
							<div className='repo-demo-links'>
								<a className='margin-right' target="_blank" href='https://www.youtube.com/watch?v=u4IcZspgeHc&feature=youtu.be'><button className='btn btn-primary'> Demo </button></a>
								<a target="_blank" href='https://github.com/rishikarri/AtlantaVibes'><button className='btn btn-primary'>Repository</button></a>
							</div>
						</div>
					</div>

					<div className='col-xs-12 col-sm-5'>						
						<img className='project-image margin-above' src='../../Images/Projects-Page/AtlantaVibesHomePage.png' />
					</div>


				</div>

				<div className='col-xs-12 col-sm-10 col-sm-offset-1 spacerDivBetweenProjectImages'> </div>
				<div className='row kill-margin margin-above-heavy'>

					<div className='col-xs-12 hide-word-worm col-sm-5 col-sm-offset-0'>
						<img className='project-image-word-worm margin-above' src='../../Images/Projects-Page/BookWorm.png' />
					</div>

					<div className='col-xs-12 col-sm-5 col-sm-offset-1 project-image-div'>																	

						<div className='section-heading'>
							<h2>WordWorms</h2>

							<p>A word learning app. Users are able to take vocabulary quizzes, look up words, and much more!</p>
							<p> HTML & CSS, Bootstrap, React.js & React-Router, JavaScript (ES-6), jQuery</p>

							<div className='repo-demo-links'>
								<a className='margin-right' target="_blank" href='https://www.youtube.com/watch?v=uQAFY4libg8&feature=youtu.be'><button className='btn btn-primary'> Demo </button></a>
								<a target="_blank" href='https://github.com/CaseyTM/WordWorms'><button className='btn btn-primary'>Repository</button></a>
							</div>							
						</div>						
					</div>

					
					

					<div className='col-xs-12 show-word-worm col-sm-5 col-sm-offset-1'>
						<img className='project-image-word-worm margin-above' src='../../Images/Projects-Page/BookWorm.png' />
					</div>


				</div>
			{/*spacerdiv is what puts that nice clean line between projects */}
				<div className='col-xs-12 col-sm-10 col-sm-offset-1 spacerDivBetweenProjectImages'> </div>
				<div className='row kill-margin margin-above-heavy'>

					<div className='col-xs-12 col-sm-5 col-sm-offset-1'>
						

						<div className='section-heading  project-image-div'>
							<h2>Village Savior</h2>
							<p>Monsters and thieves are about to attack your village. Stave them off as long as you can in order to give the villagers time to escape! Be very careful! If your health falls to 0, you must retreat!</p>
							<p> HTML & CSS, JavaScript (code is intentionally written without frameworks)</p>
							{/*Link to youtube video */}
							<div className='repo-demo-links'>
								<a className='margin-right' target="_blank" href='https://www.youtube.com/watch?v=kVRCTKB7NRo&feature=youtu.be'><button className='btn btn-primary'> Demo </button></a>
								<a target="_blank" href='https://github.com/rishikarri/village-savior'><button className='btn btn-primary'>Repository</button></a>
							</div>
						</div>
					</div>

					<div className='col-xs-12 col-sm-5'>						
						<img className='project-image margin-above' src='../../Images/Projects-Page/survivor-screenshot.png' />
					</div>


				</div>
				{/*HR imagination*/}
				<div className='col-xs-12 col-sm-10 col-sm-offset-1 spacerDivBetweenProjectImages'> </div>
				<div className='row kill-margin margin-above-heavy'>

					<div className='col-xs-12 col-sm-5 col-sm-offset-1'>
						

						<div className='section-heading  project-image-div'>
							<h2>Village Savior</h2>
							<p>Monsters and thieves are about to attack your village. Stave them off as long as you can in order to give the villagers time to escape! Be very careful! If your health falls to 0, you must retreat!</p>
							<p> HTML & CSS, JavaScript (code is intentionally written without frameworks)</p>
							{/*Link to youtube video */}
							<div className='repo-demo-links'>
								<a className='margin-right' target="_blank" href='https://www.youtube.com/watch?v=kVRCTKB7NRo&feature=youtu.be'><button className='btn btn-primary'> Demo </button></a>
								<a target="_blank" href='https://github.com/rishikarri/village-savior'><button className='btn btn-primary'>Repository</button></a>
							</div>
						</div>
					</div>

					<div className='col-xs-12 col-sm-5'>						
						<img className='project-image margin-above' src='../../Images/Projects-Page/survivor-screenshot.png' />
					</div>


				</div>


			</div>
		)
	}
}

export default Project;

// <div className='col-xs-12 text-center weakest-beast-text margin-above'>Please note: these projects are stil under construction!</div>