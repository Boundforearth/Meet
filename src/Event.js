//src/Event.js

import React, { Component } from "react";
import "./Event.css"

class Event extends Component {
  state = {
    toggleDetails: false,
  }

  handleClick = () => {
    if(this.state.toggleDetails === false) {
      this.setState({
        toggleDetails: true,
      })   
    }
    else{
      this.setState({
        toggleDetails: false,
      })
    }
  }

  render() {
    const {event} = this.props;
    const {toggleDetails} = this.state
    const details = toggleDetails ? "displayed" : "hidden";
    const buttonText = toggleDetails ? "Hide Details" : "Show Details";
    return (
      <div className="Event">
        <h4 className="summary">{event.summary}</h4>
        <p className="start-time">{event.start.dateTime}</p>
        <span className="time-zone">{event.start.timeZone}</span>
        <p className="location">@{event.summary} | {event.location}</p>
        <div 
          className={details}
        >
          <h5>About Event:</h5>
          <h6>See Details on Google Calendar</h6>
          <p className="description">{event.description}</p>
        </div>
        <button 
          className="btn"
          onClick={() => this.handleClick()}
        >{buttonText}</button>
      </div>
    )
  }
}

export default Event;