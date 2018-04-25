import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class StartupModal extends Component {
	render(){
		return(
			<section className="ModalContent">
				<div className="ModalContent--headline">
					<h2>Apply to Compete</h2>
					<span onClick={this.props.handleCloseModal} className="ModalContent--close">&times;</span>
				</div>
				<div className="ModalContent--introText">
					<h6>Thank you for your interest in our event. Please fill in all the fields below, and we'll get back to you soon.</h6>
				</div>
				<div className="ModalContent--from">
					<form action="#" method="POST">
						<div className="ModalContent--fullname">
							<input className="ModalContent--input" type="text" placeholder="First Name" />
							<input className="ModalContent--input" type="text" placeholder="Last Name" />
						</div>
						<input className="ModalContent--input" type="email" placeholder="Business Email" />
						<input className="ModalContent--input" type="tel" placeholder="Phone Number" />
						<input className="ModalContent--input" type="text" placeholder="Company Name" />
						<div className="ModalContent--submit--text">
								<h6>By submitting data to us you give your consent that data you submit may be processed for the purposes described in the UNLEASH and TechTarget privacy policy.</h6>
							</div>
						<div className="ModalContent--submit-wrp">
							<div className="ModalContent--submit--checkboxes">
								<div><input type="checkbox" /><h6>I accept <Link to="/terms">Terms &amp; Conditions</Link></h6></div>
								<div><input type="checkbox" /><h6>I accept the <Link to="/terms">Privacy Policy</Link></h6></div>
							</div>
							<button type="submit" className="btn-b">Submit</button>
						</div>
					</form>
				</div>
			</section>
		)
	}
} 
	
export default StartupModal