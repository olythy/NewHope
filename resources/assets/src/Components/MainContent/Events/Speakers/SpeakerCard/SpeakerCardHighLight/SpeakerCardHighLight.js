import React,{Component} from 'react'

class SpeakerCardHighLight extends Component {
	render(){
		return(
			<div className="SpeakerCardHighLight">
				<div className="SpeakerCardHighLight--img">
		     		<img src={this.props.speakerIMG} alt={this.props.speakerName}/>
		     		{/*MOBIL INFO*/}
		     		<div className="SpeakerCardHighLight--shortInfo">
		     			<div className="ShortInfo--categ-date-place">
							<div className="categ"><span>Keynote</span></div>
							<div className="date"><span>Day 01 <div className="DOT">&middot;</div> 09:00</span></div>
							<div className="place"><span>Main Stage</span></div>
						</div>
						<div className="SpeakerCardHighLight--shortName">
							<h1>{this.props.speakerName}</h1>
							<span>{this.props.jobTitle}<div className="DOT">&middot;</div>{this.props.company}</span>
						</div>
		     		</div>
		    	</div>
		    	{/*DESKTOP INFO*/}
				<div className="SpeakerCardHighLight--details">
					<div className="SpeakerCardHighLight--wrp">
						<div className="SpeakerCardHighLight--name-and-social">
							<h1>{this.props.speakerName}</h1>
						</div>
						<div className="SpeakerCardHighLight--jobTitle">
							<h5>{this.props.jobTitle}<div className="DOT">&middot;</div>{this.props.company}</h5>
						</div>
						<div className="SpeakerCardHighLight--categ-date-place">
							<div className="categ"><span>Future of Work</span></div>
							<div className="date"><span>Day 01 <div className="DOT">&middot;</div> 09:00</span></div>
							<div className="place"><span>Main Stage</span></div>
						</div>
						<div className="SpeakerCardHighLight--speakContent">
							<h4>{this.props.contentTitle}</h4>
							<p>{this.props.contentText}</p>
						</div>
					</div>
					<div className="SpeakerCardHighLight--bio">
						<p>{this.props.bio}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default SpeakerCardHighLight