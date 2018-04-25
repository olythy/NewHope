import React from 'react'
import {Link} from 'react-router-dom'


const TravelBanner = props => (
	<section className="TravelBanner">
			<div className="TravelBanner--wrp">
				<h2>Travel &amp; Venue</h2>
				<Link to={props.discover}>
          <button className="btnspn-b">
              <span className="border-top">
                <span className="transparent"></span>
              </span>
                Discover
              <span className="border-bottom">
                <span className="transparent"></span>
              </span>
          </button>
        </Link>
			</div>	
	</section>
)

export default TravelBanner