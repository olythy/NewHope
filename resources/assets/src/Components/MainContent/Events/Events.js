import React from 'react'
import EventCard from './EventCard/EventCard'
import DragScroll from 'react-dragscroll';

const Events = () => (
  <section className="Events">
    <div className="Layout-width">
	    <h2>Our Events</h2>
	</div>
    <div className="EventCard--wrp">
	    <DragScroll className="drag" width height>
	    	<div className="Layout-width">
		    	<div><EventCard src="/storage/Gfx/card-london.png"
					   cls ="london"
					   alt="UNLEASH London"
					   name="UNLEASH Conference &amp; Expo London"
					   slogen="Lets warm up for 2019 in London!"
					   place="London  &middot;  ExCeL"
					   date="21-22. March 2019" />
				</div>
		    	<div><EventCard src="/storage/Gfx/card-america.png"
					   cls ="america"
					   alt="UNLEASH America"
					   name="UNLEASH Conference &amp; Expo America"
					   slogen="Future of Work is going to Vegas, baby!"
					   place="Las Vegas  &middot;  Aria Hotel"
					   date="15-16. May 2018" />
				</div>
		    	<div><EventCard src="/storage/Gfx/card-amsterdam.png"
					   cls ="amsterdam"
					   alt="UNLEASH Amsterdam"
					   name="UNLEASH World Conference &amp; Expo Amsterdam"
					   slogen="We’re back in the ports of Amsterdam!"
					   place="Amsterdam  &middot;  Rai"
					   date="21-22. Oct 2018" />
				</div>
			</div>
		</DragScroll>
	</div>
  </section>
)

export default Events