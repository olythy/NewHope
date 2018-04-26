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
  		<h5>{props.title}</h5>
  		<span className="Talk-card--date">{props.published}</span>
  	</div>
  </div>
)

export default TalkCard