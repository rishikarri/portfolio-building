import React, { Component } from 'react';
// This section holds my interests in addition to whatever i'm reading at the moment 
// Interests have a spin attached to them - reading section has author, date completed, book and link to goodreads

// need to add reluctant fundamentalist to list


class Interests extends Component{

	

	render(){
		var gandhiQuote = '“Live as if you were to die tomorrow. Learn as if you were to live forever.” —Gandhi';
		var whatIamReading = "What I'm reading"
		return(
			<div className="padding-none col-xs-12">
				<div className='col-xs-12'>			
					<div className="row kill-margin">
						{/*header section*/}
						<div className="row kill-margin">				
						
							<div className="col-xs-12 description-text"> 

								{gandhiQuote}
							</div>
						</div>

						{/*Body section*/}
						<div className="row kill-margin">
					{/* Use same header styling as about me section */}
							<hr className='heading-spacer-about-me'/>				

							<div className='about-me-header'> 
								My Interests
							</div>

							<hr className='heading-spacer-about-me'/>				
							
							<div className='col-xs-12 center-text padding-none'> 
								<table className='margin-above middle-of-div'>

									<tbody>

										<tr className='tallest-table-rows'>
											<td className='data-entry'><img className='interests-image' src='../../Images/Interests/tennis-ball.png' /> <div>Tennis</div></td>
											<td className='spacer-column data-entry'>&nbsp;</td>										
											<td className='data-entry'><img className='interests-image' src='../../Images/Interests/spanish-language-clipart.jpg' /> <div>Spanish</div></td>
										</tr>

										<tr className='tallest-table-rows'>
											<td className='data-entry'><img className='interests-image' src='../../Images/Interests/guitar-clipart.gif'/> <div>Guitar</div></td>
											<td className='data-entry'>&nbsp;</td>										
											<td className='data-entry'><img className='interests-image' src='../../Images/Interests/ukulele-icon.png' /> <div>Ukulele</div></td>
										</tr>	

										<tr className='tallest-table-rows'>
											<td className='data-entry'><img className='interests-image' src='../../Images/Interests/reading-clipart.png' /> <div>Reading</div></td>
											<td className='data-entry'>&nbsp;</td>										
											<td className='data-entry'><img className='interests-image' src='../../Images/Interests/running-clipart.png' /> <div>Running</div></td>
										</tr>

										<tr className='tallest-table-rows'>
											<td className='data-entry'><img className='interests-image' src='../../Images/Interests/teaching-clipart.png' /> <div>Teaching</div></td>
											<td className='data-entry'>&nbsp;</td>										
											<td className='data-entry'><img className='interests-image' src='../../Images/Interests/plane-clipart.png'/> <div>Traveling</div></td>
										</tr>																						
									</tbody>
								</table>
							</div>						
						</div>		

						<div className="row kill-margin">
							<hr className='heading-spacer-about-me'/>				

							<div className='about-me-header'> 
								{whatIamReading}
							</div>

							<hr className='heading-spacer-about-me'/>				

							<div className='col-xs-12 center-text padding-none contain-table'> 
								<table className='margin-above middle-of-div'>
									<thead>
										<tr className='taller-table-rows'>
											<td className='title-or-date'>Book Title:</td>										
											<td className='title-or-date'>Author:</td>
											<td className='title-or-date'>Completed:</td>
										</tr>
									</thead>

									<tbody>
										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/28389305-the-other-einstein' target="_blank">The Other Einstein</a></td>
											<td className='data-entry'>Marie Benedict</td>										
											<td className='data-entry'>Currently Reading</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/27161189-united-as-one' target="_blank">United as One</a></td>
											<td className='data-entry'>Pittacus Lore</td>										
											<td className='data-entry'>7/28/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/24488476-the-fate-of-ten' target="_blank">The Fate of Ten</a></td>
											<td className='data-entry'>Pittacus Lore</td>										
											<td className='data-entry'>7/17/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/43015.A_Long_Way_Gone' target="_blank">A Long Way Gone</a></td>
											<td className='data-entry'>Ishmael Beah</td>										
											<td className='data-entry'>6/26/2017</td>										
										</tr>


										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/136251.Harry_Potter_and_the_Deathly_Hallows' target="_blank">Harry Potter and the Deathly Hallows</a></td>
											<td className='data-entry'>J.K. Rowling</td>										
											<td className='data-entry'>6/18/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/3636.The_Giver' target="_blank">The Giver</a></td>
											<td className='data-entry'>Lois Lowry</td>										
											<td className='data-entry'>5/20/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/30117284-carve-the-mark?from_search=true' target="_blank">Carve the Mark</a></td>
											<td className='data-entry'>Veronica Roth</td>										
											<td className='data-entry'>5/11/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/12030438-the-start-up-of-you' target="_blank">The Start-Up of You</a></td>
											<td className='data-entry'>Reid Hoffman & Ben Casnocha</td>										
											<td className='data-entry'>5/2/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/1.Harry_Potter_and_the_Half_Blood_Prince?ac=1&from_search=true' target="_blank">Harry Potter and the Half-Blood Prince</a></td>
											<td className='data-entry'>J.K. Rowling</td>										
											<td className='data-entry'>4/27/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/42547.The_Autobiography_of_Martin_Luther_King_Jr_' target="_blank">The Autobiography of Martin Luther King Jr.</a></td>
											<td className='data-entry'>Martin Luther King Jr.</td>										
											<td className='data-entry'>4/21/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/9415942-now-is-the-time-for-running' target="_blank">Now is the Time for Running</a></td>
											<td className='data-entry'>Michael Williams</td>										
											<td className='data-entry'>4/6/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/2.Harry_Potter_and_the_Order_of_the_Phoenix' target="_blank">Harry Potter and the Order of the Phoenix</a></td>
											<td className='data-entry'>J.K. Rowling</td>										
											<td className='data-entry'>3/31/2017</td>										
										</tr>


										
										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/11387515-wonder' target="_blank">Wonder</a></td>
											<td className='data-entry'>R.J. Palacio</td>										
											<td className='data-entry'>3/18/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/4214.Life_of_Pi' target="_blank">Life of Pi</a></td>
											<td className='data-entry'>Yann Martel</td>										
											<td className='data-entry'>3/13/2017</td>										
										</tr>

										<tr className='taller-table-rows'>
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/20839546-diamond-boy?from_search=true' target="_blank">Diamond Boy</a></td>
											<td className='data-entry'>Michael Williams</td>										
											<td className='data-entry'>2/26/2017</td>										
										</tr>
										

										<tr className='taller-table-rows'>
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/22557272-the-girl-on-the-train?ac=1&from_search=true' target="_blank">The Girl on the Train</a></td>											
											<td className='data-entry'>Paula Hawkins</td>																				
											<td className='data-entry'>2/19/2017</td>										
										</tr>

										<tr className='taller-table-rows'>										
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/128029.A_Thousand_Splendid_Suns?ac=1&from_search=true' target="_blank">A Thousand Splendid Suns</a></td>											
											<td className='data-entry'>Khaled Hosseini</td>																				
											<td className='data-entry'>1/28/2017</td>										
										</tr>

										<tr className='taller-table-rows'>										
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/30655.8_Minute_Meditation?ac=1&from_search=true' target="_blank">8 Minute Meditation</a></td>																						
											<td className='data-entry'>Victor Davich</td>																				
											<td className='data-entry'>1/8/2017</td>										
										</tr>		

										<tr className='taller-table-rows'>										
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/13489835-everburn' target="_blank">Everburn</a></td>
											<td className='data-entry'>Robert Bunch</td>																																								
											<td className='data-entry'>1/3/2017</td>										
										</tr>		

										<tr className='taller-table-rows'>
										
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/16115612-and-the-mountains-echoed?from_search=true' target="_blank">And the Mountains Echoed</a></td>											
											<td className='data-entry'>Khaled Hosseini</td>																																								
											<td className='data-entry'>11/20/2016</td>										
										</tr>	

										<tr className='taller-table-rows'>
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/8341335-learn-python-the-hard-way' target="_blank">Learn Python the Hard Way</a></td>																						
											<td className='data-entry'>Zed Shaw</td>																																																											
											<td className='data-entry'>11/19/2016</td>										
										</tr>
	

										<tr className='taller-table-rows'>
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/19319366-a-smarter-way-to-learn-javascript?from_search=true' target="_blank">A Smarter Way to Learn JavaScript</a></td>																						
											<td className='data-entry'>Mark Myers</td>																																																											
											<td className='data-entry'>11/3/2016</td>										
										</tr>


										<tr className='taller-table-rows'>
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/16256798-the-one-thing?from_search=true' target="_blank">The One Thing</a></td>																						
											<td className='data-entry'>Gary W. Keller & Jay Papasan</td>																																																											
											<td className='data-entry'>10/25/2016</td>										
										</tr>

										<tr className='taller-table-rows'>
											<td className='data-entry'><a href='http://www.goodreads.com/book/show/25137361-a-smarter-way-to-learn-html-css' target="_blank">A Smarter Way to Learn HTML & CSS</a></td>																						
											<td className='data-entry'>Mark Myers</td>																																																											
											<td className='data-entry'>10/13/2016</td>										
										</tr>

									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Interests;


										// <tr className='taller-table-rows'>					
										// 	<td className='data-entry'><a href='http://www.goodreads.com/book/show/31823677-tools-of-titans' target="_blank">Tools of Titans</a></td>
										// 	<td className='data-entry'>Timothy Ferriss</td>										
										// 	<td className='data-entry'>Currently Reading</td>										
										// </tr>