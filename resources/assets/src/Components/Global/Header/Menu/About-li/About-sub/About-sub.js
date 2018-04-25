import React from 'react'
import NewsCard from '../../../../../MainContent/News/NewsCard/NewsCard'
import Social from '../../../../../Global/Footer/Social/Social'
import NewsLetter from '../../../../../Global/Footer/NewsLetter/NewsLetter'
import { Link } from 'react-router-dom'

const AboutSub = () => (
	<div className="App-header--sub col3">
		<div className="App-header--submenu col3">	
			<div className="App-header--submenu---wrp">
				<div className="Headline">
				<div className="Headline--title">
					<h3>Unleash</h3>
				</div>
				<div className="Stripe"></div>
			</div>
				<ul className="App-header--subul">
					<li className="App-header--subli"><Link to="/aboutus">Get to know us</Link></li>
					<li className="App-header--subli"><Link to="#">Press</Link></li>
					<li className="App-header--subli"><Link to="/terms">Terms &amp; Conditions</Link></li>
					<li className="App-header--subli"><Link to="/terms">Privacy Policy</Link></li>
				</ul>
			</div>
			<div className="App-header--submenu---wrp">
				<div className="Headline">
				<div className="Headline--title">
					<h3>Careers</h3>
				</div>
				<div className="Stripe"></div>
			</div>
				<ul className="App-header--subul">
					<li className="App-header--subli"><Link to="/careers">Sales executive</Link></li>
					<li className="App-header--subli"><Link to="/careers">Operations manager</Link></li>
					<li className="App-header--subli"><Link to="/careers">Volunteer program</Link></li>
					<li className="App-header--subli all"><Link to="/careers">See more</Link></li>
				</ul>
			</div>
			<div className="App-header--social">
				<Social
					srcFacebook="/storage/Gfx/Global/Footer/facebookB.svg"
					srcTwitter="/storage/Gfx/Global/Footer/twitterB.svg"
					srcLinkedin="/storage/Gfx/Global/Footer/linkedinB.svg"
					srcYoutube="/storage/Gfx/Global/Footer/youtubeB.svg"
				/>
			</div>
			<div className="App-header--newsletter">
				<NewsLetter />
			</div>
		</div>
		<div className="App-header--highlight">
			<div className="Headline">
				<div className="Headline--title">
					<h3>UNLEASH posts</h3>
				</div>
				<div className="Stripe"></div>
				<div className="seeAll">
	                <Link to="/news">See all</Link>
	            </div>
			</div>
			<ul className="App-header--subul">
				<li className="App-header--subli"><NewsCard src="/storage/Gfx/News/news-previewHL.png" /></li>
				<li className="App-header--subli"><NewsCard src="/storage/Gfx/News/news-previewHL2.png" /></li>
			</ul>
		</div>
	</div>
);

export default AboutSub