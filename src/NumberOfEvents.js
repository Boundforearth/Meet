// src/NumberOfEvents.js
import React, {Component} from "react";

class NumberOfEvents extends Component {
  state = {
    displayCount: 32
  }

  handleInputChange = (event) => {
    let value = event.target.value
    this.setState({
      displayCount: value
    })
    this.props.getDisplayCount(event.target.value);
  }

  render() {

    return(
      <div className="NumberOfEvents">
        <label>Event Count: </label>
        <input 
          type="number"
          className="number"
          value={this.state.displayCount}
          onChange={this.handleInputChange}
         />
      </div>
    )
  }
}

export default NumberOfEvents;