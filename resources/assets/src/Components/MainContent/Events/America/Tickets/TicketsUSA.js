import React from 'react'
import DragScroll from 'react-dragscroll';

import SubMenuUSA from '../../SubMenu/SubMenuUSA/SubMenuUSA'

import TicketsHeader from '../../Tickets/TicketsHeader/TicketsHeader'
import TicketCard from '../../Tickets/TicketCard/TicketCard'

const TicketsUSA = () => (
	<section className="Tickets America">
		<SubMenuUSA active="Tickets"/>
		<TicketsHeader eventName="UNLEASH America" eventCity="Las Vegas" eventVenue="Aria Hotel" eventDate="15-16 May 2018" h1="Tickets" btnName="Sign up" />
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
		          			ticketPeriod="Super saver"
		          			ticketName="Expo Only"
		          			currency="$"
		          			price="900"
		          			saving="Save $120 off regular ticket price"
		          			bookingPlace="/amsterdam/tickets" />
		          	</div>
		          	<div>
		          		<TicketCard 
		          			ticketType="Single ticket"
		          			ticketPeriod="Super saver"
		          			ticketName="Expo Only"
		          			currency="$"
		          			price="900"
		          			saving="Save $120 off regular ticket price"
		          			bookingPlace="/amsterdam/tickets" />
		          	</div>
		          	<div>
		          		<TicketCard 
		          			ticketType="Single ticket"
		          			ticketPeriod="Super saver"
		          			ticketName="Expo Only"
		          			currency="$"
		          			price="900"
		          			saving="Save $120 off regular ticket price"
		          			bookingPlace="/amsterdam/tickets" />
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
				          			ticketName="Standard conference &amp; Expo"
				          			currency="$"
				          			price="1,230"
				          			saving="Save $90 off regular ticket price"
				          			bookingPlace="/amsterdam/tickets" />
				          	</div>
		          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Early Bird"
				          			ticketName="Standard conference &amp; Expo"
				          			currency="$"
				          			price="1,230"
				          			saving="Save $90 off regular ticket price"
				          			bookingPlace="/amsterdam/tickets" />
				          	</div>
		          	<div><TicketCard 
				          			ticketType="Group ticket"
				          			ticketPeriod="Early Bird"
				          			ticketName="Standard conference &amp; Expo"
				          			currency="$"
				          			price="1,230"
				          			saving="Save $90 off regular ticket price"
				          			bookingPlace="/amsterdam/tickets" />
				          	</div>
				</DragScroll>
			</div>
		</div>
		<div className="Tickets--wrp Investors">
			<div className="Layout-width">
				<div className="Headline">
					<div className="Headline--title">
						<h2>Investors Tickets</h2>
					</div>
					<div className="Stripe"></div>
				</div>
				<DragScroll className="drag" width height>
		          	<div><TicketCard 
				          			ticketType="Investor ticket"
				          			ticketPeriod="Regular"
				          			ticketName="Expo Only"
				          			currency="$"
				          			price="1,720"
				          			saving="Save $550 off regular ticket price"
				          			bookingPlace="/amsterdam/tickets" />
				          	</div>
		          	<div><TicketCard 
				          			ticketType="Investor ticket"
				          			ticketPeriod="Regular"
				          			ticketName="Expo Only"
				          			currency="$"
				          			price="1,720"
				          			saving="Save $550 off regular ticket price"
				          			bookingPlace="/amsterdam/tickets" />
				          	</div>
				</DragScroll>
			</div>
		</div>
		<div className="Tickets--wrp Startup">
			<div className="Layout-width">
				<div className="Headline">
					<div className="Headline--title">
						<h2>Startup Tickets</h2>
					</div>
					<div className="Stripe"></div>
				</div>
				<DragScroll className="drag" width height>
		          	<div><TicketCard 
				          			ticketType="Startup ticket"
				          			ticketPeriod="Regular"
				          			ticketName="Expo Only"
				          			currency="$"
				          			price="1,720"
				          			saving="Save $550 off regular ticket price"
				          			bookingPlace="/amsterdam/tickets" />
				          	</div>
		          	<div><TicketCard 
				          			ticketType="Startup ticket"
				          			ticketPeriod="Regular"
				          			ticketName="Expo Only"
				          			currency="$"
				          			price="1,720"
				          			saving="Save $550 off regular ticket price"
				          			bookingPlace="/amsterdam/tickets" />
				          	</div>
				</DragScroll>
			</div>
		</div>
	</section>
)

export default TicketsUSA