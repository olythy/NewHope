import React from 'react'

import IntroHeader from '../../../IntroHeader/IntroHeader'
import HotelCard from '../../Travel/HotelCard/HotelCard'
import ContactPerson from '../../../About/ContactPerson/ContactPerson'
import HotelHighLightCard from '../../Travel/HotelCard/HotelHighLightCard/HotelHighLightCard'
import TravelMap from '../../Travel/TravelMap/TravelMap'
import PromoBox from '../../../PromoBox/PromoBox'
import BigBox from '../../../IntroBoxes/BigBox/BigBox'
import SubMenuAMS from '../../SubMenu/SubMenuAMS/SubMenuAMS'

const TravelAMS = () => (
	<section className="Travel Amsterdam">
		<SubMenuAMS active="Travel"/>
		<IntroHeader cls="TravelAMS-hdr" eventName="UNLEASH World Conference & Expo" eventCity="Amsterdam" eventVenue="RAI" eventDate="23-24 October 2018" h1="Travel &amp; Venue" />
		<div className="Layout-width">
			<div className="Travel--wrp">
				<div className="Intro--wrp">
					<div className="TextBox">
						<div className="TextBox--Text">
							<div className="Headline">
								<div className="Headline--title">
									<h2>Amsterdam</h2>
								</div>
							</div>
							<p>Known for its openness, Amsterdam is one of the world’s most multicultural cities, a leading financial centre, and a major arts and cultural capital. Easy-to-use public transportation takes you to the heart of the city, so it’s no surprise Amsterdam is one of the world’s most visited cities.</p>
						</div>
						<BigBox src="/storage/Gfx/Events/Travel/travelAMS-big.jpg"/>
					</div>
				</div>
				<div className="PromoBoxes--wrp">
						<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-TravelAMS-1.jpg" />
						<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-TravelAMS-2.jpg" />
						<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-TravelAMS-3.jpg" />
					</div>
				<div className="Headline">
					<div className="Headline--title">
						<h2>Event Venue</h2>
					</div>
					<div className="Stripe"></div>
				</div>
				<TravelMap
					src="/storage/Gfx/Events/Travel/travelAMS-map.png"
					venueName="Rai Amsterdam"
					venueText="RAI Amsterdam is the Netherlands’ leading venue for exhibitions and conferences. Just a 15 minute drive to the city centre and the Schiphol Airport, the location of the RAI couldn't be easier."
				/>
				
			</div>
		</div>
		<ContactPerson 
	  		contactIMG="/storage/Gfx/About/contactPerson-Eva.png"
	  		contactName="Éve Juhász"
	  		contactJobTitle="Operations Co-ordinator"
	  		contactMail="eva@unleashgroup.io"
	  		contactLinkedin="https://www.linkedin.com/in/%C3%A9va-juh%C3%A1sz-890b789a/"
  	/>
	</section>
)

export default TravelAMS