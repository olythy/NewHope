import React from 'react'

const HotelHighLightCard = props => (

	<div className="HotelHighLightCard">
		<div className="HotelHighLightCard--img">
     		<img src="/storage/Gfx/Events/Travel/HotelCardHL-img.png" alt="Hosting Hotel"/>
     		<div className="HotelHighLightCard--shortInfo">
     			<div className="Hotel-categ"><span>Hosting Hotel</span></div>
				<div className="HotelHighLightCard--shortName">
					<h1>Aloft<br />Amsterdam</h1>
					<span>Molenwerf 1, 1014 AG Amsterdam, Netherlands</span>
				</div>
     		</div>
    	</div>
		<div className="HotelHighLightCard--details">
			<div className="HotelHighLightCard--wrp">
				<div className="HotelHighLightCard--name">
					<h1>Aloft Amsterdam</h1>
				</div>
				<div className="HotelHighLightCard--address">
					<div className="Hotel-categ"><span>Hosting Hotel</span></div>
					<span>Molenwerf 1, 1014 AG Amsterdam, Netherlands</span>
				</div>
				<div className="HotelHighLightCard--hotelContent">
					<p>Aloft Amsterdam Excel is the only hotel in London directly connected to the ExCeL International Convention Centre. Located right next to the Prince Regent DLR station, it is minutes away from City Airport and Canary Wharf.</p>
				</div>
				<div className="HotelCard--roomType">
					<div className="HotelCard--room">
						<h6>Single Occupancy: <strong>£230 / night*</strong></h6>
					</div>
					<div className="HotelCard--room">
						<h6>Double Occupancy: <strong>£240 / night*</strong></h6>
					</div>
					<div className="HotelCard--rates">
						<span>*Rates are inclusive of VAT, WIFI & Breakfast.</span>
					</div>
					<button className="btn-b">Book Online</button>
				</div>
			</div>
		</div>
		<div className="HotelCard--divider">
			<h5>OR</h5>
		</div>
		<div className="HotelHighLightCard--Bookvia-and-rates">
			<div className="HotelHighLightCard--BookVia---wrp">
				<h6 className="HotelCard--phone"><div className="HotelHighLightCard--BookVia">Book via phone:</div>00 44 207 290 7575</h6>
				<h6 className="HotelCard--mail"><div className="HotelHighLightCard--BookVia">Book via email:</div>reservation@londonaasdasd.co.uk</h6>
			</div>
			<div className="HotelCard--rates">
				<span>Please quote booking name “UNLEASH18” if calling in or emailing the hotel.</span>
			</div>
		</div>
	</div>
)

export default HotelHighLightCard