import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import IntroHeader from '../../IntroHeader/IntroHeader'

class London extends Component {

	render(){
		return(
			<section className="EventPage London">
				<IntroHeader cls="London-hdr" eventName="UNLEASH Conference & Expo" eventCity="London" eventVenue="ExCeL" eventDate="20-21 March 2018" h1="Summery of London" />				
				<div className="Layout-width">
					<div className="Speakers--wrp">
						<div className="Headline">
							<div className="Headline--title">
								<h2>Summary Page</h2>
							</div>
							<div className="Stripe"></div>
						</div>
					</div>
				</div>
				
			</section>
		)
	}
}

export default London