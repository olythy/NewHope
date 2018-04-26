import React, {Component} from 'react'
import DragScroll from 'react-dragscroll';
import {Link} from 'react-router-dom'

class SubMenuAMS extends Component {
	
	isActive(value){
		return value===this.props.active ? 'active' : null;
	}

	render(){
		return(
			<div className="SubMenu">
				<DragScroll className="sub-drag" width height>
		          	<div className="Layout-width">
			          	<div><Link to="/amsterdam"><span className={this.isActive("Show")}>Show</span></Link></div>
			          	<div><Link to="/amsterdam/sponsors"><span className={this.isActive("Sponsors")}>Sponsors</span></Link></div>
			          	<div><Link to="/amsterdam/travel"><span className={this.isActive("Travel")}>Travel &amp; Venue</span></Link></div>
			          	<div><Link to="/amsterdam/tickets"><span className={this.isActive("Tickets")}>Tickets</span></Link></div>
		          	</div>
				</DragScroll>
			</div>
		)
	}
}

export default SubMenuAMS