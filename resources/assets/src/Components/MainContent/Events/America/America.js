import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import DragScroll from 'react-dragscroll';
import SubMenuUSA from '../SubMenu/SubMenuUSA/SubMenuUSA'

import Button from '../../Commons/Button/Button'

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

class America extends Component {

	render(){
		return(
			<section className="EventPage America">
				<SubMenuUSA active="Show"/> 
				<IntroHeader cls="America-hdr" eventName="UNLEASH America" eventCity="Las Vegas" eventVenue="Aria Hotel" eventDate="15-16 May 2018" h1="Future of work goes to Las Vegas!">
					<Link to="/america/tickets"><button className="btn-fw">Book now</button></Link>
				</IntroHeader>
				<div className="Layout-width">
					<div className="Intro--wrp">
						<IntroText
							h2="The future of work is now"
							p="Today we all have a responsibility to help unleash the potential of our people. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the technologies and ways to apply them that will have the greatest potential impact and value. UNLEASH America gives you the platform to meet with more than just the vendors, but also the leaders, decision makers and innovators shaping the way we work and get work done."/>
						<HeadlineSponsorsBox
							seeAll="/america/sponsors"
							sponsorImgBox_1="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg"
							sponsorImgBox_2="/storage/Gfx/Events/Sponsors/sponsorlogo-robotVera.svg"
							sponsorImgBox_3="/storage/Gfx/Events/Sponsors/sponsorlogo-IBM.svg"
							sponsorImgBox_4="/storage/Gfx/Events/Sponsors/sponsorlogo-arctic.svg"
							sponsorImgBox_5="/storage/Gfx/Events/Sponsors/sponsorlogo-tandem.svg"
							sponsorImgBox_6="/storage/Gfx/Events/Sponsors/sponsorlogo-clustree.svg"
							sponsorImgBox_7="/storage/Gfx/Events/Sponsors/sponsorlogo-robotVera.svg"
							sponsorImgBox_8="/storage/Gfx/Events/Sponsors/sponsorlogo-IBM.svg"
							sponsorImgBox_9="/storage/Gfx/Events/Sponsors/sponsorlogo-oracle.svg"
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
								     <span><Button name="Main Stage" cls={null} topic topicTitle="Main Stage" topicText="UNLEASH your people with the top minds in the Future of Work and technology. Our Main Stage packs the punch with experts from the most influential companies. These are the folks revolutionizing our world today. Over two days, our Main Stage will be the place to be for your utmost attention as we traverse and navigate technological disruptions and cultural shifts in the world of work with the help of these bold and courageous leaders." /></span>
								     <span><Button name="HR TECH" cls={null} topic topicTitle="HR TECH" topicText="Continuing our tradition of bringing you the latest in the Future of Work, this track takes you through real world examples of the use of tech in HR. We’ve got you covered with talks focusing on chatbots, AI, UX for employees, VR, and everything in between. Our expert speakers will also remind you to include the “human element” in the ever-increasing tech and digital-focused workplace." /></span>
								     <span><Button name="Recruitment" cls={null} topic topicTitle="Recruitment" topicText="In the age of shifting trends in recruitment it’s more important than ever to be up to date on the best practices and where the recruiting world is headed. The Recruitment track is the best place to find out the strategies top organizations are adopting, from recruiting Gen Z to approaching the gig economy. We’ll provide you the opportunity to learn how recruiters are tackling other issues like fighting ageism and sexism along with returning employees and untapped talent wells." /></span>
								     <span><Button name="Smart Data" cls={null} topic topicTitle="Smart Data" topicText="Year after year, organizations are realizing the importance of people analytics in the workplace. Here, you’ll get the scoop on making data the perfect bridge between HR and your company’s business strategy. We’ll give you the tools to step away from excel spreadsheets and find top analytics programs to amplify the data collection and processing in your company." /></span>
								     <span><Button name="Wellbeing & Inclusion" cls={null} topic topicTitle="Wellbeing & Inclusion" topicText="Your employees are the cornerstone of your company, and in this track, you’ll find the latest ways that companies are unleashing their employees’ potentials and take your workforce to the next level. Our speakers will guide you through their experiences using reverse mentoring, behavioral economics, internal training programs, and a wide variety of other methods to expand their employee’s skill set." /></span>
								     <span><Button name="Reboot HR" cls={null} topic topicTitle="Reboot HR" topicText="Need to see ideas in action? Or discuss how your organization will take it to the next level? UNLEASH’s Reboot HR is an intimate session that gives you a more hands on approach to where our workforce is headed. Chaired by experts in the world of work, this is your opportunity ask real questions and receive informative feedback on various topics from workplace happiness to recruiting your next brilliant employee." /></span>
								     <span><Button name="Adoption" cls={null} topic topicTitle="Adoption" topicText="Technology is useless unless you know how to use it. If you’ve been apprehensive about your tech, fear no more! Our Adoption tracks gives you a crash course on implementation of HR tech in your organization. Listen as practitioners give you their advice on best practices to get the most bang for your buck when shifting technology in your company." /></span>
								     <span><Button name="Talent Management" cls={null} topic topicTitle="Talent Management" topicText="How can your company create the ideal environment for your employees? Look no further than this dedicated track on maintaining your talent and ensuring they are living the life at your workplace. We have experts speaking on wellbeing programs to increasing engagement with the rise of AI and machine learning. Find the sweet spot for employee engagement and creating a positive company culture right here over the 2 days." /></span>
								     <span><Button name="Learning & Development" cls={null} topic topicTitle="Learning & Development" topicText="Training and development have never been more important than in today's fast-paced business environment. Learning technology is critical and getting it right even more so. Hear from senior learning practitioners and experts as they discuss innovative solutions to workplace learning and bring you insights into what works and what doesn't, as well as evaluating the steps you need to take to ensure you get technology that delivers on its promise." /></span>
								     <span><Button name="HR Tech Analysts" cls={null} topic topicTitle="HR Tech Analysts" topicText="What does the future hold for HR Tech? Does HR Tech deliver the goods and who does it best? What do buyers and users really want from their suppliers, and where are those suppliers on the magic quadrant? Leading analysts will be here to guide you through their latest research into the realities of HR systems and technology. Join the experts and get objective information on the past, present and future of HR Technology." /></span> 
								</div>
							</div>
							}
							bigSrc="/storage/Gfx/IntroBoxes/confExpo-america-big.jpg"
							smallSrcOne="/storage/Gfx/IntroBoxes/confExpo-america-smallOne.jpg"
							smallSrcTwo="/storage/Gfx/IntroBoxes/confExpo-america-smallTwo.jpg" >
			
							
					</IntroBoxes>
					<div className="Speakers--wrp">
						<div className="Headline">
							<div className="Headline--title">
								<h2>Our Speakers</h2>
							</div>
							<div className="Stripe"></div>
						</div>
						<SpeakerCardHighLight
							speakerIMG="/storage/Gfx/Events/Speakers/USA/garyHammel.png"
							speakerName="Gary Hammel"
							jobTitle="Author & Professor"
							company="London Business School"
							contentTitle="HUMANOCRACY | Creating organizations as amazing as the people inside them"
							contentText="Gary Hamel will go beyond the why and explain the how of unleashing the latent entrepreneurial energy that exists deep within large, established organizations. Entrepreneurship flourishes in organizations that are bold, simple, flat, and open, not the usual hallmarks of a typical large corporation, but they need to be, and they can be."
							bio="Tomorrow’s winners, as Gary will explain, are not those doing just one more re-org. What’s needed is an approach that’s emergent, collaborative, iterative, and inescapable; one that is more open innovation and less cultural revolution; revolutionary goals, evolutionary steps."
						/>
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
							<Link to="/america/speakers"><button className="btn-b">all Speakers</button></Link>
						</div>
					</div>
				</div>
					<div className="Agenda--wrp">
						<div className="Layout-width">
							<NewsLatestPopular name="Agenda" showCategs categOne="Day 01" categTwo="Day 02">
								<div className="Agenda--preview">
									<DragScroll width height>
										<div className="Agenda--preview---drag">
											<img src="/storage/Gfx/Agenda/agendaUSA-preview.png" alt="Agenda Preview" />
										</div>
									</DragScroll>
								</div>
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
									<Link to="/america/agenda"><button className="btn-b">full agenda</button></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="Layout-width">
						<div className="PromoBoxes--wrp">
							<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-startupsUSA.jpg" name="Startups" smallText="Sponsor, speak and compete" btnLink="/america/startup" btnName="Learn More" />
							<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-sponsorsUSA.jpg" name="Sponsors" smallText="5000 decision makers under one roof" btnLink="/america/sponsors" btnName="Learn More" />
							<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-TravelAMS-flying.jpg" name="Travel &amp; Venue" smallText="Discover the Venue" btnLink="/america/travel" btnName="Learn More" />
						</div>
						<TravelBanner discover="/america/travel" />
						<div className="Testimonial--wrp">
							<Testimonial 
								srcBig="/storage/Gfx/Testimonial/testimonialUSA-big.jpg"
								srcSmallOne="/storage/Gfx/Testimonial/testimonialUSA-smallOne.jpg"
								srcSmallTwo="/storage/Gfx/Testimonial/testimonialUSA-smallTwo.jpg"
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
								<Link to="/america/tickets">See all</Link>
							</div>
						</div>
			    	</div>	
		    		<DragScroll className="drag" width height>
			          	<div className="Layout-width">
				          	<div><TicketCard 
				          			ticketType="Single ticket"
				          			ticketPeriod="Super saver"
				          			ticketName="Expo Only"
				          			currency="$"
				          			price="900"
				          			saving="Save $120 off regular ticket price"
				          			bookingPlace="/america/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Early Bird"
				          			ticketName="Standard conference &amp; Expo"
				          			currency="$"
				          			price="1,230"
				          			saving="Save $90 off regular ticket price"
				          			bookingPlace="/america/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Investor ticket"
				          			ticketPeriod="Regular"
				          			ticketName="Expo Only"
				          			currency="$"
				          			price="1,720"
				          			saving="Save $550 off regular ticket price"
				          			bookingPlace="/america/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Single ticket"
				          			ticketPeriod="Late"
				          			ticketName="Standard conference &amp; Expo"
				          			currency="$"
				          			price="1,010"
				          			saving="Save $120 off regular ticket price"
				          			bookingPlace="/america/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Super saver"
				          			ticketName="Expo Only"
				          			currency="$"
				          			price="875"
				          			saving="Save $120 off regular ticket price"
				          			bookingPlace="/america/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Super saver"
				          			ticketName="Expo Only"
				          			currency="$"
				          			price="875"
				          			saving="Save $120 off regular ticket price"
				          			bookingPlace="/america/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Super saver"
				          			ticketName="Expo Only"
				          			currency="$"
				          			price="875"
				          			saving="Save $120 off regular ticket price"
				          			bookingPlace="/america/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Super saver"
				          			ticketName="Expo Only"
				          			currency="$"
				          			price="875"
				          			saving="Save $120 off regular ticket price"
				          			bookingPlace="/america/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Super saver"
				          			ticketName="Expo Only"
				          			currency="$"
				          			price="875"
				          			saving="Save $120 off regular ticket price"
				          			bookingPlace="/america/tickets" />
				          	</div>
				          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Super saver"
				          			ticketName="Expo Only"
				          			currency="$"
				          			price="875"
				          			saving="Save $120 off regular ticket price"
				          			bookingPlace="/america/tickets" />
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

export default America