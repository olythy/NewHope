import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class TopicModal extends Component {
	render(){
		return(
			<section className="ModalContent topic">
				<div className="ModalContent--headline">
					<h2>{this.props.topicTitle}</h2>
					<span onClick={this.props.handleCloseModal} className="ModalContent--close">&times;</span>
				</div>
				<div className="ModalContent--introText">
					<h6>{this.props.topicText}</h6>
				</div>
				<button className="btn-b" onClick={this.props.handleCloseModal} >Close</button>
			</section>
		)
	}
}

export default TopicModal