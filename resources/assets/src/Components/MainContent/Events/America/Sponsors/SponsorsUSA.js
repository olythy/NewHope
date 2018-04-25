import React, {Component} from 'react'
import IntroHeader from '../../../IntroHeader/IntroHeader'
import OneLineTestimonial from '../../../Testimonial/OneLine-Testimonial/OneLineTestimonial'
import SponsorCard from '../../Sponsors/SponsorCard/SponsorCard'
import BecomeCard from '../../BecomeCard/BecomeCard'
import TalksCategory from '../../../Talks/TalksCategory/TalksCategory'

import SubMenuUSA from '../../SubMenu/SubMenuUSA/SubMenuUSA'
import Button from '../../../Commons/Button/Button'

class SponsorsUSA extends Component {
	render(){
		return(
			<section className="Sponsors America">
				<SubMenuUSA active="Sponsors"/>
				<IntroHeader cls="SponsorsUSA-hdr" eventName="UNLEASH America" eventCity="Las Vegas" eventVenue="Aria Hotel" eventDate="15-16 2018" h1="Sponsors' Portal">
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
							smallSrcOne="/storage/Gfx/Testimonial/oneLine-USASponsors-smallOne.jpg"
							smallSrcTwo="/storage/Gfx/Testimonial/oneLine-USASponsors-smallTwo.jpg"
						/>
						<OneLineTestimonial
							cls="reverse" 
							smallSrcOne="/storage/Gfx/Testimonial/oneLine-USASponsors-smallThree.jpg"
							smallSrcTwo="/storage/Gfx/Testimonial/oneLine-USASponsors-smallFour.jpg"
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

export default SponsorsUSA