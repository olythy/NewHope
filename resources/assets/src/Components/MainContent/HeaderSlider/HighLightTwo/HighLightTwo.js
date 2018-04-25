import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class HighlightTwo extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className={this.props.active ? "Highlight Two Active" : "Highlight Two" } onMouseEnter={this.props.slideTwo}>
        <div className="Highlight--details">
          <span className="Highlight--category">Barry Flack <div className="DOT">&middot;</div> <Link to="#">HR Technology</Link></span>
          <h5>Control, Flexibility and Balance: Where We’ll Work soon</h5>
        </div>
      </div>
    )
  }
}

export default HighlightTwo