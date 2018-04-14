import React, { Component } from 'react';
// This section holds my interests in addition to whatever i'm reading at the moment 

const generateReadingEntry = (title, author, urlToUse, dateCompleted) => (
	<tr className='taller-table-rows'>					
		<td className='data-entry'><a href={urlToUse} target="_blank">{title}</a></td>
		<td className='data-entry'>{author}</td>										
		<td className='data-entry'>{dateCompleted}</td>										
	</tr>
)

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
										
										{generateReadingEntry('The Tender Bar', 'J.R. Moehringer', 'https://www.goodreads.com/book/show/144977.The_Tender_Bar', 'Currently Reading')}
										{generateReadingEntry('Be Yourself, Everyone Else Is Already Taken', 'Mike Robbins', 'https://www.goodreads.com/book/show/6380353-be-yourself-everyone-else-is-already-taken', 'Currently Reading')}
										{generateReadingEntry('Purple Hibiscus', 'Chimamanda Ngozi Adichie', 'https://www.goodreads.com/book/show/126381.Purple_Hibiscus', 'Currently Reading')}
										{generateReadingEntry("The Hitchhiker's Guide to the Galaxy", 'Douglas Adams ', 'https://www.goodreads.com/book/show/386162.The_Hitchhiker_s_Guide_to_the_Galaxy', '4/05/2018')}
										{generateReadingEntry('Astrophysics for People in a Hurry', 'Neil deGrasse Tyson ', 'https://www.goodreads.com/book/show/32191710-astrophysics-for-people-in-a-hurry?ac=1&from_search=true', '3/25/2018')}
										{generateReadingEntry('Fight Club', 'Chuck Palahniuk', 'https://www.goodreads.com/book/show/5759.Fight_Club', '3/15/2018')}																																																																										
										{generateReadingEntry('Practicing the Power of Now', 'Eckhart Tolle', 'https://www.goodreads.com/book/show/6709.Practicing_the_Power_of_Now', '3/5/2018')}																				
										{generateReadingEntry('A Clockwork Orange', 'Anthony Burgess', 'https://www.goodreads.com/book/show/227463.A_Clockwork_Orange', '2/28/2018')}																				

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/890.Of_Mice_and_Men' target="_blank">Of Mice and Men</a></td>
											<td className='data-entry'>John Steinbeck</td>										
											<td className='data-entry'>2/18/2018</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/18693763-everything-i-never-told-you' target="_blank">Everything I Never Told You</a></td>
											<td className='data-entry'>Celeste Ng</td>										
											<td className='data-entry'>2/13/2018</td>										
										</tr>				

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/11337.The_Bluest_Eye' target="_blank">The Bluest Eye</a></td>
											<td className='data-entry'>Toni Morrison</td>										
											<td className='data-entry'>2/7/2018</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/22738563-we-should-all-be-feminists' target="_blank">We Should All Be Feminists</a></td>
											<td className='data-entry'>Chimamanda Ngozi Adichie</td>										
											<td className='data-entry'>2/4/2018</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/6480781-open' target="_blank">Open</a></td>
											<td className='data-entry'>Andre Agassi, J.R. Moehringer</td>										
											<td className='data-entry'>1/31/2018</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/2165.The_Old_Man_and_the_Sea' target="_blank">The Old Man and the Sea</a></td>
											<td className='data-entry'>Ernest Hemingway</td>										
											<td className='data-entry'>1/14/2018</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/13259960-the-smartest-kids-in-the-world' target="_blank">The Smartest Kids in the World</a></td>
											<td className='data-entry'>Amanda Ripley</td>										
											<td className='data-entry'>1/9/2018</td>										
										</tr>										

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/35259724-behold-the-dreamers' target="_blank">Behold the Dreamers</a></td>
											<td className='data-entry'>Imbolo Mbue</td>										
											<td className='data-entry'>12/30/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/27220736-shoe-dog' target="_blank">Shoe Dog</a></td>
											<td className='data-entry'>Phil Knight</td>										
											<td className='data-entry'>12/26/17</td>										
										</tr>	

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/6708.The_Power_of_Now' target="_blank">The Power of Now</a></td>
											<td className='data-entry'>Eckhart Tolle</td>										
											<td className='data-entry'>12/14/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/7445.The_Glass_Castle' target="_blank">The Glass Castle</a></td>
											<td className='data-entry'>Jeannette Walls</td>										
											<td className='data-entry'>12/3/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/15815364-how-to-get-filthy-rich-in-rising-asia' target="_blank">How to Get Filthy Rich in Rising Asia</a></td>
											<td className='data-entry'>Mohsin Hamid</td>										
											<td className='data-entry'>11/13/2017</td>										
										</tr>


										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/23453112-modern-romance' target="_blank">Modern Romance</a></td>
											<td className='data-entry'>Aziz Ansari, Eric Klinenberg</td>										
											<td className='data-entry'>11/8/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/865.The_Alchemist' target="_blank">The Alchemist</a></td>
											<td className='data-entry'>Paulo Coelho</td>										
											<td className='data-entry'>10/19/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/34273236-little-fires-everywhere' target="_blank">Little Fires Everywhere</a></td>
											<td className='data-entry'>Celeste Ng</td>										
											<td className='data-entry'>10/9/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/29496453-the-book-of-joy' target="_blank">The Book of Joy</a></td>
											<td className='data-entry'>Dalai Lama XIV, Desmond Tutu, Douglas Carlton Abrams</td>										
											<td className='data-entry'>9/30/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/440777.Moth_Smoke' target="_blank">Moth Smoke</a></td>
											<td className='data-entry'>Mohsin Hamid</td>										
											<td className='data-entry'>8/31/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/88815.The_Reluctant_Fundamentalist' target="_blank">The Reluctant Fundamentalist</a></td>
											<td className='data-entry'>Mohsin Hamid</td>										
											<td className='data-entry'>8/19/2017</td>										
										</tr>

										<tr className='taller-table-rows'>					
											<td className='data-entry'><a href='https://www.goodreads.com/book/show/28389305-the-other-einstein' target="_blank">The Other Einstein</a></td>
											<td className='data-entry'>Marie Benedict</td>										
											<td className='data-entry'>8/12/2017</td>										
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


									