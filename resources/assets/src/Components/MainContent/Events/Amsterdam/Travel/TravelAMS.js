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
							<p>Known for its openness, Amsterdam is one of the world’s most multicultural cities, a leading financial centre, and a major arts and cultural capital. A leading world trading centre Amsterdam features on many indexes as one of the best places to live.</p>
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
				<div className="PromoBoxes--wrp">
					<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-startups.jpg" name="Unleash Mobile App" btnName="View" btnLink="/amsterdam/travel" />
					<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-TravelAMS-floorplan.jpg" name="Event Floorplan" btnName="Learn More" btnLink="/amsterdam/travel" />
					<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-TravelAMS-flying.jpg" name="Partners in Flying" btnName="Learn More" btnLink="/amsterdam/travel" />
				</div>
				<div className="Headline">
					<div className="Headline--title">
						<h2>Hosting Hotel</h2>
					</div>
					<div className="Stripe"></div>
				</div>
				<HotelHighLightCard />
				<div className="Headline">
					<div className="Headline--title">
						<h2>Hotels in the Area</h2>
					</div>
					<div className="Stripe"></div>
				</div>
				<div className="Travel--hotels">
					<HotelCard name="Novotel Amsterdam Excel"
							   src="/storage/Gfx/Events/Travel/HotelCard-img.png"
							   />
					<HotelCard name="Moxy"
							   src="/storage/Gfx/Events/Travel/HotelCard-img.png"
							   />
					<HotelCard name="Hampton by Hilton"
							   src="/storage/Gfx/Events/Travel/HotelCard-img.png"
							   />
					<HotelCard name="ExCel London"
							   src="/storage/Gfx/Events/Travel/HotelCard-img.png"
							   />
					<HotelCard name="Random Hotel"
							   src="/storage/Gfx/Events/Travel/HotelCard-img.png"
							   />
					<HotelCard name="Novotel"
							   src="/storage/Gfx/Events/Travel/HotelCard-img.png"
							   />
				   
					</div>
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

export default TravelAMS