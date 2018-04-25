import React from 'react'
import {Link} from 'react-router-dom'

const StartupBanner = () => (
	<section className="Startup-Banner">
		<h2>Startup ecosystem</h2>
		<p>The place to go for the future leaders in the industry! An ever growing list of ambitious companies from all around the globe provide you with new innovations for today and tomorrow’s challenges.</p>
		<Link to="/startuphub">
			<button href="#" className="btnspn-w">
			  <span className="border-top">
			    <span className="transparent"></span>
			  </span>
				Learn More
			  <span className="border-bottom">
			    <span className="transparent"></span>
			  </span>
			</button>
		</Link>
	</section>
);

export default StartupBanner