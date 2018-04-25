import React, {Component} from 'react'

class IntroHeader extends Component {

	render(){

		const eventInfo = (
			<div className="MainContent--title--wrp">
    			<div className="Event--name">
    				<span>{this.props.eventName}</span>
    			</div>
    			<div className="Event--place-and-date">
    				<div className="Event-card-place"><span>{this.props.eventCity}<div className="DOT">&middot;</div>{this.props.eventVenue}</span></div>
    				<div className="Event-card-date"><span>{this.props.eventDate}</span></div>
    			</div>
    		</div>
		)

		return(
			<div className={this.props.cls ? "MainContent--header " + this.props.cls : "MainContent--header " }>
		        <div className="Layout-width">
		     		<div className="MainContent--header---wrp">
			    		<div className="MainContent--title">
			      			{this.props.eventName ? eventInfo : null}
			        		<h1>{this.props.h1}</h1>
			        		{this.props.children}
			    		</div>
			    	</div>
			    </div>
			</div>
		)
	}
}

export default IntroHeader