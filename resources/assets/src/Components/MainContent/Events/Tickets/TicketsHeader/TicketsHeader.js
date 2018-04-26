import React,{Component} from 'react'

import TicketsTimeline from './TicketsTimeline/TicketsTimeline'

class TicketsHeader extends Component{
	
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="MainContent--header Tickets">
		        <div className="Layout-width">
		     		<div className="MainContent--header---wrp">
			    		<div className="MainContent--title">
			        		<div className="MainContent--title--wrp">
			        			<div className="Event--name">
			        				<span>{this.props.eventName}</span>
			        			</div>
			        			<div className="Event--place-and-date">
			        				<div className="Event-card-place"><span>{this.props.eventCity}<div className="DOT">&middot;</div>{this.props.eventVenue}</span></div>
		    						<div className="Event-card-date"><span>{this.props.eventDate}</span></div>
			        			</div>
			        		</div>
			        		<h1>{this.props.h1}</h1>
			        	</div>
			        	<TicketsTimeline>
			        		{this.props.children}
			        	</TicketsTimeline>
			        </div>
			    </div>
			</div>
		)
	}
}

export default TicketsHeader

