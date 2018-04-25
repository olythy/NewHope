import React from 'react'
import NewsLatestPopular from '../NewsLatestPopular/NewsLatestPopular'
import NewsCard from '../NewsCard/NewsCard'

const NewsAuthor = () => (
	<section className="NewsAuthor">
		<div className="Layout-width">
			<div className="NewsAuthor--wrp">
				<div className="NewsAuthor--IMG">
					<img src="/storage/Gfx/News/Author/author-IMG.jpg" alt="IMG" />
				</div>
				<div className="NewsAuthor--details">
					<h1>China gorman</h1>
					<h5>Managing Director  &middot;  Unleash America</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
					<div className="NewsAuthor--details---social">
						<img src="/storage/Gfx/Events/Speakers/speaker-youtube.svg" alt="IMG" />
						<img src="/storage/Gfx/Events/Speakers/speaker-linkedin.svg" alt="IMG" />
						<img src="/storage/Gfx/Events/Speakers/speaker-twitter.svg" alt="IMG" />
					</div>
				</div>
			</div>
			<NewsLatestPopular name="Articles by China">
	            <NewsCard />
	            <NewsCard />
	            <NewsCard />
	            <NewsCard />
	        </NewsLatestPopular>
	    </div>
	</section>
)

export default NewsAuthor