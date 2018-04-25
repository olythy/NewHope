import React from 'react'

import {Link} from 'react-router-dom'

const NewsCard = props => (

  <div className="News-card">
  	<div className="News-card--details">
  		<Link to="/news/categpage/article"><h5>How Can Your Company Work to Eliminate the Gender Pension Gap?</h5></Link>
  		<div className="News-card--details---spns">
        <span className="News-card--author-category">Alex Cooper <div className="DOT">&middot;</div> <Link to="/news/categpage">Category</Link></span>
  		  <span className="News-card--date">Jan 15, 2018 <div className="DOT">&middot;</div> 5 min read</span>
      </div>
  	</div>
  	<div className="News-card--preview">
  		<Link to="/news/categpage/article"><img src={props.src} alt="UNLEASH news"/></Link>
  	</div>
  </div>
)

NewsCard.defaultProps = {
      src: '/storage/Gfx/News/news-preview.png'
};

export default NewsCard 