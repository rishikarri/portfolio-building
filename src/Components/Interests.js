import React, { Component } from "react";
// This section holds my interests in addition to whatever i'm reading at the moment

const generateReadingEntry = (title, author, urlToUse, dateCompleted) => (
	<tr className="taller-table-rows">
		<td className="data-entry">
			<a href={urlToUse} target="_blank">
				{title}
			</a>
		</td>
		<td className="data-entry">{author}</td>
		<td className="data-entry">{dateCompleted}</td>
	</tr>
);

class Interests extends Component {
	render() {
		var quote = '"An investment in knowledge pays the best interest." - Benjamin Franklin';
		var whatIamReading = "What I'm Reading";
		return (
			<div className="padding-none col-xs-12">
				<div className="col-xs-12">
					<div className="row kill-margin">
						{/*header section*/}
						<div className="row kill-margin">
							<div className="col-xs-12 description-text">{quote}</div>
						</div>

						{/*Body section*/}
						<div className="row kill-margin">
							{/* Use same header styling as about me section */}
							<hr className="heading-spacer-about-me" />

							<div className="about-me-header">My Interests</div>

							<hr className="heading-spacer-about-me" />

							<div className="col-xs-12 center-text padding-none">
								<table className="margin-above middle-of-div">
									<tbody>
										<tr className="tallest-table-rows">
											<td className="data-entry">
												<img className="interests-image" src="../../Images/Interests/tennis-ball.png" /> <div>Tennis</div>
											</td>
											<td className="spacer-column data-entry">&nbsp;</td>
											<td className="data-entry">
												<img className="interests-image" src="../../Images/Interests/spanish-language-clipart.jpg" /> <div>Spanish</div>
											</td>
										</tr>

										<tr className="tallest-table-rows">
											<td className="data-entry">
												<img className="interests-image" src="../../Images/Interests/guitar-clipart.gif" /> <div>Guitar</div>
											</td>
											<td className="data-entry">&nbsp;</td>
											<td className="data-entry">
												<img className="interests-image" src="../../Images/Interests/ukulele-icon.png" /> <div>Ukulele</div>
											</td>
										</tr>

										<tr className="tallest-table-rows">
											<td className="data-entry">
												<img className="interests-image" src="../../Images/Interests/reading-clipart.png" /> <div>Reading</div>
											</td>
											<td className="data-entry">&nbsp;</td>
											<td className="data-entry">
												<img className="interests-image" src="../../Images/Interests/running-clipart.png" /> <div>Running</div>
											</td>
										</tr>

										<tr className="tallest-table-rows">
											<td className="data-entry">
												<img className="interests-image" src="../../Images/Interests/tree_clipart.jpeg" /> <div>Environmental Aid</div>
											</td>
											<td className="data-entry">&nbsp;</td>
											<td className="data-entry">
												<img className="interests-image" src="../../Images/Interests/plane-clipart.png" /> <div>Traveling</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className="row kill-margin">
							<hr className="heading-spacer-about-me" />

							<div className="about-me-header">{whatIamReading}</div>

							<hr className="heading-spacer-about-me" />

							<div className="col-xs-12 center-text padding-none contain-table">
								<table className="margin-above middle-of-div">
									<thead>
										<tr className="taller-table-rows">
											<td className="title-or-date">Book Title</td>
											<td className="title-or-date">Author</td>
											<td className="title-or-date">Year Read / Listened to</td>
										</tr>
									</thead>

									<tbody>
									{generateReadingEntry( 
											"The Stranger in the Lifeboat",
											"Mitch Albom",
											"https://www.goodreads.com/book/show/56922594-the-stranger-in-the-lifeboat",
											2025)}
									<tr className="year-divider">&nbsp;</tr>
									<tr className="year-divider">&nbsp;</tr>
									{generateReadingEntry( 
											"Canyons",
											"Gary Paulsen",
											"https://www.goodreads.com/book/show/52549.Canyons",
											2024)}
									{generateReadingEntry( 
											"The Pathless Path",
											"Paul Millerd",
											"https://www.goodreads.com/book/show/60135094-the-pathless-path",
											2024)}
									{generateReadingEntry( 
											"Tuesdays With Morrie",
											"Mitch Albom",
											"https://www.goodreads.com/en/book/show/6900",
											2024)}
									{generateReadingEntry( 
											"Die With Zero",
											"Bill Perkins",
											"https://www.goodreads.com/en/book/show/52950915",
											2024)}
										{generateReadingEntry( 
											"8 Rules of Love",
											"Jay Shetty",
											"https://www.goodreads.com/en/book/show/62634115",
											2024)}
										<tr className="year-divider">&nbsp;</tr>
										<tr className="year-divider">&nbsp;</tr>
										{generateReadingEntry( 
											"The Ballad of Songbirds and Snakes",
											"Suzanne Collins",
											"https://www.goodreads.com/en/book/show/51901147",
											2023)}
										{generateReadingEntry( 
											"Digital Millionaire Secrets",
											"Dan Henry",
											"https://www.goodreads.com/en/book/show/54709435",
											2023)}
										{generateReadingEntry( 
											"The Surrender Experiment",
											"Michael A. Singer",
											"https://www.goodreads.com/en/book/show/23164946",
											2023)}
										{generateReadingEntry( 
											"The 10X Rule",
											"Grant Cardone",
											"https://www.goodreads.com/book/show/10339170-the-10x-rule",
											2023)}
										{generateReadingEntry( 
											"The Untethered Soul",
											"Michael A. Singer",
											"https://www.goodreads.com/book/show/1963638.The_Untethered_Soul",
											2023)}										
										{generateReadingEntry( 
											"The Magic of Thinking Big",
											"David J. Schwartz",
											"https://www.goodreads.com/en/book/show/759945",
											2023)}
										{generateReadingEntry( 
											"The Almanack of Naval Ravikant",
											"Eric Jorgenson",
											"https://www.goodreads.com/en/book/show/54898389",
											2023)}
										{generateReadingEntry( 
											"The Psychology of Money",
											"Morgan Housel",
											"https://www.goodreads.com/en/book/show/41881472",
											2023)}
										{generateReadingEntry( 
											"Turning the Mind Into an Ally",
											"Sakyong Mipham",
											"https://www.goodreads.com/fa/book/show/281184",
											2023)}
										{generateReadingEntry( 
											"The Code of the Extraordinary Mind",
											"Vishen Lakhiani",
											"https://www.goodreads.com/en/book/show/26114571",
											2023)}
											
									{generateReadingEntry( 
											"Tomorrow, and Tomorrow, and Tomorrow",
											"Gabrielle Zevin",
											"https://www.goodreads.com/en/book/show/58784475",
											2023)}

									{generateReadingEntry( 
											"Hyperfocus",
											"Chris Bailey",
											"https://www.goodreads.com/en/book/show/36959766",
											2023)}

									{generateReadingEntry( 
											"Breaking The Habit of Being Yourself",
											"Joe Dispenza",
											"https://www.goodreads.com/en/book/show/12951631",
											2023)}
											
									{generateReadingEntry( 
											"Limitless",
											"Jim Kwik",
											"https://www.goodreads.com/en/book/show/49994260",
											2023)}
									{generateReadingEntry(
											"Dune",
											"Frank Herbert",
											"https://www.goodreads.com/book/show/44767458-dune",
											2023)}
									{generateReadingEntry(
											"Becoming Supernatural",
											"Joe Dispenza",
											"https://www.goodreads.com/book/show/35852435-becoming-supernatural",
											2023)}
										<tr className="year-divider">&nbsp;</tr>
										<tr className="year-divider">&nbsp;</tr>
									{generateReadingEntry(
											"The Inner Game of Tennis",
											"Timothy Gallwey",
											"https://www.goodreads.com/book/show/905.The_Inner_Game_of_Tennis",
											2022)}
									{generateReadingEntry(
											"Bigger Leaner Stronger",
											"Michael Matthews",
											"https://www.goodreads.com/book/show/25049103-bigger-leaner-stronger",
											2022)}
										{generateReadingEntry(
											"The Little Black Book of Workout Motivation",
											"Michael Matthews",
											"https://www.goodreads.com/en/book/show/40801835-the-little-black-book-of-workout-motivation",
											2022)}
										{generateReadingEntry(
											"Ishmael",
											"Daniel Quinn",
											"https://www.goodreads.com/book/show/40611328-ishmael",
											2022)}
										{generateReadingEntry(
											"The Seven Spiritual Laws of Success",
											"Deepak Chopra",
											"https://www.goodreads.com/book/show/773038.The_Seven_Spiritual_Laws_of_Success",
											2022
										)}
										{generateReadingEntry(
											"Rich Dad, Poor Dad",
											"Robert T. Kiyosaki",
											"https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad",
											2022
										)}
										
										{generateReadingEntry(
											"Secrets of the Millionaire Mind",
											"T. Harv Eker",
											"https://www.goodreads.com/book/show/785092.Secrets_of_the_Millionaire_Mind",
											2022
										)}
										{generateReadingEntry(
											"The Miracle Morning",
											"Hal Elrod",
											"https://www.goodreads.com/book/show/17166225-the-miracle-morning",
											2022
										)}
										{generateReadingEntry(
											"Total Meditation",
											"Deepak Chopra",
											"https://www.goodreads.com/en/book/show/50482970-total-meditation",
											2022
										)}
										<tr className="year-divider">&nbsp;</tr>
										<tr className="year-divider">&nbsp;</tr>
										{generateReadingEntry(
											"Morning Star",
											"Pierce Brown",
											"https://www.goodreads.com/book/show/18966806-morning-star",
											2021
										)}
										{generateReadingEntry(
											"The Richest Man in Babylon",
											"George S. Clason",
											"https://www.goodreads.com/book/show/1052.The_Richest_Man_in_Babylon",
											2021
										)}
										{generateReadingEntry(
											"The Fifth Season",
											"N.K. Jemisin",
											"https://www.goodreads.com/book/show/19161852-the-fifth-season",
											2021
										)}
										{generateReadingEntry(
											"Golden Son",
											"Pierce Brown",
											"https://www.goodreads.com/book/show/18966819-golden-son",
											2021
										)}
										{generateReadingEntry(
											"Red Rising",
											"Pierce Brown",
											"https://www.goodreads.com/book/show/15839976-red-rising",
											2021
										)}
										{generateReadingEntry(
											"Super Quitter",
											"Rachele Voigt",
											"https://www.goodreads.com/book/show/58513543-super-quitter",
											2021
										)}
										{generateReadingEntry(
											"The Wise Man's Fear",
											"Patrick Rothfuss",
											"https://www.goodreads.com/book/show/1215032.The_Wise_Man_s_Fear",
											2021
										)}
										{generateReadingEntry(
											"Why We Sleep",
											"Matthew Walker",
											"https://www.goodreads.com/book/show/34466963-why-we-sleep",
											2021
										)}
										{generateReadingEntry(
											"Make Today Count",
											"John C. Maxwell",
											"https://www.goodreads.com/book/show/2735207-make-today-count",
											2021
										)}
										{generateReadingEntry(
											"Waking Up",
											"Sam Harris",
											"https://www.goodreads.com/book/show/18774981-waking-up",
											2021
										)}

										{generateReadingEntry(
											"177 Mental Toughness Secrets of the World Class",
											"Steve Siebold",
											"https://www.goodreads.com/book/show/2297678.177_Mental_Toughness_Secrets_of_the_World_Class",
											2021
										)}
										{generateReadingEntry(
											"#MAXOUT Your Life",
											"Ed Mylett",
											"https://www.goodreads.com/en/book/show/41557396-maxout-your-life",
											2021
										)}
										{generateReadingEntry(
											"Man's Search for Meaning",
											"Viktor E. Frankl",
											"https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning",
											2021
										)}
										{generateReadingEntry(
											"Secrets Self-Made Millionaires Teach Their Kids",
											"Steve Siebold",
											"https://www.goodreads.com/book/show/37808237-secrets-self-made-millionaires-teach-their-kids",
											2021
										)}
										{generateReadingEntry(
											"The Name of the Wind",
											"Patrick Rothfuss ",
											"https://www.goodreads.com/book/show/186074.The_Name_of_the_Wind",
											2021
										)}
										{generateReadingEntry(
											"Dreams from My Father",
											"Barack Obama",
											"https://www.goodreads.com/book/show/186074.The_Name_of_the_Wind",
											2021
										)}
										{generateReadingEntry(
											"Greenlights 🎧",
											"Matthew McConaughey",
											"https://www.goodreads.com/book/show/52838315-greenlights",
											2021
										)}
										{generateReadingEntry(
											"The Retirement Miracle",
											"Patrick Kelly",
											"https://www.goodreads.com/en/book/show/13615839-the-retirement-miracle",
											2021
										)}
										{generateReadingEntry(
											"The Millionaire Fastlane 🎧",
											"MJ Demarco",
											"https://www.goodreads.com/book/show/18872437-the-millionaire-fastlane",
											2021
										)}
										{generateReadingEntry(
											"The Life You Can Save",
											"Peter Singer",
											"https://www.goodreads.com/book/show/4722934-the-life-you-can-save",
											2021
										)}
										{generateReadingEntry(
											"The Power of Zero",
											"David McKnight",
											"https://www.goodreads.com/book/show/20703342-the-power-of-zero",
											2021
										)}
										<tr className="year-divider">&nbsp;</tr>
										<tr className="year-divider">&nbsp;</tr>
										{generateReadingEntry(
											"An American Marriage",
											"Tayari Jones",
											"https://www.goodreads.com/book/show/33590210-an-american-marriage",
											2020
										)}
										{generateReadingEntry(
											"Where the Crawdads Sing",
											"Delia Owens",
											"https://www.goodreads.com/book/show/36809135-where-the-crawdads-sing",
											2020
										)}
										{generateReadingEntry(
											"Digital Minimalism",
											"Cal Newport",
											"https://www.goodreads.com/book/show/40672036-digital-minimalism",
											2020
										)}
										{generateReadingEntry(
											"The Way of the Superior Man 🎧",
											"David Deida",
											"https://www.goodreads.com/book/show/79424.The_Way_of_the_Superior_Man",
											2020
										)}
										{generateReadingEntry(
											"How to Win Friends and Influence People 🎧",
											"Dale Carnegie",
											"https://www.goodreads.com/book/show/4865.How_to_Win_Friends_and_Influence_People",
											2020
										)}
										{generateReadingEntry(
											"The 4-Hour Workweek",
											"Tim Ferriss",
											"https://www.goodreads.com/book/show/368593.The_4_Hour_Workweek",
											2020
										)}
										{generateReadingEntry(
											"In the Shadow of the Banyan",
											"Vaddey Ratner",
											"https://www.goodreads.com/book/show/13057939-in-the-shadow-of-the-banyan",
											2020
										)}
										{generateReadingEntry(
											"China Rich Girlfriend",
											"Kevin Kwan",
											"https://www.goodreads.com/book/show/22674105-china-rich-girlfriend",
											2020
										)}
										{generateReadingEntry("Freedom", "Jonathan Franzen", "https://www.goodreads.com/book/show/7905092-freedom", 2020)}
										{generateReadingEntry("Deep Work 🎧", "Cal Newport", "https://www.goodreads.com/book/show/25744928-deep-work", 2020)}
										{generateReadingEntry("Grit 🎧", "Angela Duckworth", "https://www.goodreads.com/book/show/27213329-grit", 2020)}
										{generateReadingEntry(
											"The Sparrow",
											"Mary Doria Russell",
											"https://www.goodreads.com/book/show/334176.The_Sparrow",
											2020
										)}
										{generateReadingEntry(
											"Think Like a Monk",
											"Jay Shetty",
											"https://www.goodreads.com/book/show/51942513-think-like-a-monk",
											2020
										)}


										<tr className="year-divider">&nbsp;</tr>
										<tr className="year-divider">&nbsp;</tr>


										{generateReadingEntry(
											"Crazy Rich Asians",
											"Kevin Kwan",
											"https://www.goodreads.com/book/show/16085481-crazy-rich-asians",
											2019
										)}
										{generateReadingEntry("Animal Farm", "George Orwell", "https://www.goodreads.com/book/show/1109848.Animal_farm", 2019)}
										{generateReadingEntry(
											"Brave New World",
											"Aldous Huxley",
											"https://www.goodreads.com/book/show/5129.Brave_New_World",
											2019
										)}
										{generateReadingEntry(
											"Stillness Speaks",
											"Eckhart Tolle",
											"https://www.goodreads.com/book/show/67864.Stillness_Speaks",
											2019
										)}
										{generateReadingEntry(
											"The Wizard of Oz Vocabulary Builder",
											"Mark Phillips",
											"https://www.goodreads.com/book/show/236086.The_Wizard_of_Oz_Vocabulary_Builder",
											2019
										)}
										{generateReadingEntry(
											"12 Rules for Life 🎧",
											"Jordan Peterson",
											"https://www.goodreads.com/book/show/30257963-12-rules-for-life",
											2019
										)}
										{generateReadingEntry(
											"The Wizard of Oz Vocabulary Builder",
											"Mark Phillips",
											"https://www.goodreads.com/book/show/236086.The_Wizard_of_Oz_Vocabulary_Builder",
											2019
										)}
										{generateReadingEntry(
											"The Corrections",
											"Jonathan Franzen",
											"https://www.goodreads.com/book/show/3805.The_Corrections",
											2019
										)}
										{generateReadingEntry(
											"Functional-Light JavaScript",
											"Kyle Simpson",
											"https://www.goodreads.com/book/show/37482278-functional-light-javascript",
											2019
										)}
										{generateReadingEntry(
											"Writing Better Lyrics",
											"Pat Pattison",
											"https://www.goodreads.com/book/show/695626.Writing_Better_Lyrics?from_search=true",
											2019
										)}
										{generateReadingEntry(
											"Atomic Habits🎧",
											"James Clear",
											"https://www.goodreads.com/book/show/40121378-atomic-habits",
											2019
										)}
										{generateReadingEntry(
											"All the Light We Cannot See",
											"Anthony Doerr",
											"https://www.goodreads.com/book/show/18143977-all-the-light-we-cannot-see",
											2019
										)}
										{generateReadingEntry(
											"You Don't Know JS: ES6 & Beyond",
											"Kyle Simpson",
											"https://www.goodreads.com/book/show/22221111-you-don-t-know-js",
											2019
										)}
										{generateReadingEntry(
											"You Don't Know JS: Async & Performance",
											"Kyle Simpson",
											"https://www.goodreads.com/book/show/22221110-you-don-t-know-js",
											2019
										)}
										<tr className="year-divider">&nbsp;</tr>
										<tr className="year-divider">&nbsp;</tr>
										{generateReadingEntry(
											"The Great Gatsby",
											"F. Scott Fitzgerald",
											"https://www.goodreads.com/book/show/4671.The_Great_Gatsby",
											2018
										)}
										{generateReadingEntry(
											"You Don't Know JS: Types & Grammar",
											"Kyle Simpson",
											"https://www.goodreads.com/book/show/22221109-you-don-t-know-js",
											2018
										)}
										{generateReadingEntry(
											"The Man in the High Castle",
											"Philip K. Dick",
											"https://www.goodreads.com/book/show/216363.The_Man_in_the_High_Castle",
											2018
										)}
										{generateReadingEntry(
											"You Don't Know JS: this & Object Prototypes",
											"Kyle Simpson",
											"https://www.goodreads.com/book/show/22221108-you-don-t-know-js",
											2018
										)}
										{generateReadingEntry(
											"You Don't Know JS: Scope and Closures",
											"Kyle Simpson",
											"https://www.goodreads.com/book/show/20901022-you-don-t-know-js",
											2018
										)}
										{generateReadingEntry(
											"Safe at Home",
											"Bob Muzikowski, Gregg Lewis",
											"https://www.goodreads.com/book/show/705004.Safe_at_Home",
											2018
										)}
										{generateReadingEntry(
											"The Subtle Art of Not Giving a F*ck",
											"Mark Manson",
											"https://www.goodreads.com/book/show/28257707-the-subtle-art-of-not-giving-a-f-ck",
											2018
										)}
										{generateReadingEntry(
											"The Nightingale",
											" Kristin Hannah",
											"https://www.goodreads.com/book/show/24938381-the-nightingale",
											2018
										)}
										{generateReadingEntry(
											"You Don't Know JS: Up & Going",
											"Kyle Simpson",
											"https://www.goodreads.com/book/show/25136217-you-don-t-know-js",
											2018
										)}
										{generateReadingEntry(
											"The Alice Network",
											"Kate Quinn",
											"https://www.goodreads.com/book/show/32051912-the-alice-network",
											2018
										)}
										{generateReadingEntry(
											"The Pragmatic Programmer",
											"Andy Hunt, Dave Thomas",
											"https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer",
											2018
										)}
										{generateReadingEntry(
											"Manhattan Beach",
											"Jennifer Egan",
											"https://www.goodreads.com/book/show/34467031-manhattan-beach",
											2018
										)}
										{generateReadingEntry("A New Earth", "Eckhart Tolle", "https://www.goodreads.com/book/show/76334.A_New_Earth", 2018)}
										{generateReadingEntry(
											"The C Programming Language",
											"Brian Kernighan, Dennis Ritchie",
											"https://www.goodreads.com/book/show/515601.The_C_Programming_Language?ac=1&from_search=true",
											2018
										)}
										{generateReadingEntry(
											"The Hate U Give",
											"Angie Thomas",
											"https://www.goodreads.com/book/show/32075671-the-hate-u-give",
											2018
										)}
										{generateReadingEntry(
											"Purple Hibiscus",
											"Chimamanda Ngozi Adichie",
											"https://www.goodreads.com/book/show/126381.Purple_Hibiscus",
											2018
										)}
										{generateReadingEntry(
											"Be Yourself, Everyone Else Is Already Taken",
											"Mike Robbins",
											"https://www.goodreads.com/book/show/6380353-be-yourself-everyone-else-is-already-taken",
											2018
										)}
										{generateReadingEntry(
											"The Hitchhiker's Guide to the Galaxy",
											"Douglas Adams ",
											"https://www.goodreads.com/book/show/386162.The_Hitchhiker_s_Guide_to_the_Galaxy",
											2018
										)}
										{generateReadingEntry(
											"Astrophysics for People in a Hurry",
											"Neil deGrasse Tyson ",
											"https://www.goodreads.com/book/show/32191710-astrophysics-for-people-in-a-hurry?ac=1&from_search=true",
											2018
										)}
										{generateReadingEntry("Fight Club", "Chuck Palahniuk", "https://www.goodreads.com/book/show/5759.Fight_Club", 2018)}
										{generateReadingEntry(
											"Practicing the Power of Now",
											"Eckhart Tolle",
											"https://www.goodreads.com/book/show/6709.Practicing_the_Power_of_Now",
											2018
										)}
										{generateReadingEntry(
											"A Clockwork Orange",
											"Anthony Burgess",
											"https://www.goodreads.com/book/show/227463.A_Clockwork_Orange",
											2018
										)}

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/890.Of_Mice_and_Men" target="_blank">
													Of Mice and Men
												</a>
											</td>
											<td className="data-entry">John Steinbeck</td>
											<td className="data-entry">2018</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/18693763-everything-i-never-told-you" target="_blank">
													Everything I Never Told You
												</a>
											</td>
											<td className="data-entry">Celeste Ng</td>
											<td className="data-entry">2018</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/11337.The_Bluest_Eye" target="_blank">
													The Bluest Eye
												</a>
											</td>
											<td className="data-entry">Toni Morrison</td>
											<td className="data-entry">2018</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/22738563-we-should-all-be-feminists" target="_blank">
													We Should All Be Feminists
												</a>
											</td>
											<td className="data-entry">Chimamanda Ngozi Adichie</td>
											<td className="data-entry">2018</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/6480781-open" target="_blank">
													Open
												</a>
											</td>
											<td className="data-entry">Andre Agassi, J.R. Moehringer</td>
											<td className="data-entry">2018</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/2165.The_Old_Man_and_the_Sea" target="_blank">
													The Old Man and the Sea
												</a>
											</td>
											<td className="data-entry">Ernest Hemingway</td>
											<td className="data-entry">2018</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/13259960-the-smartest-kids-in-the-world" target="_blank">
													The Smartest Kids in the World
												</a>
											</td>
											<td className="data-entry">Amanda Ripley</td>
											<td className="data-entry">2018</td>
										</tr>
										<tr className="year-divider">&nbsp;</tr>
										<tr className="year-divider">&nbsp;</tr>
										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/35259724-behold-the-dreamers" target="_blank">
													Behold the Dreamers
												</a>
											</td>
											<td className="data-entry">Imbolo Mbue</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/27220736-shoe-dog" target="_blank">
													Shoe Dog
												</a>
											</td>
											<td className="data-entry">Phil Knight</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/6708.The_Power_of_Now" target="_blank">
													The Power of Now
												</a>
											</td>
											<td className="data-entry">Eckhart Tolle</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/7445.The_Glass_Castle" target="_blank">
													The Glass Castle
												</a>
											</td>
											<td className="data-entry">Jeannette Walls</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/15815364-how-to-get-filthy-rich-in-rising-asia" target="_blank">
													How to Get Filthy Rich in Rising Asia
												</a>
											</td>
											<td className="data-entry">Mohsin Hamid</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/23453112-modern-romance" target="_blank">
													Modern Romance
												</a>
											</td>
											<td className="data-entry">Aziz Ansari, Eric Klinenberg</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/865.The_Alchemist" target="_blank">
													The Alchemist
												</a>
											</td>
											<td className="data-entry">Paulo Coelho</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/34273236-little-fires-everywhere" target="_blank">
													Little Fires Everywhere
												</a>
											</td>
											<td className="data-entry">Celeste Ng</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/29496453-the-book-of-joy" target="_blank">
													The Book of Joy
												</a>
											</td>
											<td className="data-entry">Dalai Lama XIV, Desmond Tutu, Douglas Carlton Abrams</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/440777.Moth_Smoke" target="_blank">
													Moth Smoke
												</a>
											</td>
											<td className="data-entry">Mohsin Hamid</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/88815.The_Reluctant_Fundamentalist" target="_blank">
													The Reluctant Fundamentalist
												</a>
											</td>
											<td className="data-entry">Mohsin Hamid</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/28389305-the-other-einstein" target="_blank">
													The Other Einstein
												</a>
											</td>
											<td className="data-entry">Marie Benedict</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/27161189-united-as-one" target="_blank">
													United as One
												</a>
											</td>
											<td className="data-entry">Pittacus Lore</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/24488476-the-fate-of-ten" target="_blank">
													The Fate of Ten
												</a>
											</td>
											<td className="data-entry">Pittacus Lore</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/43015.A_Long_Way_Gone" target="_blank">
													A Long Way Gone
												</a>
											</td>
											<td className="data-entry">Ishmael Beah</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="https://www.goodreads.com/book/show/136251.Harry_Potter_and_the_Deathly_Hallows" target="_blank">
													Harry Potter and the Deathly Hallows
												</a>
											</td>
											<td className="data-entry">J.K. Rowling</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/3636.The_Giver" target="_blank">
													The Giver
												</a>
											</td>
											<td className="data-entry">Lois Lowry</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/30117284-carve-the-mark?from_search=true" target="_blank">
													Carve the Mark
												</a>
											</td>
											<td className="data-entry">Veronica Roth</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/12030438-the-start-up-of-you" target="_blank">
													The Start-Up of You
												</a>
											</td>
											<td className="data-entry">Reid Hoffman & Ben Casnocha</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a
													href="http://www.goodreads.com/book/show/1.Harry_Potter_and_the_Half_Blood_Prince?ac=1&from_search=true"
													target="_blank"
												>
													Harry Potter and the Half-Blood Prince
												</a>
											</td>
											<td className="data-entry">J.K. Rowling</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/42547.The_Autobiography_of_Martin_Luther_King_Jr_" target="_blank">
													The Autobiography of Martin Luther King Jr.
												</a>
											</td>
											<td className="data-entry">Martin Luther King Jr.</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/9415942-now-is-the-time-for-running" target="_blank">
													Now is the Time for Running
												</a>
											</td>
											<td className="data-entry">Michael Williams</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/2.Harry_Potter_and_the_Order_of_the_Phoenix" target="_blank">
													Harry Potter and the Order of the Phoenix
												</a>
											</td>
											<td className="data-entry">J.K. Rowling</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/11387515-wonder" target="_blank">
													Wonder
												</a>
											</td>
											<td className="data-entry">R.J. Palacio</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/4214.Life_of_Pi" target="_blank">
													Life of Pi
												</a>
											</td>
											<td className="data-entry">Yann Martel</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/20839546-diamond-boy?from_search=true" target="_blank">
													Diamond Boy
												</a>
											</td>
											<td className="data-entry">Michael Williams</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a
													href="http://www.goodreads.com/book/show/22557272-the-girl-on-the-train?ac=1&from_search=true"
													target="_blank"
												>
													The Girl on the Train
												</a>
											</td>
											<td className="data-entry">Paula Hawkins</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a
													href="http://www.goodreads.com/book/show/128029.A_Thousand_Splendid_Suns?ac=1&from_search=true"
													target="_blank"
												>
													A Thousand Splendid Suns
												</a>
											</td>
											<td className="data-entry">Khaled Hosseini</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/30655.8_Minute_Meditation?ac=1&from_search=true" target="_blank">
													8 Minute Meditation
												</a>
											</td>
											<td className="data-entry">Victor Davich</td>
											<td className="data-entry">2017</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/13489835-everburn" target="_blank">
													Everburn
												</a>
											</td>
											<td className="data-entry">Robert Bunch</td>
											<td className="data-entry">2017</td>
										</tr>
										<tr className="year-divider">&nbsp;</tr>
										<tr className="year-divider">&nbsp;</tr>
										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/16115612-and-the-mountains-echoed?from_search=true" target="_blank">
													And the Mountains Echoed
												</a>
											</td>
											<td className="data-entry">Khaled Hosseini</td>
											<td className="data-entry">2016</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/8341335-learn-python-the-hard-way" target="_blank">
													Learn Python the Hard Way
												</a>
											</td>
											<td className="data-entry">Zed Shaw</td>
											<td className="data-entry">2016</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a
													href="http://www.goodreads.com/book/show/19319366-a-smarter-way-to-learn-javascript?from_search=true"
													target="_blank"
												>
													A Smarter Way to Learn JavaScript
												</a>
											</td>
											<td className="data-entry">Mark Myers</td>
											<td className="data-entry">2016</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/16256798-the-one-thing?from_search=true" target="_blank">
													The One Thing
												</a>
											</td>
											<td className="data-entry">Gary W. Keller & Jay Papasan</td>
											<td className="data-entry">2016</td>
										</tr>

										<tr className="taller-table-rows">
											<td className="data-entry">
												<a href="http://www.goodreads.com/book/show/25137361-a-smarter-way-to-learn-html-css" target="_blank">
													A Smarter Way to Learn HTML & CSS
												</a>
											</td>
											<td className="data-entry">Mark Myers</td>
											<td className="data-entry">2016</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Interests;
