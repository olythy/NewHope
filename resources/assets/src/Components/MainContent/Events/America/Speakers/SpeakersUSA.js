import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SubMenuUSA from '../../SubMenu/SubMenuUSA/SubMenuUSA'

import Button from '../../../Commons/Button/Button'

import IntroHeader from '../../../IntroHeader/IntroHeader'
import IntroBoxes from '../../../IntroBoxes/IntroBoxes'
import SmallBox from '../../../IntroBoxes/SmallBox/SmallBox'
import SpeakerCard from '../../Speakers/SpeakerCard/SpeakerCard'
import SpeakerCardHighLight from '../../Speakers/SpeakerCard/SpeakerCardHighLight/SpeakerCardHighLight'
import BecomeCard from '../../BecomeCard/BecomeCard'
import TalksCategory from '../../../Talks/TalksCategory/TalksCategory'


class SpeakersUSA extends Component {
	render(){
		return(
			<section className="Speakers America">
				<SubMenuUSA active="Speakers"/> 
				<IntroHeader cls="SpeakersUSA-hdr" eventName="UNLEASH America" eventCity="Las Vegas" eventVenue="Aria Hotel" eventDate="15-16 May 2018" h1="Our Speakers">
					<Link to="/america/tickets"><button className="btn-fw">Book now</button></Link>
				</IntroHeader>
				<div className="Layout-width">
					<div className="Speakers--wrp">
						<IntroBoxes
							contentBox={
								<div className="ContentBox--wrp">
							      <h2>Speaking at unleash</h2>
							      <p>Human Resources is not only HR’s responsibility anymore. The Future of Work is now, and enterprise leadership needs to transform and evolve if they want to stay a step ahead of the speed of innovation. Our speakers are world thought leaders, innovators and disruptors from the biggest brands and cutting-edge startups in the space, joining us from 120 countries and 100 industries for two days of inspiring stories, networking and fun.</p>
							      <p>Got an amazing story to share or have someone in mind who would rock the stage? Get in touch below and help shape our program!</p>
							      <div className="btnspn-b">
						              <span className="border-top">
						                <span className="transparent"></span>
						              </span>
						                <Button cls={null} name="Apply to Speak" modalTitle="Apply to Speak" modalText="If you would like to join our incredible community of thought leaders and influencers from the HR industry, please fill out the following details and we will get in touch with you." />
						              <span className="border-bottom">
						                <span className="transparent"></span>
						              </span>
							       </div>
							    </div>
							}
							bigSrc="/storage/Gfx/IntroBoxes/speakers-america-big.jpg"
							smallTitle="BIGGEST SHOW OF ALL TIME. I loved it!"
							smallPerson="Jim Gustavson"
							smallJobTitle="Founder of Default Company Ltd."
							smallSrcTwo="/storage/Gfx/IntroBoxes/speakers-amsterdam-smallTwo.jpg" >
						</IntroBoxes>
						<div className="Speakers--mrg">
							<div className="Headline">
								<div className="Headline--title">
									<h2>Keynote speaker</h2>
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
							<div className="Headline">
								<div className="Headline--title">
									<h2>ANNOUNCED speakers</h2>
								</div>
							</div>
							<div className="SpeakerCards--wrp">
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<BecomeCard className="SpeakerCard" name="Become or suggest a speaker" slogen="Shape the future of
work together!" modalText="Become a speaker Example Text" />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<BecomeCard className="SpeakerCard" name="Become or suggest a speaker" slogen="Shape the future of
work together!" modalText="Become a speaker Example Text" />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
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
						</div>
					</div>
				</div>
				<div className="GreyBG-72">
					<div className="Layout-width">
						<TalksCategory name="Last year's talks" />
					</div>
				</div>
			</section>
		)
	}
}

export default SpeakersUSA