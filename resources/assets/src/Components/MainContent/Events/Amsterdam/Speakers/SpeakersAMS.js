import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SubMenuAMS from '../../SubMenu/SubMenuAMS/SubMenuAMS'

import Button from '../../../Commons/Button/Button'

import IntroHeader from '../../../IntroHeader/IntroHeader'
import IntroBoxes from '../../../IntroBoxes/IntroBoxes'
import SmallBox from '../../../IntroBoxes/SmallBox/SmallBox'
import SpeakerCard from '../../Speakers/SpeakerCard/SpeakerCard'
import SpeakerCardHighLight from '../../Speakers/SpeakerCard/SpeakerCardHighLight/SpeakerCardHighLight'
import BecomeCard from '../../BecomeCard/BecomeCard'
import TalksCategory from '../../../Talks/TalksCategory/TalksCategory'


class SpeakersAMS extends Component {
	render(){
		return(
			<section className="Speakers Amsterdam">
				<SubMenuAMS active="Speakers"/> 
				<IntroHeader cls="SpeakersAMS-hdr" eventName="UNLEASH World Conference & Expo" eventCity="Amsterdam" eventVenue="RAI" eventDate="23-24 October 2018" h1="Our Speakers">
					<Link to="/amsterdam/tickets"><button className="btn-fw">Book now</button></Link>
				</IntroHeader>
				<div className="Layout-width">
					<div className="Speakers--wrp">
						<IntroBoxes
							contentBox={
								<div className="ContentBox--wrp">
							      <h2>Speaking at unleash</h2>
							      <p>Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the technologies and ways to. Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how.</p>
							      <p>Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the technologies and ways to.</p>
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
							bigSrc="/storage/Gfx/IntroBoxes/speakers-amsterdam-big.jpg"
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
							<SpeakerCardHighLight />
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

export default SpeakersAMS