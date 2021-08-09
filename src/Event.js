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
    const startTime = new Date(event.start.dateTime);
    const formattedStartTime = startTime.toUTCString();
    return (
      <div className="Event">
        <h2 className="summary">{event.summary}</h2>
        <p className="start-time">{formattedStartTime}</p>
        <p className="location">@{event.summary} | {event.location}</p>
        <div 
          className={details}
        >
          <h4>About Event:</h4>
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