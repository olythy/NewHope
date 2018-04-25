import React from 'react'

import IntroHeader from '../../IntroHeader/IntroHeader'
import HotelCard from './HotelCard/HotelCard'
import ContactPerson from '../../About/ContactPerson/ContactPerson'
import HotelHighLightCard from './HotelCard/HotelHighLightCard/HotelHighLightCard'
import TravelMap from './TravelMap/TravelMap'
import PromoBox from '../../PromoBox/PromoBox'
import BigBox from '../../IntroBoxes/BigBox/BigBox'

const Travel = () => (
	<section className="Travel">
		<IntroHeader />
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
						<BigBox src="/storage/Gfx/Events/Travel/Travel-ams.png"/>
					</div>
				</div>
				<div className="PromoBoxes--wrp">
						<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-startups.png" />
						<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-sponsors.png" />
						<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-volunteer.png" />
					</div>
				<div className="Headline">
					<div className="Headline--title">
						<h2>Event Venue</h2>
					</div>
					<div className="Stripe"></div>
				</div>
				<TravelMap />
				<div className="PromoBoxes--wrp">
					<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-startups.png" name="Unleash Mobile App" />
					<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-sponsors.png" name="Event Floorplan" />
					<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-volunteer.png" name="Partners in Flying" />
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
		<ContactPerson />
	</section>
)

export default Travel