import React from 'react'

const TalkCard = props => (
  
  TalkCard.defaultProps = {
    src: '/storage/Gfx/Talks/talk-preview.png'
  },

  <div className="Talk-card">
  	<div className="Talk-card--preview">
  		<div className="videoWrapper">
        <iframe width="854" height="480" src={props.src} frameBorder="0"></iframe>
      </div>
  	</div>
  	<div className="Talk-card--details">
  		<h5>How Can Your Company Work to Eliminate the Gender Pension Gap?</h5>
  		<span className="Talk-card--category">Category</span>
  		<span className="Talk-card--date">Jan 15, 2018 <div className="DOT">&middot;</div> 816 views</span>
  	</div>
  </div>
)

export default TalkCard