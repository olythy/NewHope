import React from 'react'

const SponsorCard = props => (
	<div className="SponsorCard">
		<div className="SponsorCard--img">
     		<img src={props.src} alt="UNLEASH Sponsor"/>
    	</div>
		<div className="SponsorCard--details">
			<span className="SponsorCard--level">Headline sponsor</span>
			<div className="SponsorCard--details---wrp">
				<h5>{props.name}</h5>
				<span>Smart home <div className="DOT">&middot;</div> Mobile <div className="DOT">&middot;</div> Talent</span>
			</div>
		</div>
	</div>
)

export default SponsorCard