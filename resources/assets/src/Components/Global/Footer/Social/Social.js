import React from 'react'
import {Link} from 'react-router-dom'

const Social = props => (
	<div className="Social">
		<Link to="https://www.facebook.com/unleashgroup" target="_blank"><img className="Social--facebook" src={props.srcFacebook} alt="UNLEASH facebook" /></Link>
		<Link to="https://twitter.com/unleashgroup" target="_blank"><img className="Social--twitter" src={props.srcTwitter} alt="UNLEASH twitter" /></Link>
		<Link to="https://www.linkedin.com/company/hrn-europe---pan-european-hr-network/" target="_blank"><img className="Social--linkedin" src={props.srcLinkedin} alt="UNLEASH linkedin" /></Link>
		<Link to="https://www.youtube.com/user/hrneurope" target="_blank"><img className="Social--youtube" src={props.srcYoutube} alt="UNLEASH youtube" /></Link>
	</div>
)

export default Social