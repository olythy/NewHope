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
            {/*<div className="seeAll">
                <Link to="#">See all</Link>
            </div>*/}
        </div>        
        <div className="TalkCard--wrp">
            <DragScroll className="drag" width height>
                <div><TalkCard src="https://www.youtube.com/embed/2FcXP9dPTIk?rel=0&hd=1" /></div>
                <div><TalkCard src="https://www.youtube.com/embed/6v2L2UGZJAM?rel=0&hd=1" /></div>
                <div><TalkCard src="https://www.youtube.com/embed/LOuhHPJQn94" /></div>
            </DragScroll>
        </div>
    </div>
)

export default TalksCategory