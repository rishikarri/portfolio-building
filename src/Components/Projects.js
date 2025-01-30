import React, { Component } from "react";

// add hrimagination.life to this

class Project extends Component {
	render() {
		return (
			<div>
				

				
				{/*spacerdiv is what puts that nice clean line between projects */}
				<div className="row kill-margin margin-above-heavy">
					<div className="col-xs-12 col-sm-5 col-sm-offset-1">
						<div className="section-heading  project-image-div">
							<h2>Village Savior</h2>
							<p>
								You're the shield.  Monsters and thieves are closing in.  Buy the villagers time.  Fight until you can't.  Then, and only then, retreat.
							</p>
							<div className="spacer-line" /> 
							<p><strong>Tech</strong></p>
							<p> HTML & CSS, JavaScript</p>
							<p> AWS S3 and Route 53 for deployment</p>
							<div className="spacer-line" /> 
							<p><strong>Demo</strong></p>
							<p> Demo can be played on desktop computer (doesn't work on phones)</p>

							<p> Note: I'm working on getting an SSL certificate right now via AWS (ACM). So you have to access the demo via http request (https won't work)</p>
							{/*Link to youtube video */}
							<div className="repo-demo-links">
								<a className="margin-right" target="_blank" href="http://village-savior.s3-website-us-east-1.amazonaws.com/">
									<button className="btn btn-primary"> Demo</button>
								</a>
								<a target="_blank" href="https://github.com/rishikarri/village-savior">
									<button className="btn btn-primary">Code Repository</button>
								</a>
							</div>
						</div>
					</div>

					<div className="col-xs-12 col-sm-5">
						<img className="project-image margin-above" src="../../Images/Projects-Page/survivor-screenshot.png" />
					</div>
				</div>

				<div className="col-xs-12 col-sm-10 col-sm-offset-1 spacerDivBetweenProjectImages"> </div>
				<div className="row kill-margin margin-above-heavy">
					<div className="col-xs-12 hide-word-worm col-sm-5 col-sm-offset-0">
						<img className="project-image-album-cover" src="../../Images/circa-17-3Kx3K.jpg" />
					</div>

					<div className="col-xs-12 col-sm-5 col-sm-offset-1 project-image-div">
						<div className="section-heading">
							<h2>
								<a target="_blank" href="https://open.spotify.com/artist/5ad9XwiyzNIZJ1JuY8uNAm">
									CIRCA 17
								</a>
							</h2>

							<p>
								I enjoy transmuting soul to sound. My undergrad roommate and I have several songs on Spotify. My current favorites are <strong>"Ordinary Bench"</strong> and <strong>"Art Therapy"</strong>.
							</p>

							{/* <div className='repo-demo-links'>
								<a className='margin-right' target="_blank" href='http://www.hrimagination.com/'><button className='btn btn-primary'> Website </button></a>
								<a target="_blank" href='https://github.com/rishikarri/hr-imagination-website-'><button className='btn btn-primary'>Repository</button></a>
							</div> */}
						</div>
					</div>

					{/* <div className='col-xs-12 show-word-worm col-sm-5 col-sm-offset-1'>
						<img className='project-image margin-above' src='../../Images/circa-17-3Kx3K.jpg' />
					</div> */}
				</div>
			</div>
		);
	}
}

export default Project;

// <div className='col-xs-12 text-center weakest-beast-text margin-above'>Please note: these projects are stil under construction!</div>
