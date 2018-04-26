import React from 'react'
import {Link} from 'react-router-dom'

const ContactPerson = props => (
	<section className="ContactPerson">
		<div className="Layout-width">
			<div className="ContactPerson--wrp">
				<div className="ContactPerson--title">
					<h2>contact us if you have more questions</h2>
				</div>
				<div className="ContactPerson--Card">
					<div className="ContactPerson--Card---profile">
						<div className="ContactPerson--Card---img">
							<img src={props.contactIMG} alt="IMG" />
						</div>
						<div className="ContactPerson--Card---person">
							<h4>{props.contactName}</h4>
							<p>{props.contactJobTitle}</p>
						</div>
					</div>
					<div className="ContactPerson--Card---social">
						<Link to={"mailto:"+props.contactMail}>{props.contactMail}</Link>
						<div>
							<div className="SpeakerCardHighLight--social">
								<Link to={props.contactLinkedin} target="_blank"><img className="Social--linkedin" src="/storage/Gfx/Events/Speakers/speaker-linkedin.svg" alt="Linkedin" /></Link>
								{props.contactTwitter ? <Link to={props.contactTwitter} target="_blank"><img className="Social--twitter" src="/storage/Gfx/Events/Speakers/speaker-twitter.svg" alt="Twitter" /></Link> : null }
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default ContactPerson