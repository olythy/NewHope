import React, {Component} from 'react'
import DragScroll from 'react-dragscroll';
import {Link} from 'react-router-dom'

class SubMenuUSA extends Component {
	
	isActive(value){
		return value===this.props.active ? 'active' : null;
	}

	render(){
		return(
			<div className="SubMenu">
				<DragScroll className="sub-drag" width height>
		          	<div className="Layout-width">
			          	<div><Link to="/america"><span className={this.isActive("Show")}>Show</span></Link></div>
			          	<div><Link to="/america/speakers"><span className={this.isActive("Speakers")}>Speakers</span></Link></div>
			          	<div><Link to="/america/agenda"><span className={this.isActive("Agenda")}>Agenda</span></Link></div>
			          	<div><Link to="/america/startup"><span className={this.isActive("Startups")}>Startups</span></Link></div>
			          	<div><Link to="/america/sponsors"><span className={this.isActive("Sponsors")}>Sponsors</span></Link></div>
			          	<div><Link to="/america/volunteer"><span className={this.isActive("Volunteering")}>Volunteering</span></Link></div>
			          	<div><Link to="/america/travel"><span className={this.isActive("Travel")}>Travel &amp; Venue</span></Link></div>
			          	<div><Link to="/america/tickets"><span className={this.isActive("Tickets")}>Tickets</span></Link></div>
		          	</div>
				</DragScroll>
			</div>
		)
	}
}

export default SubMenuUSA