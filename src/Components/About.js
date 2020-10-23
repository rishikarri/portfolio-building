import React, { Component } from "react";
import ContinuingEducation from "../ContinuingEducation/";

// This section contains the technologies I know in addition to a slight blurb about me and the education I have received at DigitalCrafts and UW

// add continuing education
//can put in udemy courses and Harvard CS 50 once you complete it

// Update Work Experience to have ThingTech and CNN on it in place of skills
//skills section - add JIRA, Immutable, Mocha / Chai, google maps api, material ui, C
class About extends Component {
	render() {
		return (
			<div className="padding-none">
				<div className="col-xs-12">
					<div className="col-xs-12 col-sm-3 col-md-2 personal-photo-div col-lg-3">
						<img className="personal-photo" src="../../Images/professional-picture-of-me.jpeg" />
					</div>

					<div className="col-xs-12 col-sm-9 col-md-10 col-lg-6 description-text">
						My name is Rishi. I love to code and have a passion for finance.
					</div>

					<div className="col-xs-12 col-sm-9 col-md-10 col-lg-6 description-text-smaller margin-above padding-right-zero">
						Prior to software development, I worked as an investment banking analyst (Technology & Services Group) for{" "}
						<a target="_blank" href="http://www.rwbaird.com/investment-banking/">
							Baird.
						</a>
					</div>
				</div>

				{/* Education content starts here */}
				<div className="col-xs-12 col-lg-6 margin-above center-text">
					<hr className="heading-spacer-about-me" />

					<div className="about-me-header">Education</div>

					<hr className="heading-spacer-about-me" />

					<div>
						{/*<div><ContinuingEducation /></div>*/}
						<ContinuingEducation />
					</div>

					<div>
						{" "}
						<img className="about-me-company-photo margin-above" src="../../Images/digitalcrafts-logo-1200-new.png" height="80" width="200" />{" "}
					</div>
					{/* Text for dc description */}
					<div>
						<p>
							{" "}
							DigitalCrafts is a sixteen week, immersive, full-time accelerated learning program. The goal of the program is to prepare its
							students to be full-stack developers and software engineers upon graduation. There is a strong emphasis on efficient code design,
							version control, responsive applications, and analytical thinking. Learn more{" "}
							<a target="_blank" href="http://www.digitalcrafts.com/">
								here
							</a>
							!
						</p>
					</div>

					<div>
						{" "}
						<img className="about-me-company-photo margin-above" src="../../Images/university-of-wisco-logo.png" />{" "}
					</div>
					{/* Text university of wisconsin description */}
					<p>
						{" "}
						I graduated from the University of Wisconsin-Madison with a B.B.A in Finance. Outside of the classroom, I spent time working as a
						teaching assistant, working at a local bar, and playing tennis on the club team.{" "}
					</p>
				</div>

				{/* Skills, tools and qualifications starts here starts here */}

				<div className="col-xs-12 col-lg-6 margin-above center-text">
					<hr className="heading-spacer-about-me" />

					<div className="about-me-header">Work Experience </div>

					<hr className="heading-spacer-about-me" />

					<div className="col-xs-12 margin-above">
						<div>&nbsp;</div>
					</div>

					<div className="work-block">
						<div>
							<img
								className="work-logo"
								height={120}
								src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/CNN.png"
							/>
						</div>
						<p className="time-worked"> Software Developer</p>
						<p className="time-worked"> 04/2018 - Present</p>
					</div>

					<div className="work-block">
						<div>
							<img
								className="work-logo-thingtech"
								height={220}
								src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1502287437/cfrkoc1jfpaukcoaie3q.png"
							/>
						</div>
						<p className="time-worked-thingtech"> Software Developer</p>
						<p className="time-worked"> 05/2017 - 02/2018</p>
					</div>

					<div className="work-block">
						<div>
							<img
								className="work-logo-baird"
								height={220}
								src="https://content.rwbaird.com/RWB/HTML/GIB_DA/images/BairdLogo.png"
							/>
						</div>
						<p className="time-worked-thingtech"> Investment Banking Analyst</p>
						<p className="time-worked"> 07/2015 - 09/2016</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
