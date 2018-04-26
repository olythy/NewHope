import React from 'react'
import DragScroll from 'react-dragscroll';

import SubMenuAMS from '../../SubMenu/SubMenuAMS/SubMenuAMS'

import TicketsHeader from '../../Tickets/TicketsHeader/TicketsHeader'
import TicketCard from '../../Tickets/TicketCard/TicketCard'

const TicketsAMS = () => (
	<section className="Tickets Amsterdam">
		<SubMenuAMS active="Tickets"/>
		<TicketsHeader eventName="UNLEASH World Conference & Expo" eventCity="Amsterdam" eventVenue="RAI" eventDate="23-24 October 2018" h1="Tickets" btnName="Sign up">
			<div className="Ticket-timeLine--first"><h4>Super Saver</h4></div>
          	<div className="Ticket-timeLine--current">
          		<h2>Early Bird</h2>
          		<span>Until 31 June 2018</span>
          	</div>
			<div><h4>Regular Ticket</h4></div>          	
          	<div><h4>Late Ticket</h4></div>
          	<div className="Ticket-timeLine--last"><h4>Onsite Ticket</h4></div>
		</TicketsHeader>
		<div className="Tickets--wrp Single">
			<div className="Layout-width">
				<div className="Headline">
					<div className="Headline--title">
						<h2>Single Tickets</h2>
					</div>
					<div className="Stripe"></div>
				</div>
				<DragScroll className="drag" width height>
		          	<div>
		          		<TicketCard 
		          			ticketType="Single ticket"
		          			ticketPeriod="Early Bird"
		          			ticketName="Executive / Investor"
		          			currency="&euro;"
		          			price="1356"
		          			saving="Save &euro;339 off regular ticket price"
		          			bookingPlace="https://unleash.swoogo.com/unleashamsterdam/application?reg_type_id=23292" />
		          	</div>
		          	<div>
		          		<TicketCard
		          			expo 
		          			ticketType="Single ticket"
		          			ticketPeriod="Early Bird"
		          			ticketName="Expo Only"
		          			currency="&euro;"
		          			price="299"
		          			saving="."
		          			bookingPlace="https://unleash.swoogo.com/unleashamsterdam/application?reg_type_id=23297" />
		          	</div>
				</DragScroll>
			</div>
		</div>
		<div className="Tickets--wrp Group">
			<div className="Layout-width">
				<div className="Headline">
					<div className="Headline--title">
						<h2>Group Tickets</h2>
					</div>
					<div className="Stripe"></div>
				</div>
				<DragScroll className="drag" width height>
		          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Early Bird"
				          			ticketName="Team 18 or more"
				          			currency="&euro;"
				          			price="1,102"
				          			saving="Save &euro;593 /ticket"
				          			bookingPlace="https://unleash.swoogo.com/unleashamsterdam/application?reg_type_id=23304" />
				          	</div>
		          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Early Bird"
				          			ticketName="Team 13 or more"
				          			currency="&euro;"
				          			price="1,187"
				          			saving="Save &euro;508 / ticket"
				          			bookingPlace="https://unleash.swoogo.com/unleashamsterdam/application?reg_type_id=23301" />
				          	</div>
		          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Early Bird"
				          			ticketName="Team 8 or more"
				          			currency="&euro;"
				          			price="1,271"
				          			saving="Save &euro;424 / ticket"
				          			bookingPlace="https://unleash.swoogo.com/unleashamsterdam/application?reg_type_id=23300" />
				          	</div>
				</DragScroll>
			</div>
		</div>
	</section>
)

export default TicketsAMS