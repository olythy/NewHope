import React from 'react'
import { Link } from 'react-router-dom'

const StartupSub = () => (
	<div className="App-header--sub col3">
		<div className="App-header--submenu col1">	
			<div className="App-header--submenu---wrp">
				<div className="Headline">
					<div className="Headline--title">
						<h3>Why we do startups</h3>
					</div>
					<div className="Stripe"></div>
					<div className="seeAll">
		                <Link to="/startuphub">See all</Link>
		            </div>
				</div>
				<ul className="App-header--subul">
					<li className="App-header--subli">
						<p>The place to go for the future leaders in the industry! An ever growing list of ambitious companies from all around the globe provide you with new innovations for today and tomorrow’s challenges.</p>
					</li>
				</ul>
			</div>
			<div className="App-header--submenu---wrp zones">
				<div className="Headline">
							<div className="Headline--title">
								<h3>Startup Expos</h3>
							</div>
							<div className="Stripe"></div>
						</div>
				<ul className="App-header--subul">
					<li className="App-header--subli"><Link to="/america/startup"><img src="/storage/Gfx/Startup/startupexpo-lasvegas.png" alt="Startup Las Vegas 2018" /></Link></li>
					<li className="App-header--subli"><Link to="/amsterdam/startup"><img src="/storage/Gfx/Startup/startupexpo-amsterdam.png" alt="Startup Amsterdam 2018" /></Link></li>
				</ul>
			</div>
		</div>
	</div>
);

export default StartupSub