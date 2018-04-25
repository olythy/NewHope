import React, {Component} from 'react';

class ContentBox extends Component {

	render(){

	    return(
	      <div className="ContentBox">
	        {this.props.children}
	      </div>
	    )
  	}
}

export default ContentBox