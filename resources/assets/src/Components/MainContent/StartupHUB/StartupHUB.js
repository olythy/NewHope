	import React from 'react'

	import IntroHeader from '../IntroHeader/IntroHeader'
	import OneLineTestimonial from '../Testimonial/OneLine-Testimonial/OneLineTestimonial'
	import SponsorCard from '../Events/Sponsors/SponsorCard/SponsorCard'
	import BecomeCard from '../Events/BecomeCard/BecomeCard'
	import SpeakerCard from '../Events/Speakers/SpeakerCard/SpeakerCard'
	import ContactPerson from '../About/ContactPerson/ContactPerson'
	import PromoBox from '../PromoBox/PromoBox'
	import NewsLatestPopular from '../News/NewsLatestPopular/NewsLatestPopular'
	import NewsCard from '../News/NewsCard/NewsCard'

	import Button from '../Commons/Button/Button'


	const StartupHUB = () => (
		<section className="StartupHUB">
			<IntroHeader cls="StartupECO-hdr" h1="Why we do startups">
				<Button cls="btn-fw" name="Join Us" modalTitle="Join us" modalText="Join us text example .." />
			</IntroHeader>
			<div className="Layout-width">
				<div className="TextBox">
					<div className="TextBox--Text">
						<div className="Headline">
							<div className="Headline--title">
								<h2>whats going on in the startup world?</h2>
							</div>
						</div>
						<p>Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the echnologies and ways to apply them that will have the greatest potential impact and value. Join the movers and shakers!</p>
					</div>
					<OneLineTestimonial 
						cls="orange"
						smallSrcOne="/storage/Gfx/Testimonial/oneLine-AMSstartup-smallOne.jpg"
						smallSrcTwo="/storage/Gfx/Testimonial/oneLine-AMSstartup-smallTwo.jpg"
					/>
				</div>
				<div className="TextBox">
					<div className="TextBox--Text">
						<div className="Headline">
							<div className="Headline--title">
								<h2>whats going on in the startup world?</h2>
							</div>
						</div>
						<p>Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the echnologies and ways to apply them that will have the greatest potential impact and value. Join the movers and shakers!</p>
						<p>Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the echnologies and ways to apply them that will have the greatest potential impact and value. Join the movers and shakers!</p>
						<p>Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the echnologies and ways to apply them that will have the greatest potential impact and value. Join the movers and shakers!</p>
						<p>Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the echnologies and ways to apply them that will have the greatest potential impact and value. Join the movers and shakers!</p>
					</div>
				</div>
				<div className="videoWrapper">
					<iframe width="854" height="480" src="https://www.youtube.com/embed/LOuhHPJQn94" frameBorder="0"></iframe>
				</div>
					<div className="Startup--Jury">
						<div className="Headline">
							<div className="Headline--title">
								<h2>startup experts</h2>
							</div>
							<div className="Stripe"></div>
						</div>
						<div className="SpeakerCards--wrp">
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
						</div>
					</div>
				</div>
				<div className="GreyBG-72">
					<div className="Layout-width">
						<div className="InfoGraph">
							<h1>Lets see the numbers</h1>
							<p>We’re constantly improving on the ‘science of the Startup Zone’ to understand what works best, and this year alone we’ve already debuted new competition formats and the ultra-successful Investor/Startup Speed-Dating sessions. We’ve got a lot more up our sleeves here at UNLEASH HQ, though. We can’t give away the details yet, but keep your ear to the ground for new formats and sessions coming up in late 2018!</p>
							<h2><strong>3</strong> events <strong>256</strong> speakers <strong>3</strong> stages <strong>364</strong> sessions <strong>68</strong> startups <strong>72</strong> competitors</h2>
						</div>
					</div>
				</div>
				<div className="Layout-width">
					<div className="Headline">
						<div className="Headline--title">
							<h2>investors</h2>
						</div>
						<div className="Stripe"></div>
					</div>
					<div className="Exhibitors--wrp">
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" name="Oracle" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg" name="Clustree" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-workday.svg" name="Workday" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg" name="Clustree" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-workday.svg" name="Workday" />
						<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" name="Oracle" />
					</div>
					<div className="Headline">
						<div className="Headline--title">
							<h2>startup zones</h2>
						</div>
						<div className="Stripe"></div>
					</div>
					<div className="PromoBoxes--wrp">
						<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-USA-expo.jpg" name="Las Vegas 2018" btnName="Learn more" smallText="Registration closes on 24.12.2018" btnLink="/america/startup" />
						<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-AMS-expo.jpg" name="Amsterdam 2018" btnName="Learn more" smallText="Be a part of our shows" btnLink="/amsterdam/startup" />
						<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-LON-expo.jpg" name="London 2018" btnName="Learn more" smallText="Sponsor,speak and compete" btnLink="/london" />
					</div>
				</div>
			<div className="GreyBG-72">
				<div className="Layout-width">
					<NewsLatestPopular name="Startup news" stripe>
                    	<NewsCard />
                    	<NewsCard />
                    	<NewsCard />
                    	<NewsCard />
                	</NewsLatestPopular>
				</div>
			</div>
			<ContactPerson
					contactIMG="/storage/Gfx/About/contactPerson-Anna.png"
			  		contactName="Anna Ott"
			  		contactJobTitle="Head of unleash Startup"
			  		contactMail="anna@unleashgroup.io"
			  		contactLinkedin="/storage/Gfx/Events/Speakers/speaker-linkedin.svg"
			  		contactTwitter="/storage/Gfx/Events/Speakers/speaker-twitter.svg"
				/>
		</section>
	)

	export default StartupHUB