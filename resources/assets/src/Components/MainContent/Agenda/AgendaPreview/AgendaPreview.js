import React,{Component} from 'react'
import DragScroll from 'react-dragscroll'

class AgendaPreview extends Component{
	
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="Agenda--preview">
				<div className="Agenda--preview---drag">
					<DragScroll width height>
						<div>
							{this.props.latest ? <img src="/storage/Gfx/Agenda/agendaAMS-previewDay1.jpg" alt="Agenda Preview Day 1" /> : <img src="/storage/Gfx/Agenda/agendaAMS-previewDay2.png" alt="Agenda Preview Day 2" />}
						</div>
					</DragScroll>
				</div>
			</div>
		)
	}
}

export default AgendaPreview