import React, {Component} from 'react'
import IntroHeader from '../../IntroHeader/IntroHeader'
import OneLineTestimonial from '../../Testimonial/OneLine-Testimonial/OneLineTestimonial'
import PartnerSearch from '../../PartnerSearch/PartnerSearch'
import SponsorCard from './SponsorCard/SponsorCard'
import BecomeSponsorCard from './SponsorCard/BecomeSponsorCard/BecomeSponsorCard'
import TalksCategory from '../../Talks/TalksCategory/TalksCategory'

class Sponsors extends Component {
	render(){
		return(
			<section className="Sponsors">
				<IntroHeader />
				<div className="Layout-width">
					<div className="Sponsors--Intro">
						<div className="Sponsors--Intro---Text">
							<div className="Headline">
								<div className="Headline--title">
									<h2>Sponsoring unleash</h2>
								</div>
							</div>
							<p>Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the echnologies and ways to apply them that will have the greatest potential impact and value. Join the movers and shakers!</p>
						</div>
						<OneLineTestimonial />
						<OneLineTestimonial cls="reverse" />
					</div>
					<div className="Headline">
						<div className="Headline--title">
							<h2>Sponsors 2018</h2>
						</div>
					</div>
					<PartnerSearch />
					<div className="Sponsors--wrp">
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" name="Oracle" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg" name="Clustree" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-workday.svg" name="Workday" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg" name="Clustree" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-workday.svg" name="Workday" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" name="Oracle" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" name="Oracle" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg" name="Clustree" />
						<BecomeSponsorCard />
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

export default Sponsors