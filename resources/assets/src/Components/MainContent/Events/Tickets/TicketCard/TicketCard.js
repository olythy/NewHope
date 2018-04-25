import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class TicketCard extends Component {

	render(){
		return(
			<div className="TicketCard">
				<div>
					<div className="TicketCard--category">
						<span className="TicketCard--category---BG">{this.props.ticketType}</span>
						<span>{this.props.ticketPeriod +"*"}</span>
					</div>
					<div className="TicketCard--name">
						<h4>{this.props.ticketName}</h4>
					</div>
					<div className="TicketCardPrice--wrp">
						<div className="TicketCard--price">
							<h2>{this.props.currency}</h2>
							<h1>{this.props.price}</h1>
						</div>
						<span>{this.props.saving}</span>
					</div>
					<div className="TicketCardDetails--wrp">
						<span className="TicketCard--access">Benefits</span>
						<div className="TicketCard--details">
							<span>Main stage</span>
							<span>Breakout sessions</span>
							<span>Networking</span>
							<span>Parking</span>
							<span>Breakfast &amp; Lunch</span>
							<span>Cocktail parties</span>
							<span>sponsor parties</span>
						</div>		
					</div>
				</div>
				<div className="TicketCard--apply">
					<Link to={this.props.bookingPlace}><button className="btn-b">Book Now</button></Link>
				</div>
			</div>
		)
	}
}

export default TicketCard