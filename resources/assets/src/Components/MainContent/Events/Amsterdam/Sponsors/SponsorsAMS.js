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
									<h2>WHY SPONSOR?</h2>
								</div>
							</div>
							<p>UNLEASH is the leading show on Future of Work and HR Technology both in terms of content provided by hundreds of speakers and deal-making on our expo floors. With the largest group of C-Suite buyers in the industry attending our shows, large enterprises to the next innovators from around the world will want to attend UNLEASH World Conference & Expo in Amsterdam this October. With a global footprint that influences over 55 million employees worldwide, no other community is having such a powerful impact on shaping the way the world works!</p>
						</div>
						<OneLineTestimonial 
							smallSrcOne="/storage/Gfx/Testimonial/oneLine-AMSSponsors-smallOne.jpg"
							smallSrcTwo="/storage/Gfx/Testimonial/oneLine-AMSSponsors-smallTwo.jpg"
							testimonialText="Great experience again for us – we have met our biggest customers and many strong new prospects!"
							logo="/storage/Gfx/Testimonial/testimonial-SAP.png" alt="SAP Success Factors"
						/>
						<OneLineTestimonial
							cls="reverse" 
							smallSrcOne="/storage/Gfx/Testimonial/oneLine-AMSSponsors-smallTwo.jpg"
							smallSrcTwo="/storage/Gfx/Testimonial/oneLine-AMSSponsors-smallOne.jpg"
							testimonialText="As we are looking at buying new solutions, UNLEASH gave us the best opportunity to meet with the right vendors. Excellent!"
							logo="/storage/Gfx/Testimonial/testimonial-hertz.png" alt="Hertz"
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
						<TalksCategory name="See More" />
					</div>
				</div>
			</section>	
		)
	}
}

export default SponsorsAMS