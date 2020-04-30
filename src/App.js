import React from 'react';
import './assets/css/App.css';
import LikeButton from './assets/js/LikeButton.js'
import COVIDForm from './assets/js/COVIDForm';

function App() {
  return (
    <div className="is-preloaded">
			<section id="sidebar">
				<div className="inner">
					<nav>
						<ul>
							<li><a href="#intro">Welcome</a></li>
							<li><a href="#three">About you</a></li>
							<li><a href="#one">The Data</a></li>
							<li><a href="#two">What you can do</a></li>
						</ul>
					</nav>
				</div>
			</section>

			<div id="wrapper">
					<section id="intro" className="wrapper style1 fullscreen fade-up">
						<div className="inner">
                            <h1>Self Check</h1>
							<p>A COVID-19 data comparison tool built by the AntiVirus Engineers. <br></br> Self Check does not collect any data. Existing COVID-19 infection data sourced from Kaggle and updated daily.</p>
							<ul className="actions">
								<li><a href="#three" className="button scrolly">Check myself!</a></li>
							</ul>
              				{/* <LikeButton/> */}
						</div>
					</section>

					<section id="three" className="wrapper style1 fade-up">
						<div className="inner">
							<div className="split style1">
								<section>
                                    <COVIDForm/>
								</section>
								<section>
									<ul className="contact">
										<li>
											<h3>Address</h3>
											<span>12345 Safe At Home Boulevard<br />
											Distantville, Social 02020<br />
											USA</span>
										</li>
										<li>
											<h3>Email</h3>
											<a href="/#">self@check.com</a>
										</li>
										<li>
											<h3>Phone</h3>
											<span>(999) 999-9999</span>
										</li>
										<li>
											<h3>Social</h3>
											<ul className="icons">
												<li><a href="/#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
												<li><a href="/#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
												<li><a href="/#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
												<li><a href="/#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
												<li><a href="/#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
											</ul>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</section>

{/*  
					<section id="one" className="wrapper style2 spotlights">
						<section>
							<a href="/#" className="image"><img src="images/pic01.jpg" alt="" data-position="center center" /></a>
							<div className="content">
								<div className="inner">
									<h2>Sed ipsum dolor</h2>
									<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
									<ul className="actions">
										<li><a href="generic.html" className="button">Learn more</a></li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<a href="/#" className="image"><img src="images/pic02.jpg" alt="" data-position="top center" /></a>
							<div className="content">
								<div className="inner">
									<h2>Feugiat consequat</h2>
									<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
									<ul className="actions">
										<li><a href="generic.html" className="button">Learn more</a></li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<a href="/#" className="image"><img src="images/pic03.jpg" alt="" data-position="25% 25%" /></a>
							<div className="content">
								<div className="inner">
									<h2>Ultricies aliquam</h2>
									<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
									<ul className="actions">
										<li><a href="generic.html" className="button">Learn more</a></li>
									</ul>
								</div>
							</div>
						</section>
					</section>

					<section id="two" className="wrapper style3 fade-up">
						<div className="inner">
							<h2>What you can do</h2>
							<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
							<div className="features">
								<section>
									<span className="icon solid major fa-code"></span>
									<h3>Lorem ipsum amet</h3>
									<p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
								</section>
								<section>
									<span className="icon solid major fa-lock"></span>
									<h3>Aliquam sed nullam</h3>
									<p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
								</section>
								<section>
									<span className="icon solid major fa-cog"></span>
									<h3>Sed erat ullam corper</h3>
									<p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
								</section>
								<section>
									<span className="icon solid major fa-desktop"></span>
									<h3>Veroeros quis lorem</h3>
									<p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
								</section>
								<section>
									<span className="icon solid major fa-link"></span>
									<h3>Urna quis bibendum</h3>
									<p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
								</section>
								<section>
									<span className="icon major fa-gem"></span>
									<h3>Aliquam urna dapibus</h3>
									<p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
								</section>
							</div>
							<ul className="actions">
								<li><a href="generic.html" className="button">Learn more</a></li>
							</ul>
						</div>
					</section>
*/}
			</div>

			<footer id="footer" className="wrapper style1-alt">
				<div className="inner">
					<ul className="menu">
						<li>&copy; Self Check. All rights reserved.</li>
						<li>Designed by <a href="http://html5up.net">HTML5 UP</a> and released for free under the <a href="http://html5up.net/license">Creative Commons</a> </li>
					</ul>
				</div>
			</footer>

			{/* <script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script> */}
      </div>
  );
}

export default App;
