import React from 'react'

const CareerCard = props => (
	<div className="CareerCard">
		<div className="CareerCard--img">
     		<img src="/storage/Gfx/About/Careers/careerCard-img.svg" alt="UNLEASH Career"/>
    	</div>
    	<div className="CareerCard--details">
			<div className="CareerCard--details---wrp">
				<h5>{props.position}</h5>
				<span>Full time job</span>
				<span>Budapest</span>
			</div>
		</div>
	</div>
)

export default CareerCard