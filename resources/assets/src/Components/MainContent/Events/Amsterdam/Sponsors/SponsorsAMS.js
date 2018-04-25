import React, {Component} from 'react'
import IntroHeader from '../../../IntroHeader/IntroHeader'
import OneLineTestimonial from '../../../Testimonial/OneLine-Testimonial/OneLineTestimonial'
import SponsorCard from '../../Sponsors/SponsorCard/SponsorCard'
import BecomeCard from '../../BecomeCard/BecomeCard'
import TalksCategory from '../../../Talks/TalksCategory/TalksCategory'

import SubMenuAMS from '../../SubMenu/SubMenuAMS/SubMenuAMS'
import Button from '../../../Commons/Button/Button'

class SponsorsAMS extends Component {
	render(){
		return(
			<section className="Sponsors Amsterdam">
				<SubMenuAMS active="Sponsors" />
				<IntroHeader cls="SponsorsAMS-hdr" eventName="UNLEASH World Conference & Expo" eventCity="Amsterdam" eventVenue="RAI" eventDate="23-24 October 2018" h1="Our sponsors">
					<Button cls="btn-fw" name="Become a Sponsor" modalTitle="Become a Sponsor" modalText="Sponsor text example .." />
				</IntroHeader>
				<div className="Layout-width">
					<div className="TextBox">
						<div className="TextBox--Text">
							<div className="Headline">
								<div className="Headline--title">
									<h2>Sponsoring unleash</h2>
								</div>
							</div>
							<p>Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the echnologies and ways to apply them that will have the greatest potential impact and value. Join the movers and shakers!</p>
						</div>
						<OneLineTestimonial 
							smallSrcOne="/storage/Gfx/Testimonial/oneLine-AMSSponsors-smallOne.jpg"
							smallSrcTwo="/storage/Gfx/Testimonial/oneLine-AMSSponsors-smallTwo.jpg"
						/>
						<OneLineTestimonial
							cls="reverse" 
							smallSrcOne="/storage/Gfx/Testimonial/oneLine-AMSSponsors-smallTwo.jpg"
							smallSrcTwo="/storage/Gfx/Testimonial/oneLine-AMSSponsors-smallOne.jpg"
						/>
					</div>
					<div className="Headline">
						<div className="Headline--title">
							<h2>Sponsors 2018</h2>
						</div>
					</div>
					<div className="Sponsors--wrp">
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" name="Oracle" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg" name="Clustree" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-workday.svg" name="Workday" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg" name="Clustree" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-workday.svg" name="Workday" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" name="Oracle" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" name="Oracle" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg" name="Clustree" />
						<BecomeCard className="SponsorCard" name="become a sponsor" modalText="Shape the future of work together!" slogan="Shape the future of work together!" />
					</div>
				</div>
				<div className="GreyBG-72">
					<div className="Layout-width">
						<TalksCategory name="Sponsor Interviews" />
					</div>
				</div>
			</section>	
		)
	}
}

export default SponsorsAMS