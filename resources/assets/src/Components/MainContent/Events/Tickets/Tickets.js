import React from 'react'
import DragScroll from 'react-dragscroll';

import TicketsHeader from './TicketsHeader/TicketsHeader'
import TicketCard from './TicketCard/TicketCard'

const Tickets = () => (
	<section className="Tickets">
		<TicketsHeader />
		<div className="Tickets--wrp Single">
			<div className="Layout-width">
				<div className="Headline">
					<div className="Headline--title">
						<h2>Single Tickets</h2>
					</div>
					<div className="Stripe"></div>
				</div>
				<DragScroll className="drag" width height>
		          	<div><TicketCard /></div>
		          	<div><TicketCard /></div>
		          	<div><TicketCard /></div>
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
		          	<div><TicketCard /></div>
		          	<div><TicketCard /></div>
		          	<div><TicketCard /></div>
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
		          	<div><TicketCard /></div>
		          	<div><TicketCard /></div>
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
		          	<div><TicketCard /></div>
		          	<div><TicketCard /></div>
				</DragScroll>
			</div>
		</div>
	</section>
)

export default Tickets