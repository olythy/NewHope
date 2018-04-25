import React from 'react'

const SpeakerCard = props => (

	<div className="SpeakerCard">
		<div className="SpeakerCard--details">
			<h5>Rachel Botsman</h5>
			<span>Super company <div className="DOT">&middot;</div> CEO</span>
		</div>
		<div className="SpeakerCard--img">
     		<img src="/storage/Gfx/Events/Speakers/speaker-defaultIMG.png" alt="UNLEASH Speaker"/>
    	</div>
    	<div className="SpeakerCard--fullDetails">
   			<h2>Rachel Botsman</h2>
   			<span>Super company <div className="DOT">&middot;</div> CEO</span>
   			<div className="SpeakerCard--fullDetails--wrp">
	   			<span className="SpeakerCard--fullDetails---text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip nisi ut aliquip nisi ut aliquip nisi ut aliquip nisi ut aliquip ex ea commodo...</span>
			</div> 		
    	</div>
	</div>
)

export default SpeakerCard