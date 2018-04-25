import React, {Component} from 'react'

class AgendaSessionCard extends Component {

	constructor(props){
		super(props);
		this.state={
			showAll:false
		};
		this.showMore = this.showMore.bind(this);
		this.showLess = this.showLess.bind(this);
	}

	showMore()	{
		this.setState({
			showAll: true
		});
	}
	showLess()	{
		this.setState({
			showAll: false
		});	
	}

	render(){

		const {content, limit} = this.props;

        if(content.length<=limit) {
            return (
            	<div className="AgendaSessionCard">
					<div className="AgendaSessionCard--wrp">
						<div className="AgendaSessionCard--category"><span className={this.props.color}>Going Digital</span></div>
						<div className="AgendaSessionCard--place-and-date">
							<div className="AgendaSessionCard--place"><span>Room 234</span></div>
							<div className="AgendaSessionCard--date"><span>Day 1 <div className="DOT">&middot;</div> 10:30-11:00</span></div>
						</div>
					</div>
					<h5>How Will AI Shape the World for the Better in 20 years</h5>
					<h6 className="AgendaSessionCard--content">{content}</h6>
					<div className="AgendaSessionCard--speaker">
						<div className="AgendaSessionCard--speakerIMG">
							<img src="/storage/Gfx/Agenda/agenda-speakerIMG.png" alt="IMG"/>
						</div>
						<div className="AgendaSessionCard--speakerDetails">
							<h6>Evan Smith</h6>
							<span>CEO <div className="DOT">&middot;</div> Virgin Group</span>
						</div>
					</div>
				</div>
            )
        }
        if(this.state.showAll) {
            // We show the extended text and a link to reduce it
            return(
            	<div className="AgendaSessionCard">
					<div className="AgendaSessionCard--wrp">
						<div className="AgendaSessionCard--category"><span className={this.props.color}>Going Digital</span></div>
						<div className="AgendaSessionCard--place-and-date">
							<div className="AgendaSessionCard--place"><span>Room 234</span></div>
							<div className="AgendaSessionCard--date"><span>Day 1 <div className="DOT">&middot;</div> 10:30-11:00</span></div>
						</div>
					</div>
					<h5>How Will AI Shape the World for the Better in 20 years</h5>
					<h6 className="AgendaSessionCard--content">{content}<div className="AgendaSessionCard--read" onClick={this.showLess}> Less</div></h6>
					<div className="AgendaSessionCard--speaker">
						<div className="AgendaSessionCard--speakerIMG">
							<img src="/storage/Gfx/Agenda/agenda-speakerIMG.png" alt="IMG"/>
						</div>
						<div className="AgendaSessionCard--speakerDetails">
							<h6>Evan Smith</h6>
							<span>CEO <div className="DOT">&middot;</div> Virgin Group</span>
						</div>
					</div>
				</div>
            )
        }
        const toShow = content.substring(0,limit)+"...";
        return(
        	<div className="AgendaSessionCard">
				<div className="AgendaSessionCard--wrp">
					<div className="AgendaSessionCard--category"><span className={this.props.color}>Going Digital</span></div>
					<div className="AgendaSessionCard--place-and-date">
						<div className="AgendaSessionCard--place"><span>Room 234</span></div>
						<div className="AgendaSessionCard--date"><span>Day 1 <div className="DOT">&middot;</div> 10:30-11:00</span></div>
					</div>
				</div>
				<h5>How Will AI Shape the World for the Better in 20 years</h5>
				<h6 className="AgendaSessionCard--content">{toShow}<div className="AgendaSessionCard--read" onClick={this.showMore}> More</div></h6>
				<div className="AgendaSessionCard--speaker">
					<div className="AgendaSessionCard--speakerIMG">
						<img src="/storage/Gfx/Agenda/agenda-speakerIMG.png" alt="IMG"/>
					</div>
					<div className="AgendaSessionCard--speakerDetails">
						<h6>Evan Smith</h6>
						<span>CEO <div className="DOT">&middot;</div> Virgin Group</span>
					</div>
				</div>
			</div>
        )
	}
}

AgendaSessionCard.defaultProps = {
    	color: 'green'
};

export default AgendaSessionCard