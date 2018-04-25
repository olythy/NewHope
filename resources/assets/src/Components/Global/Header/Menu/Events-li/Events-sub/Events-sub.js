import React from 'react'
import EventCard from '../../../../../MainContent/Events/EventCard/EventCard'
import { Link } from 'react-router-dom'
import NewsLetterCard from '../../../../../MainContent/NewsLetter-MobileApp-Banner/NewsLetterCard/NewsLetterCard'

const EventsSub = () => (
	<div className="App-header--sub">
		<div className="Event america">
			<div className="Headline">
				<div className="Headline--title">
					<h3>Las Vegas</h3>
				</div>
				<div className="Stripe"></div>
			</div>
			<Link to="/america">
				<EventCard src="/storage/Gfx/Events/card-america.jpg"
				   cls="america"
				   alt="UNLEASH America"
				   name="UNLEASH America"
				   slogen="Future of Work is in to Vegas, baby!"
				   city="Las Vegas"
				   venue="Aria Hotel"
				   date="15-16 May 2018" />
			</Link>
		</div>
		<div className="Event amsterdam">
			<div className="Headline">
				<div className="Headline--title">
					<h3>Amsterdam</h3>
				</div>
				<div className="Stripe"></div>
			</div>
			<Link to="/amsterdam">
				<EventCard src="/storage/Gfx/Events/card-amsterdam.jpg"
				   cls="amsterdam"
				   alt="UNLEASH World Conference &amp; Expo"
				   name="UNLEASH World Conference &amp; Expo"
				   slogen="Next stop: Amsterdam"
				   city="Amsterdam"
				   venue="RAI"
				   date="23-24 Oct 2018" />
			</Link>
		</div>
		<div className="Event london">
			<div className="Headline">
				<div className="Headline--title">
					<h3>London</h3>
				</div>
				<div className="Stripe"></div>
			</div>
			<Link to="/london">
				<EventCard after src="/storage/Gfx/Events/card-london.jpg"
				   cls="london"
				   alt="UNLEASH Conference &amp; Expo"
				   name="UNLEASH Conference &amp; Expo"
				   slogen="About London" />
			</Link>
		</div>
	</div>
);

export default EventsSub