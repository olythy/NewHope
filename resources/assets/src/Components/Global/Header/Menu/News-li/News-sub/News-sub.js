import React from 'react'
import NewsCard from '../../../../../MainContent/News/NewsCard/NewsCard'
import { Link } from 'react-router-dom'

const NewsSub = props => (
	<div className="App-header--sub">
		<div className="App-header--submenu">	
			<div className="Headline">
				<div className="Headline--title">
					<h3>Categories</h3>
				</div>
				<div className="Stripe"></div>
			</div>
			<ul className="App-header--subul">
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Leadership</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Science &amp; Tech</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Diversity & Inclusion</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Culture</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Laws &amp; Regulation</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">UNLEASH News</Link></li>
			</ul>
		</div>
		<div className="App-header--highlight">
			<div className="Headline">
				<div className="Headline--title">
					<h3>Most Popular</h3>
				</div>
				<div className="Stripe"></div>
			</div>
			<ul className="App-header--subul">
				<li className="App-header--subli">
					<NewsCard src="/storage/Gfx/News/news-previewHL.png" />
				</li>
				<li className="App-header--subli">
					<NewsCard src="/storage/Gfx/News/news-previewHL2.png" />
				</li>
			</ul>
		</div>
	</div>
);

export default NewsSub