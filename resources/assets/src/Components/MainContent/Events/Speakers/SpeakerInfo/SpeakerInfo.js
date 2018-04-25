import React from 'react'
import SpeakerCardHighLight from '../SpeakerCard/SpeakerCardHighLight/SpeakerCardHighLight'
import AgendaSessionCard from '../../../Agenda/AgendaSessionCard/AgendaSessionCard'
import NewsLetterBanner from '../../../NewsLetter-MobileApp-Banner/NewsLetterBanner/NewsLetterBanner'

const SpeakerInfo = () => (
	<section className="SpeakerInfo">
		<div className="Layout-width">
			<div className="SpeakerInfo--wrp">
				<SpeakerCardHighLight />
			</div>
			<div className="Headline">
				<div className="Headline--title">
					<h2>More from Elon</h2>
				</div>
			</div>
            <div className="Agenda--wrp">
            	<AgendaSessionCard 
					color="red"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
					limit={130}
				/>
            	<AgendaSessionCard 
					color="red"
					content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
					limit={130}
				/>
            </div>
		</div>
	</section>
)

export default SpeakerInfo