import React from 'react'
import DragScroll from 'react-dragscroll'

import SubMenuUSA from '../../SubMenu/SubMenuUSA/SubMenuUSA'

import TicketsHeader from '../../Tickets/TicketsHeader/TicketsHeader'
import TicketCard from '../../Tickets/TicketCard/TicketCard'

const TicketsUSA = () => (
	<section className="Tickets America">
		<SubMenuUSA active="Tickets"/>
		<TicketsHeader eventName="UNLEASH America" eventCity="Las Vegas" eventVenue="Aria Resort &amp; Casino" eventDate=" May 15-16 2018" h1="Tickets">
			<div className="Ticket-timeLine--first"><h4>Super Saver</h4></div>
          	<div><h4>Early Bird</h4></div>
			<div><h4>Regular Ticket</h4></div>          	
          	<div className="Ticket-timeLine--current">
          		<h2>Late Ticket</h2>
          		<span>Until 15 May 2018</span>
          	</div>
          	<div className="Ticket-timeLine--last"><h4>Onsite Ticket</h4></div>
		</TicketsHeader>
		<div className="Tickets--wrp Single">
			<div className="Layout-width">
				<div className="Headline">
					<div className="Headline--title">
						<h2>Single Tickets</h2>
					</div>
				</div>
				<DragScroll className="drag" width height>
		          	<div>
		          		<TicketCard 
		          			ticketType="Single ticket"
		          			ticketPeriod="Late"
		          			ticketName="Executive / Investor"
		          			currency="$"
		          			price="1695"
		          			saving="Includes taxes"
		          			bookingPlace="https://unleash.swoogo.com/unleashamerica/application?reg_type_id=21127" />
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
				          			ticketPeriod="Late"
				          			ticketName="Team 12 or more"
				          			currency="$"
				          			price="971"
				          			saving="Save $524 / ticket includes taxes"
				          			bookingPlace="https://unleash.swoogo.com/unleashamerica/application?reg_type_id=22986" />
				          	</div>
		          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Late"
				          			ticketName="Team 8 or more"
				          			currency="$"
				          			price="1,046"
				          			saving="Save $448 / ticket includes taxes"
				          			bookingPlace="https://unleash.swoogo.com/unleashamerica/application?reg_type_id=22985" />
				          	</div>
		          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Late"
				          			ticketName="Team 5 or more"
				          			currency="$"
				          			price="1,121"
				          			saving="Save $374 / ticket includes taxes"
				          			bookingPlace="https://unleash.swoogo.com/unleashamerica/application?reg_type_id=22983" />
				          	</div>
				</DragScroll>
			</div>
		</div>
	</section>
)

export default TicketsUSA