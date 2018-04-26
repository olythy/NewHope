import React from 'react'
import SmallBox from '../../IntroBoxes/SmallBox/SmallBox'
import BigBox from '../../IntroBoxes/BigBox/BigBox'

const OneLineTestimonial = props => (
	<div className={props.cls ? "OneLine--Testimonial " + props.cls : "OneLine--Testimonial "}>
		<div className="ImgBoxes--wrp SmallOnes">
			<SmallBox src={props.smallSrcOne} />
			<SmallBox src={props.smallSrcTwo} />
		</div>
		<div className="ImgBoxes--wrp Testimonial">
			<BigBox title={props.testimonialText} person={props.person} logo={props.logo} logoAlt={props.logoAlt} />
		</div>
	</div>
)

export default OneLineTestimonial