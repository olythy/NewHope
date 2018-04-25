import React from 'react';
import {Link} from 'react-router-dom'

import HighLightOne from '../HighLightOne/HighLightOne'
import HighLightTwo from '../HighLightTwo/HighLightTwo'
import HighLightThree from '../HighLightThree/HighLightThree'

const SlideTwo = props => (
	<div className="MainContent--header sldr slideTwo">
        <div className="Layout-width">
     		<div className="MainContent--header---wrp">
	    		<div className="MainContent--title">
	        		<span className="MainContent--title---authorCateg">Barry Flack <div className="DOT">&middot;</div> HR Technology</span>
	        		<h1>Control, Flexibility and Balance : Where We’ll Work soon</h1>
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
			        <HighLightOne slideOne={props.slideOne}/>
			        <HighLightTwo active slideTwo={props.slideTwo}/>
			        <HighLightThree slideThree={props.slideThree}/>
			    </div>
			</div>      
        </div>
    </div>
)

export default SlideTwo