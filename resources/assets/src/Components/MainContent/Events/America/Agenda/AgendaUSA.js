import React from 'react'
import DragScroll from 'react-dragscroll'
import {Link} from 'react-router-dom'

import SubMenuUSA from '../../SubMenu/SubMenuUSA/SubMenuUSA'
import Button from '../../../Commons/Button/Button'

import IntroHeader from '../../../IntroHeader/IntroHeader'
import NewsLatestPopular from '../../../News/NewsLatestPopular/NewsLatestPopular'
import AgendaSessionCard from '../../../Agenda/AgendaSessionCard/AgendaSessionCard'

const AgendaUSA = () => (
	<section className="Agenda America">
		<SubMenuUSA active="Agenda" />
		<IntroHeader cls="AgendaUSA-hdr" eventName="UNLEASH America" eventCity="Las Vegas" eventVenue="Aria Hotel" eventDate="15-16 May 2018" h1="Agenda">
			<Link to="/america/tickets"><button className="btn-fw">Book now</button></Link>
		</IntroHeader>
		<div className="GreyBG-72">
			<div className="Layout-width">
				<NewsLatestPopular name="Overview" showCategs categOne="Day 01" categTwo="Day 02">
					<div className="Agenda--preview">
						<DragScroll width height>
							  <div className="Agenda--preview---drag"><img src="/storage/Gfx/Agenda/agendaUSA-preview.png" alt="Agenda Preview" /></div>
						</DragScroll>
					</div>
				</NewsLatestPopular>
				<div className="Headline">
					<div className="Headline--title">
						<h2>Sessions</h2>
					</div>
				</div>
				<div className="Agenda--contentTable">
					<div className="Agenda--timeWrp">
						<h2>DAY 1 - 07:30 gate opening</h2>
						<div className="Agenda--cardWrp">
							<AgendaSessionCard 
								color="red"
								content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
								limit={130}
							/>
						</div>
					</div>
					<div className="Agenda--timeWrp">
						<h2>08:00</h2>
						<div className="Agenda--cardWrp">
							<AgendaSessionCard 
								color="green"
								content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
								limit={130}
							/>
							<AgendaSessionCard 
								color="green"
								content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
								limit={130}
							/>
						</div>
					</div>
					<div className="Agenda--timeWrp">
						<h2>09:00</h2>
						<div className="Agenda--cardWrp">
							<AgendaSessionCard 
								color="red"
								content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
								limit={130}
							/>
						</div>
					</div>
					<div className="Agenda--timeWrp">
						<h2>10:00</h2>
						<div className="Agenda--cardWrp">
							<AgendaSessionCard 
								color="green"
								content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
								limit={130}
							/>
							<AgendaSessionCard 
								color="green"
								content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
								limit={130}
							/>
							<AgendaSessionCard 
								color="green"
								content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
								limit={130}
							/>
						</div>
					</div>
					<div className="Agenda--timeWrp">
						<h2>11:00</h2>
						<div className="Agenda--cardWrp">
							<AgendaSessionCard 
								color="green"
								content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet AND Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmo or sit amet Lorem ipsum dolor sit amet"
								limit={130}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default AgendaUSA