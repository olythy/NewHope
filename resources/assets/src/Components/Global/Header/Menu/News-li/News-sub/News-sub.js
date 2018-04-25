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
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">HR Technology</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Talent &amp; Recruitment</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Future of Work</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Employee Experience</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Smart Data</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">HR Tech World</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Smart Data</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">HR Tech World</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Employee Experience</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Talent &amp; Recruitment</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Future of Work</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="/news/categpage">Smart Data</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli all"><Link onClick={props.closeLi} to="/news">All news</Link></li>
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