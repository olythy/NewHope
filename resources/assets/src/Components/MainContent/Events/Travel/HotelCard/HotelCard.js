import React, {Component} from 'react'

class HotelCard extends Component {

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

		const {limit} = this.props;
		const showLess = (
			<div className="HotelCard--read" onClick={this.showLess}> Less</div>
		)
		const showMore = (
			<div className="HotelCard--read" onClick={this.showMore}> More</div>
		)

    	return(
    		<div className={this.state.showAll ? "HotelCard shw" : "HotelCard hd"}>
				<div className="HotelCard--img">
		     		<img src={this.props.src} alt="Hotel"/>
		    	</div>
		    	<div className="HotelCard--details">
					<div className="HotelCard--details---wrp">
						<div className="HotelCard--summary">
							<h4>{this.props.name}</h4>
							<span><strong>From £160 / night</strong> <div className="DOT">&middot;</div> 7 km from the venue</span>
							<h6>Hampton by Hilton is a brand of hotels trademarked by Hilton Worldwide. The Hampton hotel brand is a chain of moderately priced, upper midscale hotels with limited food and beverage facilities.</h6>
						</div>
						<div className="HotelCard--rooms">
							<div className="HotelCard--roomType">
								<h6>Queen Room: 17, 19-21 March 2018</h6>
								<div className="HotelCard--room">
									<h6>Single Occupancy: <strong>£199 / night*</strong></h6>
								</div>
								<div className="HotelCard--room">
									<h6>Double Occupancy: <strong>£119 / night*</strong></h6>
								</div>
							</div>
							<div className="HotelCard--roomType">
								<h6>Standard Room: 18 March 2018</h6>
								<div className="HotelCard--room">
									<h6>Single Occupancy: <strong>£199 / night*</strong></h6>
								</div>
								<div className="HotelCard--room">
									<h6>Double Occupancy: <strong>£119 / night*</strong></h6>
								</div>
							</div>
						</div>
						<button className="btn-b">Book Online</button>
						<div className="HotelCard--divider">
							<h5>OR</h5>
						</div>
						<div className="HotelCard--contact">
							<h6 className="HotelCard--phone">00 44 207 290 7575</h6>
							<h6 className="HotelCard--mail">reservation@londonaasdasd.co.uk</h6>
						</div>
						<div className="HotelCard--rates">
							<span>*Rates are inclusive of VAT, WIFI & Breakfast. Please quote booking name “UNLEASH18” if calling in or emailing the hotel.</span>
						</div>						
					</div>
					{this.state.showAll ? showLess : showMore}
				</div>
			</div>
    	) 
    }
}

HotelCard.defaultProps = {
    	limit: 70
};

export default HotelCard