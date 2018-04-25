import React from 'react'
import DragScroll from 'react-dragscroll'
import {Link} from 'react-router-dom'

import SubMenuUSA from '../../SubMenu/SubMenuUSA/SubMenuUSA'
import Button from '../../../Commons/Button/Button'

import IntroHeader from '../../../IntroHeader/IntroHeader'
import IntroBoxes from '../../../IntroBoxes/IntroBoxes'
import SmallBox from '../../../IntroBoxes/SmallBox/SmallBox'
import OneLineTestimonial from '../../../Testimonial/OneLine-Testimonial/OneLineTestimonial'
import SponsorCard from '../../Sponsors/SponsorCard/SponsorCard'
import BecomeCard from '../../BecomeCard/BecomeCard'
import TwitterCard from '../../../Twitter/TwitterCard/TwitterCard'
import SpeakerCard from '../../Speakers/SpeakerCard/SpeakerCard'
import SponsorImgBox from '../../Sponsors/Sponsor/SponsorImgBox/SponsorImgBox'
import AgendaSessionCard from '../../../Agenda/AgendaSessionCard/AgendaSessionCard'
import ContactPerson from '../../../About/ContactPerson/ContactPerson'

const StartupAMS = () => (
	<section className="Startup America">
		<SubMenuUSA active="Startups"/>
		<IntroHeader cls="StartupUSA-hdr" eventName="UNLEASH America" eventCity="Las Vegas" eventVenue="Aria Hotel" eventDate="15-16 May 2018" h1="Startup Expo Las Vegas 2018">
			<Button cls="btn-fw" name="Register" modalTitle="Register" modalText="Register Text Example .." />
		</IntroHeader>
		<div className="GreyBG">
			<div className="Layout-width">
				<div className="Headline">
					<div className="Headline--title">
						<h2>startup SPONSORS</h2>
					</div>
				</div>
				<div className="HeadlineSponsorsBox--Sponsors">
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" />
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-robotVera.svg" />
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-IBM.svg"/>
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-arctic.svg"/>
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-tandem.svg"/>
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg"/>
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-robotVera.svg" />
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-IBM.svg"/>
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-arctic.svg"/>
				</div>
			</div>
		</div>
		<div className="linear-BG"></div>
		<div className="Layout-width">
			<IntroBoxes
				contentBox={
					<div className="ContentBox--wrp">
				      <h2>ABOUT THE STARTUP ZONE</h2>
				      <p>We aim to be different. We help innovative solutions contribute to the Future of Work where the focus is on your potential to change the world through improving the workplace. If you have a great idea or product which contributes to this, we will provide you with the platform communicate it and gain visibility. Be different.</p>
				      <p>We help competition innovative solutions contribute to the Future of Work where the focus is on your potential to change the world through improving the workplace. If you have a great idea or product which contridea or product which contributes to this, we will provide you with the platform communicate it and gain visibility. Be different.</p>
				      <Button cls="btn-b" name="Register" modalTitle="Register" modalText="Register Text Example .." />
				    </div>
				}
				bigSrc="/storage/Gfx/IntroBoxes/startup-america-big.jpg"
				smallSrcOne="/storage/Gfx/IntroBoxes/startup-america-smallOne.jpg"
				smallSrcTwo="/storage/Gfx/IntroBoxes/startup-america-smallTwo.jpg" >
			</IntroBoxes>
			<div className="Headline">
				<div className="Headline--title">
					<h2>startup exhibitors 2018</h2>
				</div>
			</div>
			<div className="Exhibitors--wrp">
				<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" name="Oracle" />
				<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg" name="Clustree" />
				<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-workday.svg" name="Workday" />
				<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg" name="Clustree" />
				<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-workday.svg" name="Workday" />
				<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" name="Oracle" />
				<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" name="Oracle" />
				<SponsorCard src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg" name="Clustree" />
				<BecomeCard className="SponsorCard" name="REGISTER AS AN EXHIBITOR" slogen="Let’s shape the future of work together!"/>
			</div>
			<div className="Twitter--wrp">
				<div className="Headline">
					<div className="Headline--title">
						<h2>Startups Said</h2>
					</div>
					<div className="Stripe"></div>
				</div>
				<TwitterCard
								twitterProfile="/storage/Gfx/Twitter/twitter-eliz.png"
								twitterName="Elizabeth Johnson"
								twitterAccount="@liz_johnson" > 
								<div className="TwitterCard--Content">
									<p>I really enjoyed last year's <strong className="atSign">@UnleashAmerica</strong>. The whole conference was very well organised. The expo was surprisingly lively too. Definitely one of the most inspiring events I've attended so far 🤘👏</p>
								</div>
								<div><span>Jan 15, 2018 <div className="DOT">&middot;</div> Las Vegas, USA</span></div>
							</TwitterCard>
							<TwitterCard
								twitterProfile="/storage/Gfx/Twitter/twitter-joey.png"
								twitterName="Joey Tribbiani"
								twitterAccount="@how_you_doin" > 
								<div className="TwitterCard--Content">
									<p>I really enjoyed last year's <strong className="atSign">@UnleashAmerica</strong>. The whole conference was very well organised. The expo was surprisingly lively too. Definitely one of the most inspiring events I've attended so far 🤘👏</p>
								</div>
								<div><span>Jan 23, 2018 <div className="DOT">&middot;</div> Las Vegas, USA</span></div>
							</TwitterCard>
							<TwitterCard
								twitterProfile="/storage/Gfx/Twitter/twitter-curtis.png"
								twitterName="Curtis Teller"
								twitterAccount="@curteller" > 
								<div className="TwitterCard--Content">
									<p>I really enjoyed last year's <strong className="atSign">@UnleashAmerica</strong>. The whole conference was very well organised. The expo was surprisingly lively too. Definitely one of the most inspiring events I've attended so far 🤘👏</p>
								</div>
								<div><span>Jan 2, 2018 <div className="DOT">&middot;</div> Las Vegas, USA</span></div>
							</TwitterCard>
			</div>
		</div>
		<div className="OneLine--About">
			<div className="Layout-width">
				<div className="OneLine--About---wrp">
					<div className="OneLine--About--text">
						<div className="Headline">
							<div className="Headline--title">
								<h2>ABOUT THE COMPETITION</h2>
							</div>
						</div>
						<p>Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the echnologies and ways to apply them that will have the greatest potential impact and value. Join the movers and shakers!</p>
						<Button cls="btn-b" name="Apply" modalTitle="Apply to the Competition" modalText="Apply Text Example .." />
					</div>
					<div className="ImgBoxes--wrp">
						<SmallBox title="REGISTRATION CLOSES ON" date="2018. 06. 12" />
					</div>
				</div>
			</div>
		</div>
		<div className="GreyBG">
			<div className="Layout-width">
				<div className="Headline">
					<div className="Headline--title">
						<h2>Previous winners</h2>
					</div>
				</div>
				<div className="HeadlineSponsorsBox--Sponsors">
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg" />
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-robotVera.svg" />
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-IBM.svg"/>
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-arctic.svg"/>
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-tandem.svg"/>
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg"/>
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-robotVera.svg" />
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-IBM.svg"/>
					<SponsorImgBox src="/storage/Gfx/Events/Sponsors/sponsorlogo-arctic.svg"/>
				</div>
			</div>
		</div>
		<div className="linear-BG"></div>
		<div className="Layout-width">
			<div className="OneLine--Testimonial---wrp">
				<OneLineTestimonial 
							smallSrcOne="/storage/Gfx/Testimonial/oneLine-AMSstartup-smallOne.jpg"
							smallSrcTwo="/storage/Gfx/Testimonial/oneLine-AMSstartup-smallTwo.jpg"
						/>
			</div>
			<div className="Startup--Jury">
				<div className="Headline">
					<div className="Headline--title">
						<h2>Startup Jury</h2>
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
		<div className="Agenda--wrp">
			<div className="Layout-width">
				<div className="Agenda--HighlightSessions">
					<div className="Headline">
						<div className="Headline--title">
							<h2>Startup Highlights</h2>
						</div>
						<div className="Stripe"></div>
					</div>
					<DragScroll className="drag" width height>
						<div>
							<AgendaSessionCard 
								color="red"
								content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
								limit={130}
							/>
						</div>
						<div>
							<AgendaSessionCard 
								content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
								limit={130}
							/>
						</div>
						<div>
							<AgendaSessionCard 
								content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur"
								limit={130}
							/>
						</div>
						<div>
							<AgendaSessionCard color="red" 
								content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
								limit={130}
							/>
						</div>
					</DragScroll>
					<div className="Session--more">
						<Link to="/america/agenda"><button className="btn-b">Full agenda</button></Link>
					</div>
				</div>
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

export default StartupAMS