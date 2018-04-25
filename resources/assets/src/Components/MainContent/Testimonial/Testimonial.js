import React from 'react'

import SmallBox from '../IntroBoxes/SmallBox/SmallBox'
import BigBox from '../IntroBoxes/BigBox/BigBox'

const Testimonial = props => (
	<section className="Testimonial">
		<BigBox src={props.srcBig}/>
		<div className="ImgBoxes--wrp">
			<div className="SmallBox--wrp">
				<SmallBox src={props.srcSmallOne}/>
				<SmallBox src={props.srcSmallTwo}/>
			</div>
			<div className="BigBox--wrp">
				<h1>Most inspiring show on the globe</h1>
				<div className="TestimonialDetails--wrp">
					<div className="Testimonial--person">
						<h5>Rachel botsman</h5>
						<span>Super company <div className="DOT">&middot;</div> CEO</span>
					</div>
					<div className="Testimonial--company">
						<img src="/storage/Gfx/Testimonial/google.svg" alt="IMG"/>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default Testimonial