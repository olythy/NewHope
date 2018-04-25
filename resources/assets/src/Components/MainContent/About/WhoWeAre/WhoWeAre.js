import React from 'react'
import DragScroll from 'react-dragscroll'
import {Link} from 'react-router-dom'

import IntroHeader from '../../IntroHeader/IntroHeader'
import IntroBoxes from '../../IntroBoxes/IntroBoxes'
import OneLineTestimonial from '../../Testimonial/OneLine-Testimonial/OneLineTestimonial'

import Button from '../../Commons/Button/Button'

const WhoWeAre = () => (
  <section className="WhoWeAre">
  	<IntroHeader h1="Who We Are" cls="About-hdr" >
  		<Button cls="btn-fw" name="Join Us" modalTitle="Join us" modalText="Join us text example .." />
  	</IntroHeader>
  	<div className="Layout-width">
		<IntroBoxes
			contentBox={
				<div className="ContentBox--wrp">
			      <h2>Our goal</h2>
			      <p>Unleash Your People! UNLEASH (previously HR Tech World) is much more than just business events; we are in the change-the-world-for-the-greater-good business. We are passionate creative people on a mission to inspire and transform the world of work & technology.</p>
			      <p>Our shared vision is that by 2020, UNLEASH will be the platform of choice on the Future of Work across the globe. More than half of our community includes CEO’s, CHRO/CPOs, EVPs, and SVPs from the most exciting brands and leading organizations, located in 120+ countries worldwide.</p>
			    </div>
			}
			bigSrc="/storage/Gfx/IntroBoxes/about-big.jpg"
			smallTitle="The best event in the world in hr and technology"
			smallPerson="Josh Bersin"
			smallJobTitle="Founder of Bersin by Deloitte"
			smallSrcTwo="/storage/Gfx/IntroBoxes/about-smallTwo.jpg" >
		</IntroBoxes>
		<div className="videoWrapper">
			<iframe width="854" height="480" src="https://www.youtube.com/embed/6v2L2UGZJAM?rel=0&hd=1" frameBorder="0"></iframe>
		</div>
		<div className="TextBox">
			<div className="TextBox--Text">
				<div className="Headline">
					<div className="Headline--title">
						<h2>It all started in 2011</h2>
					</div>
				</div>
				<p>The world’s fastest growing community on the Future of Work, UNLEASH is ranked as the largest Corporate Network focused on the interface between people, technology, organizations and the future. Our events attract the world’s leading entrepreneurs, visionaries, disrupters and doers, including Sir Richard Branson, Arianna Huffington, Sir Ken Robinson, Rachel Botsman, Gary Vaynerchuk and many more. Past and future show locations include Amsterdam, London, San Francisco, Paris and Las Vegas and which will scale to 10,000 attendees in 2018.</p>
			</div>
			<OneLineTestimonial 
				smallSrcOne="/storage/Gfx/Testimonial/oneLine-about-smallOne.jpg"
				smallSrcTwo="/storage/Gfx/Testimonial/oneLine-about-smallTwo.jpg"
			/>
		</div>
	</div>
	<div className="GreyBG-72">
		<div className="Layout-width">
			<div className="Headline dates">
				<div className="Headline--title">
					<h1>Numbers</h1>
				</div>
				<div className="Headline--dates">
					<div className="Headline--dates---btn">
		                <button className="btnspn-b">
		                  <span className="border-top">
		                    <span className="transparent"></span>
		                  </span>
		                    2017
		                  <span className="border-bottom">
		                    <span className="transparent"></span>
		                  </span>
		                </button>
					</div>
					<div className="Stripe"></div>
				</div>
			</div>
			<div className="Agenda--preview">
				<DragScroll width height>
					<div className="Agenda--preview---drag">
						<img src="/storage/Gfx/About/numbers-preview.png" alt="Numbers Preview" />
					</div>
				</DragScroll>
			</div>
			<div className="InfoGraph">
				<h2>
					<strong>3</strong> events <strong>368</strong> speakers <strong>35</strong> stages <strong>24</strong> breakout sessions <strong>34</strong> delegates <strong>64</strong> sponsors <strong>2</strong> startup competitions
				</h2>
				<h2>Keynotes <div className="DOT">&middot;</div> Gary <strong>Vaynerchuck</strong><div className="DOT">&middot;</div> Arianna <strong>Huffington</strong> <div className="DOT">&middot;</div> Sir Ken <strong>Robinson</strong></h2>
			</div>
		</div>
	</div>
	<div className="Layout-width">
		<IntroBoxes
			contentBox={
				<div className="ContentBox--wrp">
			      <h2>GLOBAL OPPORTUNITIES</h2>
			      <p>We are passionate creative people on a mission to inspire and transform the world of work & technology. Our shared vision is that by 2020, UNLEASH will be the platform of choice globally on the Future of Work. With more than 21 number of nationalities represented at our company, we pride ourselves on truly being an international business.</p>
			      <Link to="/careers"><button className="btn-b">Join us</button></Link>
			    </div>
			}
			bigSrc="/storage/Gfx/IntroBoxes/careers-big.jpg"
			smallSrcOne="/storage/Gfx/IntroBoxes/careers-smallOne.jpg"
			smallSrcTwo="/storage/Gfx/IntroBoxes/careers-smallTwo.jpg" >
		</IntroBoxes>
	</div>
  </section>
)

export default WhoWeAre