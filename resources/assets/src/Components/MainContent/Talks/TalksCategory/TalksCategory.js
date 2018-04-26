import React from 'react'
import DragScroll from 'react-dragscroll';
import { Link } from 'react-router-dom'

import TalkCard from '../TalkCard/TalkCard'

const TalksCategory = props => (
    <div className="Talks--wrp">
        <div className="Headline">
            <div className="Headline--title">
                <h2>{props.name}</h2>
            </div>
            <div className="Stripe red"></div>
            <div className="seeAll">
                <Link to="https://www.youtube.com/user/hrneurope/" target="_blank">See all</Link>
            </div>
        </div>        
        <div className="TalkCard--wrp">
            <DragScroll className="drag" width height>
                <div><TalkCard src="https://www.youtube.com/embed/pFoYV-eCRZg?rel=0" title="5 Reasons to Book Your Tickets to UNLEASH America"  published="Apr 17, 2018"/></div>
                <div><TalkCard src="https://www.youtube.com/embed/qONWtk5VY1E?rel=0" title="UNLEASH Startup - London, Las Vegas and Amsterdam" published="Mar 1, 2018"/></div>
                <div><TalkCard src="https://www.youtube.com/embed/zYvNeTmE7Oc?rel=0" title="2018: Our Biggest Year Yet"  published="Febr 13, 2018"/></div>
                
            </DragScroll>
        </div>
    </div>
)

export default TalksCategory