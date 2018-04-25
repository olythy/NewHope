import React from 'react'
import DragScroll from 'react-dragscroll'

import Button from '../../../Commons/Button/Button'

const TicketsHeader = props => (
	<div className="MainContent--header nrml Tickets">
        <div className="Layout-width">
     		<div className="MainContent--header---wrp">
	    		<div className="MainContent--title">
	        		<div className="MainContent--title--wrp">
	        			<div className="Event--name">
	        				<span>{props.eventName}</span>
	        			</div>
	        			<div className="Event--place-and-date">
	        				<div className="Event-card-place"><span>{props.eventCity}<div className="DOT">&middot;</div>{props.eventVenue}</span></div>
    						<div className="Event-card-date"><span>{props.eventDate}</span></div>
	        			</div>
	        		</div>
	        		<h1>{props.h1}</h1>
	        		<div className="btnspn-b">
		              <span className="border-top">
		                <span className="transparent"></span>
		              </span>
                		<Button cls={null} name={props.btnName} modalTitle="Sign up" modalText="Sign up Text Example .." />
		              <span className="border-bottom">
		                <span className="transparent"></span>
		              </span>
            		</div>
	        	</div>
	        	<div className="Ticket-timeLine">
	        		<div className="Ticket-timeLine--ticketType">
	        			<DragScroll className="drag" width height>
				          	<div className="Ticket-timeLine--first"><h4>Super Saver</h4></div>
				          	<div className="Ticket-timeLine--current">
				          		<h2>Early Bird</h2>
				          		<span>Until 20-22 February 2019</span>
				          	</div>
				          	<div><h4>Regular Ticket</h4></div>
				          	<div><h4>Late Ticket</h4></div>
				          	<div className="Ticket-timeLine--last"><h4>Onsite Ticket</h4></div>
						</DragScroll>
	        		</div>
        		</div>
	        </div>
	    </div>
	</div>
)

export default TicketsHeader

