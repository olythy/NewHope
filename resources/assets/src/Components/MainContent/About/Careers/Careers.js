import React from 'react'

import IntroHeader from '../../IntroHeader/IntroHeader'
import IntroBoxes from '../../IntroBoxes/IntroBoxes'
import ContactPerson from '../ContactPerson/ContactPerson'
import CareerCard from './CareerCard/CareerCard'

const Careers = () => (
  <section className="Careers">
  	<IntroHeader h1="Careers" cls="Careers-hdr" />
  	<div className="Layout-width">
  		<IntroBoxes
			contentBox={
				<div className="ContentBox--wrp">
			      <h2>GLOBAL OPPORTUNITIES</h2>
			      <p>We are passionate creative people on a mission to inspire and transform the world of work & technology. Our shared vision is that by 2020, UNLEASH will be the platform of choice globally on the Future of Work. With more than 21 number of nationalities represented at our company, we pride ourselves on truly being an international business.</p>
			    </div>
			}
			bigSrc="/storage/Gfx/IntroBoxes/careers-big.jpg"
			smallSrcOne="/storage/Gfx/IntroBoxes/careers-smallOne.jpg"
			smallSrcTwo="/storage/Gfx/IntroBoxes/careers-smallTwo.jpg" >
		</IntroBoxes>
		<div className="videoWrapper">
			<iframe width="854" height="480" src="https://www.youtube.com/embed/2FcXP9dPTIk?rel=0&hd=1" frameborder="0"></iframe>
		</div>
		<div className="Careers--position">
			<div className="Headline">
				<div className="Headline--title">
					<h2>Open positions</h2>
				</div>
				<div className="Stripe"></div>
			</div>
			<div className="Careers--position--wrp">
				<CareerCard position="Senior Frontend Developer" />
				<CareerCard position="Senior Backend Developer" />
				<CareerCard position="Social Media Manager" />
				<CareerCard position="International Delegate Sales Executive" />
				<CareerCard position="UNLEASH Las Vegas Volunteer Program" />
				<CareerCard position="Conference Sales Manager" />
			</div>
		</div>
  	</div>
  	<ContactPerson 
  		contactIMG="/storage/Gfx/About/contactPerson-Elena.png"
  		contactName="Elena Markina"
  		contactJobTitle="Employee Experience Manager"
  		contactMail="elena@unleashgroup.io"
  		contactLinkedin="/storage/Gfx/Events/Speakers/speaker-linkedin.svg"
  		contactTwitter="/storage/Gfx/Events/Speakers/speaker-twitter.svg"

  	/>
  </section>
)

export default Careers