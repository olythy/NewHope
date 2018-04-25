import React,{Component} from 'react'

class TwitterCard extends Component {
	render(){
		return(
			<section className="TwitterCard">
				<div className="TwitterCard--wrp">
					<div className="TwitterCard-IMG">
						<img src={this.props.twitterProfile} alt="IMG" />
					</div>
					<div className="TwitterCard--Name">
						<h5>{this.props.twitterName}</h5>
						<span>{this.props.twitterAccount}</span>
					</div>
				</div>
				{this.props.children}
			</section>
		)
	}
}

export default TwitterCard