import React, {Component} from 'react';

class SmallBox extends Component {
	
	constructor(props) {
    	super(props);
  	}

	render(){

		let smallBoxContent = null;

		if(this.props.title){
			smallBoxContent = (
				<div>
					<h2>{this.props.title}</h2>
					<div className="SmallBox---wrp">
						{this.props.person ? <p>{this.props.person}</p> : null}
						{this.props.jobTitle ? <span>{this.props.jobTitle}</span> : null}
						{this.props.date ? <h2>{this.props.date}</h2> : null}
					</div>
				</div>
			)
		}else if(this.props.src){
			smallBoxContent = <img src={this.props.src} alt="IMG" />
		}

		return(
			<div className={this.props.title ? "SmallBox Testimonial" : "SmallBox"}>
				{smallBoxContent}
			</div>
		)
	}
}

export default SmallBox