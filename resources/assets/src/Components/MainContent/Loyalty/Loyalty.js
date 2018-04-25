import React from 'react'

import IntroHeader from '../IntroHeader/IntroHeader'
import OneLineTestimonial from '../Testimonial/OneLine-Testimonial/OneLineTestimonial'
import SponsorCard from '../Events/Sponsors/SponsorCard/SponsorCard'
import BecomeCard from '../Events/BecomeCard/BecomeCard'
import ContactPerson from '../About/ContactPerson/ContactPerson'

const Loyalty = () => (
	<section className="Loyalty">
		<IntroHeader />
		<div className="Layout-width">
			<div className="TextBox">
				<div className="TextBox--Text">
					<div className="Headline">
						<div className="Headline--title">
							<h2>Why is it good to be a loyalty member?</h2>
						</div>
					</div>
					<p>Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the echnologies and ways to apply them that will have the greatest potential impact and value. Join the movers and shakers!</p>
				</div>
				<OneLineTestimonial />
			</div>
			<div className="Headline">
				<div className="Headline--title">
					<h2>Loyalty Members</h2>
				</div>
				<div className="Stripe"></div>
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
				<BecomeCard className="SponsorCard" name="Be a loyalty member!" slogen="Let’s shape the future of work together!" />
			</div>
		</div>
		<ContactPerson />
	</section>
)

export default Loyalty