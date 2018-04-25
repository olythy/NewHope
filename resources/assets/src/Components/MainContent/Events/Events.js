import React from 'react'
import {Link} from 'react-router-dom'

import EventCard from './EventCard/EventCard'
import DragScroll from 'react-dragscroll';

import NewsLetterCard from '../NewsLetter-MobileApp-Banner/NewsLetterCard/NewsLetterCard'

const Events = () => (
  <section className="Events">
    <div className="Layout-width">
	    <h2>Our Events</h2>
	</div>
    <div className="EventCard--wrp">
	    <DragScroll className="drag" width height>
	    	<div className="Layout-width">
		    	<div><Link to="/america"><EventCard src="/storage/Gfx/Events/card-america.jpg"
					   cls ="america"
					   alt="UNLEASH America"
					   name="UNLEASH America"
					   slogen="Future of Work is in to Vegas, baby!"
					   city="Las Vegas"
					   venue="Aria Hotel"
					   date="15-16 May 2018" /></Link>
				</div>
		    	<div><Link to="/amsterdam"><EventCard src="/storage/Gfx/Events/card-amsterdam.jpg"
					   cls ="amsterdam"
					   alt="UNLEASH World Conference &amp; Expo"
					   name="UNLEASH World Conference &amp; Expo"
					   slogen="Next stop: Amsterdam!"
					   city="Amsterdam"
					   venue="RAI"
					   date="23-24 Oct 2018" /></Link>
				</div>
				<div><Link to="/london"><EventCard after src="/storage/Gfx/Events/card-london.jpg"
					   cls ="london"
					   alt="UNLEASH Conference &amp; Expo"
					   name="UNLEASH Conference &amp; Expo"
					   slogen="About London" /></Link>
				</div>
		    	<div>
		    		<NewsLetterCard />
		    	</div>
			</div>
		</DragScroll>
	</div>
  </section>
)

export default Events