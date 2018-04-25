import React, {Component} from 'react';

import ContentBox from './ContentBox/ContentBox'
import BigBox from './BigBox/BigBox'
import SmallBox from './SmallBox/SmallBox'


class IntroBoxes extends Component	{
	
	constructor(props){
		super(props);
	}

	render(){
		return(
			<section className="IntroBoxes">
				<ContentBox>
					{this.props.contentBox}
				</ContentBox>
				<div className="ImgBoxes--wrp">
					<div className="BigBox--wrp">
						<BigBox src={this.props.bigSrc} title={this.props.bigTitle} person={this.props.bigPerson} jobTitle={this.props.bigJobTitle}/>
						{/*<div className="linear-BG"></div>*/}
					</div>
					<div className="SmallBox--wrp">
						<SmallBox src={this.props.smallSrcOne} title={this.props.smallTitle} person={this.props.smallPerson} jobTitle={this.props.smallJobTitle} date={this.props.smallDate} />
						<SmallBox src={this.props.smallSrcTwo} />
					</div>
				</div>
			</section>
		)
	}
}

export default IntroBoxes