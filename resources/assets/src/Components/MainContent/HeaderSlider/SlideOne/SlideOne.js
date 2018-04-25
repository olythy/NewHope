import React from 'react';
import {Link} from 'react-router-dom'

import HighLightOne from '../HighLightOne/HighLightOne'
import HighLightTwo from '../HighLightTwo/HighLightTwo'
import HighLightThree from '../HighLightThree/HighLightThree'

const SlideOne = props => (
	<div className="MainContent--header sldr slideOne">
        <div className="Layout-width">
     		<div className="MainContent--header---wrp">
	    		<div className="MainContent--title">
	        		<span className="MainContent--title---authorCateg">Alex Cooper <div className="DOT">&middot;</div> Future of Work</span>
	        		<h1>The robots are here: is this the end of decision making by humans?</h1>
	        		<Link to="/news/categpage/article">
		        		<button className="btnspn-w">
						  <span className="border-top">
						    <span className="transparent"></span>
						  </span>
							Read now
						  <span className="border-bottom">
						    <span className="transparent"></span>
						  </span>
						</button>
					</Link>
	    		</div>
			    <div className="MainContent--highlight">
			        <HighLightOne active slideOne={props.slideOne}/>
			        <HighLightTwo slideTwo={props.slideTwo}/>
			        <HighLightThree slideThree={props.slideThree}/>
			    </div>
			</div>      
        </div>
    </div>
)

export default SlideOne