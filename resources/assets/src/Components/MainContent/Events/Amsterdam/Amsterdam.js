import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import DragScroll from 'react-dragscroll';
import SubMenuAMS from '../SubMenu/SubMenuAMS/SubMenuAMS'
import Button from '../../Commons/Button/Button'

import AgendaPreview from '../../Agenda/AgendaPreview/AgendaPreview'

import SpeakerCard from '../Speakers/SpeakerCard/SpeakerCard'
import SpeakerCardHighLight from '../Speakers/SpeakerCard/SpeakerCardHighLight/SpeakerCardHighLight'
import BecomeCard from '../BecomeCard/BecomeCard'
import IntroBoxes from '../../IntroBoxes/IntroBoxes'
import IntroText from '../../IntroText/IntroText'
import IntroHeader from '../../IntroHeader/IntroHeader'
import HeadlineSponsorsBox from '../Sponsors/HeadlineSponsorsBox/HeadlineSponsorsBox'
import AgendaSessionCard from '../../Agenda/AgendaSessionCard/AgendaSessionCard'
import Testimonial from '../../Testimonial/Testimonial'
import TalksCategory from '../../Talks/TalksCategory/TalksCategory'
import TwitterCard from '../../Twitter/TwitterCard/TwitterCard'
import TravelBanner from '../Travel/TravelBanner/TravelBanner'
import PromoBox from '../../PromoBox/PromoBox'
import TicketCard from '../Tickets/TicketCard/TicketCard'
import NewsLatestPopular from '../../News/NewsLatestPopular/NewsLatestPopular'

class Amsterdam extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<section className="EventPage Amsterdam">
				<SubMenuAMS active="Show"/>
				<IntroHeader cls="Amsterdam-hdr" eventName="UNLEASH World Conference & Expo" eventCity="Amsterdam" eventVenue="RAI" eventDate="23-24 October 2018" h1="Future of work goes to Amsterdam!">
					<Link to="/amsterdam/tickets"><button className="btn-fw">Book now</button></Link>
				</IntroHeader>
				<div className="Layout-width">
					<div className="Intro--wrp">
						<IntroText
							h2="THE FUTURE OF WORK IS AMS"
							p="Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the technologies and ways to apply them that will have the greatest potential impact and value. Brought to you by the team behind UNLEASH World Conference & Expo (formerly HR Tech World)"
						/>
						<HeadlineSponsorsBox
							seeAll="/amsterdam/sponsors"
							sponsorImgBox_1="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg"
							sponsorImgBox_2="/storage/Gfx/Events/Sponsors/sponsorlogo-robotVera.svg"
							sponsorImgBox_3="/storage/Gfx/Events/Sponsors/sponsorlogo-IBM.svg"
							sponsorImgBox_4="/storage/Gfx/Events/Sponsors/sponsorlogo-arctic.svg"
							sponsorImgBox_5="/storage/Gfx/Events/Sponsors/sponsorlogo-tandem.svg"
							sponsorImgBox_6="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg"
							sponsorImgBox_7="/storage/Gfx/Events/Sponsors/sponsorlogo-robotVera.svg"
							sponsorImgBox_8="/storage/Gfx/Events/Sponsors/sponsorlogo-IBM.svg"
							sponsorImgBox_9="/storage/Gfx/Events/Sponsors/sponsorlogo-arctic.svg"
						/>
					</div>
					<IntroBoxes 
						contentBox={
							<div className="ContentBox--inner">
								<div className="ContentBox--wrp">
							      <h2>Conference &amp; Expo</h2>
							      <p>The expo at Unleash is more than just a showcase of vendors - it’s full of interactivity, excitement, fun, friendships and entertainment. Its where those shaping the future of work and technology – from large enterprises to the next innovators from around the world – network and meet up.</p>
							    </div>
							    <div className="ContentBox--topics">
								     <h2>See our topics</h2>
								     <span><Button name="Future of Work" cls={null} topic topicTitle="Future of Work" topicText="This is a Topic Text example" /></span>
								     <span><Button name="Smart Data" cls={null} topic topicTitle="Smart Data" topicText="This is a Topic Text example" /></span>
								     <span><Button name="Recruitment" cls={null} topic topicTitle="Recruitment" topicText="This is a Topic Text example" /></span>
								     <span><Button name="Talent & Recruitment" cls={null} topic topicTitle="Talent & Recruitment" topicText="This is a Topic Text example" /></span>
								     <span><Button name="Wellbeing & Engagement" cls={null} topic topicTitle="Wellbeing & Engagement" topicText="This is a Topic Text example" /></span>
								     <span><Button name="Adoption" cls={null} topic topicTitle="Adoption" topicText="This is a Topic Text example" /></span>
								     <span><Button name="HR Tech Analysts" cls={null} topic topicTitle="HR Tech Analysts" topicText="This is a Topic Text example" /></span>
								     <span><Button name="Think-Thank" cls={null} topic topicTitle="Think-Thank" topicText="This is a Topic Text example" /></span>
								     <span><Button name="Employee Experience" cls={null} topic topicTitle="Employee Experience" topicText="This is a Topic Text example" /></span>
								     <span><Button name="Going Digital" cls={null} topic topicTitle="Going Digital" topicText="This is a Topic Text example" /></span>
								     <span><Button name="Startup Stage" cls={null} topic topicTitle="Startup Stage" topicText="This is a Topic Text example" /></span>
								     <span><Button name="HR Technology" cls={null} topic topicTitle="HR Technology" topicText="This is a Topic Text example" /></span>
								     <span><Button name="Learning" cls={null} topic topicTitle="Learning" topicText="This is a Topic Text example" /></span>
								     <span><Button name="Product Demos" cls={null} topic topicTitle="Product Demos" topicText="This is a Topic Text example" /></span> 
								</div>
							</div>
							}
							bigSrc="/storage/Gfx/IntroBoxes/confExpo-amsterdam-big.jpg"
							smallSrcOne="/storage/Gfx/IntroBoxes/confExpo-amsterdam-smallOne.jpg"
							smallSrcTwo="/storage/Gfx/IntroBoxes/confExpo-amsterdam-smallTwo.jpg" >
			
							
					</IntroBoxes>
					<div className="Speakers--wrp">
						<div className="Headline">
							<div className="Headline--title">
								<h2>Our Speakers</h2>
							</div>
							<div className="Stripe"></div>
						</div>
						<SpeakerCardHighLight />
						<div className="SpeakerCards--wrp">
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<BecomeCard className="SpeakerCard" name="Become or suggest a speaker" slogen="Shape the future of
work together!" modalText="Become a speaker Example Text" />
						</div>
						<div className="Session--more">
							<Link to="/amsterdam/speakers"><button className="btn-b">all Speakers</button></Link>
						</div>
					</div>
				</div>
					<div className="Agenda--wrp">
						<div className="Layout-width">
							<NewsLatestPopular name="Agenda" showCategs categOne="Day 01" categTwo="Day 02">
								<AgendaPreview />
							</NewsLatestPopular>
							<div className="Agenda--HighlightSessions">
								<div className="Headline">
									<div className="Headline--title">
										<h2>Highlighted Sessions</h2>
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
									<Link to="/amsterdam/agenda"><button className="btn-b">full agenda</button></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="Layout-width">
						<div className="PromoBoxes--wrp">
							<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-startups.jpg" name="Startups" smallText="Sponsor, speak and compete" btnName="Learn more" btnLink="/amsterdam/startup"/>
							<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-sponsors.jpg" name="Sponsors" smallText="5000 decision makers under one roof" btnName="Learn more" btnLink="/amsterdam/sponsors"/>
							<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-volunteers.jpg" name="Volunteering" smallText="Be a part of our shows" btnName="Learn more" btnLink="/amsterdam/volunteer"/>
						</div>
						<TravelBanner discover="/amsterdam/travel" />
						<div className="Testimonial--wrp">
							<Testimonial 
								srcBig="/storage/Gfx/Testimonial/testimonial-big.jpg"
								srcSmallOne="/storage/Gfx/Testimonial/testimonial-smallOne.jpg"
								srcSmallTwo="/storage/Gfx/Testimonial/testimonial-smallTwo.jpg"
							/>
						</div>
					</div>
			    
			    <div className="Tickets--wrp Single">
			    	<div className="Layout-width">
			    		<div className="Headline">
							<div className="Headline--title">
								<h2>Tickets</h2>
							</div>
							<div className="Stripe"></div>
							<div className="seeAll">
								<Link to="/amsterdam/tickets">See all</Link>
							</div>
						</div>
			    	</div>	
		    		<DragScroll className="drag" width height>
			          	<div className="Layout-width">
				          	<div><TicketCard 
				          			ticketType="Single ticket"
				          			ticketPeriod="Super saver"
				          			ticketName="Expo Only"
				          			currency="&euro;"
				          			price="900"
				          			saving="Save &euro;120 off regular ticket price"
				          			bookingPlace="/amsterdam/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Early Bird"
				          			ticketName="Standard conference &amp; Expo"
				          			currency="&euro;"
				          			price="1,230"
				          			saving="Save &euro;90 off regular ticket price"
				          			bookingPlace="/amsterdam/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Investor ticket"
				          			ticketPeriod="Regular"
				          			ticketName="Expo Only"
				          			currency="&euro;"
				          			price="1,720"
				          			saving="Save &euro;550 off regular ticket price"
				          			bookingPlace="/amsterdam/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Single ticket"
				          			ticketPeriod="Late"
				          			ticketName="Standard conference &amp; Expo"
				          			currency="&euro;"
				          			price="1,010"
				          			saving="Save &euro;120 off regular ticket price"
				          			bookingPlace="/amsterdam/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Super saver"
				          			ticketName="Expo Only"
				          			currency="&euro;"
				          			price="875"
				          			saving="Save &euro;120 off regular ticket price"
				          			bookingPlace="/amsterdam/tickets" />
				          	</div>
				          	
			          	</div>
					</DragScroll> 	
			    </div>
				    
				<div className="Talks-and-Twitter--wrp">
					<div className="Layout-width">
						<TalksCategory name="Talks" />
						<div className="Twitter--wrp">
							<div className="Headline">
								<div className="Headline--title">
									<h2>Chatter</h2>
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
				</div> 
				
			</section>
		)
	}
}

export default Amsterdam