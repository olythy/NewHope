import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SubMenuAMS from '../SubMenu/SubMenuAMS/SubMenuAMS'

import IntroHeader from '../../IntroHeader/IntroHeader'
import IntroBoxes from '../../IntroBoxes/IntroBoxes'
import SmallBox from '../../IntroBoxes/SmallBox/SmallBox'
import SpeakerCard from './SpeakerCard/SpeakerCard'
import SpeakerCardHighLight from './SpeakerCard/SpeakerCardHighLight/SpeakerCardHighLight'
import BecomeSpeakerCard from './SpeakerCard/BecomeSpeakerCard/BecomeSpeakerCard'
import TalksCategory from '../../Talks/TalksCategory/TalksCategory'
import PartnerSearch from '../../PartnerSearch/PartnerSearch'


class Speakers extends Component {
	render(){
		return(
			<section className="Speakers">
				<SubMenuAMS /> 
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
							      <button className="btnspn-b">
						              <span className="border-top">
						                <span className="transparent"></span>
						              </span>
						                Suggest a speaker
						              <span className="border-bottom">
						                <span className="transparent"></span>
						              </span>
							       </button>
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
							<PartnerSearch />
							<div className="SpeakerCards--wrp">
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<BecomeSpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<SpeakerCard />
								<BecomeSpeakerCard />
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
								<BecomeSpeakerCard />
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

export default Speakers