import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class PromoBox extends Component {

	render(){

		const boxDetails = (
			<div className="PromoBoxDetails--wrp">	
					<h2>{this.props.name}</h2>
					<h6>{this.props.smallText}</h6>
					<Link to={this.props.btnLink}>
						<button className="btnspn-w">
			              <span className="border-top">
			                <span className="transparent"></span>
			              </span>
			                {this.props.btnName}
			              <span className="border-bottom">
			                <span className="transparent"></span>
			              </span>
			            </button>
			        </Link>
				</div>
		)

		return(
			<section className="PromoBox">
				<img src={this.props.src} alt="IMG" />
				{this.props.name ? boxDetails : null}
			</section>
		)
	}
}

export default PromoBox