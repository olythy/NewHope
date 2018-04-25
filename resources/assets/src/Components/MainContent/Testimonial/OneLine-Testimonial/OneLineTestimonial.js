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
			<BigBox title="Thanks to the unleash guys the whole process of reserving a stand and putting out our brand at the location was lightning fast and very simple." person="Jane Erica Hansel" jobTitle="Founder of Default Company Ltd." />
		</div>
	</div>
)

export default OneLineTestimonial