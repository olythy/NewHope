import React from 'react'

import { Link } from 'react-router-dom'

const Menu = () =>(
	<nav className="App-footer--nav">
		<ul className="App-footer--ul">
			<li className="App-footer--li"><strong>News</strong>
				<ul className="App-footer--subul">
					<li><Link to="/news">All news</Link></li>
					<li><Link to="/news/categpage">Popular</Link></li>
					<li><Link to="#">Contribute</Link></li>
				</ul>
			</li>
			<li className="App-footer--li"><strong>Events</strong>
				<ul className="App-footer--subul">
					<li><Link to="/america">Las Vegas</Link></li>
					<li><Link to="/amsterdam">Amsterdam</Link></li>
					<li><Link to="/london">London</Link></li>
				</ul>
			</li>
			<li className="App-footer--li"><strong>Startup</strong>
				<ul className="App-footer--subul">
					<li><Link to="/startuphub">Startup Ecosystem</Link></li>
					<li><Link to="/america/startup">Las Vegas</Link></li>
					<li><Link to="/amsterdam/startup">Amsterdam</Link></li>
				</ul>
			</li>
			<li className="App-footer--li"><strong>About</strong>
				<ul className="App-footer--subul">
					<li><Link to="/aboutus">Get to know us</Link></li>
					<li><Link to="/careers">Careers</Link></li>
					<li><Link to="#">Press</Link></li>
				</ul>
			</li>
		</ul>
	</nav>
)

export default Menu