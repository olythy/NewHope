import React from 'react'
import Menu from './Menu/Menu'
import NewsLetter from './NewsLetter/NewsLetter'
import Social from './Social/Social'
import {Link} from 'react-router-dom'

const Footer = props => (
  <footer className="App-footer">
  	<div className="Layout-width">
    	<div className="App-footer--logo">
    		<Link to="/"><img src="/storage/Gfx/Global/Footer/unleash-logoW.svg" alt="UNLEASH" /></Link>
    	</div>
    	<div className="App-footer--menu__wrp">
	    	<Menu />
			<div className="App-footer--menu__wrp---followUs">
				<p><strong>Follow us</strong></p>
				<div className="newsLetter-and-Social">
					<NewsLetter />
					<Social
						srcFacebook="/storage/Gfx/Global/Footer/facebook.svg"
						srcTwitter="/storage/Gfx/Global/Footer/twitter.svg"
						srcLinkedin="/storage/Gfx/Global/Footer/linkedin.svg"
						srcYoutube="/storage/Gfx/Global/Footer/youtube.svg"
					/>
				</div>
			</div>
		</div>
		<div className="App-footer--copyright">
		<span>&copy; 2013 - 2017 HRN Kft. Made with &#10084; in Budapest.</span>
		</div>
	</div>
  </footer>
)

export default Footer
