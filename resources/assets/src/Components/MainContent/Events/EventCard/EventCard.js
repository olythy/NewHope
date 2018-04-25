import React,{Component} from 'react'

class EventCard extends Component{
  render(){

    const placeDate = (
      <div className="Event-card--place-and-date">
        <div className="Event-card-place">
          <h6 className="Event-card--city">{this.props.city}</h6>
          <div className="DOT">&middot;</div>
          <h6>{this.props.venue}</h6>
        </div>
        <div className="Event-card-date">
          <h6>{this.props.date}</h6>
        </div>
      </div>
    )

    const afterText = (
      <div className="Event-card-afterText">
        <p>Did you miss our London show? Here you can see the key moments from our previous event.</p>
      </div>
    )

    return(
      <div className={"Event-card " + this.props.cls}>
        <div>
          <div className="Event-card--img">
            <img src={this.props.src} alt={this.props.alt} />
          </div>
          <span className="Event-card--name">{this.props.name}</span>
        </div>
    <div className="Event-card--details">
      <h4 className="Event-card--slogen">{this.props.slogen}</h4>
      {this.props.after ? afterText : placeDate}
    </div>
  </div>
    )
  }
}

export default EventCard