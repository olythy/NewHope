import React,{Component} from 'react'

import DragScroll from 'react-dragscroll'

class TimeLine extends Component {
	render(){
		return(
			<div className="Ticket-timeLine">
        		<div className="Ticket-timeLine--ticketType">
        			<DragScroll className="drag" width height>
			          	{this.props.children}
					</DragScroll>
        		</div>
    		</div>
		)
	}
}

export default TimeLine