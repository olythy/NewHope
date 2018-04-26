import React from 'react'
import {Link} from 'react-router-dom'

import IntroHeader from '../../../IntroHeader/IntroHeader'
import HotelCard from '../../Travel/HotelCard/HotelCard'
import ContactPerson from '../../../About/ContactPerson/ContactPerson'
import HotelHighLightCard from '../../Travel/HotelCard/HotelHighLightCard/HotelHighLightCard'
import TravelMap from '../../Travel/TravelMap/TravelMap'
import PromoBox from '../../../PromoBox/PromoBox'
import BigBox from '../../../IntroBoxes/BigBox/BigBox'
import SubMenuUSA from '../../SubMenu/SubMenuUSA/SubMenuUSA'

const TravelUSA = () => (
	<section className="Travel America">
		<SubMenuUSA active="Travel"/>
		<IntroHeader cls="TravelUSA-hdr" eventName="UNLEASH America" eventCity="Las Vegas" eventVenue="Aria Hotel" eventDate="15-16 May 2018" h1="Travel &amp; Venue">
			<Link to="/america/tickets"><button className="btn-fw">Book now</button></Link>
		</IntroHeader>
		<div className="Layout-width">
			<div className="Travel--wrp">
				<div className="Intro--wrp">
					<div className="TextBox">
						<div className="TextBox--Text">
							<div className="Headline">
								<div className="Headline--title">
									<h2>Las Vegas</h2>
								</div>
							</div>
							<p>Known for its openness, Amsterdam is one of the world’s most multicultural cities, a leading financial centre, and a major arts and cultural capital. A leading world trading centre Amsterdam features on many indexes as one of the best places to live.</p>
						</div>
						<BigBox src="/storage/Gfx/Events/Travel/travelUSA-big.jpg"/>
					</div>
				</div>
				<div className="PromoBoxes--wrp">
						<PromoBox src="/storage/Gfx/Events/Travel/travelUSA-smallOne.jpg" />
						<PromoBox src="/storage/Gfx/Events/Travel/travelUSA-smallTwo.jpg" />
						<PromoBox src="/storage/Gfx/Events/Travel/travelUSA-smallThree.jpg" />
					</div>
				<div className="Headline">
					<div className="Headline--title">
						<h2>Event Venue</h2>
					</div>
					<div className="Stripe"></div>
				</div>
				<TravelMap
					src="/storage/Gfx/Events/Travel/travelUSA-venue.jpg"
					venueName="Aria Resort & Casino"
					venueText="UNLEASH is delighted to be making it's US home at the Aria Resort and Casino in Las Vegas, one of North America's premier destinations for large-scale meetings and shows. Described in Popular Mechanics as possibly 'the most technologically advanced hotel ever built' the Aria has something for everyone, including a casino, 16 restaurants, bars, nightclubs, pools, and shopping. The Aria’s technologically advanced, flexible meeting space is highlighted by stunning indoor/open-air spaces and a glass-enclosed venue with dramatic views of The Park and the spectacular new T-Mobile Arena."
				/>
				<div className="PromoBoxes--wrp">
					<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-startups.jpg" name="Show on Map" btnName="discover" btnLink="/america/travel"/>
					<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-TravelAMS-floorplan.jpg" name="Event Floorplan" btnName="Learn More" btnLink="/america/travel"/>
					<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-TravelAMS-flying.jpg" name="Partners in Flying" btnName="Learn More" btnLink="/america/travel"/>
				</div>
				<div className="Headline">
					<div className="Headline--title">
						<h2>Hosting Hotel</h2>
					</div>
					<div className="Stripe"></div>
				</div>
				<HotelHighLightCard />
			</div>
		</div>
		<ContactPerson 
  		contactIMG="/storage/Gfx/About/contactPerson-Eva.png"
  		contactName="Éve Juhász"
  		contactJobTitle="Operations Co-ordinator"
  		contactMail="eva@unleashgroup.io"
  		contactLinkedin="/storage/Gfx/Events/Speakers/speaker-linkedin.svg"
  		contactTwitter="/storage/Gfx/Events/Speakers/speaker-twitter.svg"

  	/>
	</section>
)

export default TravelUSA