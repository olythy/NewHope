import React,{Component} from 'react';

class BigBox extends Component {
	
	constructor(props) {
    	super(props);
  	}

	render(){

		let bigBoxContent = null;

		if(this.props.title){
			bigBoxContent = (
				<div>
					<h2>{this.props.title}</h2>
					<div className="SmallBox---wrp">
						{this.props.person ? <p>{this.props.person}</p> : null}
						{this.props.jobTitle ? <span>{this.props.jobTitle}</span> : null}
						{this.props.logo ? <div className="testimonial--logo"><img src={this.props.logo} alt={this.props.logoAlt} /> </div> : null}
					</div>
				</div>
			)
		}else if(this.props.src){
			bigBoxContent = <img src={this.props.src} alt="IMG" />
		}

		return(
			<div className={this.props.title ? "BigBox Testimonial" : "BigBox"}>
				{bigBoxContent}
			</div>
		)
	}
}

export default BigBox