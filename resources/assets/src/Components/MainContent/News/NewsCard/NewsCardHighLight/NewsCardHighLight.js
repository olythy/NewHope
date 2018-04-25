import React from 'react'
import {Link} from 'react-router-dom'

const NewsCardHighLight = props => (

  NewsCardHighLight.defaultProps = {
    
  },

  <div className="News-card--HighLight">
  	
      <div className="News-card--Tag">
        <span>Highlight</span>
      </div>
      <div className="News-card--details">
    		<Link to="/news/categpage/article"><h5>How Can Your Company Work to Eliminate the Gender Pension Gap?</h5></Link>
    		<span className="News-card--author-category">Alex Cooper <div className="DOT">&middot;</div> <Link to="/news/categpage">Category</Link></span>
    		<span className="News-card--date">Jan 15, 2018 <div className="DOT">&middot;</div> 816 views</span>
    	</div>
      <div className="News-card--img">
        <img src='/storage/Gfx/News/news-defaultIMG5.jpg' alt="UNLEASH news"/>
      </div>

  </div>
)

export default NewsCardHighLight 