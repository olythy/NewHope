import React from 'react'

const TravelMap = props => (
	<section className="TravelMap"> 
		<div className="TravelMap--img">
			<img src={props.src} alt={props.venueName} />
		</div>
		<div className="TravelMap--venue">
			<h1>{props.venueName}</h1>
			<p>{props.venueText}</p>
		</div>
	</section>
)

export default TravelMap